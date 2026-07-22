"use client";

import {
  MessageSquare,
  GitPullRequest,
  BookOpen,
  Rocket,
  Users,
  Zap,
  Code2,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "24/7 Dev Help",
    description:
      "Stuck on a bug at 2am? Our global community spans every timezone. Post your question, get answers — always.",
    tag: "#help-desk",
  },
  {
    icon: GitPullRequest,
    title: "Code Reviews",
    description:
      "Submit your code and get honest, constructive peer reviews. Level up your skills with real feedback from experienced devs.",
    tag: "#code-review",
  },
  {
    icon: BookOpen,
    title: "Curated Resources",
    description:
      "A hand-picked library of docs, tutorials, roadmaps and cheatsheets across every major stack and language.",
    tag: "#resources",
  },
  {
    icon: Rocket,
    title: "Project Showcase",
    description:
      "Share what you're building. Get feedback, testers, and maybe even collaborators from thousands of engaged developers.",
    tag: "#project-showcase",
  },
  {
    icon: Code2,
    title: "Open Source Hub",
    description:
      "We maintain active open source projects — bots, tools, a Linux distro. Contribute and put it on your resume.",
    tag: "#oss-projects",
  },
  {
    icon: Users,
    title: "Study Groups",
    description:
      "Learning DSA, system design, or a new framework? Find others at the same level and grind through it together.",
    tag: "#study-groups",
  },
  {
    icon: Zap,
    title: "Hackathons & Events",
    description:
      "Regular challenges, hackathons, and community coding events. Build something cool, win, and get recognized.",
    tag: "#events",
  },
  {
    icon: Globe,
    title: "Global Network",
    description:
      "Connect with developers from 50+ countries. Find opportunities, collaborations, and friends across the globe.",
    tag: "#networking",
  },
];

export default function Features() {
  return (
    <section className="bg-black py-24 md:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="cvh-label mb-5">
            Why developers choose us
          </span>
          <h2 className="cvh-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Everything a dev needs
          </h2>
          <p className="text-white/40 text-base md:text-lg max-w-2xl mx-auto">
            From daily debugging to landing your first job — we have a channel,
            a community, and a resource for every step.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="cvh-card p-5 group"
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-[#8b5cf6]/10 text-[#8b5cf6] flex items-center justify-center mb-3.5 transition-transform duration-150 group-hover:scale-105">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Content */}
                <h3 className="text-white font-semibold text-sm mb-1.5">
                  {feature.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Tag */}
                <div className="mt-3.5">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#8b5cf6]/10 text-[#8b5cf6]/70">
                    {feature.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
