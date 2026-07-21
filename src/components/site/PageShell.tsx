import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeader({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <section className="mx-auto max-w-4xl px-4 pt-16 pb-8 text-center">
      {eyebrow && (
        <span className="inline-block rounded-full glass px-3 py-1 text-xs font-medium text-muted-foreground">
          {eyebrow}
        </span>
      )}
      <h1 className="mt-4 text-4xl font-bold md:text-5xl">
        <span className="gradient-text">{title}</span>
      </h1>
      {description && <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{description}</p>}
    </section>
  );
}
