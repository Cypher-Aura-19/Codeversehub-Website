"use client";

export default function About() {
  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center py-20 md:py-24 px-4">
      {/* Label */}
      <span className="cvh-label mb-8">
        Who we are
      </span>

      <h2 className="cvh-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-12 md:mb-16 tracking-tight leading-tight">
        Builders. Maintainers. <br className="hidden sm:block" />
        <span className="cvh-gradient-text">Open Source.</span>
      </h2>

      <div className="max-w-4xl mx-auto space-y-6 md:space-y-8 text-center">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-white/25 hover:text-white/40 transition-colors duration-300 cursor-default">
          We&apos;re a community of developers who{" "}
          <span className="cvh-gradient-text font-semibold">
            build real software
          </span>
          .
        </div>
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-white/25 hover:text-white/40 transition-colors duration-300 cursor-default">
          From Discord bots used by thousands to{" "}
          <span className="cvh-gradient-text font-semibold">
            Linux distributions
          </span>
          {" "}and developer tools.
        </div>
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-white/25 hover:text-white/40 transition-colors duration-300 cursor-default">
          Beginners ship their{" "}
          <span className="cvh-gradient-text font-semibold">
            first PR
          </span>
          .
        </div>
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-white/25 hover:text-white/40 transition-colors duration-300 cursor-default">
          Seniors{" "}
          <span className="cvh-gradient-text font-semibold">
            maintain production projects
          </span>
          .
        </div>
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-white/25 hover:text-white/40 transition-colors duration-300 cursor-default">
          Developers from{" "}
          <span className="cvh-gradient-text font-semibold">
            50+ countries
          </span>
          {" "}building the future of open source.
        </div>
      </div>

      <div className="mt-16" />
      <p className="text-white/20 text-sm md:text-base font-mono tracking-[0.15em] text-center px-4">
        {"// open source, open to all"}
      </p>
    </section>
  );
}
