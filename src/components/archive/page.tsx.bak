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
import { ChevronDown } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-[#09090B]">
      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Engineering grid background */}
        <div className="hero-grid" />

        {/* Subtle glow behind heading */}
        <div className="hero-glow" />

        {/* Decorative corner markers */}
        <div className="hero-corner hero-corner-tl" />
        <div className="hero-corner hero-corner-tr" />
        <div className="hero-corner hero-corner-bl" />
        <div className="hero-corner hero-corner-br" />

        {/* Navbar */}
        <Navbar />

        {/* Main hero content */}
        <div className="relative z-10 w-full max-w-[1120px] mx-auto px-6 md:px-8 py-24 md:py-0 flex flex-col items-center text-center">
          {/* Announcement badge */}
          <div className="hero-badge mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4]" />
            Open Source Community
          </div>

          {/* Heading */}
          <h1 className="cvh-pixel-heading text-[2.75rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white/90 tracking-tight leading-[0.95] max-w-5xl">
            Write Code
            <br />
            Review PRs
            <br />
            <span className="text-[#06b6d4]">Ship</span> Together
          </h1>

          {/* Description */}
          <p className="text-white/40 text-sm sm:text-base leading-relaxed max-w-[650px] mx-auto mt-8">
            The Codeverse Hub is a community of developers building real open-source
            software. We review your code, ship your PRs, and take you from your first
            commit to your first maintainer merge.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 mt-10">
            <a
              href="https://discord.gg/3xKFvKhuGR"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0891b2] text-white text-sm font-semibold hover:bg-[#0e7490] transition-colors duration-150"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              Join Discord
            </a>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/15 text-white/65 text-sm font-medium hover:border-white/30 hover:text-white transition-colors duration-150"
            >
              Browse Projects
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/15">
          <ChevronDown className="w-4 h-4" />
        </div>
      </section>

      {/* ─── REST OF SECTIONS ────────────────────────────────────── */}
      <Stats />
      <Features />
      <Projects />
      <TechMarquee />
      <About />
      <ContactSection />
      <JoinCTA />
      <Footer />
    </div>
  );
}
