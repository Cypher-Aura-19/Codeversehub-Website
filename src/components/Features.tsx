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
    title: "Help when you need it",
    description:
      "Stuck at 2am? Someone in our community is awake. Post your question and get answers from developers who actually know the stack.",
    tag: "#help-desk",
  },
  {
    icon: GitPullRequest,
    title: "Real code reviews",
    description:
      "Submit your code and get honest feedback. Not rubber stamps. Senior devs will tell you what works and what does not.",
    tag: "#code-review",
  },
  {
    icon: BookOpen,
    title: "Curated resources",
    description:
      "No blog spam. Just hand-picked docs, tutorials, and roadmaps that actually helped someone get better at their stack.",
    tag: "#resources",
  },
  {
    icon: Rocket,
    title: "Project showcase",
    description:
      "Building something? Share it. Get feedback, find testers, maybe even a co-maintainer who cares about the same thing.",
    tag: "#project-showcase",
  },
  {
    icon: Code2,
    title: "Open source",
    description:
      "We maintain bots, tools, even a Linux distro. Real projects you can contribute to and put on your resume.",
    tag: "#oss-projects",
  },
  {
    icon: Users,
    title: "Study groups",
    description:
      "Learning DSA or a new framework? Find people at your level and work through it together. No awkward silence.",
    tag: "#study-groups",
  },
  {
    icon: Zap,
    title: "Hackathons",
    description:
      "Regular coding events and challenges. Build something cool, submit it, and maybe win. No corporate pitch decks required.",
    tag: "#events",
  },
  {
    icon: Globe,
    title: "Global network",
    description:
      "Developers from 50+ countries. Different timezones, same goal: write code that matters and help each other improve.",
    tag: "#networking",
  },
];

export default function Features() {
  return (
    <section className="bg-black py-24 md:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="cvh-label mb-5">
            Why developers stick around
          </span>
          <h2 className="cvh-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Everything a dev needs
          </h2>
          <p className="text-white/40 text-base md:text-lg max-w-2xl mx-auto">
            Debugging at midnight, prepping for interviews, or shipping your first
            open-source PR. We have a space for it.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div key={i} className="cvh-card p-5 group">
                <div className="w-10 h-10 rounded-lg bg-[#8b5cf6]/10 text-[#8b5cf6] flex items-center justify-center mb-3.5 transition-transform duration-150 group-hover:scale-105">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-1.5">
                  {feature.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {feature.description}
                </p>
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
