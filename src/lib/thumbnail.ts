export type ThumbStyle = "YouTube" | "Gaming" | "Education" | "Business" | "Tech" | "Vlog";
export type ColorStyle = "Purple Blast" | "Neon Cyber" | "Sunset" | "Ocean" | "Emerald" | "Mono";

const palettes: Record<ColorStyle, [string, string, string]> = {
  "Purple Blast": ["#7c3aed", "#3b82f6", "#f0abfc"],
  "Neon Cyber": ["#22d3ee", "#a855f7", "#f472b6"],
  "Sunset": ["#f97316", "#ef4444", "#facc15"],
  "Ocean": ["#0ea5e9", "#6366f1", "#22d3ee"],
  "Emerald": ["#10b981", "#059669", "#a7f3d0"],
  "Mono": ["#111827", "#374151", "#9ca3af"],
};

const styleTag: Record<ThumbStyle, string> = {
  YouTube: "MUST WATCH",
  Gaming: "EPIC WIN",
  Education: "LEARN THIS",
  Business: "GROW FAST",
  Tech: "NEW TECH",
  Vlog: "MY STORY",
};

export async function generateThumbnail(opts: {
  prompt: string;
  style: ThumbStyle;
  color: ColorStyle;
  overlayImage?: string | null;
  aiBackgroundImage?: string | null;
}): Promise<string> {
  const { prompt, style, color, overlayImage, aiBackgroundImage } = opts;
  const W = 1280;
  const H = 720;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d")!;
  const [c1, c2, c3] = palettes[color];

  if (aiBackgroundImage) {
    // Real AI-generated background image, cover-fit into the frame
    const bg = await loadImage(aiBackgroundImage);
    drawCover(ctx, bg, 0, 0, W, H);

    // Darken the bottom for title legibility
    const bottomShade = ctx.createLinearGradient(0, H * 0.35, 0, H);
    bottomShade.addColorStop(0, "rgba(0,0,0,0)");
    bottomShade.addColorStop(1, "rgba(0,0,0,0.72)");
    ctx.fillStyle = bottomShade;
    ctx.fillRect(0, 0, W, H);

    // Darken the left side too (where the title text sits)
    const leftShade = ctx.createLinearGradient(0, 0, W * 0.65, 0);
    leftShade.addColorStop(0, "rgba(0,0,0,0.5)");
    leftShade.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = leftShade;
    ctx.fillRect(0, 0, W, H);
  } else {
    // Fallback: gradient-based background (no AI key / AI call failed)
    const grad = ctx.createLinearGradient(0, 0, W, H);
    grad.addColorStop(0, c1);
    grad.addColorStop(1, c2);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    // Radial glow
    const glow = ctx.createRadialGradient(W * 0.8, H * 0.2, 20, W * 0.8, H * 0.2, 700);
    glow.addColorStop(0, c3 + "cc");
    glow.addColorStop(1, "transparent");
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, W, H);

    // Grid overlay
    ctx.strokeStyle = "rgba(255,255,255,0.06)";
    ctx.lineWidth = 1;
    for (let x = 0; x < W; x += 60) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
    for (let y = 0; y < H; y += 60) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
  }

  // Optional overlay image on right
  if (overlayImage) {
    const img = await loadImage(overlayImage);
    const iw = 520;
    const ih = (img.height / img.width) * iw;
    ctx.save();
    roundRect(ctx, W - iw - 60, (H - ih) / 2, iw, ih, 24);
    ctx.clip();
    ctx.drawImage(img, W - iw - 60, (H - ih) / 2, iw, ih);
    ctx.restore();
    ctx.strokeStyle = "rgba(255,255,255,0.5)";
    ctx.lineWidth = 4;
    roundRect(ctx, W - iw - 60, (H - ih) / 2, iw, ih, 24);
    ctx.stroke();
  }

  // Solid backdrop panel covering the whole badge+title zone, so any
  // stray text/artifacts the AI drew anywhere in that region are hidden
  // — not just directly behind the title glyphs.
  if (aiBackgroundImage) {
    const panelX = 32;
    const panelY = 32;
    const panelW = (overlayImage ? 660 : 1120) - panelX;
    const panelH = 590;
    ctx.fillStyle = "rgba(8,9,16,0.66)";
    roundRect(ctx, panelX, panelY, panelW, panelH, 28);
    ctx.fill();
  }

  // Badge
  ctx.fillStyle = "#111827";
  roundRect(ctx, 60, 60, 260, 60, 16);
  ctx.fill();
  ctx.fillStyle = "#facc15";
  ctx.font = "bold 30px Inter, sans-serif";
  ctx.textBaseline = "middle";
  ctx.fillText(styleTag[style], 82, 92);

  // Title
  const title = (prompt || "Your Awesome Thumbnail").toUpperCase();
  const maxWidth = overlayImage ? 620 : 1100;
  const lines = wrapText(ctx, title, maxWidth, "bold 92px Inter, sans-serif").slice(0, 3);
  ctx.font = "bold 92px Inter, sans-serif";
  ctx.textBaseline = "top";
  let y = 180;

  for (const line of lines) {
    // stroke
    ctx.lineWidth = 10;
    ctx.strokeStyle = "rgba(0,0,0,0.7)";
    ctx.strokeText(line, 60, y);
    ctx.fillStyle = "#ffffff";
    ctx.fillText(line, 60, y);
    y += 110;
  }

  // Style label bottom
  ctx.fillStyle = "rgba(255,255,255,0.85)";
  ctx.font = "600 26px Inter, sans-serif";
  ctx.fillText(`${style} • ${color}`, 60, H - 60);

  return canvas.toDataURL("image/png");
}

function drawCover(ctx: CanvasRenderingContext2D, img: HTMLImageElement, x: number, y: number, w: number, h: number) {
  const imgRatio = img.width / img.height;
  const boxRatio = w / h;
  let sx: number, sy: number, sw: number, sh: number;
  if (imgRatio > boxRatio) {
    sh = img.height;
    sw = sh * boxRatio;
    sx = (img.width - sw) / 2;
    sy = 0;
  } else {
    sw = img.width;
    sh = sw / boxRatio;
    sx = 0;
    sy = (img.height - sh) / 2;
  }
  ctx.drawImage(img, sx, sy, sw, sh, x, y, w, h);
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function wrapText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number, font: string) {
  ctx.font = font;
  const words = text.split(" ");
  const lines: string[] = [];
  let cur = "";
  for (const w of words) {
    const test = cur ? cur + " " + w : w;
    if (ctx.measureText(test).width > maxWidth && cur) {
      lines.push(cur);
      cur = w;
    } else cur = test;
  }
  if (cur) lines.push(cur);
  return lines;
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((res, rej) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => res(img);
    img.onerror = rej;
    img.src = src;
  });
}
