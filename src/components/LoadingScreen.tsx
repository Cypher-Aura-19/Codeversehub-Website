"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 2000);
    const hideTimer = setTimeout(() => setHidden(true), 2600);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black"
      style={{
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.6s ease-in-out",
        pointerEvents: "none",
      }}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Terminal-style header */}
        <div className="flex items-center gap-2 font-mono text-xs text-white/30">
          <span className="text-cyan-400/70">$</span>
          <span>loading cvh environment...</span>
        </div>

        {/* Progress bar */}
        <div className="w-48 h-[2px] bg-white/[0.06] rounded-full overflow-hidden">
          <div
            className="h-full bg-cyan-500 rounded-full"
            style={{
              animation: "loading-progress 1.8s ease-in-out forwards",
            }}
          />
        </div>

        {/* Terminal cursor blink */}
        <div className="flex items-center gap-1.5 font-mono text-xs text-white/20">
          <span className="inline-block w-2 h-3.5 bg-cyan-400/70 animate-pulse" />
          <span>ready</span>
        </div>
      </div>
    </div>
  );
}
