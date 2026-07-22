"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import ContactSection from "@/components/ContactSection";
import JoinCTA from "@/components/JoinCTA";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import TechMarquee from "@/components/TechMarquee";
import TerminalWindow from "@/components/TerminalWindow";
import { ArrowRight, Star, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />

      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center">
        {/* Grid background */}
        <div className="absolute inset-0 cvh-grid-bg z-0" />

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 via-black/50 to-black z-0" />

        {/* Single accent glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#7c3aed]/10 blur-[120px] pointer-events-none z-0" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-24 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
            {/* ── Left column ── */}
            <div className="flex flex-col gap-6 order-2 lg:order-1">
              {/* Eyebrow badge */}
              <div className="flex items-center gap-2 w-fit">
                <span className="cvh-label text-[11px]">
                  Open-source organization
                </span>
              </div>

              {/* Main headline */}
              <div className="space-y-2">
                <h1 className="cvh-heading text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-[1.05] tracking-tight">
                  Build software with a
                </h1>
                <h1 className="cvh-heading text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight cvh-gradient-text">
                  Community That Ships
                </h1>

                <p className="text-white/50 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mt-4">
                  The Codeverse Hub is a developer community and open-source organization.
                  We build real projects, review each other&apos;s code, and help developers
                  grow — from first commit to production maintainer.
                </p>
              </div>

              {/* CTA row */}
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <a
                  href="https://discord.gg/3xKFvKhuGR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group cvh-btn-primary text-base"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                  Join the Discord
                  <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" />
                </a>

                <Link
                  href="/projects"
                  className="group cvh-btn-secondary text-base"
                >
                  Explore projects
                  <ArrowRight className="w-4 h-4 opacity-50 transition-transform duration-150 group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Metrics strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-4">
                <div className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-3">
                  <p className="text-[11px] text-white/40 font-medium tracking-wide">Community</p>
                  <p className="text-lg font-bold text-white">1.8k+</p>
                </div>
                <div className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-3">
                  <p className="text-[11px] text-white/40 font-medium tracking-wide">Repositories</p>
                  <p className="text-lg font-bold text-white">15+</p>
                </div>
                <div className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-3">
                  <p className="text-[11px] text-white/40 font-medium tracking-wide">Contributors</p>
                  <p className="text-lg font-bold text-white">13+</p>
                </div>
                <div className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-3">
                  <p className="text-[11px] text-white/40 font-medium tracking-wide">Countries</p>
                  <p className="text-lg font-bold text-white">50+</p>
                </div>
              </div>

              {/* Social proof strip */}
              <div className="flex flex-wrap items-center gap-4 mt-1 text-sm text-white/60">
                <span className="flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#8b5cf6]" />
                  Active community
                </span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span className="flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 text-[#8b5cf6]" />
                  Real projects
                </span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span>Open to all</span>
              </div>
            </div>

            {/* ── Right column — Terminal ── */}
            <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative w-full max-w-xl">
                <TerminalWindow />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
      </section>

      {/* ─── FEATURES ────────────────────────────────────────────── */}
      <Features />

      {/* ─── TECH MARQUEE ───────────────────────────────────────── */}
      <TechMarquee />

      {/* ─── ABOUT ───────────────────────────────────────────────── */}
      <About />

      {/* ─── STATS ───────────────────────────────────────────────── */}
      <Stats />

      {/* ─── PROJECTS ────────────────────────────────────────────── */}
      <Projects />

      {/* ─── CONTACT ─────────────────────────────────────────────── */}
      <ContactSection />

      {/* ─── JOIN CTA ────────────────────────────────────────────── */}
      <JoinCTA />

      <Footer />
    </div>
  );
}
