import { NextResponse } from "next/server";
import { getRepos, getContributors } from "@/lib/github";
import { getCached, setCache } from "@/lib/github-storage";
import { logger } from "@/lib/appeal-logger";

export const revalidate = 600;

export async function GET() {
  try {
    const repos = await getRepos();
    const enriched = await Promise.all(
      repos.map(async (repo) => {
        let contributors: { login: string; id: number; avatar_url: string; html_url: string; contributions: number }[] = [];
        try {
          contributors = await getContributors(repo.name);
        } catch {}
        return { ...repo, contributors, primaryLanguage: repo.language || "Unknown" };
      }),
    );
    setCache("repos", enriched);
    return NextResponse.json(enriched, {
      headers: { "Cache-Control": "public, max-age=600, s-maxage=600" },
    });
  } catch {
    const cached = getCached<unknown[]>("repos");
    if (cached) {
      logger.info("Serving stale repos data from cache");
      return NextResponse.json(cached, {
        headers: { "Cache-Control": "public, max-age=60, s-maxage=60" },
      });
    }
    return NextResponse.json({ error: "Failed to fetch repositories" }, { status: 500 });
  }
}
