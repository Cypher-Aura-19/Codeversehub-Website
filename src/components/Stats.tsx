"use client";

import ShinyText from "@/components/ShinyText";

export default function Stats() {
  const stats = [
    { value: "15+", label: "Repositories" },
    { value: "60+", label: "Stars" },
    { value: "50+", label: "Forks" },
    { value: "500+", label: "Developers" },
  ];

  return (
    <section className="section-spacing">
      <div className="section-container">
        <div className="text-center mb-14">
          <span className="section-label mb-6">By the Numbers</span>
          <h2 className="heading-lg text-3xl sm:text-4xl md:text-5xl text-[#e4e4e7]">
            <ShinyText
              text="Our Stats"
              shineColor="#22d3ee"
              color="#e4e4e7"
              speed={5}
              spread={150}
              direction="left"
              yoyo={true}
            />
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-x-16 gap-y-10">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1.5">
              <span className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-[#e4e4e7] tracking-tighter leading-none">
                {stat.value}
              </span>
              <span className="text-[0.6875rem] text-[#52525b] uppercase tracking-[0.12em] font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
