"use client";

import Link from "next/link";
import ShinyText from "@/components/ShinyText";
import { Target, Users, Code2, GitPullRequest, BookOpen } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Mission-Driven",
    description:
      "We exist to make open-source contribution accessible to every developer. Whether you are writing your first line of code or your thousandth PR, we provide the structure, mentorship, and community to help you grow.",
  },
  {
    icon: Users,
    title: "Community-First",
    description:
      "Decisions are made transparently. Maintainers are elected from active contributors. Roadmaps are discussed in the open. The community shapes the direction of every project we build.",
  },
  {
    icon: Code2,
    title: "Production Software",
    description:
      "We do not build toy projects. Our repositories include Discord bots serving thousands of users, Linux distributions, developer tooling, and web applications. Every contribution has real-world impact.",
  },
  {
    icon: GitPullRequest,
    title: "Contribution Culture",
    description:
      "Code reviews are thorough but constructive. Every PR gets meaningful feedback. Our workflow mirrors professional software engineering teams, giving contributors experience that translates directly to industry roles.",
  },
  {
    icon: BookOpen,
    title: "Learning by Building",
    description:
      "We believe the best way to learn programming is to build real software with real users. Study groups, pair programming sessions, and structured onboarding help beginners become confident contributors.",
  },
];

export default function AboutDetails() {
  return (
    <section className="section-spacing" aria-labelledby="about-details-heading">
      <div className="section-divider mb-0" />
      <div className="section-container pt-16 md:pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="section-label mb-6">About</span>
            <h2
              id="about-details-heading"
              className="heading-lg text-3xl sm:text-4xl md:text-5xl mb-5 mt-5"
            >
              <ShinyText
                text="The CodeVerse Hub"
                shineColor="#ffffff"
                color="#ffffff"
                speed={5}
                spread={150}
                direction="left"
                yoyo={true}
              />
            </h2>
          </div>

          {/* Main content */}
          <div className="space-y-6 mb-14">
            <p className="text-base md:text-lg text-[#666666] leading-relaxed">
              The CodeVerse Hub is an open-source community built around a
              single belief: the best way to learn software development is to
              build real software with real people. We are a Discord-based
              developer community where programmers from over 50 countries
              collaborate on GitHub, review each other&apos;s code, and ship
              production-grade open-source projects together.
            </p>
            <p className="text-base md:text-lg text-[#666666] leading-relaxed">
              Our mission is to bridge the gap between learning to code and
              contributing to professional software. Unlike tutorials that
              isolate you in a sandbox, we drop you into real repositories with
              real issues, real code reviews, and real maintainers. You learn
              Git, GitHub workflows, CI/CD pipelines, code review etiquette, and
              software architecture by doing it—alongside developers who have
              been in your shoes.
            </p>
            <p className="text-base md:text-lg text-[#666666] leading-relaxed">
              What makes us different is our emphasis on mentorship through
              contribution. Beginners are paired with experienced contributors
              who guide them through their first pull request. Study groups form
              organically around topics like web development, Linux systems
              programming, AI and machine learning, and competitive programming.
              Experienced developers find opportunities to lead projects, review
              code, and give back to the community that helped them grow.
            </p>
            <p className="text-base md:text-lg text-[#666666] leading-relaxed">
              We maintain projects across the full stack—from Python-based
              Discord bots and TypeScript web applications to Lua-configured
              Linux distributions and Rust developer tools. Every repository is
              open for contribution. Every contributor is treated as a
              colleague. Every line of code you ship makes the community
              stronger.
            </p>
          </div>

          {/* Pillars grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="card p-6 group"
                >
                  <div className="w-10 h-10 flex items-center justify-center mb-4 border border-[#1a1a1a] bg-[rgba(255,255,255,0.04)] transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-heading text-sm font-semibold text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-[0.8125rem] text-[#666666] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Footer link */}
          <div className="text-center mt-12">
            <Link
              href="/about"
              className="btn-ghost text-[0.8125rem] inline-flex items-center gap-1.5"
            >
              Learn more about the community &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
