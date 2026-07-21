import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Sparkles, Wand2, Palette, Download, Zap, Rocket, Star, Gamepad2, GraduationCap, Briefcase, Cpu, Video, Newspaper, Plane, UtensilsCrossed, DollarSign, ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ThumbForge — AI Thumbnail Generator for YouTube Creators" },
      { name: "description", content: "Generate click-worthy YouTube thumbnails in seconds. Powered by AI, packed with templates, and free to start." },
      { property: "og:title", content: "ThumbForge — AI Thumbnail Generator" },
      { property: "og:description", content: "Generate click-worthy YouTube thumbnails in seconds." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative mx-auto max-w-6xl px-4 pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs">
                <Sparkles className="h-3.5 w-3.5" /> AI-powered thumbnails for creators
              </span>
              <h1 className="mt-5 text-5xl font-bold leading-tight md:text-6xl">
                Thumbnails that <span className="gradient-text">stop the scroll</span>.
              </h1>
              <p className="mt-5 max-w-lg text-lg text-muted-foreground">
                Turn a single prompt into a scroll-stopping YouTube thumbnail. Pick a style, pick a palette, hit generate.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/generator" className="inline-flex items-center gap-2 rounded-xl btn-gradient px-6 py-3 font-semibold">
                  Generate Free <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/templates" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 font-semibold hover:bg-white/5">
                  Browse Templates
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400" /> No sign-up</span>
                <span className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400" /> HD PNG export</span>
                <span className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400" /> Unlimited use</span>
              </div>
            </div>
            <ThumbnailPreview />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeader eyebrow="Features" title="Everything you need to ship" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="glass rounded-2xl p-6 transition hover:-translate-y-1 hover:bg-white/[0.08]">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl btn-gradient">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeader eyebrow="How it works" title="Three steps to a killer thumbnail" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg btn-gradient text-sm font-bold">{i + 1}</span>
                <h3 className="text-lg font-semibold">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeader eyebrow="Categories" title="Popular thumbnail categories" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {categories.map((c) => (
            <Link key={c.name} to="/templates" className="glass group rounded-2xl p-5 transition hover:-translate-y-1 hover:bg-white/[0.08]">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg btn-gradient">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{c.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{c.desc}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs text-primary group-hover:gap-2 transition-all">Explore <ArrowRight className="h-3 w-3" /></span>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeader eyebrow="Loved by creators" title="What creators are saying" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="glass rounded-2xl p-6">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">"{t.quote}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full btn-gradient" />
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-16">
        <SectionHeader eyebrow="FAQ" title="Frequently asked questions" />
        <div className="mt-10 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="glass rounded-2xl p-5">
              <summary className="cursor-pointer list-none font-semibold flex items-center justify-between">
                {f.q}<span className="ml-2 text-primary">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/faq" className="text-sm text-primary hover:underline">See all FAQs →</Link>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="glass-strong overflow-hidden rounded-3xl p-10 text-center md:p-16">
          <h2 className="text-3xl font-bold md:text-4xl">Ready to make your next thumbnail?</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Join thousands of creators using ThumbForge to boost their CTR.</p>
          <Link to="/generator" className="mt-6 inline-flex items-center gap-2 rounded-xl btn-gradient px-6 py-3 font-semibold">
            Start Generating <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="text-center">
      <span className="inline-block rounded-full glass px-3 py-1 text-xs text-muted-foreground">{eyebrow}</span>
      <h2 className="mt-3 text-3xl font-bold md:text-4xl"><span className="gradient-text">{title}</span></h2>
    </div>
  );
}

function ThumbnailPreview() {
  return (
    <div className="relative">
      <div className="glass-strong aspect-video rounded-3xl p-3 shadow-2xl">
        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-fuchsia-500 via-purple-600 to-blue-600">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute top-5 left-5 rounded-lg bg-black/70 px-3 py-1.5 text-xs font-bold text-yellow-400">MUST WATCH</div>
          <div className="absolute bottom-6 left-6 right-6">
            <p className="font-display text-3xl font-bold text-white drop-shadow-lg md:text-5xl">AI THUMBNAILS THAT CONVERT</p>
          </div>
          <div className="absolute right-6 top-1/2 -translate-y-1/2 h-32 w-32 rounded-full bg-white/20 backdrop-blur-md md:h-40 md:w-40 flex items-center justify-center">
            <Sparkles className="h-12 w-12 text-white" />
          </div>
        </div>
      </div>
      <div className="absolute -bottom-4 -right-4 glass rounded-xl px-3 py-2 text-xs font-medium">
        ⚡ Generated in 2s
      </div>
    </div>
  );
}

const features = [
  { icon: Wand2, title: "AI-Powered Generation", desc: "Describe your video, get a stunning thumbnail. No design skills required." },
  { icon: Palette, title: "Beautiful Color Systems", desc: "Curated palettes tuned for maximum click-through rates." },
  { icon: Zap, title: "Lightning Fast", desc: "Generate HD thumbnails in under 3 seconds. Iterate as much as you want." },
  { icon: Download, title: "1-Click PNG Export", desc: "Download full-resolution 1280×720 thumbnails ready for upload." },
  { icon: Rocket, title: "Style Presets", desc: "Tailored for YouTube, Gaming, Tech, Education, Business, and Vlogs." },
  { icon: Sparkles, title: "Endless Iterations", desc: "Regenerate as often as you like until it feels just right." },
];

const steps = [
  { title: "Describe your video", desc: "Type a short prompt about what your video is about." },
  { title: "Pick a style & palette", desc: "Choose from creator-tested styles and color systems." },
  { title: "Generate & download", desc: "Get a full-HD thumbnail in seconds — ready to upload." },
];

const categories = [
  { name: "Gaming", desc: "High-energy, epic vibes", icon: Gamepad2 },
  { name: "Education", desc: "Clear, informative layouts", icon: GraduationCap },
  { name: "Tech", desc: "Sleek, futuristic looks", icon: Cpu },
  { name: "Business", desc: "Professional and bold", icon: Briefcase },
  { name: "Vlog", desc: "Personal and warm", icon: Video },
  { name: "News", desc: "Urgent and trustworthy", icon: Newspaper },
  { name: "Travel", desc: "Cinematic destinations", icon: Plane },
  { name: "Food", desc: "Vibrant and mouth-watering", icon: UtensilsCrossed },
];

const testimonials = [
  { name: "Alex Rivera", role: "Gaming Creator, 480k subs", quote: "My CTR jumped from 4% to 9% in a week. ThumbForge is my new secret weapon." },
  { name: "Priya Shah", role: "Tech Reviewer", quote: "Finally a tool that gets thumbnail design. The style presets are chef's kiss." },
  { name: "Marco Bennett", role: "Vlogger", quote: "I make thumbnails in seconds instead of hours. It's changed my whole workflow." },
];

const faqs = [
  { q: "Is ThumbForge really free?", a: "Yes. You can generate and download thumbnails without an account or payment." },
  { q: "What resolution are the exports?", a: "Full HD 1280×720 PNGs — the exact spec YouTube recommends." },
  { q: "Can I use these commercially?", a: "Absolutely. Use them on your own videos, ads, and social channels." },
  { q: "Do I need design skills?", a: "Not at all. Type a prompt, pick a style, and you're done." },
];
