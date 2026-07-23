"use client";

import Link from "next/link";
import ShinyText from "@/components/ShinyText";
import { Target, Users, Code2, GitPullRequest, BookOpen } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "Build a community where developers of every skill level are welcomed and can participate in open-source contributions with us.",
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
      "Our repositories include Discord bots serving thousands of users, Linux distributions, developer tooling, and web applications. Every contribution has an impact.",
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
    <section
      className="section-spacing"
      aria-labelledby="about-details-heading"
    >
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
              The CodeVerse Hub is an open-source developer community where
              people of all skill levels collaborate on real-world projects,
              contribute to GitHub repositories, and grow together through
              hands-on experience.
            </p>

            <p className="text-base md:text-lg text-[#666666] leading-relaxed">
              We believe the best way to learn software development is by
              building real software. From your first pull request to leading
              projects, you'll gain practical experience with Git, code reviews,
              CI/CD, and modern development workflows alongside a supportive
              global community.
            </p>

            <p className="text-base md:text-lg text-[#666666] leading-relaxed">
              Whether you're a beginner or an experienced developer, you'll find
              opportunities to learn, contribute, mentor others, and build
              impactful open-source software together.
            </p>
          </div>

          {/* Pillars grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="card p-6 group">
                  <div className="w-10 h-10 flex items-center justify-center mb-4 border border-[#1a1a1a] bg-[rgba(255,255,255,0.04)] transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-5 h-5 text-[#22d3ee]" />
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
