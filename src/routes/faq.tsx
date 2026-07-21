import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";

const faqs = [
  { q: "Is ThumbForge really free?", a: "Yes. There's no signup, no paywall, and no credit card. Generate and download as many thumbnails as you want." },
  { q: "What resolution are the thumbnails?", a: "All thumbnails export at 1280×720 PNG — YouTube's recommended resolution." },
  { q: "Can I upload my own image?", a: "Yes. You can optionally attach an image and it will be composited into your thumbnail." },
  { q: "Can I use these commercially?", a: "Absolutely. You own the thumbnails you generate and can use them for your channels, ads, and clients." },
  { q: "Do you store my prompts or images?", a: "No. Everything runs in your browser — nothing is uploaded or stored on our servers." },
  { q: "Which platforms does this work for?", a: "The 16:9 exports work great for YouTube, Vimeo, LinkedIn video, blog covers, and course thumbnails." },
  { q: "How is this different from Canva?", a: "ThumbForge is purpose-built for thumbnails: no blank canvas, no learning curve. Prompt in, thumbnail out." },
  { q: "Can I regenerate as many times as I want?", a: "Yes — regenerate infinitely until you find the one you love." },
  { q: "Do you have an API?", a: "Not yet. Reach out via the contact page if you'd like early access when we ship it." },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — ThumbForge" },
      { name: "description", content: "Answers to common questions about ThumbForge, our AI thumbnail generator." },
      { property: "og:title", content: "FAQ — ThumbForge" },
      { property: "og:description", content: "Common questions about ThumbForge answered." },
    ],
  }),
  component: FAQ,
});

function FAQ() {
  return (
    <PageShell>
      <PageHeader eyebrow="FAQ" title="Frequently asked questions" description="Everything you might want to know about ThumbForge." />
      <section className="mx-auto max-w-3xl px-4 pb-16">
        <div className="space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="glass rounded-2xl p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                {f.q}
                <span className="ml-2 text-primary">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
