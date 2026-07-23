import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="glass max-w-md rounded-2xl p-8 text-center">
        <h1 className="text-7xl font-bold gradient-text">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center rounded-lg btn-gradient px-4 py-2 text-sm font-semibold">Go home</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="glass max-w-md rounded-2xl p-8 text-center">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Try again or head home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-lg btn-gradient px-4 py-2 text-sm font-semibold">Try again</button>
          <a href="/" className="rounded-lg border border-white/20 px-4 py-2 text-sm hover:bg-white/5">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ThumbForge — AI YouTube Thumbnail Generator" },
      { name: "description", content: "Create high-CTR YouTube thumbnails in seconds with AI. Free, fast, and gorgeous templates for gaming, tech, education, and more." },
      { name: "author", content: "ThumbForge" },
      { property: "og:title", content: "ThumbForge — AI YouTube Thumbnail Generator" },
      { property: "og:description", content: "Create high-CTR YouTube thumbnails in seconds with AI." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
        <script
          src="https://pl30488348.effectivecpmnetwork.com/99/01/29/9901296d3c606a4a18da8740c957b28b.js"
          async
        />
        <div id="container-c65137d58252b8a93524f34c3dc9747e" />
        <script
          async
          data-cfasync="false"
          src="https://pl30488349.effectivecpmnetwork.com/c65137d58252b8a93524f34c3dc9747e/invoke.js"
        />
        <script
          src="https://pl30488351.effectivecpmnetwork.com/4a/3c/1f/4a3c1f2906efd12ea1de0bcf17442761.js"
          async
        />
        <div style={{ width: 300, height: 250, margin: "0 auto" }}>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                atOptions = {
                  'key' : 'be699adffb63194c400d585c76398034',
                  'format' : 'iframe',
                  'height' : 250,
                  'width' : 300,
                  'params' : {}
                };
              `,
            }}
          />
          <script src="https://www.highperformanceformat.com/be699adffb63194c400d585c76398034/invoke.js" />
        </div>
        <div style={{ width: 728, height: 90, margin: "0 auto" }}>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                atOptions = {
                  'key' : 'f08fcbdce81d5f763c5a3c93a52ee0d3',
                  'format' : 'iframe',
                  'height' : 90,
                  'width' : 728,
                  'params' : {}
                };
              `,
            }}
          />
          <script src="https://www.highperformanceformat.com/f08fcbdce81d5f763c5a3c93a52ee0d3/invoke.js" />
        </div>
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}