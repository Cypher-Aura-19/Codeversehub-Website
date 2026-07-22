import Link from "next/link";
import { ArrowLeft, Target, Eye, Heart, Shield, Users, Code2, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | The Codeverse Hub",
  description:
    "The Codeverse Hub is an open-source organization building real-world software. We maintain Discord bots, Linux distributions, and developer tools.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: Code2,
    title: "Build Real Software",
    description: "We ship production-grade open-source projects. Discord bots, Linux distributions, developer tools, and web platforms.",
  },
  {
    icon: Users,
    title: "Community-First",
    description: "Every project is built with the community. Contributions are reviewed, discussed, and shipped.",
  },
  {
    icon: Shield,
    title: "Quality & Standards",
    description: "We keep high standards for code quality, documentation, and project structure. Every repo follows best practices.",
  },
  {
    icon: BookOpen,
    title: "Learn by Doing",
    description: "Structured pathways for developers to move from learning to contributing to leading projects.",
  },
  {
    icon: Heart,
    title: "Inclusive by Design",
    description: "Developers of all skill levels are welcome. We mentor, we review, and we grow together.",
  },
  {
    icon: Target,
    title: "Open by Default",
    description: "Code, decisions, and roadmaps are public. Transparent development, no gatekeeping.",
  },
];

const stats = [
  { value: "15+", label: "Repositories" },
  { value: "60+", label: "Stars Across Projects" },
  { value: "13", label: "Contributors" },
  { value: "5+", label: "Active Maintainers" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto px-4 py-16 w-full">
        <Link href="/" className="inline-flex items-center gap-2 text-[#a78bfa] hover:text-[#c4b5fd] mb-8 transition-colors duration-150 text-sm">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <section className="mb-20">
          <span className="cvh-label mb-4">About</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            We build open-source software. <br />
            <span className="cvh-gradient-text">Together.</span>
          </h1>
          <p className="text-white/50 text-base md:text-lg max-w-3xl leading-relaxed">
            The Codeverse Hub is a community-driven open-source organization. We build real projects,
            learn together, and help developers grow at every level. Our repositories include Discord bots,
            Linux systems, developer tools, and web platforms. Everything is open for contribution.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-4 mb-20">
          <div className="cvh-card p-8">
            <div className="w-11 h-11 rounded-lg bg-[#8b5cf6]/10 flex items-center justify-center mb-4">
              <Target className="w-5 h-5 text-[#8b5cf6]" />
            </div>
            <h2 className="text-xl font-bold text-white mb-3">Mission</h2>
            <p className="text-white/50 leading-relaxed">
              Connect developers, build real software, and grow through collaboration. We create an
              environment where every developer can contribute to meaningful projects and advance their skills.
            </p>
          </div>
          <div className="cvh-card p-8">
            <div className="w-11 h-11 rounded-lg bg-[#8b5cf6]/10 flex items-center justify-center mb-4">
              <Eye className="w-5 h-5 text-[#8b5cf6]" />
            </div>
            <h2 className="text-xl font-bold text-white mb-3">Vision</h2>
            <p className="text-white/50 leading-relaxed">
              A world where open-source contribution is the default path for developer growth. We
              aim to produce high-quality software while nurturing the next generation of maintainers.
            </p>
          </div>
        </div>

        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-tight">Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="cvh-card p-6 group">
                  <div className="w-10 h-10 rounded-lg bg-[#8b5cf6]/10 text-[#8b5cf6] flex items-center justify-center mb-3.5 transition-transform duration-150 group-hover:scale-105">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-white font-semibold mb-1.5">{v.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{v.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {stats.map((s) => (
            <div key={s.label} className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-5 py-4 text-center">
              <p className="text-2xl md:text-3xl font-bold text-white">{s.value}</p>
              <p className="text-xs text-white/50 mt-1">{s.label}</p>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
