"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Star, GitFork, ExternalLink } from "lucide-react";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
}

const languageColors: Record<string, string> = {
  Python: "#3572A5",
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  Rust: "#DEA584",
  Go: "#00ADD8",
  CSS: "#563D7C",
  Lua: "#000080",
};

function langColor(lang: string | null): string {
  if (!lang) return "#666";
  return languageColors[lang] || "#06b6d4";
}

const FallbackRepos: Repo[] = [
  { id: 1, name: "CodeVerseLinuxDistro", description: "The Linux distro of the Codeverse hub", html_url: "https://github.com/TheCodeVerseHub/CodeVerseLinuxDistro", language: "CSS", stargazers_count: 10, forks_count: 13 },
  { id: 2, name: "Eigen-Bot", description: "A utility bot built by CVH members", html_url: "https://github.com/TheCodeVerseHub/Eigen-Bot", language: "Python", stargazers_count: 13, forks_count: 14 },
  { id: 3, name: "Codeversehub-Website", description: "The Codeverse Hub website", html_url: "https://github.com/TheCodeVerseHub/Codeversehub-Website", language: "TypeScript", stargazers_count: 8, forks_count: 3 },
  { id: 4, name: "Miku", description: "A Discord bot with leveling, reaction roles, and utilities", html_url: "https://github.com/TheCodeVerseHub/Miku", language: "Python", stargazers_count: 3, forks_count: 7 },
  { id: 5, name: "EclipseLinux", description: "A void-based Linux distro", html_url: "https://github.com/TheCodeVerseHub/EclipseLinux", language: "Lua", stargazers_count: 17, forks_count: 1 },
];

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>(FallbackRepos);

  useEffect(() => {
    fetch("/api/github/repos")
      .then((res) => res.ok ? res.json() : null)
      .then((data) => {
        if (data && Array.isArray(data)) {
          setRepos(
            data
              .filter((r: Repo) => !r.name.includes("."))
              .sort((a: Repo, b: Repo) => b.stargazers_count - a.stargazers_count)
              .slice(0, 6),
          );
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section className="section-padding px-5 md:px-8 border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="cvh-label mb-5">Open Source</span>
          <h2 className="cvh-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
            What we build
          </h2>
          <p className="text-white/40 text-base md:text-lg max-w-xl mx-auto">
            Every project here accepts contributions. Pick one, open a PR.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto mb-10">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="cvh-card p-5 group"
            >
              <div className="flex items-center gap-2.5 mb-3">
                {repo.language && (
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: langColor(repo.language) }} />
                )}
                <h3 className="font-semibold text-white text-sm truncate group-hover:text-[#22d3ee] transition-colors duration-150">
                  {repo.name}
                </h3>
                <ExternalLink className="w-3.5 h-3.5 text-white/15 group-hover:text-[#22d3ee] ml-auto shrink-0 transition-colors duration-150" />
              </div>
              <p className="text-white/40 text-xs leading-relaxed line-clamp-2 mb-4">
                {repo.description || "No description"}
              </p>
              <div className="flex items-center gap-4 text-xs text-white/40">
                <span className="flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5" />
                  {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1.5">
                  <GitFork className="w-3.5 h-3.5" />
                  {repo.forks_count}
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/projects"
            className="cvh-btn-ghost text-sm"
          >
            View all projects
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
