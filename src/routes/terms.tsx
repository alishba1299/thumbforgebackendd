import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — ThumbForge" },
      { name: "description", content: "The terms that govern your use of ThumbForge." },
      { property: "og:title", content: "Terms of Service — ThumbForge" },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <PageShell>
      <PageHeader eyebrow="Legal" title="Terms of Service" description="Last updated: May 2026" />
      <section className="mx-auto max-w-3xl px-4 pb-16">
        <div className="glass space-y-6 rounded-2xl p-8 text-sm leading-relaxed text-muted-foreground">
          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">1. Acceptance</h2>
            <p>By using ThumbForge you agree to these terms. If you don't agree, please don't use the service.</p>
          </div>
          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">2. Use of the service</h2>
            <p>ThumbForge is provided as-is for personal and commercial use. You own the thumbnails you generate.</p>
          </div>
          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">3. Prohibited content</h2>
            <p>Don't use ThumbForge to create content that is illegal, defamatory, harmful, or infringes on others' rights.</p>
          </div>
          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">4. Intellectual property</h2>
            <p>The ThumbForge software, brand, and website content are our intellectual property. Generated thumbnails are yours.</p>
          </div>
          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">5. Warranty & liability</h2>
            <p>ThumbForge is provided "as is" without warranties of any kind. We're not liable for damages arising from use of the service.</p>
          </div>
          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">6. Changes</h2>
            <p>We may update these terms. Continued use of ThumbForge after changes constitutes acceptance.</p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
