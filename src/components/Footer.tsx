"use client";

import Link from "next/link";
import Image from "next/image";
import { Github } from "lucide-react";

const footerLinks = {
  organization: [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Team", href: "/team" },
    { name: "Contributing", href: "/contributing" },
  ],
  resources: [
    { name: "Docs", href: "/pages" },
    { name: "FAQ", href: "/pages/faq" },
    { name: "Rules", href: "/pages/rules" },
    { name: "Resources", href: "/resources" },
  ],
  community: [
    { name: "Discord", href: "https://discord.gg/3xKFvKhuGR" },
    { name: "GitHub", href: "https://github.com/TheCodeVerseHub" },
    { name: "Email", href: "mailto:contact@thecodeversehub.tech" },
  ],
  legal: [
    { name: "Privacy", href: "/pages/privacy-policy" },
    { name: "Security", href: "/pages/security-notice" },
    { name: "Ban Appeal", href: "/ban-appeal" },
  ],
};

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/TheCodeVerseHub",
    icon: <Github className="w-4 h-4" />,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/thecodeversehub",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    name: "Fluxer",
    href: "https://fluxer.gg/RbLwebqH",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    name: "Matrix",
    href: "https://matrix.to/#/#the-codeverse-hub:matrix.org",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <rect x="2" y="2" width="20" height="20" rx="3" />
        <path d="M8 7v10M16 7v10M8 12h8" stroke="#0a0a0a" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
  {
    name: "Reddit",
    href: "https://www.reddit.com/r/CodeVerseHub/",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" />
        <circle cx="9" cy="10" r="1.5" fill="#0a0a0a" />
        <circle cx="15" cy="10" r="1.5" fill="#0a0a0a" />
        <path d="M9 14s1.5 2 3 2 3-2 3-2" stroke="#0a0a0a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-black">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="The Codeverse Hub"
                width={26}
                height={26}
                className="rounded object-contain"
              />
              <span className="text-white font-semibold text-sm tracking-tight">
                The Codeverse Hub
              </span>
            </Link>
            <p className="mt-3 max-w-sm text-white/35 text-sm leading-relaxed">
              A developer community that builds real open-source software. Discord bots,
              Linux distributions, developer tools, and more.
            </p>
            <p className="mt-5 text-white/25 text-sm">
              Built by developers, for developers.
            </p>
          </div>

          {/* Link groups */}
          <div>
            <h4 className="text-white/40 text-[11px] font-semibold tracking-widest uppercase">Organization</h4>
            <ul className="mt-3.5 space-y-2.5">
              {footerLinks.organization.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/35 text-sm hover:text-white/70 transition-colors duration-150">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white/40 text-[11px] font-semibold tracking-widest uppercase">Resources</h4>
            <ul className="mt-3.5 space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/35 text-sm hover:text-white/70 transition-colors duration-150">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-white/40 text-[11px] font-semibold tracking-widest uppercase">Community</h4>
              <ul className="mt-3.5 space-y-2.5">
                {footerLinks.community.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-white/35 text-sm hover:text-white/70 transition-colors duration-150">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white/40 text-[11px] font-semibold tracking-widest uppercase">Legal</h4>
              <ul className="mt-3.5 space-y-2.5">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-white/35 text-sm hover:text-white/70 transition-colors duration-150">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/[0.06] pt-6 sm:flex-row sm:items-center">
          <p className="text-white/25 text-sm">&copy; 2026 The Codeverse Hub.</p>
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/35 hover:text-[#22d3ee] transition-colors duration-150"
                title={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
