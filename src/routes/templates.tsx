import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { Gamepad2, GraduationCap, Cpu, Briefcase, Newspaper, Plane, UtensilsCrossed, DollarSign } from "lucide-react";

export const Route = createFileRoute("/templates")({
  head: () => ({
    meta: [
      { title: "Thumbnail Templates — ThumbForge" },
      { name: "description", content: "Browse ready-to-use YouTube thumbnail templates for gaming, tech, business, education, news, travel, food, and finance." },
      { property: "og:title", content: "Thumbnail Templates — ThumbForge" },
      { property: "og:description", content: "Ready-to-use YouTube thumbnail templates by category." },
    ],
  }),
  component: Templates,
});

const categories = [
  { name: "Gaming", icon: Gamepad2, palette: ["#a855f7", "#3b82f6"], samples: ["INSANE CLUTCH", "1v5 IMPOSSIBLE", "NEW META BROKEN"] },
  { name: "Education", icon: GraduationCap, palette: ["#0ea5e9", "#6366f1"], samples: ["LEARN IN 5 MIN", "STOP DOING THIS", "PROVEN METHOD"] },
  { name: "Tech", icon: Cpu, palette: ["#22d3ee", "#a855f7"], samples: ["iPHONE 20 LEAK", "AI CHANGED EVERYTHING", "10 HIDDEN TRICKS"] },
  { name: "Business", icon: Briefcase, palette: ["#111827", "#f59e0b"], samples: ["$0 TO $10K", "STOP WASTING TIME", "BILLIONAIRE SECRET"] },
  { name: "News", icon: Newspaper, palette: ["#ef4444", "#111827"], samples: ["BREAKING NEWS", "WHAT HAPPENED?", "URGENT UPDATE"] },
  { name: "Travel", icon: Plane, palette: ["#f97316", "#0ea5e9"], samples: ["HIDDEN PARADISE", "$50/DAY IN BALI", "24 HOURS IN TOKYO"] },
  { name: "Food", icon: UtensilsCrossed, palette: ["#f59e0b", "#ef4444"], samples: ["INSANE RECIPE", "5-STAR AT HOME", "STOP OVERCOOKING"] },
  { name: "Finance", icon: DollarSign, palette: ["#10b981", "#0ea5e9"], samples: ["MY $1M PORTFOLIO", "STOP LOSING MONEY", "PASSIVE INCOME"] },
];

function Templates() {
  return (
    <PageShell>
      <PageHeader eyebrow="Templates" title="Thumbnail templates by category" description="Pick a category to see sample layouts you can generate in the AI editor." />
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-8">
          {categories.map((c) => (
            <div key={c.name}>
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl btn-gradient">
                  <c.icon className="h-5 w-5" />
                </span>
                <h2 className="text-2xl font-bold">{c.name}</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {c.samples.map((s) => (
                  <Link
                    key={s}
                    to="/generator"
                    className="glass group aspect-video overflow-hidden rounded-2xl p-3 transition hover:-translate-y-1"
                  >
                    <div
                      className="relative flex h-full w-full items-end overflow-hidden rounded-xl p-4"
                      style={{ background: `linear-gradient(135deg, ${c.palette[0]}, ${c.palette[1]})` }}
                    >
                      <div className="absolute inset-0 grid-bg opacity-25" />
                      <div className="absolute top-3 left-3 rounded-md bg-black/70 px-2 py-1 text-[10px] font-bold text-yellow-400">
                        {c.name.toUpperCase()}
                      </div>
                      <p className="relative font-display text-xl font-bold text-white drop-shadow-md md:text-2xl">{s}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
