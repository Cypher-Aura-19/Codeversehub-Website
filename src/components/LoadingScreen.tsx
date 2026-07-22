"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [phase, setPhase] = useState<"typing" | "complete" | "fade" | "hidden">("typing");
  const [displayText, setDisplayText] = useState("");
  const fullText = "Welcome to TCVH";

  useEffect(() => {
    let charIndex = 0;
    const typeInterval = setInterval(() => {
      charIndex++;
      setDisplayText(fullText.slice(0, charIndex));
      if (charIndex >= fullText.length) {
        clearInterval(typeInterval);
        setTimeout(() => setPhase("complete"), 300);
      }
    }, 65);
    return () => clearInterval(typeInterval);
  }, []);

  useEffect(() => {
    if (phase === "complete") {
      const fadeTimer = setTimeout(() => setPhase("fade"), 500);
      const hideTimer = setTimeout(() => setPhase("hidden"), 1000);
      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [phase]);

  if (phase === "hidden") return null;

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#050505]"
      style={{
        opacity: phase === "fade" ? 0 : 1,
        transition: "opacity 0.5s ease-in-out",
        pointerEvents: "none",
      }}
    >
      <div className="font-mono text-center">
        <div className="flex items-center justify-center gap-2 text-sm mb-5">
          <span className="text-[#ffffff]">$</span>
          <span className="text-[#666666]">./init --env prod</span>
        </div>
        <div className="relative">
          <span className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white tracking-tight">
            {displayText}
          </span>
          {phase === "typing" && (
            <span
              className="inline-block w-[2px] h-[1em] bg-[#ffffff] ml-0.5 align-middle"
              style={{ animation: "cursor-blink 1s step-end infinite" }}
            />
          )}
        </div>
        <div className="mt-6 w-48 h-px bg-[#1a1a1a] mx-auto overflow-hidden">
          <div
            className="h-full bg-[#ffffff]"
            style={{
              animation: phase === "typing" ? "loading-progress 2s ease-in-out forwards" : "none",
              width: phase === "complete" ? "100%" : undefined,
              transition: "width 0.4s ease",
            }}
          />
        </div>
        <div className="mt-4 flex items-center justify-center gap-2 font-mono text-[0.625rem] text-[#666666]">
          <span
            className="inline-block w-1.5 h-1.5 rounded-full bg-[#ffffff]"
            style={{
              animation: phase === "typing" ? "loading-pulse 1s ease-in-out infinite" : "none",
            }}
          />
          <span>{phase === "typing" ? "initializing..." : "ready"}</span>
        </div>
      </div>
    </div>
  );
}
