import { Link } from "@tanstack/react-router";
import { Sparkles, Twitter, Github, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg btn-gradient">
                <Sparkles className="h-4 w-4" />
              </span>
              <span className="gradient-text">ThumbForge</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Create scroll-stopping YouTube thumbnails in seconds with AI.
            </p>
            <div className="mt-4 flex gap-3">
              <a href="#" aria-label="Twitter" className="rounded-lg p-2 glass hover:bg-white/10"><Twitter className="h-4 w-4" /></a>
              <a href="#" aria-label="Github" className="rounded-lg p-2 glass hover:bg-white/10"><Github className="h-4 w-4" /></a>
              <a href="#" aria-label="YouTube" className="rounded-lg p-2 glass hover:bg-white/10"><Youtube className="h-4 w-4" /></a>
            </div>
          </div>
          <FooterCol title="Product" links={[
            { to: "/generator", label: "AI Generator" },
            { to: "/templates", label: "Templates" },
            { to: "/faq", label: "FAQ" },
          ]}/>
          <FooterCol title="Resources" links={[
            { to: "/blog", label: "Blog" },
            { to: "/contact", label: "Contact" },
          ]}/>
          <FooterCol title="Legal" links={[
            { to: "/privacy", label: "Privacy Policy" },
            { to: "/terms", label: "Terms of Service" },
          ]}/>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} ThumbForge. All rights reserved.</p>
          <p>Crafted for creators, by creators.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <h4 className="mb-3 text-sm font-semibold">{title}</h4>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="hover:text-foreground">{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
