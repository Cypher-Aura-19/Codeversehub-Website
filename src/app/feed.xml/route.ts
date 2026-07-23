import { getRepos } from "@/lib/github";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://thecodeversehub.tech";

export const revalidate = 3600;

export async function GET() {
  try {
    const repos = await getRepos();

    const items = repos
      .filter((r) => !r.archived)
      .sort(
        (a, b) =>
          new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime(),
      )
      .slice(0, 20)
      .map(
        (repo) => `
    <item>
      <title>${escapeXml(repo.name)}</title>
      <link>${repo.html_url}</link>
      <description>${escapeXml(repo.description || "No description")}</description>
      <pubDate>${new Date(repo.pushed_at).toUTCString()}</pubDate>
      <guid>${repo.html_url}</guid>
      <category>${escapeXml(repo.language || "Other")}</category>
    </item>`,
      )
      .join("");

    const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>The Codeverse Hub Latest Updates</title>
    <link>${siteUrl}</link>
    <description>Open-source project updates from The Codeverse Hub</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

    return new Response(feed, {
      headers: {
        "Content-Type": "application/rss+xml; charset=utf-8",
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    });
  } catch {
    return new Response(
      "<rss version='2.0'><channel><title>Error</title></channel></rss>",
      {
        headers: { "Content-Type": "application/rss+xml" },
        status: 500,
      },
    );
  }
}

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
