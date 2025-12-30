import { getSlugs } from "@/lib/content";

export default function sitemap() {
  const base = "https://example.com"; // TODO update after deploy

  const blog = getSlugs("blog").map((slug) => ({ url: `${base}/blog/${slug}` }));
  const deals = getSlugs("deals").map((slug) => ({ url: `${base}/deals/${slug}` }));

  return [
    { url: `${base}/` },
    { url: `${base}/about` },
    { url: `${base}/deals` },
    { url: `${base}/blog` },
    { url: `${base}/contact` },
    ...blog,
    ...deals,
  ];
}
