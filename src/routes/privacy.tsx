import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — ThumbForge" },
      { name: "description", content: "How ThumbForge handles your data. Spoiler: we don't collect or store any of it." },
      { property: "og:title", content: "Privacy Policy — ThumbForge" },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <PageShell>
      <PageHeader eyebrow="Legal" title="Privacy Policy" description="Last updated: May 2026" />
      <section className="mx-auto max-w-3xl px-4 pb-16">
        <div className="glass space-y-6 rounded-2xl p-8 text-sm leading-relaxed text-muted-foreground">
          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">1. Overview</h2>
            <p>ThumbForge is a browser-based tool. We do not require an account and do not collect personal information to use the generator.</p>
          </div>
          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">2. Data we do not collect</h2>
            <p>Prompts, uploaded images, and generated thumbnails are processed entirely in your browser. Nothing is transmitted to our servers.</p>
          </div>
          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">3. Analytics</h2>
            <p>We may use privacy-friendly analytics to count anonymous page views. No cookies or personally-identifiable information are used for this.</p>
          </div>
          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">4. Contact</h2>
            <p>If you use our contact form, we only use the information you provide to reply to your message.</p>
          </div>
          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">5. Children</h2>
            <p>ThumbForge is not directed at children under 13. We do not knowingly collect information from minors.</p>
          </div>
          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">6. Changes</h2>
            <p>We may update this policy from time to time. Material changes will be reflected on this page.</p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
