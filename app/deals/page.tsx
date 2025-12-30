import Link from "next/link";
import { getAll } from "@/lib/content";

export const metadata = { title: "Deals" };

export default function DealsPage() {
  const deals = getAll("deals");

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Projects / Deals</h1>
        <p className="text-black/70 dark:text-white/70">
          Select projects and representative case studies.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {deals.map((d) => (
          <Link
            key={d.slug}
            href={`/deals/${d.slug}`}
            className="rounded-3xl border border-black/10 bg-black/[0.03] p-5 hover:bg-black/[0.05]
                       dark:border-white/10 dark:bg-white/[0.06] dark:hover:bg-white/[0.09]"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="text-base font-semibold">{d.title}</div>
              <span className="rounded-full border border-black/10 px-2 py-1 text-xs text-black/60 dark:border-white/10 dark:text-white/60">
                {d.category}
              </span>
            </div>
            <p className="mt-2 text-sm text-black/70 dark:text-white/70">{d.excerpt}</p>
            <div className="mt-4 text-xs text-black/60 dark:text-white/60">
              {d.location} • {d.status}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
