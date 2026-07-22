"use client";

import { useEffect, useRef, useState } from "react";

interface OrgData {
  public_repos: number;
  followers: number;
  totalStars: number;
  totalForks: number;
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
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(end);
    };
    requestAnimationFrame(animate);
  }, [end, inView, duration]);

  return count;
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
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => { if (data) setOrgData(data); })
      .catch(() => {});
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const items = [
    { value: orgData.public_repos, suffix: "+", label: "Repositories" },
    { value: orgData.totalStars, suffix: "+", label: "Stars" },
    { value: orgData.totalForks, suffix: "+", label: "Forks" },
    { value: orgData.followers, suffix: "+", label: "Followers" },
  ];

  return (
    <section ref={sectionRef} className="section-padding px-5 md:px-8 border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="cvh-label mb-5">By the numbers</span>
          <h2 className="cvh-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Our impact
          </h2>
          <p className="text-white/40 text-base md:text-lg mt-3">
            Open-source metrics from GitHub
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
          {items.map((item) => {
            const count = useCountUp(item.value, inView);
            return (
              <div key={item.label} className="flex flex-col items-center gap-2">
                <span className="cvh-heading text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tighter">
                  {count}{item.suffix}
                </span>
                <span className="text-[11px] text-white/50 uppercase tracking-[0.12em] font-medium">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
