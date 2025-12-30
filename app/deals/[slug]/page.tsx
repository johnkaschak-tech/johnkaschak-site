import { getBySlug, getSlugs } from "@/lib/content";

export async function generateStaticParams() {
  return getSlugs("deals").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const deal = await getBySlug("deals", params.slug);
  return { title: deal.title, description: deal.excerpt };
}

export default async function DealDetail({ params }: { params: { slug: string } }) {
  const deal = await getBySlug("deals", params.slug);

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <div className="text-sm text-black/60 dark:text-white/60">{deal.category}</div>
        <h1 className="text-3xl font-semibold tracking-tight">{deal.title}</h1>
        <p className="text-black/70 dark:text-white/70">{deal.excerpt}</p>

        <div className="flex flex-wrap gap-2 pt-2 text-xs text-black/60 dark:text-white/60">
          <span className="rounded-full border border-black/10 px-3 py-1 dark:border-white/10">{deal.location}</span>
          <span className="rounded-full border border-black/10 px-3 py-1 dark:border-white/10">{deal.status}</span>
          <span className="rounded-full border border-black/10 px-3 py-1 dark:border-white/10">Role: {deal.role}</span>
        </div>
      </header>

      <div
        className="prose max-w-none dark:prose-invert prose-p:leading-relaxed"
        dangerouslySetInnerHTML={{ __html: deal.contentHtml }}
      />
    </div>
  );
}
