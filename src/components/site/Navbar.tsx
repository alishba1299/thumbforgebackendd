import { Link } from "@tanstack/react-router";
import { Sparkles, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/generator", label: "Generator" },
  { to: "/templates", label: "Templates" },
  { to: "/blog", label: "Blog" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto mt-4 max-w-6xl px-4">
        <nav className="glass-strong flex items-center justify-between rounded-2xl px-4 py-3">
          <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg btn-gradient">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="gradient-text">ThumbForge</span>
          </Link>
          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
                activeProps={{ className: "text-foreground bg-white/5" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/generator" className="ml-2 rounded-lg btn-gradient px-4 py-2 text-sm font-semibold">
              Try Free
            </Link>
          </div>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
        {open && (
          <div className="glass mt-2 flex flex-col gap-1 rounded-2xl p-3 md:hidden">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm hover:bg-white/5"
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
