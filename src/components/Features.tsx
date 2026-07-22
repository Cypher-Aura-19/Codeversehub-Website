"use client";
import ShinyText from "@/components/ShinyText";

const features = [
  {
    number: "01",
    title: "Code Reviews",
    description:
      "Submit your code and get honest, actionable feedback from developers who actually know the stack. No rubber stamps. No ego.",
  },
  {
    number: "02",
    title: "Open Source",
    description:
      "We maintain Discord bots, developer tools, and a Linux distribution. Real projects you can contribute to and put on your resume.",
  },
  {
    number: "03",
    title: "Study Groups",
    description:
      "Learning DSA or picking up a new framework? Find people at your level and work through it together. Structured, focused, consistent.",
  },
  {
    number: "04",
    title: "Project Showcase",
    description:
      "Building something? Share it. Get feedback, find collaborators, maybe even a co-maintainer who cares about the same problem.",
  },
  {
    number: "05",
    title: "Curated Resources",
    description:
      "Hand-picked documentation, tutorials, and roadmaps that helped someone get better at their stack. No blog spam, no fluff.",
  },
  {
    number: "06",
    title: "24/7 Community",
    description:
      "Stuck at 2 AM? Someone in our community is awake. Post your question and get answers from developers across every time zone.",
  },
];

export default function Features() {
  return (
    <section className="section-spacing">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="section-label mb-6">Community Pillars</span>
          <h2 className="heading-lg text-3xl sm:text-4xl md:text-5xl text-[#e4e4e7] mb-4">
            <ShinyText
              text="Built by developers,"
              shineColor="#22d3ee"
              color="#e4e4e7"
              speed={5}
              spread={150}
              direction="left"
              yoyo={true}
            />
            <br />
            for developers
          </h2>
          <p className="text-[#a1a1aa] text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Every feature, every channel, every project exists to help you grow as an engineer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(255,255,255,0.04)]">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="card p-7 md:p-8 group bg-[#09090b] hover:bg-[#0e0e12] transition-colors duration-200"
            >
              <span className="font-mono text-[0.6875rem] text-[#52525b] tracking-wider mb-4 block">
                {feature.number}
              </span>
              <h3 className="font-heading text-base font-medium text-[#e4e4e7] mb-2 group-hover:text-white transition-colors duration-150">
                {feature.title}
              </h3>
              <p className="text-[0.8125rem] text-[#a1a1aa] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
