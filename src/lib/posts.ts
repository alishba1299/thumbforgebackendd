export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
};

export const posts: Post[] = [
  {
    slug: "best-youtube-thumbnail-size",
    title: "The Best YouTube Thumbnail Size in 2026",
    description: "The exact YouTube thumbnail size, aspect ratio, and file format you should use for maximum quality.",
    date: "May 12, 2026",
    readTime: "5 min read",
    category: "Guide",
    content: `YouTube recommends 1280×720 pixels with a 16:9 aspect ratio. That's the sweet spot: sharp on 4K displays, still crisp on mobile.

## Key specs
- Resolution: 1280×720 (minimum 640px wide)
- Aspect ratio: 16:9
- Format: JPG, PNG, GIF, or WEBP
- Max file size: 2 MB

## Why 1280×720?
Anything smaller looks pixelated on modern TVs. Anything larger just gets compressed by YouTube anyway. 1280×720 is the "goldilocks" size — big enough to look great, small enough to load fast.

## Common mistakes
1. Using tiny thumbnails that look blurry on TVs.
2. Not accounting for the duration overlay in the bottom-right.
3. Cramming too much text — keep it under 5 words.

ThumbForge exports at 1280×720 by default so you never have to think about this again.`,
  },
  {
    slug: "how-to-get-more-clicks-with-ai-thumbnails",
    title: "How to Get More Clicks with AI Thumbnails",
    description: "Practical tips for using AI thumbnail generators to increase your click-through rate.",
    date: "May 3, 2026",
    readTime: "6 min read",
    category: "Growth",
    content: `Your thumbnail is the single biggest factor in whether someone clicks your video. AI thumbnails let you iterate 10× faster than doing it manually — but only if you use them right.

## 1. Test 3–5 variations
Generate multiple thumbnails per video. Even small changes (color, expression, text placement) can 2× your CTR.

## 2. Match the thumbnail to the title
Your thumbnail and title should tell one story together — not two competing ones.

## 3. Use contrast, not chaos
High-contrast thumbnails pop in the sidebar. Muddy, low-contrast thumbnails disappear.

## 4. Read the room
A gaming thumbnail on a business channel confuses viewers. Pick a style that matches your niche.

## 5. Ship, don't polish forever
Done > perfect. AI makes iteration cheap — use that advantage.`,
  },
  {
    slug: "thumbnail-design-tips",
    title: "10 Thumbnail Design Tips from Top Creators",
    description: "Actionable design principles used by the biggest YouTubers to make their thumbnails pop.",
    date: "April 20, 2026",
    readTime: "7 min read",
    category: "Design",
    content: `The best YouTube thumbnails follow the same design rules. Here are 10 of them.

## 1. Rule of thirds
Place the subject on a third-line, not dead center.

## 2. Big, readable text
3–5 words maximum. Sans-serif. Heavy weight.

## 3. Contrast is king
Bright subject on dark background — or vice versa.

## 4. One focal point
The eye needs somewhere to land in under 1 second.

## 5. Emotional faces
Surprise, joy, and shock convert better than neutral expressions.

## 6. Consistent brand look
Use the same color palette across all videos in a series.

## 7. Arrows and circles
Direct the viewer's eye to what matters.

## 8. Avoid clickbait mismatch
The thumbnail must deliver on what the video shows.

## 9. Test on mobile
70% of YouTube views are on mobile. Zoom out and test.

## 10. Iterate
Even top creators A/B test thumbnails weekly.`,
  },
  {
    slug: "best-thumbnail-colors",
    title: "Best Thumbnail Colors for Maximum CTR",
    description: "Data-backed color combinations that consistently outperform on YouTube.",
    date: "April 8, 2026",
    readTime: "5 min read",
    category: "Design",
    content: `Color psychology plays a huge role in whether someone clicks. Here are the highest-performing palettes.

## Purple + Blue
The combo used by top tech and AI channels. Feels premium, futuristic, and calm.

## Red + Yellow
Highest attention-grabbing combo. Perfect for news, gaming, and urgent content.

## Black + Neon
Modern, minimal, and unmistakably premium.

## Orange + Teal
The cinema look. Great for vlogs and lifestyle.

## Green + Gold
Trusted, warm, and premium. Great for finance and business.

The right palette depends on your niche — but avoid muted, low-contrast pastels for thumbnails.`,
  },
  {
    slug: "youtube-thumbnail-guide",
    title: "The Complete YouTube Thumbnail Guide",
    description: "Everything you need to know about designing, testing, and shipping YouTube thumbnails.",
    date: "March 25, 2026",
    readTime: "10 min read",
    category: "Guide",
    content: `A full walkthrough — from concept to upload.

## Step 1: Know your audience
What makes them stop scrolling? Study your top 10 competitors.

## Step 2: Sketch the concept
Even a rough idea in your head beats generating blindly.

## Step 3: Generate variations
Use AI to create 5–10 versions in minutes.

## Step 4: Pick the top 2
Choose based on contrast, focal point, and clarity.

## Step 5: Test with real viewers
Use YouTube's built-in A/B testing feature.

## Step 6: Iterate
Study your CTR data weekly and evolve your style.`,
  },
];
