import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee.jsx";
import About from "./components/About.jsx";
import Work from "./components/Work.jsx";
import Certifications from "./components/Certifications.jsx";
import Contact from "./components/Contact.jsx";
import Cursor from "./components/Cursor.jsx";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Cursor />

      <div id="loader" className={loaded ? "hide" : ""}>
        <div className="text-center">
          <div className="banner-text text-ink/10">SB</div>
          <div className="mono mt-2 text-xs uppercase tracking-[0.4em] text-ink/40">
            loading
          </div>
        </div>
      </div>

      <Navbar />

      <main>
        <Hero />
        <Marquee />
        <About />
        <Work />
        <Certifications />
        <Contact />
      </main>

      <footer className="border-t border-ink/15 px-6 py-10 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-ink/50 md:flex-row">
          <span>© {new Date().getFullYear()} Swagata Banerjee</span>
          <span className="mono text-xs uppercase tracking-[0.2em]">
            built with react · three.js · ❤
          </span>
        </div>
      </footer>
    </>
  );
}
