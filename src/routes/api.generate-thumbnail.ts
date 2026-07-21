import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

/**
 * Server-side endpoint that generates a REAL AI background image for a
 * thumbnail using Pollinations.ai (free, no API key required), then hands
 * the base64 PNG back to the client. The client still draws the
 * title/badge/overlay on a canvas (fast, reliable text rendering), but the
 * background itself is now an actual AI-generated image instead of a
 * CSS-style gradient.
 */
export const Route = createFileRoute("/api/generate-thumbnail")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = (await request.json().catch(() => ({}))) as {
            prompt?: string;
            style?: string;
            color?: string;
          };

          const prompt = (body.prompt || "").trim();
          const style = (body.style || "YouTube").trim();
          const color = (body.color || "Purple Blast").trim();

          const cleanPrompt = (prompt || "an exciting video").slice(0, 300);
          const aiPrompt = [
            `A vibrant, scroll-stopping YouTube thumbnail background illustration for a ${style} video about "${cleanPrompt}".`,
            `Bold ${color} color palette, dramatic cinematic lighting, high contrast, sharp focus, professional digital illustration, photorealistic or stylized art.`,
            `Wide 16:9 composition with visual interest concentrated on the left two-thirds of the frame, right side can be simpler/darker for text overlay.`,
            `Pure visual artwork only. No text, no letters, no words, no numbers, no captions, no subtitles, no typography, no signage, no watermarks, no logos, no writing of any kind anywhere in the image.`,
          ].join(" ");

          const seed = Math.floor(Math.random() * 1_000_000);
          const url =
            `https://image.pollinations.ai/prompt/${encodeURIComponent(aiPrompt)}` +
            `?width=1280&height=720&nologo=true&seed=${seed}&model=flux&enhance=true`;

          const imgRes = await fetch(url);
          if (!imgRes.ok) {
            console.error("Pollinations image generation failed:", imgRes.status);
            return json({ error: "AI image generation failed. Please try again." }, 502);
          }

          const contentType = imgRes.headers.get("content-type") || "image/jpeg";
          const buf = await imgRes.arrayBuffer();
          const b64 = Buffer.from(buf).toString("base64");

          return json({ image: `data:${contentType};base64,${b64}` }, 200);
        } catch (err) {
          console.error("generate-thumbnail error:", err);
          return json({ error: "Unexpected server error." }, 500);
        }
      },
    },
  },
});

function json(body: unknown, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
