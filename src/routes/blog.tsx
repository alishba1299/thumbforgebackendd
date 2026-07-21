import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { posts } from "@/lib/posts";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — ThumbForge" },
      { name: "description", content: "Tips, guides, and best practices for creating YouTube thumbnails that convert." },
      { property: "og:title", content: "ThumbForge Blog" },
      { property: "og:description", content: "Tips and guides for high-performing YouTube thumbnails." },
    ],
  }),
  component: Blog,
});

function Blog() {
  return (
    <PageShell>
      <PageHeader eyebrow="Blog" title="Creator insights & guides" description="Actionable tips to help your videos get more clicks." />
      <section className="mx-auto max-w-4xl px-4 pb-16">
        <div className="grid gap-5">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="glass group rounded-2xl p-6 transition hover:-translate-y-0.5 hover:bg-white/[0.08]"
            >
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="rounded-full glass px-2 py-0.5">{p.category}</span>
                <span>{p.date}</span>
                <span>· {p.readTime}</span>
              </div>
              <h2 className="mt-3 text-xl font-bold md:text-2xl">{p.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm text-primary group-hover:gap-2 transition-all">
                Read post <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
