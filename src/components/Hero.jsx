import { Suspense, lazy } from "react";

// Lazy-load the heavy Three.js scene so the hero text paints immediately
// and the ~1 MB 3D bundle streams in afterwards.
const Scene3D = lazy(() => import("./Scene3D.jsx"));

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-28 pb-16 md:px-10"
    >
      {/* 3D centerpiece — sits behind the type, weighted to the right */}
      <div className="pointer-events-none absolute inset-0 -z-0 opacity-90 md:left-[28%] md:opacity-100">
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>
      </div>

      {/* Mobile-only scrim: keeps the lower copy readable over the 3D blob */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cream via-cream/55 to-transparent md:hidden" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-ink/60">
          <span className="h-2 w-2 rounded-full bg-accent" />
          Forward Deployed Engineer · Kolkata, IN
        </div>

        <h1 className="banner-text text-ink">
          SWAGATA
          <br />
          <span className="text-accent">BANERJEE</span>
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/70 md:text-xl">
          I turn messy enterprise data into products people actually use —
          building AI-driven platforms where engineering, product, and design
          meet.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            data-theme="dark"
            className="rounded-full bg-ink px-7 py-3 text-sm font-medium text-cream transition-transform duration-300 hover:scale-105"
          >
            view selected work
          </a>
          <a
            href="#contact"
            className="link-underline text-sm font-medium text-ink/80"
          >
            get in touch →
          </a>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-ink/50">
        <span className="text-[10px] uppercase tracking-[0.3em]">scroll</span>
        <span className="relative h-9 w-5 rounded-full border border-ink/30">
          <span className="absolute left-1/2 top-1.5 h-1.5 w-1.5 -translate-x-1/2 animate-bounce rounded-full bg-accent" />
        </span>
      </div>
    </section>
  );
}
