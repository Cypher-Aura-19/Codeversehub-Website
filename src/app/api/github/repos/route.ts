import { NextResponse } from "next/server";
import { getRepos, getContributors, type GitHubRepoWithContributors } from "@/lib/github";

export const revalidate = 600;

export async function GET() {
  try {
    const repos = await getRepos();
    const enriched: GitHubRepoWithContributors[] = await Promise.all(
      repos.map(async (repo) => {
        let contributors: { login: string; id: number; avatar_url: string; html_url: string; contributions: number }[] = [];
        try {
          contributors = await getContributors(repo.name);
        } catch {}
        return { ...repo, contributors, primaryLanguage: repo.language || "Unknown" };
      }),
    );
    return NextResponse.json(enriched, {
      headers: { "Cache-Control": "public, max-age=600, s-maxage=600" },
    });
  } catch {
    return NextResponse.json({ error: "Failed to fetch repositories" }, { status: 500 });
  }
}
