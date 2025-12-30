import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

type ContentType = "blog" | "deals";

const CONTENT_ROOT = path.join(process.cwd(), "content");

function getDir(type: ContentType) {
  return path.join(CONTENT_ROOT, type);
}

export function getSlugs(type: ContentType) {
  return fs
    .readdirSync(getDir(type))
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAll(type: ContentType) {
  const dir = getDir(type);

  const items = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const fullPath = path.join(dir, filename);
      const file = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(file);

      const slug = filename.replace(/\.md$/, "");
      return {
        slug,
        ...(data as Record<string, any>),
      };
    })
    .sort((a, b) => {
      const da = new Date(a.date ?? "1970-01-01").getTime();
      const db = new Date(b.date ?? "1970-01-01").getTime();
      return db - da;
    });

  return items;
}

export async function getBySlug(type: ContentType, slug: string) {
  const fullPath = path.join(getDir(type), `${slug}.md`);
  const file = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(file);

  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  return {
    slug,
    ...(data as Record<string, any>),
    contentHtml,
  };
}
