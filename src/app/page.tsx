"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Projects from "@/components/Projects";
import About from "@/components/About";
import JoinCTA from "@/components/JoinCTA";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import GradientBlinds from "@/components/GradientBlinds";
import ShinyText from "@/components/ShinyText";
import TechMarquee from "@/components/TechMarquee";
import { Waves, DotOrbit } from "@paper-design/shaders-react";
import { ChevronDown } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-[#09090b]">
      {/* ─── FULL-PAGE BACKGROUND LAYER ──────────────── */}
      {/* Ambient starfield */}
      <div className="fixed inset-0 bg-stars pointer-events-none -z-10" />

      {/* GradientBlinds animated shader */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <GradientBlinds
          gradientColors={["#09090b", "#0a1a1e", "#09090b", "#0c2228"]}
          blindCount={24}
          blindMinWidth={40}
          noise={0.15}
          angle={90}
          spotlightRadius={0.6}
          spotlightSoftness={0.8}
          spotlightOpacity={0.3}
          mirrorGradient={true}
          mouseDampening={0.1}
        />
      </div>

      {/* Waves animated shader - subtle wave motion across entire page */}
      <div className="fixed inset-0 pointer-events-none -z-10 opacity-40">
        <Waves
          colorFront="#06b6d4"
          colorBack="#09090b"
          amplitude={0.15}
          frequency={1.5}
          shape={0.5}
          spacing={2}
          softness={0.6}
        />
      </div>

      {/* DotOrbit moving particles - across entire page */}
      <div className="fixed inset-0 pointer-events-none -z-10 opacity-25">
        <DotOrbit
          colors={["#06b6d4", "#22d3ee", "#0891b2", "#67e8f9"]}
          colorBack="#09090b"
          size={2.5}
          sizeRange={3}
          spreading={2}
          stepsPerColor={60}
        />
      </div>

      {/* Grid + dot pattern - across entire page */}
      <div className="fixed inset-0 bg-grid pointer-events-none -z-10" />
      <div className="fixed inset-0 bg-dots pointer-events-none -z-10" />

      {/* ─── HERO ──────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden z-10">

        {/* Cyan glow orbs */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(6,182,212,0.06)_0%,transparent_70%)] pointer-events-none z-[1]" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(6,182,212,0.04)_0%,transparent_70%)] pointer-events-none z-[1]" />

        {/* Gradient line accent at top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-px bg-gradient-to-r from-transparent via-[rgba(6,182,212,0.4)] to-transparent pointer-events-none z-[1]" />

        {/* Navbar */}
        <Navbar />

        {/* Main hero content */}
        <div className="relative z-10 w-full section-container py-28 md:py-0 flex flex-col items-center text-center">
          {/* Heading */}
          <h1 className="heading-xl text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem] text-[#e4e4e7] max-w-5xl">
            <ShinyText
              text="Write Code."
              shineColor="#ffffff"
              color="#e4e4e7"
              speed={4}
              spread={120}
              direction="left"
              yoyo={true}
              pauseOnHover={true}
            />
            <br />
            Review PRs.
            <br />
            <ShinyText
              text="Ship"
              shineColor="#22d3ee"
              color="#06b6d4"
              speed={3}
              spread={90}
              direction="left"
              yoyo={true}
            />{" "}
            Together.
          </h1>

          {/* Description */}
          <p className="text-[#a1a1aa] text-sm sm:text-base md:text-lg leading-relaxed max-w-[600px] mx-auto mt-8">
            The CodeVerse Hub is a community of developers building real
            open-source software. We review your code, ship your PRs, and take
            you from your first commit to your first maintainer merge.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 mt-10">
            <a
              href="https://discord.gg/3xKFvKhuGR"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary h-11 px-7 text-[0.8125rem]"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              Join Discord
            </a>
            <Link
              href="/projects"
              className="btn-secondary h-11 px-7 text-[0.8125rem]"
            >
              Browse Projects
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10">
          <span className="text-[0.625rem] text-[#52525b] font-mono tracking-wider animate-bounce">
            SCROLL
          </span>
          <ChevronDown className="w-3.5 h-3.5 text-[#52525b] animate-bounce" />
        </div>
      </section>

      {/* ─── REST OF SECTIONS ─────────────────────────── */}
      <ScrollReveal>
        <Stats />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <div className="section-divider" />
      </ScrollReveal>
      <ScrollReveal delay={150}>
        <Features />
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <Projects />
      </ScrollReveal>

      <ScrollReveal delay={250}>
        <TechMarquee />
      </ScrollReveal>

      <ScrollReveal delay={300}>
        <About />
      </ScrollReveal>
      <ScrollReveal delay={350}>
        <JoinCTA />
      </ScrollReveal>
      <ScrollReveal delay={400}>
        <ContactSection />
      </ScrollReveal>
      <ScrollReveal delay={450}>
        <Footer />
      </ScrollReveal>
    </div>
  );
}
