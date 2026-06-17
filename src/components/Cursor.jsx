import { useEffect, useRef } from "react";

/* Gooey metaball cursor: a chain of periwinkle blobs that merge into one
   droplet when still and stretch into a liquid streak when you move fast.
   The "goo" comes from an SVG blur + alpha-threshold filter. */
const BLOBS = [26, 22, 18, 15, 12]; // diameters, lead → tail

export default function Cursor() {
  const wrap = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    const wrapEl = wrap.current;
    const blobs = Array.from(wrapEl.querySelectorAll(".goo-blob"));
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    const pos = blobs.map(() => ({ x: mx, y: my }));
    let hovering = false;
    let raf;

    const move = (e) => {
      mx = e.clientX;
      my = e.clientY;
      wrapEl.style.opacity = "1";
      // invert + pop the cursor when it's over a dark section
      const under = document.elementFromPoint(mx, my);
      const dark = under && under.closest('[data-theme="dark"]');
      wrapEl.classList.toggle("goo-cursor--invert", !!dark);
    };
    const leave = () => (wrapEl.style.opacity = "0");

    const interactive = (t) =>
      t && t.closest && t.closest("a, button, input, textarea, [data-cursor]");
    const over = (e) => interactive(e.target) && (hovering = true);
    const out = (e) => interactive(e.target) && (hovering = false);

    const tick = () => {
      let tx = mx;
      let ty = my;
      pos.forEach((p, i) => {
        const f = i === 0 ? 0.4 : 0.34; // chain follows the blob ahead of it
        p.x += (tx - p.x) * f;
        p.y += (ty - p.y) * f;
        const scale = i === 0 && hovering ? 1.7 : 1;
        blobs[i].style.transform = `translate(${p.x}px, ${p.y}px) translate(-50%, -50%) scale(${scale})`;
        tx = p.x;
        ty = p.y;
      });
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);
    document.addEventListener("mouseleave", leave);
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
      document.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <>
      <svg className="goo-defs" aria-hidden>
        <defs>
          <filter id="goo-cursor-filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div ref={wrap} className="goo-cursor" aria-hidden>
        {BLOBS.map((d, i) => (
          <span
            key={i}
            className="goo-blob"
            style={{ width: `${d}px`, height: `${d}px` }}
          />
        ))}
      </div>
    </>
  );
}
