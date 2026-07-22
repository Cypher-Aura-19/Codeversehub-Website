"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
  { href: "/contributing", label: "Contribution Guide" },
  { href: "/pages/code-of-conduct", label: "Code of Conduct" },
  { href: "/pages/faq", label: "FAQ" },
  { href: "/pages/rules", label: "Server Rules" },
  { href: "/pages/how-to-ask", label: "How to Ask for Help" },
  { href: "/pages/moderation-guide", label: "Moderation Guide" },
  { href: "/pages/privacy-policy", label: "Privacy Policy" },
  { href: "/ban-appeal", label: "Ban Appeal" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0a0a0a] border-b border-white/[0.06]">
      <div className="flex items-center justify-between w-full h-14 px-4 md:px-6 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          <Image
            src="/logo.png"
            alt="The Codeverse Hub"
            width={28}
            height={28}
            className="rounded-md object-contain"
            priority
          />
          <span className="text-white font-semibold text-sm tracking-tight hidden sm:block">
            CodeVerse Hub
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="flex items-center h-10 px-3.5 text-sm font-medium text-white/70 hover:text-white rounded-md transition-colors duration-150"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="relative">
            <button
              type="button"
              onClick={() => setIsMoreOpen((prev) => !prev)}
              className="flex items-center h-10 gap-1 px-3.5 text-sm font-medium text-white/70 hover:text-white rounded-md transition-colors duration-150"
            >
              More
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-150 ${isMoreOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isMoreOpen && (
              <div className="absolute right-0 top-full mt-1.5 w-52 rounded-lg border border-white/[0.08] bg-[#0d0d0d] shadow-xl py-1.5 z-[60]">
                {moreLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block px-4 py-1.5 text-sm text-white/60 hover:text-white hover:bg-white/[0.04] transition-colors duration-150"
                    onClick={() => setIsMoreOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </li>
          <li className="ml-2">
            <a
              href="https://discord.gg/3xKFvKhuGR"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center h-9 px-4 text-sm font-bold text-white bg-[#7c3aed] hover:bg-[#6d28d9] rounded-md transition-colors duration-150"
            >
              Join Discord
            </a>
          </li>
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1"
          aria-label="Toggle menu"
        >
          <span
            className={`w-5 h-[1.5px] bg-white transition-all duration-200 ${
              isOpen ? "rotate-45 translate-y-[3.5px]" : ""
            }`}
          />
          <span
            className={`w-5 h-[1.5px] bg-white transition-all duration-200 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-5 h-[1.5px] bg-white transition-all duration-200 ${
              isOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-200 ease-in-out ${
          isOpen ? "max-h-[700px]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col bg-[#0a0a0a] border-t border-white/[0.06]">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block w-full text-white/80 text-sm font-medium px-5 py-3.5 border-b border-white/[0.04] hover:bg-white/[0.03] transition-colors duration-150"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-3 pb-1 px-5 text-[11px] font-semibold tracking-widest text-white/30 uppercase">
            More
          </li>
          {moreLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block w-full text-white/60 text-sm px-5 py-3 border-b border-white/[0.04] hover:bg-white/[0.03] transition-colors duration-150"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="px-5 py-3">
            <a
              href="https://discord.gg/3xKFvKhuGR"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center text-sm font-bold text-white bg-[#7c3aed] hover:bg-[#6d28d9] rounded-md px-4 py-3 transition-colors duration-150"
            >
              Join Discord
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
