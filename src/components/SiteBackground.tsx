"use client";

import { useEffect, useRef } from "react";

function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = 0;
    let h = 0;

    interface Star {
      x: number;
      y: number;
      r: number;
      baseAlpha: number;
      peakAlpha: number;
      twinkleSpeed: number;
      twinkleOffset: number;
    }

    let stars: Star[] = [];

    function init() {
      if (!canvas) return;
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      stars = [];
      const count = Math.floor((w * h) / 2800);
      for (let i = 0; i < count; i++) {
        const baseAlpha = 0.03 + Math.random() * 0.1;
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: 0.3 + Math.random() * 1.5,
          baseAlpha,
          peakAlpha: baseAlpha + 0.05 + Math.random() * 0.12,
          twinkleSpeed: 0.3 + Math.random() * 0.7,
          twinkleOffset: Math.random() * Math.PI * 2,
        });
      }
    }

    function draw(time: number) {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);
      const t = time * 0.001;
      for (const s of stars) {
        const twinkle =
          Math.sin(t * s.twinkleSpeed + s.twinkleOffset) * 0.5 + 0.5;
        const alpha = s.baseAlpha + (s.peakAlpha - s.baseAlpha) * twinkle;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.fill();
      }
      animId = requestAnimationFrame(draw);
    }

    init();
    animId = requestAnimationFrame(draw);

    const onResize = () => init();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}

export default function SiteBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }} aria-hidden="true">
      {/* Blueprint grid */}
      <div className="absolute inset-0 bg-blueprint-grid" />
      {/* Stars */}
      <StarField />
      {/* Engineering grid */}
      <div className="absolute inset-0 bg-engineering-grid" />
      {/* Noise texture */}
      <div className="absolute inset-0 bg-hero-noise" />
    </div>
  );
}
