"use client";

import Link from "next/link";
import ShinyText from "@/components/ShinyText";
import {
  Code2,
  MessageSquare,
  GitPullRequest,
  Users,
  Briefcase,
  Award,
  Zap,
  Network,
} from "lucide-react";

const benefits = [
  {
    icon: MessageSquare,
    title: "Code Reviews That Teach",
    description:
      "Submit a PR and get detailed, actionable feedback from maintainers who understand the stack. You learn how to write cleaner code, structure projects better, and think like an engineer—not just solve an exercise.",
  },
  {
    icon: GitPullRequest,
    title: "Real Open-Source Contribution",
    description:
      "Skip the tutorial treadmill. Work on Discord bots, Linux distributions, CLI tools, and web apps that actual users depend on. Every merged PR goes on your GitHub profile and your resume.",
  },
  {
    icon: Users,
    title: "Collaborative Study Groups",
    description:
      "Learning DSA, React, or Rust? Join a study group. Work through problems together, share resources, and hold each other accountable. Structured, consistent, and way more effective than going solo.",
  },
  {
    icon: Briefcase,
    title: "Portfolio-Building Projects",
    description:
      "The projects you contribute to become your portfolio. Show potential employers production code you helped ship, issues you resolved, and features you implemented alongside a distributed team.",
  },
  {
    icon: Zap,
    title: "Hackathons & Sprints",
    description:
      "Participate in community hackathons, weekend coding sprints, and themed build events. Ship something new in a weekend, compete for fun, and walk away with something to show.",
  },
  {
    icon: Award,
    title: "Mentorship & Career Growth",
    description:
      "Experienced developers volunteer as mentors. Get guidance on career decisions, code architecture, system design, and navigating the open-source ecosystem. Many contributors land jobs through skills they built here.",
  },
  {
    icon: Network,
    title: "Global Developer Network",
    description:
      "Connect with developers from 50+ countries. Share perspectives, learn how software is built in different industries, and build relationships that go beyond a single repository.",
  },
  {
    icon: Code2,
    title: "Technical Discussions",
    description:
      "Deep-dive channels on Linux, web development, AI/ML, systems programming, databases, DevOps, and more. Ask questions, share knowledge, and debate architecture with people who actually build things.",
  },
];

export default function WhyJoinSection() {
  return (
    <section className="section-spacing" aria-labelledby="why-join-heading">
      <div className="section-divider mb-0" />
      <div className="section-container pt-16 md:pt-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-label mb-6">Benefits</span>
            <h2
              id="why-join-heading"
              className="heading-lg text-3xl sm:text-4xl md:text-5xl mb-4 mt-5"
            >
              <ShinyText
                text="Why Join?"
                shineColor="#ffffff"
                color="#ffffff"
                speed={5}
                spread={150}
                direction="left"
                yoyo={true}
              />
            </h2>
            <p className="text-[#666666] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              The CodeVerse Hub offers more than a chat room. It is a place to
              grow as an engineer, build real software, and connect with
              developers who care about their craft.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 max-w-4xl mx-auto">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="card p-6 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center shrink-0 border border-[#1a1a1a] bg-[rgba(255,255,255,0.04)] transition-all duration-300 group-hover:scale-110">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-heading text-sm font-semibold text-white mb-1.5">
                        {benefit.title}
                      </h3>
                      <p className="text-[0.8125rem] text-[#666666] leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/about"
              className="btn-ghost text-[0.8125rem] inline-flex items-center gap-1.5"
            >
              More about the community &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
