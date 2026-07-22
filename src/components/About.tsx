"use client";

export default function About() {
  return (
    <section className="section-spacing">
      <div className="section-divider mb-0" />
      <div className="section-container pt-16 md:pt-20">
        <div className="max-w-3xl mx-auto text-center">
          <span className="section-label mb-6">Who we are</span>

          <h2 className="heading-lg text-3xl sm:text-4xl md:text-5xl text-[#e4e4e7] mb-8 leading-tight">
            Builders, maintainers,
            <br />
            <span className="text-[#06b6d4]">open source.</span>
          </h2>

          <div className="space-y-5 max-w-2xl mx-auto">
            <p className="text-base md:text-lg text-[#a1a1aa] leading-relaxed">
              We are developers who build real software. Discord bots used by
              thousands. Linux distributions. Developer tooling. Production
              applications.
            </p>
            <p className="text-base md:text-lg text-[#a1a1aa] leading-relaxed">
              Beginners ship their first PR. Seniors maintain production-grade
              projects. Developers from 50+ countries, one shared mission: build
              things that matter.
            </p>
          </div>

          <div className="mt-12">
            <span className="font-mono text-[0.6875rem] text-[#52525b] tracking-[0.15em]">
              {"//"} open source, open to all
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
