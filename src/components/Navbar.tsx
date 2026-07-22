"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/resources", label: "Resources" },
  { href: "/pages", label: "Docs" },
];

const moreLinks = [
  { href: "/team", label: "Team" },
  { href: "/contributing", label: "Contributing" },
  { href: "/pages/faq", label: "FAQ" },
  { href: "/pages/rules", label: "Rules" },
  { href: "/ban-appeal", label: "Ban Appeal" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
    setMoreOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-[960px] border border-[#27272A] bg-[#09090B]">
      <div className="flex h-12 w-full items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/logo.png"
            alt="The Codeverse Hub"
            width={20}
            height={20}
            className="rounded object-contain"
            priority
          />
          <span className="hidden sm:block text-xs font-medium tracking-tight text-white/70">
            CodeVerse Hub
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`flex items-center h-8 px-3 text-xs font-medium transition-colors duration-150 ${
                  isActive
                    ? "text-white"
                    : "text-white/50 hover:text-white/80"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          {/* More dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setMoreOpen((v) => !v)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                  setMoreOpen(false);
                }
              }}
              className={`flex items-center h-8 gap-1 px-3 text-xs font-medium transition-colors duration-150 ${
                moreOpen ? "text-white" : "text-white/50 hover:text-white/80"
              }`}
            >
              More
              <ChevronDown
                className={`w-2.5 h-2.5 transition-transform duration-150 ${
                  moreOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {moreOpen && (
              <div className="absolute right-0 top-full mt-0.5 w-40 border border-[#27272A] bg-[#09090B] py-0.5 z-[60]">
                {moreLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block px-3.5 py-1.5 text-xs text-white/50 hover:text-white hover:bg-white/[0.03] transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="https://discord.gg/3xKFvKhuGR"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-8 px-3.5 text-xs font-semibold text-white bg-[#0891b2] hover:bg-[#0e7490] transition-colors duration-150"
          >
            Join Discord
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden flex flex-col items-center justify-center w-7 h-7 gap-[3px]"
          aria-label="Toggle menu"
        >
          <span
            className={`w-4 h-[1.5px] bg-white/60 transition-all duration-200 ${
              mobileOpen ? "rotate-45 translate-y-[3.25px]" : ""
            }`}
          />
          <span
            className={`w-4 h-[1.5px] bg-white/60 transition-all duration-200 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-4 h-[1.5px] bg-white/60 transition-all duration-200 ${
              mobileOpen ? "-rotate-45 -translate-y-[3.25px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-200 ease-in-out ${
          mobileOpen ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <div className="border-t border-[#27272A] px-4 pb-3 pt-1.5 space-y-0.5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`block w-full px-3 py-2 text-xs font-medium transition-colors duration-150 ${
                  isActive
                    ? "text-white bg-white/[0.04]"
                    : "text-white/60 hover:text-white hover:bg-white/[0.03]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-2 pb-1 px-3 text-[10px] font-medium tracking-wider text-white/25 uppercase">
            More
          </div>
          {moreLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block w-full px-3 py-2 text-xs font-medium text-white/45 hover:text-white hover:bg-white/[0.03] transition-colors duration-150"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <a
              href="https://discord.gg/3xKFvKhuGR"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-2 bg-[#0891b2] text-xs font-semibold text-white hover:bg-[#0e7490] transition-colors duration-150"
            >
              Join Discord
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
