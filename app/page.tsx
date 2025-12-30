import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-14">
      <section className="grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:items-start">
        <div className="space-y-5">
          <p className="text-sm tracking-wide text-black/60 dark:text-white/60">
            Real Estate • Acquisition • Entitlements • Texas Growth Markets
          </p>

          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            John Kaschak
          </h1>

          <p className="max-w-[70ch] text-lg text-black/70 dark:text-white/70">
            I lead acquisition and entitlements strategy—tracking growth patterns in Central Texas,
            structuring deals, and executing through approvals, infrastructure, and timelines. I also write
            about the operator’s playbook: underwriting, leverage, and execution risk.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link className="rounded-2xl border border-black/10 bg-black px-4 py-2 text-sm text-white hover:bg-black/90 dark:border-white/10 dark:bg-white dark:text-black dark:hover:bg-white/90" href="/contact">
              Contact
            </Link>
            <Link className="rounded-2xl border border-black/10 bg-black/[0.04] px-4 py-2 text-sm hover:bg-black/[0.06] dark:border-white/10 dark:bg-white/[0.06] dark:hover:bg-white/[0.09]" href="/deals">
              View deals
            </Link>
            <Link className="rounded-2xl border border-black/10 bg-black/[0.04] px-4 py-2 text-sm hover:bg-black/[0.06] dark:border-white/10 dark:bg-white/[0.06] dark:hover:bg-white/[0.09]" href="/blog">
              Read the blog
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-black/10 bg-black/[0.03] p-5 shadow-[0_18px_70px_rgba(0,0,0,0.10)] dark:border-white/10 dark:bg-white/[0.06] dark:shadow-[0_18px_70px_rgba(0,0,0,0.45)]">
          <div className="text-sm font-semibold">Now</div>
          <p className="mt-2 text-sm text-black/70 dark:text-white/70">
            Building conviction around land + housing demand, entitlement timelines, utilities,
            and capital structure—especially across Central Texas growth corridors.
          </p>
          <div className="mt-4 text-xs text-black/60 dark:text-white/60">
            Open to: partnerships & opportunities
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          { title: "Deals", desc: "Select projects and case studies with thesis, role, timeline, and outcomes.", href: "/deals" },
          { title: "Blog", desc: "Frameworks and practical notes on underwriting, leverage, and execution risk.", href: "/blog" },
          { title: "About", desc: "Background, focus, and how I work with partners.", href: "/about" },
        ].map((c) => (
          <Link
            key={c.title}
            href={c.href}
            className="rounded-3xl border border-black/10 bg-black/[0.03] p-5 hover:bg-black/[0.05] dark:border-white/10 dark:bg-white/[0.06] dark:hover:bg-white/[0.09]"
          >
            <div className="text-base font-semibold">{c.title}</div>
            <p className="mt-2 text-sm text-black/70 dark:text-white/70">{c.desc}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
