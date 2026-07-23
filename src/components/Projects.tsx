"use client";

import { useEffect, useState } from "react";
import ShinyText from "@/components/ShinyText";
import Link from "next/link";
import { ArrowRight, Star, GitFork, ExternalLink, Globe, Bot, Wrench } from "lucide-react";

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
  if (!lang) return "#666666";
  return languageColors[lang] || "#ffffff";
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

const projectCategories = [
  {
    icon: Bot,
    title: "Discord Bots",
    description:
      "Production-grade bots handling moderation, leveling, reaction roles, and utilities for thousands of users. Built with Python and modern async patterns.",
  },
  {
    icon: Globe,
    title: "Web Applications",
    description:
      "Full-stack applications using TypeScript, React, Next.js, and Node.js. From community dashboards to developer tools—real UIs, real APIs, real users.",
  },
  {
    icon: Wrench,
    title: "Developer Tooling",
    description:
      "CLI tools, libraries, and infrastructure projects that make other developers' lives easier. CI/CD pipelines, automation scripts, and shared utilities.",
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
    <section className="section-spacing" aria-labelledby="projects-heading">
      <div className="section-divider mb-0" />
      <div className="section-container pt-16 md:pt-20">
        <div className="text-center mb-14">
          <span className="section-label mb-6">Projects</span>
          <h2
            id="projects-heading"
            className="heading-lg text-3xl sm:text-4xl md:text-5xl mb-4 mt-5"
          >
            <ShinyText
              text="What we build"
              shineColor="#ffffff"
              color="#ffffff"
              speed={5}
              spread={150}
              direction="left"
              yoyo={true}
            />
          </h2>
        </div>

        {/* Project categories description */}
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-base md:text-lg text-[#666666] leading-relaxed text-center mb-10">
            Our projects span across multiple domains of software development.
            Each repository is open for contribution, with active maintainers
            ready to review your code and guide your first pull request.
          </p>

          <div className="grid gap-4 sm:grid-cols-3 max-w-3xl mx-auto mb-12">
            {projectCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.title}
                  className="card p-6 group text-center"
                >
                  <div className="w-10 h-10 flex items-center justify-center mx-auto mb-4 border border-[#1a1a1a] bg-[rgba(255,255,255,0.04)] transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-5 h-5 text-[#22d3ee]" />
                  </div>
                  <h3 className="font-heading text-sm font-semibold text-white mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-[0.75rem] text-[#666666] leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Repo cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto mb-12">
          {repos.slice(0, 6).map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-5 group flex flex-col"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: langColor(repo.language) }}
                  />
                  <span className="font-mono text-[0.6875rem] text-[#666666] tracking-wider">
                    ~/{repo.name}
                  </span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#666666] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </div>
              <p className="text-[0.8125rem] text-[#666666] leading-relaxed line-clamp-2 mb-5 flex-1">
                {repo.description || "No description available"}
              </p>
              <div className="flex items-center gap-4 text-[0.75rem] text-[#666666] pt-3 border-t border-[#1a1a1a]">
                <span className="flex items-center gap-1.5 hover:text-[#ffffff] transition-colors">
                  <Star className="w-3.5 h-3.5" />
                  {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1.5 hover:text-[#ffffff] transition-colors">
                  <GitFork className="w-3.5 h-3.5" />
                  {repo.forks_count}
                </span>
                {repo.language && (
                  <span className="ml-auto text-[0.6875rem] font-mono">{repo.language}</span>
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
