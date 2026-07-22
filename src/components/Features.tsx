"use client";

import {
  MessageSquare,
  GitPullRequest,
  BookOpen,
  Rocket,
  Code2,
  Users,
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Help when you need it",
    description: "Stuck at 2am? Someone in our community is awake. Post your question and get answers from developers who actually know the stack.",
  },
  {
    icon: GitPullRequest,
    title: "Real code reviews",
    description: "Submit your code and get honest feedback. Senior devs will tell you what works and what does not. No rubber stamps.",
  },
  {
    icon: BookOpen,
    title: "Curated resources",
    description: "Hand-picked docs, tutorials, and roadmaps that actually helped someone get better at their stack. No blog spam.",
  },
  {
    icon: Rocket,
    title: "Project showcase",
    description: "Building something? Share it. Get feedback, find collaborators, maybe even a co-maintainer who cares about the same thing.",
  },
  {
    icon: Code2,
    title: "Open source",
    description: "We maintain bots, tools, and a Linux distro. Real projects you can contribute to and put on your resume.",
  },
  {
    icon: Users,
    title: "Study groups",
    description: "Learning DSA or a new framework? Find people at your level and work through it together. No awkward silence.",
  },
];

export default function Features() {
  return (
    <section className="section-padding px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="cvh-label mb-5">What we offer</span>
          <h2 className="cvh-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
            Everything a dev needs
          </h2>
          <p className="text-white/40 text-base md:text-lg max-w-xl mx-auto">
            Debugging at midnight, prepping for interviews, or shipping your first
            open-source PR. We have a space for it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div key={i} className="cvh-card p-6 md:p-7 group">
                <div className="w-10 h-10 rounded-lg bg-[#06b6d4]/10 text-[#06b6d4] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-white font-semibold text-base mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
