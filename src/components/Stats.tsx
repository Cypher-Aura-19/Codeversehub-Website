"use client";

import { useEffect, useRef, useState } from "react";

interface OrgData {
  public_repos: number;
  followers: number;
  totalStars: number;
  totalForks: number;
}

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  inView: boolean;
  prefix?: string;
}

function useCountUp(end: number, inView: boolean, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, inView, duration]);

  return count;
}

function StatItem({ value, suffix, label, inView, prefix = "" }: StatItemProps) {
  const count = useCountUp(value, inView);

  return (
    <div className="flex flex-col items-center">
      <span className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter">
        {prefix}{count}{suffix}
      </span>
      <span className="text-xs sm:text-sm md:text-base text-white/60 uppercase tracking-widest mt-2 text-center">
        {label}
      </span>
    </div>
  );
}

export default function Stats() {
  const [inView, setInView] = useState(false);
  const [orgData, setOrgData] = useState<OrgData>({
    public_repos: 15,
    followers: 29,
    totalStars: 62,
    totalForks: 48,
  });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    fetch("/api/github/org")
      .then((res) => res.ok ? res.json() : null)
      .then((data) => {
        if (data) setOrgData(data);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-black flex flex-col items-center justify-center py-16 md:py-20 px-4"
    >
      <span className="inline-block text-violet-400 text-xs font-mono uppercase tracking-widest mb-4 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10">
        By the Numbers
      </span>
      <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-4 md:mb-6">
        Our Impact
      </h2>
      <p className="text-white/40 text-base md:text-lg lg:text-xl tracking-widest mb-10 md:mb-16 text-center">
        Open-source metrics from GitHub
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-20 max-w-6xl">
        <StatItem value={orgData.public_repos} suffix="+" label="Repositories" inView={inView} />
        <StatItem value={orgData.totalStars} suffix="+" label="Stars" inView={inView} />
        <StatItem value={orgData.totalForks} suffix="+" label="Forks" inView={inView} />
        <StatItem value={orgData.followers} suffix="+" label="Followers" inView={inView} />
      </div>
    </section>
  );
}
