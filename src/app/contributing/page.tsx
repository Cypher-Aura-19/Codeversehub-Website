import Link from "next/link";
import { ArrowLeft, GitFork, GitPullRequest, MessageSquare, Code2, Users, Search, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contribution Guide | The Codeverse Hub",
  description: "Learn how to contribute to open-source projects at The Codeverse Hub — from first PR to becoming a maintainer.",
  alternates: { canonical: "/contributing" },
};

const steps = [
  {
    icon: Search,
    title: "Find a Project",
    description: "Browse our repositories and find one that matches your interests and skill level. Look for issues labeled good first issue or help wanted.",
  },
  {
    icon: GitFork,
    title: "Fork & Clone",
    description: "Fork the repository, clone it locally, and set up the development environment following the project's README.",
  },
  {
    icon: Code2,
    title: "Make Changes",
    description: "Write code, fix bugs, improve documentation, or add tests. Follow the project's coding standards and commit message conventions.",
  },
  {
    icon: GitPullRequest,
    title: "Submit a PR",
    description: "Push your changes and open a pull request. Provide a clear description of what you changed and why.",
  },
  {
    icon: MessageSquare,
    title: "Review & Iterate",
    description: "Engage with maintainers during code review. Address feedback, make improvements, and learn from the process.",
  },
  {
    icon: Users,
    title: "Become a Contributor",
    description: "Once your PR is merged, you're officially a contributor! Stay involved and take on more complex issues over time.",
  },
];

const tips = [
  {
    title: "Start Small",
    description: "Begin with documentation fixes, typo corrections, or issues labeled 'good first issue'. Small wins build confidence.",
  },
  {
    title: "Read the Contributing Guide",
    description: "Every project has a CONTRIBUTING.md. Read it before making changes to understand the workflow and standards.",
  },
  {
    title: "Ask Questions",
    description: "If you're stuck, ask in the issue thread or join our Discord. Maintainers and community members are happy to help.",
  },
  {
    title: "Be Patient",
    description: "Maintainers are often volunteers. It may take time for your PR to be reviewed. Respect the process.",
  },
];

export default function ContributingPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto px-4 py-16 w-full">
        <Link href="/" className="inline-flex items-center gap-2 text-[#22d3ee] hover:text-[#67e8f9] mb-8 transition-colors duration-150 text-sm">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <header className="mb-12">
          <p className="cvh-label mb-4">Get Involved</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Contribution Guide</h1>
          <p className="text-white/50 text-base md:text-lg max-w-2xl">
            We welcome contributions from developers of all experience levels. Here is how you can get started contributing to The Codeverse Hub open-source projects.
          </p>
        </header>

        {/* Steps */}
        <section className="mb-16">
          <h2 className="text-xl font-bold text-white mb-6 tracking-tight">How to Contribute</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="cvh-card p-6 group relative"
                >
                  <span className="absolute top-4 right-4 text-3xl font-bold text-white/[0.04] select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-[#06b6d4]/10 text-[#06b6d4] flex items-center justify-center mb-3.5 transition-transform duration-150 group-hover:scale-105">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-white font-semibold mb-1.5">{step.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Tips */}
        <section className="mb-16">
          <h2 className="text-xl font-bold text-white mb-6 tracking-tight">Tips for New Contributors</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {tips.map((tip) => (
              <div key={tip.title} className="cvh-card p-6">
                <div className="w-0.5 h-8 rounded-full bg-[#06b6d4] mb-4" />
                <h3 className="text-white font-semibold mb-1.5">{tip.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{tip.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">Ready to Contribute?</h2>
          <p className="text-white/50 max-w-xl mx-auto mb-6">
            Browse our open issues, find something that interests you, and submit your first pull request.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://github.com/TheCodeVerseHub"
              target="_blank"
              rel="noopener noreferrer"
              className="cvh-btn-primary"
            >
              <ExternalLink className="w-4 h-4" />
              Browse Repositories
            </a>
            <a
              href="https://discord.gg/3xKFvKhuGR"
              target="_blank"
              rel="noopener noreferrer"
              className="cvh-btn-secondary"
            >
              Join our Discord
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
