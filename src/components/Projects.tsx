"use client";

import { useEffect, useState } from "react";
import ShinyText from "@/components/ShinyText";
import Link from "next/link";
import { ArrowRight, Star, GitFork } from "lucide-react";

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
  if (!lang) return "#52525b";
  return languageColors[lang] || "#06b6d4";
}

const FallbackRepos: Repo[] = [
  {
    id: 1,
    name: "CodeVerseLinuxDistro",
    description: "A Linux distribution maintained by the community.",
    html_url: "https://github.com/TheCodeVerseHub/CodeVerseLinuxDistro",
    language: "CSS",
    stargazers_count: 10,
    forks_count: 13,
  },
  {
    id: 2,
    name: "Eigen-Bot",
    description: "A utility Discord bot built by CVH members.",
    html_url: "https://github.com/TheCodeVerseHub/Eigen-Bot",
    language: "Python",
    stargazers_count: 13,
    forks_count: 14,
  },
  {
    id: 3,
    name: "Codeversehub-Website",
    description: "The official CodeVerse Hub website.",
    html_url: "https://github.com/TheCodeVerseHub/Codeversehub-Website",
    language: "TypeScript",
    stargazers_count: 8,
    forks_count: 3,
  },
  {
    id: 4,
    name: "Miku",
    description: "A Discord bot with leveling, reaction roles, and utilities.",
    html_url: "https://github.com/TheCodeVerseHub/Miku",
    language: "Python",
    stargazers_count: 3,
    forks_count: 7,
  },
  {
    id: 5,
    name: "EclipseLinux",
    description: "A Void-based Linux distribution.",
    html_url: "https://github.com/TheCodeVerseHub/EclipseLinux",
    language: "Lua",
    stargazers_count: 17,
    forks_count: 1,
  },
];

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>(FallbackRepos);

  useEffect(() => {
    fetch("/api/github/repos")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data && Array.isArray(data)) {
          setRepos(
            data
              .filter((r: Repo) => !r.name.includes("."))
              .sort(
                (a: Repo, b: Repo) => b.stargazers_count - a.stargazers_count
              )
              .slice(0, 6)
          );
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section className="section-spacing">
      <div className="section-divider mb-0" />
      <div className="section-container pt-16 md:pt-20">
        <div className="text-center mb-16">
          <span className="section-label mb-6">Open Source</span>
          <h2 className="heading-lg text-3xl sm:text-4xl md:text-5xl text-[#e4e4e7] mb-4">
            <ShinyText
              text="What we build"
              shineColor="#22d3ee"
              color="#e4e4e7"
              speed={5}
              spread={150}
              direction="left"
              yoyo={true}
            />
          </h2>
          <p className="text-[#a1a1aa] text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Every project accepts contributions. Pick one, open a PR.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto mb-12">
          {repos.slice(0, 6).map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-5 group"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: langColor(repo.language) }}
                />
                <span className="font-mono text-[0.6875rem] text-[#52525b] tracking-wider">
                  ~/{repo.name}
                </span>
              </div>
              <p className="text-[0.8125rem] text-[#a1a1aa] leading-relaxed line-clamp-2 mb-5">
                {repo.description || "No description available"}
              </p>
              <div className="flex items-center gap-4 text-[0.75rem] text-[#52525b]">
                <span className="flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5" />
                  {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1.5">
                  <GitFork className="w-3.5 h-3.5" />
                  {repo.forks_count}
                </span>
                {repo.language && (
                  <span className="ml-auto text-[0.6875rem]">{repo.language}</span>
                )}
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/projects"
            className="btn-ghost text-[0.8125rem] inline-flex items-center gap-1.5"
          >
            View all projects
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
