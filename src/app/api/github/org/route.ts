import { NextResponse } from "next/server";
import { getOrgProfile, getRepos } from "@/lib/github";
import { getCached, setCache } from "@/lib/github-storage";
import { logger } from "@/lib/appeal-logger";

export const revalidate = 600;

export async function GET() {
  try {
    const [org, repos] = await Promise.all([getOrgProfile(), getRepos()]);
    const totalStars = repos.reduce((sum, r) => sum + r.stargazers_count, 0);
    const totalForks = repos.reduce((sum, r) => sum + r.forks_count, 0);
    const languages = repos.reduce(
      (acc, r) => {
        if (r.language) acc[r.language] = (acc[r.language] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );

    const data = { ...org, totalStars, totalForks, languages, repoCount: repos.length };
    setCache("org", data);
    return NextResponse.json(data, {
      headers: { "Cache-Control": "public, max-age=600, s-maxage=600" },
    });
  } catch {
    const cached = getCached<Record<string, unknown>>("org");
    if (cached) {
      logger.info("Serving stale org data from cache");
      return NextResponse.json(cached, {
        headers: { "Cache-Control": "public, max-age=60, s-maxage=60" },
      });
    }
    return NextResponse.json({ error: "Failed to fetch org data" }, { status: 500 });
  }
}
