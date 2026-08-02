import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";

export const Route = createFileRoute("/games")({
  head: () => ({
    meta: [
      { title: "Games — ThumbForge" },
      { name: "description", content: "Take a break and play Dead Zone, a 3D FPS survival browser game." },
    ],
  }),
  component: GamesPage,
});

function GamesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Bonus"
        title="Take a break"
        description="Play a quick round of Dead Zone while your thumbnails render."
      />
      <section className="mx-auto max-w-5xl px-4 pb-20">
        <div className="glass-strong overflow-hidden rounded-3xl p-2">
          <div className="aspect-video w-full overflow-hidden rounded-2xl">
            <iframe
              src="/games/deadzone.html"
              title="Dead Zone — 3D FPS Survival Game"
              className="h-full w-full border-0"
              allow="fullscreen; autoplay; gamepad; pointer-lock"
              allowFullScreen
            />
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          Dead Zone — 3D FPS Survival Game, hosted via CrazyGames.
        </p>
      </section>
    </PageShell>
  );
}
