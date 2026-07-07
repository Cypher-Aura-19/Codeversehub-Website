"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 2500);
    const hideTimer = setTimeout(() => setHidden(true), 3100);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "black",
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.6s ease-in-out",
        pointerEvents: "none",
      }}
    >
      <span
        style={{
          fontSize: "clamp(1.5rem, 5vw, 3.5rem)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          background:
            "linear-gradient(270deg, #8B5CF6, #EC4899, #06B6D4, #8B5CF6)",
          backgroundSize: "300% 300%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          animation: "loading-gradient-swap 2s ease infinite",
        }}
      >
        Welcome to TCVH
      </span>
      <style>{`
        @keyframes loading-gradient-swap {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
}
