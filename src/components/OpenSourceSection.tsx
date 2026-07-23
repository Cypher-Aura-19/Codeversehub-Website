"use client";

import Link from "next/link";
import ShinyText from "@/components/ShinyText";
import {
  GitBranch,
  GitPullRequest,
  GitMerge,
  Search,
  Shield,
  Users,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Find a Project",
    description:
      "Browse repositories in our GitHub organization. Look for issues tagged with 'good first issue' or 'help wanted'. Each repository has a contributing guide to help you understand the codebase.",
  },
  {
    icon: GitBranch,
    title: "Fork & Clone",
    description:
      "Fork the repository to your GitHub account, clone it locally, and create a new branch. Follow the setup instructions in the README to get the project running on your machine.",
  },
  {
    icon: GitPullRequest,
    title: "Submit a Pull Request",
    description:
      "Make your changes, commit with clear messages, and push your branch. Open a pull request against the original repository. Our maintainers and CI pipeline will review your code.",
  },
  {
    icon: GitMerge,
    title: "Review & Merge",
    description:
      "Respond to feedback, push additional commits if needed, and work with reviewers to refine your contribution. Once approved, a maintainer merges your PR and your code ships to production.",
  },
];

const principles = [
  {
    icon: Shield,
    title: "Transparency",
    description:
      "Every decision, every commit, every discussion is visible to the community. Roadmaps, RFCs, and maintainer elections happen in the open.",
  },
  {
    icon: Users,
    title: "Mentorship",
    description:
      "Experienced contributors review your code with the goal of teaching. We document review guidelines so everyone understands what is expected.",
  },
  {
    icon: GitPullRequest,
    title: "Meritocracy",
    description:
      "Influence is earned through quality contributions. Active contributors become maintainers. Maintainers steward the projects that matter most to the community.",
  },
];

export default function OpenSourceSection() {
  return (
    <section className="section-spacing" aria-labelledby="opensource-heading">
      <div className="section-divider mb-0" />
      <div className="section-container pt-16 md:pt-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-label mb-6">Open Source</span>
            <h2
              id="opensource-heading"
              className="heading-lg text-3xl sm:text-4xl md:text-5xl mb-4 mt-5"
            >
              <ShinyText
                text="Open Source at The CodeVerse Hub"
                shineColor="#ffffff"
                color="#ffffff"
                speed={5}
                spread={150}
                direction="left"
                yoyo={true}
              />
            </h2>
          </div>

          {/* Why open source matters */}
          <div className="mb-14 space-y-6">
            <p className="text-base md:text-lg text-[#666666] leading-relaxed">
              Open source at The CodeVerse Hub is different, we build and
              maintain real projects while welcoming contributions from
              everyone, from beginners to experienced developers. Our mentors
              guide first-time contributors through the open-source journey,
              making it easier to get started. Start contributing to CVH today!
            </p>
            <p className="text-base md:text-lg text-[#666666] leading-relaxed">
              We Review Each and Every PR!
            </p>
          </div>

          {/* How to start contributing */}
          <div className="mb-12">
            <h3 className="font-heading text-xl font-semibold text-white mb-6 text-center">
              How to Start Contributing
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 max-w-3xl mx-auto">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="card p-6 group">
                    <div className="w-10 h-10 flex items-center justify-center mb-4 border border-[#1a1a1a] bg-[rgba(255,255,255,0.04)] transition-all duration-300 group-hover:scale-110">
                      <Icon className="w-5 h-5 text-[#22d3ee]" />
                    </div>
                    <h3 className="font-heading text-sm font-semibold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[0.8125rem] text-[#666666] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Principles */}
          <div className="mb-12">
            <h3 className="font-heading text-xl font-semibold text-white mb-6 text-center">
              Our Open-Source Principles
            </h3>
            <div className="grid gap-4 md:grid-cols-3 max-w-4xl mx-auto">
              {principles.map((principle) => {
                const Icon = principle.icon;
                return (
                  <div
                    key={principle.title}
                    className="card p-6 group text-center"
                  >
                    <div className="w-10 h-10 flex items-center justify-center mx-auto mb-4 border border-[#1a1a1a] bg-[rgba(255,255,255,0.04)] transition-all duration-300 group-hover:scale-110">
                      <Icon className="w-5 h-5 text-[#22d3ee]" />
                    </div>
                    <h3 className="font-heading text-sm font-semibold text-white mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-[0.8125rem] text-[#666666] leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://github.com/TheCodeVerseHub"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary h-11 px-8 text-[0.8125rem] inline-flex items-center gap-2"
            >
              <GitBranch className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Browse GitHub Organization</span>
            </a>
            <div className="mt-4">
              <Link
                href="/pages/contributing"
                className="btn-ghost text-[0.8125rem] inline-flex items-center gap-1.5"
              >
                Read our contributing guide &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
