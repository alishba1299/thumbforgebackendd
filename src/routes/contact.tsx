import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { useState } from "react";
import { Mail, MessageSquare, Send, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ThumbForge" },
      { name: "description", content: "Get in touch with the ThumbForge team. We usually reply within 24 hours." },
      { property: "og:title", content: "Contact ThumbForge" },
      { property: "og:description", content: "Get in touch — we usually reply within 24 hours." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <PageShell>
      <PageHeader eyebrow="Contact" title="Let's talk" description="Feedback, questions, partnership ideas — we love hearing from creators." />
      <section className="mx-auto grid max-w-5xl gap-6 px-4 pb-16 md:grid-cols-3">
        <div className="space-y-4 md:col-span-1">
          <div className="glass rounded-2xl p-5">
            <Mail className="h-5 w-5 text-primary" />
            <h3 className="mt-3 font-semibold">Email</h3>
            <p className="mt-1 text-sm text-muted-foreground">hello@thumbforge.app</p>
          </div>
          <div className="glass rounded-2xl p-5">
            <MessageSquare className="h-5 w-5 text-primary" />
            <h3 className="mt-3 font-semibold">Response time</h3>
            <p className="mt-1 text-sm text-muted-foreground">Usually within 24 hours on weekdays.</p>
          </div>
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="glass-strong space-y-4 rounded-2xl p-6 md:col-span-2"
        >
          {sent ? (
            <div className="flex flex-col items-center gap-3 py-10 text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full btn-gradient">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Message sent</h3>
              <p className="text-sm text-muted-foreground">Thanks for reaching out — we'll get back to you soon.</p>
            </div>
          ) : (
            <>
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Name">
                  <input required className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-sm outline-none focus:border-primary" placeholder="Your name" />
                </Field>
                <Field label="Email">
                  <input required type="email" className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-sm outline-none focus:border-primary" placeholder="you@example.com" />
                </Field>
              </div>
              <Field label="Subject">
                <input required className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-sm outline-none focus:border-primary" placeholder="What's this about?" />
              </Field>
              <Field label="Message">
                <textarea required rows={5} className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-sm outline-none focus:border-primary" placeholder="Tell us more..." />
              </Field>
              <button type="submit" className="inline-flex items-center gap-2 rounded-xl btn-gradient px-5 py-3 font-semibold">
                Send message <Send className="h-4 w-4" />
              </button>
            </>
          )}
        </form>
      </section>
    </PageShell>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold">{label}</span>
      {children}
    </label>
  );
}
