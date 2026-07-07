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
  return languageColors[lang] || "#8B5CF6";
}

const FallbackRepos: Repo[] = [
  { id: 1, name: "CodeVerseLinuxDistro", description: "The Linux distro of the Codeverse hub", html_url: "https://github.com/TheCodeVerseHub/CodeVerseLinuxDistro", language: "CSS", stargazers_count: 10, forks_count: 13 },
  { id: 2, name: "Eigen-Bot", description: "A special Utility bot made by members of The CodeVerse Hub", html_url: "https://github.com/TheCodeVerseHub/Eigen-Bot", language: "Python", stargazers_count: 13, forks_count: 14 },
  { id: 3, name: "Codeversehub-Website", description: "A website for The Codeverse Hub", html_url: "https://github.com/TheCodeVerseHub/Codeversehub-Website", language: "TypeScript", stargazers_count: 8, forks_count: 3 },
  { id: 4, name: "Miku", description: "A general-purpose Discord bot with leveling, reaction roles and utilities", html_url: "https://github.com/TheCodeVerseHub/Miku", language: "Python", stargazers_count: 3, forks_count: 7 },
  { id: 5, name: "EclipseLinux", description: "A void-based Linux distro with the dynamod init system", html_url: "https://github.com/TheCodeVerseHub/EclipseLinux", language: "Lua", stargazers_count: 17, forks_count: 1 },
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
              .slice(0, 5),
          );
        }
      })
      .catch(() => {})
;
  }, []);

  return (
    <section className="bg-black py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-violet-400 text-xs font-mono uppercase tracking-widest mb-4 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10">
            Open Source
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            Our Projects on GitHub
          </h2>
          <p className="text-white/40 text-base md:text-lg max-w-2xl mx-auto">
            We build and maintain open-source software. Every project welcomes contributions.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto mb-8">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-violet-500/30 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                {repo.language && (
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: langColor(repo.language) }}
                  />
                )}
                <h3 className="font-semibold text-white text-sm truncate group-hover:text-violet-300 transition-colors">
                  {repo.name}
                </h3>
                <ExternalLink className="w-3 h-3 text-white/30 group-hover:text-violet-400 ml-auto shrink-0 transition-colors" />
              </div>
              <p className="text-white/40 text-xs leading-relaxed line-clamp-2 mb-3">
                {repo.description || "No description"}
              </p>
              <div className="flex items-center gap-3 text-xs text-white/40">
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="w-3 h-3" />
                  {repo.forks_count}
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors font-medium"
          >
            View all projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
