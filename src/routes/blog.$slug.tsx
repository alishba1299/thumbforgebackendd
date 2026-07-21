import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { posts } from "@/lib/posts";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Post not found" }, { name: "robots", content: "noindex" }] };
    return {
      meta: [
        { title: `${loaderData.title} — ThumbForge Blog` },
        { name: "description", content: loaderData.description },
        { property: "og:title", content: loaderData.title },
        { property: "og:description", content: loaderData.description },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: PostPage,
  notFoundComponent: () => (
    <PageShell>
      <div className="mx-auto max-w-2xl px-4 py-24 text-center">
        <h1 className="text-3xl font-bold">Post not found</h1>
        <Link to="/blog" className="mt-4 inline-block text-primary hover:underline">← Back to blog</Link>
      </div>
    </PageShell>
  ),
});

function PostPage() {
  const post = Route.useLoaderData();
  return (
    <PageShell>
      <article className="mx-auto max-w-3xl px-4 pt-14 pb-16">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Back to blog
        </Link>
        <div className="mt-6 flex items-center gap-3 text-xs text-muted-foreground">
          <span className="rounded-full glass px-2 py-0.5">{post.category}</span>
          <span>{post.date}</span>
          <span>· {post.readTime}</span>
        </div>
        <h1 className="mt-4 text-4xl font-bold md:text-5xl">
          <span className="gradient-text">{post.title}</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">{post.description}</p>

        <div className="glass mt-10 space-y-5 rounded-2xl p-6 md:p-8">
          {post.content.split("\n\n").map((block: string, i: number) => {
            if (block.startsWith("## ")) {
              return <h2 key={i} className="mt-4 text-2xl font-bold">{block.replace("## ", "")}</h2>;
            }
            if (/^\d+\. /m.test(block) || block.startsWith("- ")) {
              const items = block.split("\n").map((l: string) => l.replace(/^(\d+\.\s|-\s)/, ""));
              return (
                <ul key={i} className="list-disc space-y-1 pl-5 text-muted-foreground">
                  {items.map((it: string, j: number) => <li key={j}>{it}</li>)}
                </ul>
              );
            }
            return <p key={i} className="leading-relaxed text-muted-foreground">{block}</p>;
          })}
        </div>
      </article>
    </PageShell>
  );
}
