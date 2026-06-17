const items = [
  "PRODUCT",
  "AI ENGINEERING",
  "DATA PLATFORMS",
  "FORWARD DEPLOYED",
  "DESIGN SYSTEMS",
  "ANALYTICS",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <section
      data-theme="dark"
      className="border-y border-ink/15 bg-ink py-6 text-cream"
    >
      <div className="flex overflow-hidden">
        <div className="animate-marquee flex shrink-0 items-center gap-10 whitespace-nowrap pr-10">
          {row.map((t, i) => (
            <span key={i} className="marquee-text flex items-center gap-10">
              {t}
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
        <div
          aria-hidden
          className="animate-marquee flex shrink-0 items-center gap-10 whitespace-nowrap pr-10"
        >
          {row.map((t, i) => (
            <span key={i} className="marquee-text flex items-center gap-10">
              {t}
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
