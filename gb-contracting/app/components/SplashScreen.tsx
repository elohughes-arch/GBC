"use client";
import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [visible, setVisible] = useState(false);
  const [draw, setDraw] = useState(false);
  const [out, setOut] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("gb-splash")) return;
    sessionStorage.setItem("gb-splash", "1");
    setVisible(true);
    const t1 = setTimeout(() => setDraw(true), 150);
    const t2 = setTimeout(() => setOut(true), 2000);   // 2s total (0.5s longer)
    const t3 = setTimeout(() => setVisible(false), 2650);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  if (!visible) return null;

  const r = 52;
  const circ = 2 * Math.PI * r;

  return (
    <div
      style={{
        position: "fixed", inset: 0, background: "#000", zIndex: 9999,
        display: "flex", alignItems: "center", justifyContent: "center",
        opacity: out ? 0 : 1, transition: "opacity 0.65s ease",
      }}
    >
      <div style={{ position: "relative", width: 120, height: 120, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg width="120" height="120" viewBox="0 0 120 120" style={{ position: "absolute", inset: 0 }}>
          <circle
            cx="60" cy="60" r={r}
            fill="none" stroke="#89ada0" strokeWidth="1.2" strokeLinecap="round"
            strokeDasharray={circ}
            strokeDashoffset={draw ? 0 : circ}
            style={{
              transition: draw ? "stroke-dashoffset 1.4s cubic-bezier(0.4,0,0.2,1)" : "none",
              transformOrigin: "center",
              transform: "rotate(-90deg)",
            }}
          />
        </svg>
        {/* Logo image — falls back to text if not found */}
        <div style={{ textAlign: "center", opacity: draw ? 1 : 0, transition: "opacity 0.5s ease 0.4s" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="GB Contracting"
            style={{ width: 60, height: 60, objectFit: "contain", display: "block" }}
            onError={(e) => {
              const el = e.currentTarget;
              el.style.display = "none";
              const next = el.nextElementSibling as HTMLElement;
              if (next) next.style.display = "block";
            }}
          />
          <div style={{ display: "none" }}>
            <div style={{ fontFamily: "'DIN Condensed','Arial Narrow',Impact,sans-serif", fontWeight: 700, fontSize: "1.9rem", color: "#fff", letterSpacing: "0.06em", lineHeight: 1 }}>GB</div>
            <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.5rem", color: "#89ada0", letterSpacing: "0.22em", textTransform: "uppercase" }}>CONTRACTING</div>
          </div>
        </div>
      </div>
    </div>
  );
}
