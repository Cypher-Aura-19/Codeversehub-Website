"use client";

import ShinyText from "@/components/ShinyText";

export default function Stats() {
  const stats = [
    { value: "15+", label: "Repositories", accent: true },
    { value: "60+", label: "Stars", accent: false },
    { value: "50+", label: "Forks", accent: false },
    { value: "500+", label: "Developers", accent: true },
  ];

  return (
    <section className="section-spacing">
      <div className="section-container">
        <div className="text-center mb-14">
          <span className="section-label mb-6">By the Numbers</span>
          <h2 className="heading-lg text-3xl sm:text-4xl md:text-5xl mt-5">
            <ShinyText
              text="Our Stats"
              shineColor="#ffffff"
              color="#ffffff"
              speed={5}
              spread={150}
              direction="left"
              yoyo={true}
            />
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="card p-6 md:p-8 text-center group cursor-default"
            >
              <span
                className={`font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-none ${
                  stat.accent
                    ? "text-white"
                    : "text-white"
                }`}
              >
                {stat.value}
              </span>
              <span className="block mt-3 text-[0.6875rem] text-[#666666] uppercase tracking-[0.12em] font-medium font-mono">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
