import Reveal from "./Reveal.jsx";

const projects = [
  {
    no: "01",
    title: "MT Central Intelligence Platform",
    tag: "AI · Procurement Analytics",
    desc: "A premium intelligence dashboard for Micro Turners that turns raw SAP purchase-order exports into live procurement insight — spend, suppliers, and lead-time signals at a glance.",
    year: "2026",
    link: "https://github.com/gitswagata1",
  },
  {
    no: "02",
    title: "NeuroPath AI",
    tag: "Next.js · Adaptive Learning",
    desc: "An AI-powered adaptive learning app that personalizes study paths to each learner — built with Next.js for VIT's adaptive learning initiative.",
    year: "2026",
    link: "https://v0-sb-neuropath-vit.vercel.app",
  },
  {
    no: "03",
    title: "1% Better Everyday",
    tag: "Cloud · Behavioural Intelligence",
    desc: "A cloud-based behavioural intelligence platform (Next.js, deployed on Vercel) that goes beyond task tracking — analyzing habit patterns to surface the behaviours that actually drive productivity.",
    year: "2025",
    link: "https://v0-1perbettereveryday.vercel.app",
  },
  {
    no: "04",
    title: "AgriGuard+",
    tag: "IoT · Research",
    desc: "A vibro-acoustic IoT system for early detection of sugarcane borer infestation — sensing pest activity acoustically before visible crop damage appears.",
    year: "2025",
    link: "https://github.com/gitswagata1",
  },
  {
    no: "05",
    title: "Credit Card Fraud Detection",
    tag: "Machine Learning",
    desc: "A supervised ML model that flags fraudulent transactions from highly imbalanced credit-card data — trained, evaluated, and serialized for inference.",
    year: "2024",
    link: "https://github.com/gitswagata1/CCFD",
  },
  {
    no: "06",
    title: "Invoice Intelligence",
    tag: "Multimodal AI · Streamlit",
    desc: "A Streamlit app powered by Google Gemini 1.5 that reads invoices and images and answers questions about them — built for IEEE WIE's graVITas.",
    year: "2024",
    link: "https://github.com/gitswagata1",
  },
  {
    no: "07",
    title: "AI Chatbot",
    tag: "Flutter · Cross-platform",
    desc: "A cross-platform conversational chatbot app built with Flutter — running on mobile, web, and desktop from a single codebase.",
    year: "2024",
    link: "https://github.com/gitswagata1",
  },
];

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-28 md:px-10">
      <div className="mb-14 flex items-end justify-between">
        <Reveal>
          <div className="mb-3 text-xs uppercase tracking-[0.35em] text-ink/50">
            (selected work)
          </div>
          <h2 className="text-3xl font-medium tracking-tight text-ink md:text-5xl">
            things I've built.
          </h2>
        </Reveal>
        <Reveal className="hidden text-sm text-ink/50 md:block">
          2024 — 2026
        </Reveal>
      </div>

      <div className="border-t border-ink/15">
        {projects.map((p, i) => (
          <Reveal key={p.no} delay={i * 80}>
            <a
              href={p.link || "#contact"}
              target={p.link ? "_blank" : undefined}
              rel={p.link ? "noreferrer" : undefined}
              className="group grid grid-cols-1 gap-4 border-b border-ink/15 py-10 transition-all duration-500 hover:px-4 md:grid-cols-[80px_1.1fr_1fr_80px] md:items-center md:gap-8"
            >
              <span className="mono text-sm text-ink/40">{p.no}</span>
              <div>
                <h3 className="flex items-center gap-2 text-2xl font-medium tracking-tight text-ink transition-colors group-hover:text-accent md:text-3xl">
                  {p.title}
                  {p.link && (
                    <span
                      aria-hidden
                      className="text-base text-ink/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    >
                      ↗
                    </span>
                  )}
                </h3>
                <span className="mt-1 inline-block text-sm text-accent">
                  {p.tag}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-ink/60">{p.desc}</p>
              <span className="mono text-right text-sm text-ink/40">
                {p.year}
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
