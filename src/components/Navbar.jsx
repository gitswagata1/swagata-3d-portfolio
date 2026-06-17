import { useEffect, useState } from "react";

const links = [
  { label: "work", href: "#work" },
  { label: "about", href: "#about" },
  { label: "certs", href: "#certs" },
  { label: "contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
          scrolled
            ? "bg-cream/80 ring-1 ring-black/10 backdrop-blur-md"
            : "bg-transparent"
        }`}
        style={
          scrolled
            ? { backgroundColor: "rgba(231,230,224,0.8)" }
            : undefined
        }
      >
        <a href="#top" className="flex items-center gap-2 text-ink">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-accent text-[13px] font-semibold text-white">
            S
          </span>
          <span className="text-sm font-medium tracking-tight">
            swagata banerjee
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline text-sm lowercase tracking-wide text-ink/70 transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          data-theme="dark"
          className="rounded-full bg-ink px-5 py-2 text-sm font-medium text-cream transition-transform duration-300 hover:scale-105"
        >
          let's talk
        </a>
      </nav>
    </header>
  );
}
