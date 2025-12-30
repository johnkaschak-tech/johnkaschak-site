import Link from "next/link";
import { getAll } from "@/lib/content";

export const metadata = { title: "Blog" };

export default function BlogPage() {
  const posts = getAll("blog");

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
        <p className="text-black/70 dark:text-white/70">
          Frameworks and practical notes on deals, underwriting, and execution.
        </p>
      </header>

      <div className="space-y-3">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="block rounded-3xl border border-black/10 bg-black/[0.03] p-5 hover:bg-black/[0.05]
                       dark:border-white/10 dark:bg-white/[0.06] dark:hover:bg-white/[0.09]"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="text-base font-semibold">{p.title}</div>
              <div className="text-xs text-black/60 dark:text-white/60">{p.date}</div>
            </div>
            <p className="mt-2 text-sm text-black/70 dark:text-white/70">{p.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
