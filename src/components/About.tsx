"use client";

import GradientText from "./GradientText";

export default function About() {
  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center py-20 px-4">
      {/* Label */}
      <span className="inline-block text-violet-400 text-xs font-mono uppercase tracking-widest mb-8 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10">
        Who we are
      </span>

      <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-12 md:mb-16">
        Builders. Maintainers. <br className="hidden sm:block" />
        <GradientText
          colors={["#8B5CF6", "#EC4899", "#8B5CF6"]}
          className="inline"
        >
          Open Source.
        </GradientText>
      </h2>

      <div className="max-w-4xl mx-auto space-y-7 md:space-y-10 text-center">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-white/25 hover:text-white transition-colors duration-500 cursor-default">
          We&apos;re a community of developers who{" "}
          <GradientText
            colors={["#8B5CF6", "#EC4899", "#8B5CF6"]}
            className="inline"
          >
            build real software
          </GradientText>
          .
        </div>
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-white/25 hover:text-white transition-colors duration-500 cursor-default">
          From Discord bots used by thousands to{" "}
          <GradientText
            colors={["#8B5CF6", "#EC4899", "#8B5CF6"]}
            className="inline"
          >
            Linux distributions
          </GradientText>
          {" "}and developer tools.
        </div>
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-white/25 hover:text-white transition-colors duration-500 cursor-default">
          Beginners ship their{" "}
          <GradientText
            colors={["#8B5CF6", "#EC4899", "#8B5CF6"]}
            className="inline"
          >
            first PR
          </GradientText>
          .
        </div>
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-white/25 hover:text-white transition-colors duration-500 cursor-default">
          Seniors{" "}
          <GradientText
            colors={["#8B5CF6", "#EC4899", "#8B5CF6"]}
            className="inline"
          >
            maintain production projects
          </GradientText>
          .
        </div>
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-white/25 hover:text-white transition-colors duration-500 cursor-default">
          Developers from{" "}
          <GradientText
            colors={["#8B5CF6", "#EC4899", "#8B5CF6"]}
            className="inline"
          >
            50+ countries
          </GradientText>
          {" "}building the future of open source.
        </div>
      </div>

      <div className="mt-16" />
      <p className="text-white/30 text-sm md:text-base font-mono tracking-widest text-center px-4">
        {"// open source, open to all"}
      </p>
    </section>
  );
}
