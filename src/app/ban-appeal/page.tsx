"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GradientText from "@/components/GradientText";
import { CheckCircle, Send, Loader2 } from "lucide-react";

type SubmitState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success"; appealId?: string }
  | { status: "error"; message: string };

declare global {
  interface Window {
    turnstile?: {
      render: (container: string | HTMLElement, options: Record<string, unknown>) => string;
      getResponse: (widgetId: string) => string;
      reset: (widgetId: string) => void;
    };
  }
}

export default function BanAppealPage() {
  const [state, setState] = useState<SubmitState>({ status: "idle" });
  const turnstileContainerRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetId = useRef<string | null>(null);

  const renderTurnstile = useCallback(() => {
    if (!window.turnstile || !turnstileContainerRef.current) return;

    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
    if (!siteKey) return;

    turnstileContainerRef.current.innerHTML = "";
    const id = window.turnstile.render(turnstileContainerRef.current, {
      sitekey: siteKey,
      theme: "dark",
    });
    turnstileWidgetId.current = id;
  }, []);

  useEffect(() => {
    if (!turnstileContainerRef.current) return;

    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
    if (!siteKey) return;

    if (document.querySelector('script[src*="turnstile"]')) {
      renderTurnstile();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad";
    script.async = true;
    script.defer = true;

    (window as unknown as Record<string, unknown>).onTurnstileLoad = () => {
      renderTurnstile();
    };

    document.head.appendChild(script);

    return () => {
      if (turnstileWidgetId.current && window.turnstile) {
        window.turnstile.reset(turnstileWidgetId.current);
      }
    };
  }, [renderTurnstile]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state.status === "submitting") return;

    setState({ status: "submitting" });

    const form = e.currentTarget;
    const formData = new FormData(form);

    let turnstileToken = "";
    if (turnstileWidgetId.current && window.turnstile) {
      turnstileToken = window.turnstile.getResponse(turnstileWidgetId.current);
    }

    const payload = {
      discordUsername: String(formData.get("discordUsername") || "").trim(),
      discordUserId: String(formData.get("discordUserId") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      banReason: String(formData.get("banReason") || "").trim(),
      appeal: String(formData.get("appeal") || "").trim(),
      evidenceLink: String(formData.get("evidenceLink") || "").trim(),
      website: String(formData.get("website") || "").trim(),
      cfTurnstileToken: turnstileToken,
    };

    try {
      const res = await fetch("/api/ban-appeal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await res.json().catch(() => null)) as
        | { ok?: boolean; error?: string; appealId?: string }
        | null;

      if (!res.ok) {
        setState({
          status: "error",
          message: data?.error || "Something went wrong. Please try again.",
        });
        if (turnstileWidgetId.current && window.turnstile) {
          window.turnstile.reset(turnstileWidgetId.current);
        }
        return;
      }

      setState({
        status: "success",
        appealId: data?.appealId,
      });
      form.reset();
      if (turnstileWidgetId.current && window.turnstile) {
        window.turnstile.reset(turnstileWidgetId.current);
      }
    } catch {
      setState({
        status: "error",
        message: "Network error. Please try again.",
      });
      if (turnstileWidgetId.current && window.turnstile) {
        window.turnstile.reset(turnstileWidgetId.current);
      }
    }
  };

  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 md:px-6 py-16 md:py-20">
        <header className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white">
            Ban{" "}
            <GradientText
              colors={["#8B5CF6", "#EC4899", "#8B5CF6"]}
              className="inline"
            >
              Appeal
            </GradientText>
          </h1>
          <p className="mt-4 text-white/50 max-w-2xl mx-auto">
            Fill out the form below. After you submit, it will be sent to our
            moderation team for review.
          </p>
        </header>

        <section className="w-full max-w-3xl mx-auto">
          <div className="p-6 md:p-8 rounded-2xl border border-white/10 bg-white/5">
            {state.status === "success" ? (
              <div className="flex flex-col items-center justify-center text-center py-10">
                <CheckCircle className="w-16 h-16 text-green-400 mb-4" />
                <h2 className="text-2xl font-bold text-white mb-2">
                  Appeal submitted
                </h2>
                {state.appealId ? (
                  <p className="text-violet-400 font-mono text-sm mb-2">
                    {state.appealId}
                  </p>
                ) : null}
                <p className="text-white/50">
                  Thanks — your appeal was sent to the team.
                </p>
                <button
                  type="button"
                  onClick={() => setState({ status: "idle" })}
                  className="mt-6 text-violet-400 hover:text-violet-300 transition-colors"
                >
                  Submit another appeal
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                />

                <div>
                  <label
                    htmlFor="discordUsername"
                    className="block text-white/70 text-sm mb-2"
                  >
                    Discord username
                  </label>
                  <input
                    type="text"
                    id="discordUsername"
                    name="discordUsername"
                    required
                    placeholder="e.g. aditya or aditya#1234"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="discordUserId"
                    className="block text-white/70 text-sm mb-2"
                  >
                    Discord user ID
                  </label>
                  <input
                    type="text"
                    id="discordUserId"
                    name="discordUserId"
                    inputMode="numeric"
                    required
                    placeholder="e.g. 123456789012345678"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-colors"
                  />
                  <p className="text-xs text-white/35 mt-1">
                    Used to identify you. Must be your Discord
                    user ID (not your username).
                  </p>
                </div>

                <div>
                  <label htmlFor="email" className="block text-white/70 text-sm mb-2">
                    Email (optional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-colors"
                  />
                  <p className="text-xs text-white/35 mt-1">
                    May be used to share appeal status updates.
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="banReason"
                    className="block text-white/70 text-sm mb-2"
                  >
                    Why do you think you were banned? (optional)
                  </label>
                  <input
                    type="text"
                    id="banReason"
                    name="banReason"
                    placeholder="If you know, summarize it"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="appeal"
                    className="block text-white/70 text-sm mb-2"
                  >
                    Your appeal
                  </label>
                  <textarea
                    id="appeal"
                    name="appeal"
                    rows={6}
                    required
                    minLength={20}
                    placeholder="Explain what happened, what you'll do differently, and why you should be unbanned. (min 20 characters)"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-colors resize-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="evidenceLink"
                    className="block text-white/70 text-sm mb-2"
                  >
                    Evidence link (optional)
                  </label>
                  <input
                    type="url"
                    id="evidenceLink"
                    name="evidenceLink"
                    placeholder="https://..."
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-colors"
                  />
                </div>

                {/* Turnstile */}
                <div
                  ref={turnstileContainerRef}
                  className="flex justify-center pt-2 min-h-[72px]"
                />

                {state.status === "error" ? (
                  <p className="text-sm text-red-400">{state.message}</p>
                ) : null}

                <button
                  type="submit"
                  disabled={state.status === "submitting"}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold hover:from-violet-500 hover:to-fuchsia-500 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {state.status === "submitting" ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  {state.status === "submitting" ? "Submitting..." : "Submit appeal"}
                </button>

                <p className="text-xs text-white/35 leading-relaxed">
                  This form is sent to the moderation team via Discord.
                  Don&apos;t include passwords or sensitive info.
                </p>
              </form>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
