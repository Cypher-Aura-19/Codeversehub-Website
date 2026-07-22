"use client";

export default function About() {
  return (
    <section className="section-padding px-5 md:px-8 border-t border-white/[0.04]">
      <div className="max-w-4xl mx-auto text-center">
        <span className="cvh-label mb-6">Who we are</span>

        <h2 className="cvh-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-10 md:mb-14 tracking-tight leading-tight">
          Builders. Maintainers.{" "}
          <span className="cvh-gradient-text">Open Source.</span>
        </h2>

        <div className="space-y-4 max-w-3xl mx-auto">
          <p className="text-lg sm:text-xl md:text-2xl text-white/25 leading-relaxed">
            We are developers who actually build real software. Discord bots used by thousands. Linux distributions. Developer tools.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-white/25 leading-relaxed">
            Beginners ship their first PR. Seniors maintain production projects. Developers from 50+ countries, one shared mission: build things that matter.
          </p>
        </div>

        <div className="mt-14">
          <p className="text-white/15 text-sm font-mono tracking-[0.15em]">
            {"// open source, open to all"}
          </p>
        </div>
      </div>
    </section>
  );
}
