import { logger } from "./appeal-logger";
import fs from "fs";
import path from "path";

interface AppealRecord {
  id: string;
  discordUserId: string;
  discordUsername: string;
  status: "pending" | "approved" | "rejected";
  createdAt: string;
}

interface RateLimitEntry {
  ipHash: string;
  userId: string;
  timestamps: number[];
  monthKey: string;
}

interface StorageData {
  appeals: AppealRecord[];
  rateLimits: RateLimitEntry[];
}

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "appeals.json");

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

function readStorage(): StorageData {
  try {
    ensureDataDir();
    if (!fs.existsSync(DATA_FILE)) {
      return { appeals: [], rateLimits: [] };
    }
    const raw = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(raw) as StorageData;
  } catch (err) {
    logger.error("Failed to read storage file", { error: String(err) });
    return { appeals: [], rateLimits: [] };
  }
}

function writeStorage(data: StorageData) {
  try {
    ensureDataDir();
    const tmp = DATA_FILE + ".tmp";
    fs.writeFileSync(tmp, JSON.stringify(data, null, 2), "utf-8");
    fs.renameSync(tmp, DATA_FILE);
  } catch (err) {
    logger.error("Failed to write storage file", { error: String(err) });
  }
}

function getMonthKey(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}

function hashIP(ip: string): string {
  let hash = 0;
  for (let i = 0; i < ip.length; i++) {
    const char = ip.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return "ip_" + Math.abs(hash).toString(36);
}

function generateAppealId(): string {
  const year = new Date().getFullYear();
  const storage = readStorage();
  const yearAppeals = storage.appeals.filter((a) => a.id.startsWith(`CVH-${year}`));
  const nextNum = yearAppeals.length + 1;
  const padded = String(nextNum).padStart(6, "0");
  return `CVH-${year}-${padded}`;
}

export async function createAppealRecord(params: {
  discordUserId: string;
  discordUsername: string;
}): Promise<string> {
  const storage = readStorage();
  const id = generateAppealId();
  const record: AppealRecord = {
    id,
    discordUserId: params.discordUserId,
    discordUsername: params.discordUsername,
    status: "pending",
    createdAt: new Date().toISOString(),
  };
  storage.appeals.push(record);
  writeStorage(storage);
  return id;
}

export async function getPendingAppealByUserId(
  userId: string,
): Promise<AppealRecord | null> {
  const storage = readStorage();
  return (
    storage.appeals.find(
      (a) => a.discordUserId === userId && a.status === "pending",
    ) ?? null
  );
}

export async function checkRateLimit(params: {
  ip: string;
  userId: string;
}): Promise<{
  allowed: boolean;
  reason: string | null;
  retryAfter: number | null;
}> {
  const storage = readStorage();
  const monthKey = getMonthKey();
  const ipHash = hashIP(params.ip);
  const now = Date.now();
  const ONE_HOUR = 60 * 60 * 1000;
  const ONE_DAY = 24 * ONE_HOUR;

  let entry = storage.rateLimits.find(
    (r) => r.ipHash === ipHash && r.monthKey === monthKey,
  );

  if (!entry) {
    entry = { ipHash, userId: params.userId, timestamps: [], monthKey };
    storage.rateLimits.push(entry);
  }

  entry.timestamps = entry.timestamps.filter((t) => now - t < ONE_DAY);
  entry.userId = params.userId;

  const recentHour = entry.timestamps.filter((t) => now - t < ONE_HOUR);
  const recentDay = entry.timestamps;

  if (recentHour.length >= 3) {
    const oldest = recentHour[0];
    const retryAfter = Math.ceil((oldest + ONE_HOUR - now) / 1000);
    writeStorage(storage);
    return { allowed: false, reason: "Too many submissions. Try again later.", retryAfter };
  }

  if (recentDay.length >= 10) {
    const oldest = recentDay[0];
    const retryAfter = Math.ceil((oldest + ONE_DAY - now) / 1000);
    writeStorage(storage);
    return {
      allowed: false,
      reason: "Daily submission limit reached. Try again tomorrow.",
      retryAfter,
    };
  }

  entry.timestamps.push(now);
  writeStorage(storage);
  return { allowed: true, reason: null, retryAfter: null };
}
