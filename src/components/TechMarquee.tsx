"use client";

const techRow1 = [
  { name: "Python", color: "#3572A5" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Rust", color: "#DEA584" },
  { name: "Go", color: "#00ADD8" },
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#e4e4e7" },
  { name: "Node.js", color: "#22C55E" },
  { name: "Django", color: "#10B981" },
  { name: "FastAPI", color: "#009688" },
  { name: "Svelte", color: "#FF3E00" },
  { name: "Vue", color: "#4FC08D" },
  { name: "C++", color: "#00599C" },
  { name: "Java", color: "#ED8B00" },
  { name: "Kotlin", color: "#7F52FF" },
];

const techRow2 = [
  { name: "Docker", color: "#2496ED" },
  { name: "Kubernetes", color: "#326CE5" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "MongoDB", color: "#47A248" },
  { name: "Redis", color: "#DC382D" },
  { name: "GraphQL", color: "#E10098" },
  { name: "Prisma", color: "#2D3748" },
  { name: "Linux", color: "#FCC624" },
  { name: "AWS", color: "#FF9900" },
  { name: "GitHub", color: "#e4e4e7" },
  { name: "CI/CD", color: "#6366F1" },
  { name: "Terraform", color: "#7B42BC" },
  { name: "Tauri", color: "#FFC131" },
  { name: "Bun", color: "#F9F1E1" },
];

function MarqueeTrack({
  items,
  reverse = false,
}: {
  items: typeof techRow1;
  reverse?: boolean;
}) {
  const chips = items.map((tech, i) => (
    <div
      key={i}
      className="flex items-center gap-2 px-3 py-1.5 border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.1)] transition-colors duration-200 cursor-default select-none shrink-0"
    >
      <span
        className="w-1.5 h-1.5 rounded-full shrink-0"
        style={{ backgroundColor: tech.color }}
      />
      <span className="text-[#a1a1aa] text-[0.75rem] font-medium whitespace-nowrap hover:text-[#e4e4e7] transition-colors duration-200">
        {tech.name}
      </span>
    </div>
  ));

  return (
    <div className="relative overflow-hidden py-2">
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#09090b] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#09090b] to-transparent pointer-events-none" />
      <div className="flex gap-3 w-max">
        <div
          className={`flex gap-3 ${
            reverse ? "animate-marquee-reverse" : "animate-marquee"
          }`}
        >
          {chips}
          {chips}
        </div>
        <div
          className={`flex gap-3 ${
            reverse ? "animate-marquee-reverse" : "animate-marquee"
          }`}
        >
          {chips}
          {chips}
        </div>
      </div>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <section className="section-spacing overflow-hidden">
      <div className="section-container mb-12 text-center">
        <span className="section-label mb-6">Languages & Tools</span>
        <h2 className="heading-lg text-3xl sm:text-4xl md:text-5xl text-[#e4e4e7] mb-4">
          Pick your stack
        </h2>
        <p className="text-[#a1a1aa] text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          Python, Rust, Go, TypeScript. Whatever you build in, you will find
          your people.
        </p>
      </div>
      <div className="space-y-3 max-w-[100vw]">
        <MarqueeTrack items={techRow1} />
        <MarqueeTrack items={techRow2} reverse />
      </div>
    </section>
  );
}
