"use client";

const techRow1 = [
  { name: "Python", color: "#3B82F6" },
  { name: "TypeScript", color: "#06b6d4" },
  { name: "Rust", color: "#F97316" },
  { name: "Go", color: "#06B6D4" },
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#FFFFFF" },
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
  { name: "GitHub", color: "#FFFFFF" },
  { name: "CI/CD", color: "#6366F1" },
  { name: "Terraform", color: "#7B42BC" },
  { name: "Tauri", color: "#FFC131" },
  { name: "Bun", color: "#F9F1E1" },
];

function MarqueeTrack({ items, reverse = false }: { items: typeof techRow1; reverse?: boolean }) {
  const chips = items.map((tech, i) => (
    <div
      key={i}
      className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.1] transition-colors duration-200 cursor-default select-none shrink-0"
    >
      <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: tech.color }} />
      <span className="text-white/50 text-xs font-medium whitespace-nowrap hover:text-white/70 transition-colors duration-200">
        {tech.name}
      </span>
    </div>
  ));

  return (
    <div className="relative overflow-hidden py-2">
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none" />
      <div className="flex gap-3 w-max">
        <div className={`flex gap-3 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
          {chips}
          {chips}
        </div>
        <div className={`flex gap-3 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
          {chips}
          {chips}
        </div>
      </div>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <section className="section-padding px-5 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto mb-10 text-center">
        <span className="cvh-label mb-5">Languages & tools</span>
        <h2 className="cvh-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
          Pick your stack
        </h2>
        <p className="text-white/40 text-base md:text-lg max-w-xl mx-auto">
          Python, Rust, Go, TypeScript. Whatever you work in, you will find your people.
        </p>
      </div>
      <div className="space-y-3 max-w-[100vw]">
        <MarqueeTrack items={techRow1} />
        <MarqueeTrack items={techRow2} reverse />
      </div>
    </section>
  );
}
