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
    name: "Discord",
    href: "https://discord.gg/3xKFvKhuGR",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    ),
  },
  {
    name: "Matrix",
    href: "https://matrix.to/#/#the-codeverse-hub:matrix.org",
    icon: (
      <span className="font-mono text-xs font-bold tracking-tight leading-none">
        [m]
      </span>
    ),
  },
  {
    name: "Fluxer",
    href: "https://fluxer.gg/RbLwebqH",
    icon: (
      <span className="font-mono text-xs font-bold tracking-tight leading-none">
        {'{F}'}
      </span>
    ),
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
    name: "Reddit",
    href: "https://www.reddit.com/r/CodeVerseHub/",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.5 7.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm-11 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S5 11.33 5 10.5s.67-1.5 1.5-1.5zm3.5 6.5c0-1.5 1.5-3 4-3s4 1.5 4 3-1.5 3-4 3-4-1.5-4-3zm2-5.5c-2.5 0-4.5.5-5.5 1.2-.3.2-.5.5-.5.8 0 .6.5 1 1 1h10c.6 0 1-.4 1-1 0-.3-.2-.6-.5-.8-1-.7-3-1.2-5.5-1.2z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] bg-[#050505]">
      <div className="section-container py-14 md:py-18">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 group">
              <Image
                src="/logo.png"
                alt="The CodeVerse Hub"
                width={22}
                height={22}
                className="object-contain"
              />
              <span className="font-heading text-sm font-semibold text-white group-hover:text-white transition-colors duration-200">
                The CodeVerse Hub
              </span>
            </Link>
            <p className="mt-3 max-w-sm text-[0.8125rem] text-[#666666] leading-relaxed">
              A developer community that builds real open-source software.
              Discord bots, Linux distributions, developer tools, and more.
            </p>
          </div>

          {/* Link groups */}
          <div>
            <h4 className="text-[0.625rem] text-[#666666] font-semibold tracking-widest uppercase font-mono">
              Organization
            </h4>
            <ul className="mt-3.5 space-y-2.5">
              {footerLinks.organization.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[0.8125rem] text-[#666666] hover:text-[#afafaf] transition-colors duration-150"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[0.625rem] text-[#666666] font-semibold tracking-widest uppercase font-mono">
              Resources
            </h4>
            <ul className="mt-3.5 space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[0.8125rem] text-[#666666] hover:text-[#afafaf] transition-colors duration-150"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-[0.625rem] text-[#666666] font-semibold tracking-widest uppercase font-mono">
                Community
              </h4>
              <ul className="mt-3.5 space-y-2.5">
                {footerLinks.community.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[0.8125rem] text-[#666666] hover:text-[#afafaf] transition-colors duration-150"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[0.625rem] text-[#666666] font-semibold tracking-widest uppercase font-mono">
                Legal
              </h4>
              <ul className="mt-3.5 space-y-2.5">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[0.8125rem] text-[#666666] hover:text-[#afafaf] transition-colors duration-150"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-[#1a1a1a] pt-6 sm:flex-row sm:items-center">
          <p className="text-[0.75rem] text-[#666666]">
            &copy; 2026 The CodeVerse Hub. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#666666] hover:text-white transition-colors duration-150"
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
