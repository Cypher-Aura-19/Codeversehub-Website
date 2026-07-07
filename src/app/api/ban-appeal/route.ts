import { NextResponse } from "next/server";
import { logger } from "@/lib/appeal-logger";
import {
  createAppealRecord,
  getPendingAppealByUserId,
  checkRateLimit,
} from "@/lib/appeal-storage";

function normalizeOptionalString(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.trim();
}

function truncate(value: string, maxLen: number): string {
  if (value.length <= maxLen) return value;
  return value.slice(0, Math.max(0, maxLen - 1)) + "…";
}

function isValidDiscordId(value: string): boolean {
  return /^\d{17,20}$/.test(value);
}

function containsSpamPatterns(value: string): boolean {
  const spamPatterns = [
    /\bcrypto\s*(giveaway|free|claim)\b/i,
    /\b(?:buy|sell)\s*(?:nitro|discord\s*admin)\b/i,
    /\bhttp[^\s]*(?:bit\.ly|tinyurl|discord(?:gift|nitro)\.(?:ru|cn))\b/i,
    /(.)\1{20,}/,
  ];
  return spamPatterns.some((p) => p.test(value));
}

function getClientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  const realIp = req.headers.get("x-real-ip");
  if (realIp) return realIp;
  return "127.0.0.1";
}

async function verifyTurnstile(token: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    logger.warn("Turnstile verification skipped: missing TURNSTILE_SECRET_KEY");
    return true;
  }

  try {
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ secret, response: token }),
      },
    );

    if (!res.ok) {
      logger.warn("Turnstile API error", { status: res.status });
      return false;
    }

    const data = (await res.json()) as { success: boolean };
    return data.success === true;
  } catch (err) {
    logger.error("Turnstile verification request failed", {
      error: String(err),
    });
    return false;
  }
}

export async function POST(req: Request) {
  const clientIp = getClientIp(req);

  const webhookUrl = process.env.DISCORD_BAN_APPEAL_WEBHOOK_URL;
  if (!webhookUrl) {
    logger.error("Server misconfigured: missing webhook URL");
    return NextResponse.json(
      { error: "Server misconfigured: missing webhook." },
      { status: 500 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    logger.warn("Invalid JSON from client", { ip: clientIp });
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const data = body as Record<string, unknown>;

  // Honeypot (bots tend to fill hidden fields)
  const website = normalizeOptionalString(data.website);
  if (website) {
    logger.info("Honeypot triggered", { ip: clientIp });
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  // Turnstile verification
  const turnstileToken = normalizeOptionalString(data.cfTurnstileToken);
  if (turnstileToken) {
    const valid = await verifyTurnstile(turnstileToken);
    if (!valid) {
      logger.warn("Turnstile verification failed", { ip: clientIp });
      return NextResponse.json(
        { error: "Security check failed. Please refresh and try again." },
        { status: 403 },
      );
    }
  } else {
    logger.warn("Turnstile token missing", { ip: clientIp });
    return NextResponse.json(
      { error: "Security check required. Please complete the CAPTCHA." },
      { status: 403 },
    );
  }

  const discordUsername = normalizeOptionalString(data.discordUsername);
  const discordUserId = normalizeOptionalString(data.discordUserId);
  const email = normalizeOptionalString(data.email);
  const banReason = normalizeOptionalString(data.banReason);
  const appeal = normalizeOptionalString(data.appeal);
  const evidenceLink = normalizeOptionalString(data.evidenceLink);

  // Server-side validation
  if (!discordUsername) {
    return NextResponse.json(
      { error: "Discord username is required." },
      { status: 400 },
    );
  }

  if (discordUsername.length > 80) {
    return NextResponse.json(
      { error: "Discord username is too long." },
      { status: 400 },
    );
  }

  if (!appeal) {
    return NextResponse.json(
      { error: "Appeal message is required." },
      { status: 400 },
    );
  }

  if (appeal.length < 20) {
    return NextResponse.json(
      { error: "Your appeal must be at least 20 characters." },
      { status: 400 },
    );
  }

  if (appeal.length > 3500) {
    return NextResponse.json(
      { error: "Your appeal is too long (max 3500 characters)." },
      { status: 400 },
    );
  }

  if (discordUserId && !isValidDiscordId(discordUserId)) {
    return NextResponse.json(
      { error: "Invalid Discord user ID format." },
      { status: 400 },
    );
  }

  if (email && email.length > 256) {
    return NextResponse.json(
      { error: "Email is too long." },
      { status: 400 },
    );
  }

  if (banReason.length > 256) {
    return NextResponse.json(
      { error: "Ban reason is too long." },
      { status: 400 },
    );
  }

  if (evidenceLink && evidenceLink.length > 1024) {
    return NextResponse.json(
      { error: "Evidence link is too long." },
      { status: 400 },
    );
  }

  // Spam pattern detection
  const spamCheckFields = [discordUsername, appeal, banReason, email].filter(
    Boolean,
  );
  for (const field of spamCheckFields) {
    if (containsSpamPatterns(field)) {
      logger.warn("Spam pattern detected", {
        ip: clientIp,
        field: field.slice(0, 50),
      });
      return NextResponse.json(
        { error: "Your submission was flagged as spam." },
        { status: 400 },
      );
    }
  }

  // Rate limiting (runs after basic validation to avoid wasting checks on junk)
  const rateLimitResult = await checkRateLimit({
    ip: clientIp,
    userId: discordUserId || "unknown",
  });

  if (!rateLimitResult.allowed) {
    logger.warn("Rate limit hit", {
      ip: clientIp,
      userId: discordUserId || "unknown",
      reason: rateLimitResult.reason,
    });
    const headers: Record<string, string> = {};
    if (rateLimitResult.retryAfter) {
      headers["Retry-After"] = String(rateLimitResult.retryAfter);
    }
    return NextResponse.json(
      { error: rateLimitResult.reason },
      { status: 429, headers },
    );
  }

  // Duplicate pending appeal detection
  if (discordUserId) {
    const existing = await getPendingAppealByUserId(discordUserId);
    if (existing) {
      logger.warn("Duplicate appeal attempt", {
        userId: discordUserId,
        existingId: existing.id,
      });
      return NextResponse.json(
        {
          error: `You already have a pending appeal (${existing.id}). Please wait for a response.`,
        },
        { status: 409 },
      );
    }
  }

  // Create appeal record
  let appealId: string | null = null;
  try {
    appealId = await createAppealRecord({
      discordUserId: discordUserId || "unknown",
      discordUsername,
    });
  } catch (err) {
    logger.error("Failed to create appeal record", { error: String(err) });
  }

  // Build Discord embed
  const safeDiscordUsername = truncate(discordUsername, 256);
  const safeDiscordUserId = truncate(discordUserId, 64);
  const safeEmail = truncate(email, 256);
  const safeBanReason = truncate(banReason, 256);
  const safeAppeal = truncate(appeal, 3500);
  const safeEvidenceLink = truncate(evidenceLink, 512);

  const fields = [
    { name: "Appeal ID", value: appealId || "—", inline: false },
    { name: "Discord", value: safeDiscordUsername || "—", inline: false },
    {
      name: "User ID",
      value: safeDiscordUserId || "—",
      inline: true,
    },
    { name: "Email", value: safeEmail || "—", inline: true },
    {
      name: "Ban reason (self-reported)",
      value: safeBanReason || "—",
      inline: false,
    },
  ];

  if (safeEvidenceLink) {
    fields.push({ name: "Evidence", value: safeEvidenceLink, inline: false });
  }

  const payload = {
    embeds: [
      {
        title: `Ban Appeal ${appealId ? `• ${appealId}` : ""}`,
        description: safeAppeal,
        color: 0x8b5cf6,
        fields,
        timestamp: new Date().toISOString(),
        footer: {
          text: "Reply to this thread to respond to the user.",
        },
      },
    ],
  };

  try {
    const discordRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!discordRes.ok) {
      logger.error("Discord webhook delivery failed", {
        status: discordRes.status,
        appealId,
      });
      return NextResponse.json(
        { error: "Failed to deliver appeal." },
        { status: 502 },
      );
    }

    logger.audit("Appeal submitted successfully", {
      appealId,
      userId: discordUserId || "unknown",
      username: discordUsername,
    });

    return NextResponse.json(
      {
        ok: true,
        appealId: appealId,
        message: appealId
          ? `Appeal ${appealId} submitted. You'll hear back soon.`
          : "Appeal submitted successfully.",
      },
      { status: 200 },
    );
  } catch {
    logger.error("Discord webhook request failed", { appealId });
    return NextResponse.json(
      { error: "Failed to deliver appeal." },
      { status: 502 },
    );
  }
}
