"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Projects from "@/components/Projects";
import AboutDetails from "@/components/AboutDetails";
import WhyJoinSection from "@/components/WhyJoinSection";
import WhoIsForSection from "@/components/WhoIsForSection";
import OpenSourceSection from "@/components/OpenSourceSection";
import JoinCTA from "@/components/JoinCTA";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ShinyText from "@/components/ShinyText";
import TechMarquee from "@/components/TechMarquee";
import HeroBackground from "@/components/HeroBackground";
import { ChevronDown, HelpCircle, ExternalLink } from "lucide-react";

const faqItems = [
  {
    q: "Is The CodeVerse Hub free?",
    a: "Yes. The CodeVerse Hub is completely free to join. There are no paid tiers, subscriptions, or hidden costs. Every channel, project, and resource is accessible to all members.",
  },
  {
    q: "Do I need experience to join?",
    a: "No. We welcome absolute beginners. Our good-first-issue labels, mentorship program, and study groups are specifically designed to help newcomers make their first open-source contribution.",
  },
  {
    q: "How do I contribute to a project?",
    a: "Join our Discord, introduce yourself, and browse our GitHub repositories. Each repo has a contributing guide. Pick an issue tagged with 'good first issue', fork the repo, and submit a pull request. Maintainers will guide you through the process.",
  },
  {
    q: "What technologies are used?",
    a: "Our community works across Python, TypeScript, JavaScript, Rust, Go, Lua, and more. We build with React, Next.js, Node.js, Django, FastAPI, and Svelte on the web side; maintain Linux distributions on the systems side; and use tools like Docker, PostgreSQL, Redis, and GraphQL across projects.",
  },
  {
    q: "Can I showcase my own projects?",
    a: "Absolutely. We have a dedicated project-showcase channel where members share what they are building. Get feedback, find collaborators, and promote your work to a community of developers who care about quality software.",
  },
  {
    q: "How do code reviews work?",
    a: "When you submit a pull request, maintainers and community members review your code inline on GitHub. You receive line-by-line feedback on logic, style, performance, and best practices. Reviews are constructive and focused on helping you improve.",
  },
  {
    q: "Can beginners really contribute to open source?",
    a: "Yes. Most of our projects have issues specifically tagged for first-time contributors. We provide guidance on Git workflows, commit conventions, and the PR lifecycle. Many of our active maintainers started with zero open-source experience.",
  },
  {
    q: "How do I become a maintainer?",
    a: "Maintainers are elected from active contributors. Consistently submit quality PRs, participate in code reviews, help other contributors, and demonstrate understanding of the project. When you are ready, the community will nominate and vote on new maintainers.",
  },
];

export default function Home() {
  return (
    <div className="bg-[#050505]">
      {/* ─── HERO ──────────────────────────────────────── */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden z-10">
        {/* 10-layer background */}
        <HeroBackground />

        {/* Navigation */}
        <Navbar />

        {/* Main hero content */}
        <div className="relative z-10 w-full section-container py-28 md:py-0 flex flex-col items-center text-center">
          {/* Terminal badge */}
          <div className="relative mb-8 inline-flex items-center gap-2 px-4 py-1.5 border border-[#1a1a1a] bg-[rgba(255,255,255,0.03)] backdrop-blur-sm">
            <span className="text-[0.6875rem] font-mono text-[#afafaf] tracking-wider">
              OPEN SOURCE COMMUNITY
            </span>
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#22d3ee]"
              style={{ animation: "glow-pulse 2s ease-in-out infinite" }}
            />
          </div>

          {/* Heading */}
          <h1 className="heading-xl text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem] max-w-5xl">
            <ShinyText
              text="Write Code."
              shineColor="#ffffff"
              color="#ffffff"
              speed={4}
              spread={120}
              direction="left"
              yoyo={true}
              pauseOnHover={true}
            />
            <br />
            <span className="text-white">Review PRs.</span>
            <br />
            <ShinyText
              text="Ship"
              shineColor="#ffffff"
              color="#ffffff"
              speed={3}
              spread={90}
              direction="left"
              yoyo={true}
            />{" "}
            <span className="text-[#22d3ee]">Together.</span>
          </h1>

          {/* Expanded hero description */}
          <p className="text-[#666666] text-sm sm:text-base md:text-lg leading-relaxed max-w-[650px] mx-auto mt-8">
            The CodeVerse Hub isn't a "learn to code" server. We chat, connect
            and build real stuff. Discord bots, Linux distros, web apps,
            developer tools you name it. No tutorial hell. No fake projects.
            Just real GitHub repos, real pull requests, real code reviews, and
            real open-source. Whether you're shipping your first PR or reviewing
            everyone else's, there's a place for you. Build. Break things.
            Learn. Repeat.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 mt-10">
            <a
              href="https://discord.gg/3xKFvKhuGR"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary h-11 px-8 text-[0.8125rem]"
            >
              <svg
                className="w-4 h-4 relative z-10"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              <span className="relative z-10">Join Discord</span>
            </a>
            <Link
              href="/projects"
              className="btn-secondary h-11 px-8 text-[0.8125rem]"
            >
              Browse Projects
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        {/*<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10">
          <span className="text-[0.625rem] text-[#666666] font-mono tracking-wider"></span>
          <ChevronDown className="w-3.5 h-3.5 text-[#666666]" />
        </div>*/}
      </header>

      {/* ─── MAIN CONTENT ──────────────────────────────── */}
      <main>
        <ScrollReveal>
          <Stats />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="section-divider" />
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <Features />
        </ScrollReveal>

        {/* About The CodeVerse Hub expanded mission and philosophy section */}
        <ScrollReveal delay={200}>
          <AboutDetails />
        </ScrollReveal>

        {/* Projects expanded showcase with descriptive text */}
        <ScrollReveal delay={250}>
          <Projects />
        </ScrollReveal>

        {/* Why Join benefits section */}
        <ScrollReveal delay={300}>
          <WhyJoinSection />
        </ScrollReveal>

        {/* Who Is This For audience section */}
        <ScrollReveal delay={350}>
          <WhoIsForSection />
        </ScrollReveal>

        {/* Open Source how to contribute section */}
        <ScrollReveal delay={400}>
          <OpenSourceSection />
        </ScrollReveal>

        {/* Technologies */}
        <ScrollReveal delay={450}>
          <TechMarquee />
        </ScrollReveal>

        {/* FAQ expanded useful questions */}
        <ScrollReveal delay={500}>
          <section className="section-spacing" aria-labelledby="faq-heading">
            <div className="section-divider mb-0" />
            <div className="section-container pt-16 md:pt-20">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-14">
                  <span className="section-label mb-6">FAQ</span>
                  <h2
                    id="faq-heading"
                    className="heading-lg text-3xl sm:text-4xl md:text-5xl mb-4 mt-5"
                  >
                    <ShinyText
                      text="Frequently Asked Questions"
                      shineColor="#ffffff"
                      color="#ffffff"
                      speed={5}
                      spread={150}
                      direction="left"
                      yoyo={true}
                    />
                  </h2>
                  <p className="text-[#666666] text-base md:text-lg max-w-xl mx-auto leading-relaxed">
                    Everything you need to know about joining and contributing
                    to The CodeVerse Hub.
                  </p>
                </div>

                <div className="divide-y divide-[#1a1a1a]">
                  {faqItems.map((item) => (
                    <details key={item.q} className="group py-5 cursor-pointer">
                      <summary className="flex items-center justify-between text-sm sm:text-base font-medium text-white hover:text-[#afafaf] transition-colors duration-150 list-none">
                        <span className="flex items-center gap-3">
                          <HelpCircle className="w-4 h-4 text-[#22d3ee] shrink-0" />
                          {item.q}
                        </span>
                        <ChevronDown className="w-4 h-4 text-[#666666] shrink-0 transition-transform duration-200 group-open:rotate-180" />
                      </summary>
                      <p className="mt-3 text-[0.8125rem] text-[#666666] leading-relaxed pl-7">
                        {item.a}
                      </p>
                    </details>
                  ))}
                </div>

                <div className="text-center mt-10">
                  <Link
                    href="/pages/faq"
                    className="btn-ghost text-[0.8125rem] inline-flex items-center gap-1.5"
                  >
                    View full FAQ
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={550}>
          <JoinCTA />
        </ScrollReveal>

        <ScrollReveal delay={600}>
          <ContactSection />
        </ScrollReveal>
      </main>

      <ScrollReveal delay={650}>
        <Footer />
      </ScrollReveal>
    </div>
  );
}
