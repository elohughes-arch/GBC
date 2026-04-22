"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Jobs Completed" },
  { value: 100, suffix: "%", label: "Insured & Certified" },
  { value: 24, suffix: "hr", label: "Response Time" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1800;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          setCount(Math.floor(ease * target));
          if (p < 1) requestAnimationFrame(tick);
          else setCount(target);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function TrustStats() {
  return (
    <section style={{ background: "#000", borderBottom: "1px solid #111" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
        {stats.map((s, i) => (
          <div key={s.label} className="trust-stat" style={{ textAlign: "center", borderRight: i < 3 ? "1px solid #1a1a1a" : "none" }}>
            <div style={{ fontFamily: "'DIN Condensed','Arial Narrow',Impact,sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "#89ada0", letterSpacing: "-0.01em", lineHeight: 1 }}>
              <Counter target={s.value} suffix={s.suffix} />
            </div>
            <div style={{ fontSize: "0.65rem", color: "#555", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 500, marginTop: "0.4rem" }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
