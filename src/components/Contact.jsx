import Reveal from "./Reveal.jsx";
import GradientMesh from "./GradientMesh.jsx";

const socials = [
  { label: "Email", value: "theswagata1@gmail.com", href: "mailto:theswagata1@gmail.com" },
  { label: "LinkedIn", value: "/in/theswagata1", href: "https://linkedin.com/in/theswagata1" },
  { label: "GitHub", value: "@gitswagata1", href: "https://github.com/gitswagata1" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      data-theme="dark"
      className="relative isolate mt-20 overflow-hidden rounded-t-4xl bg-[#0b0c14] text-cream"
    >
      {/* Airia-style living gradient backdrop */}
      <GradientMesh />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-20 md:px-10">
        <Reveal className="mb-6 text-xs uppercase tracking-[0.35em] text-cream/50">
          (contact)
        </Reveal>

        <Reveal as="h2" className="contact-text text-cream">
          LET'S BUILD
          <br />
          SOMETHING
          <span className="text-accent">.</span>
        </Reveal>

        <Reveal className="mt-10 max-w-xl text-lg leading-relaxed text-cream/70">
          Have a problem worth solving or a team to embed with? I'm always up for
          a conversation about products, data, or building something from
          scratch.
        </Reveal>

        <Reveal className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href="mailto:theswagata1@gmail.com"
            className="rounded-full bg-cream px-8 py-4 text-base font-medium text-ink transition-transform duration-300 hover:scale-105"
          >
            say hello →
          </a>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-cream/15 sm:grid-cols-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              className="group bg-white/[0.03] p-7 backdrop-blur-sm transition-colors duration-300 hover:bg-cream"
            >
              <div className="text-xs uppercase tracking-[0.25em] text-cream/40 group-hover:text-ink/60">
                {s.label}
              </div>
              <div className="mt-2 text-lg font-medium text-cream group-hover:text-ink">
                {s.value}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
