import Link from "next/link";
import { ArrowLeft, Target, Eye, Heart, Shield, Users, Code2, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | The Codeverse Hub",
  description:
    "The Codeverse Hub is an open-source organization building real-world software, fostering collaboration, and helping developers grow at every level.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: Code2,
    title: "Build Real Software",
    description: "We ship production-grade open-source projects — Discord bots, Linux distributions, developer tools, and web platforms.",
    color: "#8B5CF6",
  },
  {
    icon: Users,
    title: "Community-First",
    description: "Every project is built with and for the community. Contributions are reviewed, discussed, and celebrated.",
    color: "#EC4899",
  },
  {
    icon: Shield,
    title: "Quality & Standards",
    description: "We maintain high standards for code quality, documentation, and project structure. Every repo follows best practices.",
    color: "#06B6D4",
  },
  {
    icon: BookOpen,
    title: "Learn by Doing",
    description: "We provide structured pathways for developers to move from learning to contributing to leading projects.",
    color: "#10B981",
  },
  {
    icon: Heart,
    title: "Inclusive by Design",
    description: "Developers of all skill levels are welcome. We mentor, we review, and we grow together.",
    color: "#F59E0B",
  },
  {
    icon: Target,
    title: "Open by Default",
    description: "Code, decisions, and roadmaps are public. We believe in transparent development.",
    color: "#F97316",
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
        <Link href="/" className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 mb-8 transition-colors text-sm">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Hero */}
        <section className="mb-20">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-violet-300/70 mb-3">About</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            We build open-source software <br />
            <span className="bg-gradient-to-r from-violet-300 via-fuchsia-400 to-indigo-300 bg-clip-text text-transparent">
              together
            </span>
          </h1>
          <p className="text-white/50 text-base md:text-lg max-w-3xl leading-relaxed">
            The Codeverse Hub is a community-driven open-source organization focused on building
            real-world projects, learning collaboratively, and growing developers at every level.
            We maintain active repositories across Discord bots, Linux systems, developer tools,
            and web platforms — all open for contribution.
          </p>
        </section>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
            <div className="w-12 h-12 rounded-xl bg-violet-500/15 flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-violet-400" />
            </div>
            <h2 className="text-xl font-bold text-white mb-3">Mission</h2>
            <p className="text-white/50 leading-relaxed">
              Connect developers, build real software, and grow through collaboration. We create an
              environment where every developer — regardless of experience — can contribute to
              meaningful projects and advance their skills.
            </p>
          </div>
          <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
            <div className="w-12 h-12 rounded-xl bg-fuchsia-500/15 flex items-center justify-center mb-4">
              <Eye className="w-6 h-6 text-fuchsia-400" />
            </div>
            <h2 className="text-xl font-bold text-white mb-3">Vision</h2>
            <p className="text-white/50 leading-relaxed">
              A world where open-source contribution is the default path for developer growth. We
              aim to be a recognized organization that produces high-quality software while nurturing
              the next generation of open-source maintainers.
            </p>
          </div>
        </div>

        {/* Values */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="group p-6 rounded-2xl border border-white/8 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: v.color + "18", color: v.color }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{v.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{v.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Stats strip */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center"
            >
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
