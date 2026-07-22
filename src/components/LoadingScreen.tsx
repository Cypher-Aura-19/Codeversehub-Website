"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [phase, setPhase] = useState<"typing" | "complete" | "fade" | "hidden">("typing");
  const [displayText, setDisplayText] = useState("");
  const fullText = "Welcome to TCVH";

  useEffect(() => {
    // Typing effect
    let charIndex = 0;
    const typeInterval = setInterval(() => {
      charIndex++;
      setDisplayText(fullText.slice(0, charIndex));
      if (charIndex >= fullText.length) {
        clearInterval(typeInterval);
        setTimeout(() => setPhase("complete"), 400);
      }
    }, 80);

    return () => clearInterval(typeInterval);
  }, []);

  useEffect(() => {
    if (phase === "complete") {
      const fadeTimer = setTimeout(() => setPhase("fade"), 800);
      const hideTimer = setTimeout(() => setPhase("hidden"), 1400);
      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [phase]);

  if (phase === "hidden") return null;

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#09090b]"
      style={{
        opacity: phase === "fade" ? 0 : 1,
        transition: "opacity 0.6s ease-in-out",
        pointerEvents: "none",
      }}
    >
      <div className="flex flex-col items-center gap-8">
        {/* Terminal-style welcome */}
        <div className="font-mono text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-[#52525b] mb-4">
            <span className="text-[#06b6d4]">$</span>
            <span className="text-[#a1a1aa]">./startup.sh --env production</span>
          </div>

          <div className="relative">
            <span className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#e4e4e7] tracking-tight">
              {displayText}
            </span>
            {phase === "typing" && (
              <span className="inline-block w-[3px] h-[1.1em] bg-[#06b6d4] ml-1 align-middle animate-pulse" />
            )}
          </div>
        </div>

        {/* Loading bar */}
        <div className="w-48 h-[2px] bg-[rgba(255,255,255,0.06)] overflow-hidden">
          <div
            className="h-full bg-[#06b6d4]"
            style={{
              animation: phase === "typing"
                ? "loading-progress 2.5s ease-in-out forwards"
                : "none",
              width: phase === "complete" ? "100%" : undefined,
              transition: "width 0.5s ease",
            }}
          />
        </div>

        {/* Status text */}
        <div className="flex items-center gap-2 font-mono text-[0.6875rem] text-[#52525b]">
          <span
            className="inline-block w-1.5 h-1.5 rounded-full bg-[#06b6d4]"
            style={{
              animation: phase === "typing" ? "loading-pulse 1s ease-in-out infinite" : "none",
              opacity: phase === "complete" ? 1 : undefined,
            }}
          />
          <span>
            {phase === "typing" ? "initializing environment..." : "ready"}
          </span>
        </div>
      </div>
    </div>
  );
}
