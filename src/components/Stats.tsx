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
      <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
        {prefix}{count}{suffix}
      </span>
      <span className="text-xs sm:text-sm text-white/50 uppercase tracking-widest mt-2 text-center font-medium">
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
      className="bg-black py-20 md:py-24 px-4"
    >
      <div className="max-w-6xl mx-auto text-center">
        <span className="cvh-label mb-5">
          By the Numbers
        </span>
        <h2 className="cvh-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Our Impact
        </h2>
        <p className="text-white/40 text-base md:text-lg mb-12 md:mb-16">
          Open-source metrics from GitHub
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-20">
          <StatItem value={orgData.public_repos} suffix="+" label="Repositories" inView={inView} />
          <StatItem value={orgData.totalStars} suffix="+" label="Stars" inView={inView} />
          <StatItem value={orgData.totalForks} suffix="+" label="Forks" inView={inView} />
          <StatItem value={orgData.followers} suffix="+" label="Followers" inView={inView} />
        </div>
      </div>
    </section>
  );
}
