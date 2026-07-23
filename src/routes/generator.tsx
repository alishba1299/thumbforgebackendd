import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { useState } from "react";
import { generateThumbnail, type ThumbStyle, type ColorStyle } from "@/lib/thumbnail";
import { Wand2, Download, RefreshCw, Upload, Sparkles, Image as ImageIcon, X, AlertTriangle } from "lucide-react";
import { AdSkyscraper } from "@/components/site/AdSkyscraper";

export const Route = createFileRoute("/generator")({
  head: () => ({
    meta: [
      { title: "AI Thumbnail Generator — ThumbForge" },
      { name: "description", content: "Generate stunning YouTube thumbnails from a text prompt. Pick a style, palette, and download HD PNGs instantly." },
      { property: "og:title", content: "AI Thumbnail Generator — ThumbForge" },
      { property: "og:description", content: "Generate stunning YouTube thumbnails from a text prompt." },
    ],
  }),
  component: Generator,
});

const styles: ThumbStyle[] = ["YouTube", "Gaming", "Education", "Business", "Tech", "Vlog"];
const colors: ColorStyle[] = ["Purple Blast", "Neon Cyber", "Sunset", "Ocean", "Emerald", "Mono"];

function Generator() {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState<ThumbStyle>("YouTube");
  const [color, setColor] = useState<ColorStyle>("Purple Blast");
  const [image, setImage] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [useAI, setUseAI] = useState(true);
  const [aiError, setAiError] = useState<string | null>(null);

  async function handleGenerate() {
    setLoading(true);
    setResult(null);
    setAiError(null);

    let aiBackgroundImage: string | null = null;
    if (useAI) {
      try {
        const res = await fetch("/api/generate-thumbnail", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt, style, color }),
        });
        const data = await res.json();
        if (res.ok && data.image) {
          aiBackgroundImage = data.image;
        } else {
          setAiError(data.error || "AI background generate nahi ho saka, gradient background use ho raha hai.");
        }
      } catch {
        setAiError("AI server tak connect nahi ho saka, gradient background use ho raha hai.");
      }
    }

    try {
      const url = await generateThumbnail({ prompt, style, color, overlayImage: image, aiBackgroundImage });
      setResult(url);
    } finally {
      setLoading(false);
    }
  }

  function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setImage(reader.result as string);
    reader.readAsDataURL(file);
  }

  function handleDownload() {
    if (!result) return;
    const a = document.createElement("a");
    a.href = result;
    a.download = `thumbforge-${Date.now()}.png`;
    a.click();
  }

  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-4 pt-14 pb-8 text-center">
        <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs">
          <Sparkles className="h-3.5 w-3.5" /> AI Thumbnail Generator
        </span>
        <h1 className="mt-4 text-4xl font-bold md:text-5xl">
          <span className="gradient-text">Design your next thumbnail</span>
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Describe your video, pick a vibe, and generate a scroll-stopping thumbnail in seconds.</p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-6 lg:grid-cols-5">
          {/* Ad */}
          <div className="hidden lg:flex lg:col-span-5 justify-center">
            <AdSkyscraper />
          </div>

          {/* Controls */}
          <div className="glass-strong lg:col-span-2 rounded-3xl p-6 space-y-6">
            <div>
              <label className="mb-2 block text-sm font-semibold">Prompt</label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g. 10 crazy iPhone tricks nobody knows"
                rows={3}
                className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-sm outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">Optional image</label>
              {image ? (
                <div className="relative">
                  <img src={image} alt="upload" className="h-32 w-full rounded-xl object-cover" />
                  <button onClick={() => setImage(null)} className="absolute right-2 top-2 rounded-lg bg-black/60 p-1.5 hover:bg-black/80">
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <label className="flex h-32 cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-white/20 bg-white/5 text-sm text-muted-foreground hover:bg-white/[0.08]">
                  <Upload className="mb-2 h-5 w-5" />
                  Click to upload (optional)
                  <input type="file" accept="image/*" className="hidden" onChange={handleUpload} />
                </label>
              )}
            </div>

            <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2.5">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Sparkles className="h-4 w-4 text-primary" /> AI Background
              </div>
              <button
                type="button"
                onClick={() => setUseAI((v) => !v)}
                aria-pressed={useAI}
                className={`relative h-6 w-11 rounded-full transition ${useAI ? "bg-primary" : "bg-white/15"}`}
              >
                <span
                  className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${
                    useAI ? "translate-x-5" : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">Style</label>
              <div className="grid grid-cols-3 gap-2">
                {styles.map((s) => (
                  <button
                    key={s}
                    onClick={() => setStyle(s)}
                    className={`rounded-lg border px-3 py-2 text-xs font-medium transition ${
                      style === s ? "btn-gradient border-transparent" : "border-white/10 bg-white/5 hover:bg-white/10"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">Color palette</label>
              <div className="grid grid-cols-2 gap-2">
                {colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-medium transition ${
                      color === c ? "border-primary bg-white/10" : "border-white/10 bg-white/5 hover:bg-white/10"
                    }`}
                  >
                    <ColorSwatch name={c} />
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleGenerate}
                disabled={loading}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl btn-gradient px-4 py-3 font-semibold disabled:opacity-60"
              >
                {loading ? <><RefreshCw className="h-4 w-4 animate-spin" /> Generating...</> : <><Wand2 className="h-4 w-4" /> Generate</>}
              </button>
              {result && (
                <button onClick={handleGenerate} className="rounded-xl border border-white/20 px-4 py-3 hover:bg-white/5" aria-label="Regenerate">
                  <RefreshCw className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          {/* Preview */}
          <div className="lg:col-span-3">
            {aiError && (
              <div className="mb-4 flex items-start gap-2 rounded-xl border border-yellow-500/30 bg-yellow-500/10 px-3 py-2.5 text-sm text-yellow-200">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{aiError}</span>
              </div>
            )}
            <div className="glass-strong rounded-3xl p-3">
              <div className="relative aspect-video overflow-hidden rounded-2xl bg-black/40">
                {loading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <div className="h-12 w-12 animate-spin rounded-full border-2 border-white/20 border-t-primary" />
                    <p className="text-sm text-muted-foreground">
                      {useAI ? "Asking the AI to paint your background..." : "Cooking up your thumbnail..."}
                    </p>
                  </div>
                )}
                {!loading && !result && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-muted-foreground">
                    <ImageIcon className="h-12 w-12 opacity-40" />
                    <p className="text-sm">Your generated thumbnail will appear here</p>
                  </div>
                )}
                {result && <img src={result} alt="Generated thumbnail" className="h-full w-full object-cover animate-in fade-in" />}
              </div>
            </div>
            {result && (
              <div className="mt-4 flex flex-wrap gap-3">
                <button onClick={handleDownload} className="inline-flex items-center gap-2 rounded-xl btn-gradient px-5 py-3 font-semibold">
                  <Download className="h-4 w-4" /> Download PNG
                </button>
                <button onClick={handleGenerate} className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 font-semibold hover:bg-white/5">
                  <RefreshCw className="h-4 w-4" /> Regenerate
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function ColorSwatch({ name }: { name: ColorStyle }) {
  const map: Record<ColorStyle, string> = {
    "Purple Blast": "linear-gradient(135deg,#7c3aed,#3b82f6)",
    "Neon Cyber": "linear-gradient(135deg,#22d3ee,#a855f7)",
    "Sunset": "linear-gradient(135deg,#f97316,#ef4444)",
    "Ocean": "linear-gradient(135deg,#0ea5e9,#6366f1)",
    "Emerald": "linear-gradient(135deg,#10b981,#059669)",
    "Mono": "linear-gradient(135deg,#374151,#9ca3af)",
  };
  return <span className="h-4 w-4 rounded-full ring-1 ring-white/20" style={{ background: map[name] }} />;
}