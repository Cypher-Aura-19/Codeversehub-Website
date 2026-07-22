"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function JoinCTA() {
  return (
    <section className="section-spacing">
      <div className="section-divider mb-0" />
      <div className="section-container pt-16 md:pt-20">
        <div className="max-w-2xl mx-auto text-center">
          <span className="section-label mb-6">Get Involved</span>
          <h2 className="heading-lg text-3xl sm:text-4xl md:text-5xl text-[#e4e4e7] mb-5">
            Ready to ship?
          </h2>
          <p className="text-[#a1a1aa] text-base md:text-lg max-w-lg mx-auto leading-relaxed mb-10">
            No gatekeeping. No fake guru culture. Just developers building
            open-source software and helping each other improve.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://discord.gg/3xKFvKhuGR"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary h-11 px-7 text-[0.8125rem] group"
            >
              Join Discord
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
            </a>
            <Link
              href="/projects"
              className="btn-secondary h-11 px-7 text-[0.8125rem]"
            >
              Browse projects
            </Link>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-[0.75rem] text-[#52525b]">
            <span>No application required</span>
            <span className="w-1 h-1 rounded-full bg-[rgba(255,255,255,0.12)]" />
            <span>All skill levels welcome</span>
            <span className="w-1 h-1 rounded-full bg-[rgba(255,255,255,0.12)]" />
            <span>Active 24/7</span>
          </div>
        </div>
      </div>
    </section>
  );
}
