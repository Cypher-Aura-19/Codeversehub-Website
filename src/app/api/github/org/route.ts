import { NextResponse } from "next/server";
import { getOrgProfile, getRepos } from "@/lib/github";

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

    return NextResponse.json(
      { ...org, totalStars, totalForks, languages, repoCount: repos.length },
      { headers: { "Cache-Control": "public, max-age=600, s-maxage=600" } },
    );
  } catch {
    return NextResponse.json({ error: "Failed to fetch org data" }, { status: 500 });
  }
}
