"use client";

import ShinyText from "@/components/ShinyText";
import {
  GraduationCap,
  Code2,
  GitFork,
  Terminal,
  Globe,
  Database,
  Layout,
  BrainCircuit,
  Sword,
  Users,
} from "lucide-react";

const audiences = [
  {
    icon: GraduationCap,
    title: "Students",
    description:
      "Whether you are in university or self-taught, you will find projects that match your skill level. Learn Git, open-source workflows, and professional development practices before you graduate.",
  },
  {
    icon: Code2,
    title: "Beginners",
    description:
      "No experience required. Start with good-first-issue labels, get paired with a mentor, and ship your first pull request within days. We have guided dozens of first-time contributors through their first merge.",
  },
  {
    icon: GitFork,
    title: "Open-Source Contributors",
    description:
      "Experienced with open source? Maintain projects, review PRs, shape roadmaps, and help build the next generation of contributors. Your expertise directly improves the community.",
  },
  {
    icon: Terminal,
    title: "Linux Enthusiasts",
    description:
      "We maintain Linux distributions and system-level tools. Discuss kernel modules, init systems, package managers, and desktop environments with people who run Linux as their daily driver.",
  },
  {
    icon: Globe,
    title: "Full-Stack Developers",
    description:
      "Work on web applications built with TypeScript, React, Next.js, Node.js, and Python. From frontend design to backend APIs to database architecture, there is a project for every layer.",
  },
  {
    icon: Database,
    title: "Backend Developers",
    description:
      "Dive into API design, database optimization, caching strategies, and server architecture. Our projects use PostgreSQL, Redis, FastAPI, and more. Production experience without the production pressure.",
  },
  {
    icon: Layout,
    title: "Frontend Developers",
    description:
      "Build UIs with React, Tailwind CSS, and modern frameworks. Focus on accessibility, performance, and user experience. Get real feedback from designers and backend developers.",
  },
  {
    icon: BrainCircuit,
    title: "AI / ML Developers",
    description:
      "Explore machine learning projects, natural language processing bots, and data pipelines. Share datasets, discuss model architecture, and collaborate on AI-powered tools.",
  },
  {
    icon: Sword,
    title: "Competitive Programmers",
    description:
      "Participate in study groups focused on data structures and algorithms. Solve problems together, discuss optimal approaches, and prepare for technical interviews with peers.",
  },
  {
    icon: Users,
    title: "Software Engineers",
    description:
      "Whether you are early in your career or a senior engineer, you will find peers who share your passion. Discuss system design, software architecture, testing strategies, and career growth.",
  },
];

export default function WhoIsForSection() {
  return (
    <section className="section-spacing" aria-labelledby="who-for-heading">
      <div className="section-divider mb-0" />
      <div className="section-container pt-16 md:pt-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-label mb-6">Who We Welcome</span>
            <h2
              id="who-for-heading"
              className="heading-lg text-3xl sm:text-4xl md:text-5xl mb-4 mt-5"
            >
              <ShinyText
                text="Who Is This For?"
                shineColor="#ffffff"
                color="#ffffff"
                speed={5}
                spread={150}
                direction="left"
                yoyo={true}
              />
            </h2>
            <p className="text-[#666666] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              The CodeVerse Hub is built for anyone who writes code or wants to
              learn. There is no application process, no minimum skill
              requirement, and no barrier to entry beyond curiosity and a
              willingness to build.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 max-w-4xl mx-auto">
            {audiences.map((audience) => {
              const Icon = audience.icon;
              return (
                <div key={audience.title} className="card p-6 group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center shrink-0 border border-[#1a1a1a] bg-[rgba(255,255,255,0.04)] transition-all duration-300 group-hover:scale-110">
                      <Icon className="w-5 h-5 text-[#22d3ee]" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-heading text-sm font-semibold text-white mb-1.5">
                        {audience.title}
                      </h3>
                      <p className="text-[0.8125rem] text-[#666666] leading-relaxed">
                        {audience.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
