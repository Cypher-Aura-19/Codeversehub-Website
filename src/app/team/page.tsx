import { getRepos, getContributors } from "@/lib/github";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const revalidate = 600;

export const metadata: Metadata = {
  title: "Team & Contributors | The Codeverse Hub",
  description: "Meet the maintainers and contributors building open-source projects at The Codeverse Hub.",
  alternates: { canonical: "/team" },
};

interface ContributorData {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  contributions: number;
  repos: string[];
}

export default async function TeamPage() {
  let topContributors: ContributorData[] = [];

  try {
    const repos = await getRepos();
    const contribMap = new Map<number, ContributorData>();

    await Promise.all(
      repos.map(async (repo) => {
        try {
          const contribs = await getContributors(repo.name);
          for (const c of contribs) {
            if (c.login === "youngcoder45" || c.login === "AdityaKodez") continue;
            const existing = contribMap.get(c.id);
            if (existing) {
              existing.contributions += c.contributions;
              existing.repos.push(repo.name);
            } else {
              contribMap.set(c.id, { ...c, repos: [repo.name] });
            }
          }
        } catch {}
      }),
    );

    topContributors = Array.from(contribMap.values())
      .sort((a, b) => b.contributions - a.contributions)
      .slice(0, 30);
  } catch {}

  const maintainers = [
    { login: "youngcoder45", role: "Founder & Lead Maintainer" },
    { login: "AdityaKodez", role: "Core Maintainer" },
    { login: "1Frodox", role: "Maintainer" },
  ];

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto px-4 py-16 w-full">
        <Link href="/" className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 mb-8 transition-colors text-sm">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <header className="mb-12">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-violet-300/70 mb-3">People</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Team & Contributors</h1>
          <p className="text-white/50 text-base md:text-lg max-w-2xl">
            Our projects are built by a distributed team of maintainers and community contributors.
            Everyone is welcome to join.
          </p>
        </header>

        {/* Maintainers */}
        <section className="mb-16">
          <h2 className="text-xl font-bold text-white mb-6">Maintainers</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {maintainers.map((m) => (
              <a
                key={m.login}
                href={`https://github.com/${m.login}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-violet-500/30 transition-all duration-300 group"
              >
                <img
                  src={`https://avatars.githubusercontent.com/${m.login}?s=80`}
                  alt={m.login}
                  className="w-14 h-14 rounded-full"
                />
                <div className="min-w-0">
                  <p className="text-white font-semibold group-hover:text-violet-300 transition-colors truncate">
                    {m.login}
                  </p>
                  <p className="text-white/40 text-sm">{m.role}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-white/30 group-hover:text-violet-400 ml-auto shrink-0 transition-colors" />
              </a>
            ))}
          </div>
        </section>

        {/* Contributors */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Top Contributors</h2>
            <a
              href="https://github.com/TheCodeVerseHub"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 transition-colors"
            >
              <Github className="w-4 h-4" />
              View all on GitHub
            </a>
          </div>

          {topContributors.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {topContributors.map((c) => (
                <a
                  key={c.id}
                  href={c.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-violet-500/20 transition-all duration-300 group"
                >
                  <img
                    src={`${c.avatar_url}&s=48`}
                    alt={c.login}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-white text-sm font-medium group-hover:text-violet-300 transition-colors truncate">
                      {c.login}
                    </p>
                    <p className="text-white/30 text-xs">{c.contributions} contributions</p>
                  </div>
                  <ExternalLink className="w-3 h-3 text-white/20 group-hover:text-violet-400 shrink-0 transition-colors" />
                </a>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center">
              <p className="text-white/40">Contributor data will load from GitHub automatically.</p>
            </div>
          )}

          <div className="mt-8 text-center">
            <Link
              href="/contributing"
              className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors"
            >
              Learn how to contribute →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
