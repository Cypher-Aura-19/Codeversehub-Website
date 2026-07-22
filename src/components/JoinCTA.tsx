"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function JoinCTA() {
  return (
    <section className="section-padding px-5 md:px-8 border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-2xl border border-white/[0.06] bg-[#0d0d0d] p-10 md:p-16 text-center">
          <h2 className="cvh-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Ready to ship?
          </h2>
          <p className="text-white/45 text-base md:text-lg max-w-lg mx-auto mb-8 leading-relaxed">
            No gatekeeping. No fake guru culture. Just developers building open-source
            software and helping each other get better.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://discord.gg/3xKFvKhuGR"
              target="_blank"
              rel="noopener noreferrer"
              className="cvh-btn-primary h-12 px-8 text-base group"
            >
              Join Discord
              <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" />
            </a>
            <Link
              href="/projects"
              className="cvh-btn-secondary h-12 px-8 text-base"
            >
              Browse projects
            </Link>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-white/30">
            <span>No application required</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>All skill levels welcome</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>Active 24/7</span>
          </div>
        </div>
      </div>
    </section>
  );
}
