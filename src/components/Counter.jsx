import { useEffect, useRef, useState } from "react";

/* Counts up to `to` once it scrolls into view. Supports thousands grouping. */
export default function Counter({ to, suffix = "", group = false }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.unobserve(el);
        const start = performance.now();
        const dur = 1600;
        const tick = (now) => {
          const p = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(eased * to));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  const text = group ? val.toLocaleString("en-IN") : val;

  return (
    <span ref={ref}>
      {text}
      {suffix}
    </span>
  );
}
