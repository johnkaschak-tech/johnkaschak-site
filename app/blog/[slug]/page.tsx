import { getBySlug, getSlugs } from "@/lib/content";

export async function generateStaticParams() {
  return getSlugs("blog").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getBySlug("blog", params.slug);
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getBySlug("blog", params.slug);

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <div className="text-sm text-black/60 dark:text-white/60">{post.date}</div>
        <h1 className="text-3xl font-semibold tracking-tight">{post.title}</h1>
        <p className="text-black/70 dark:text-white/70">{post.excerpt}</p>
      </header>

      <div
        className="prose max-w-none dark:prose-invert prose-p:leading-relaxed"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </div>
  );
}
