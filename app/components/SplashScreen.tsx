"use client";
import { useEffect, useState, useRef } from "react";

export default function SplashScreen() {
  const [visible, setVisible] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [exiting, setExiting] = useState(false);
  const circleRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    // Only show on first visit (not on every refresh)
    const hasVisited = sessionStorage.getItem("gb-visited");
    if (hasVisited) return;

    setVisible(true);
    sessionStorage.setItem("gb-visited", "true");

    // Small delay then start circle animation
    const t1 = setTimeout(() => setAnimating(true), 200);

    // After 1.5s total, start exit
    const t2 = setTimeout(() => {
      setExiting(true);
    }, 1600);

    // Remove from DOM after fade
    const t3 = setTimeout(() => {
      setVisible(false);
    }, 2100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#000",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: exiting ? 0 : 1,
        transition: "opacity 0.5s ease",
      }}
    >
      <div style={{ position: "relative", width: 120, height: 120, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {/* SVG Circle Animation */}
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          <circle
            ref={circleRef}
            cx="60"
            cy="60"
            r="55"
            fill="none"
            stroke="#89ada0"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="345.4"
            strokeDashoffset={animating ? "0" : "345.4"}
            style={{
              transition: animating ? "stroke-dashoffset 1.2s cubic-bezier(0.4, 0, 0.2, 1)" : "none",
              transformOrigin: "center",
              transform: "rotate(-90deg)",
            }}
          />
        </svg>

        {/* Logo Text since we don't have the image file accessible */}
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontFamily: "'DIN Condensed', 'Arial Narrow', Impact, sans-serif",
              fontWeight: 700,
              fontSize: "2rem",
              color: "#fff",
              letterSpacing: "0.08em",
              lineHeight: 1,
              opacity: animating ? 1 : 0,
              transition: "opacity 0.5s ease 0.3s",
            }}
          >
            GB
          </div>
          <div
            style={{
              fontFamily: "'DIN Condensed', 'Arial Narrow', Impact, sans-serif",
              fontWeight: 700,
              fontSize: "0.55rem",
              color: "#89ada0",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: animating ? 1 : 0,
              transition: "opacity 0.5s ease 0.5s",
            }}
          >
            CONTRACTING
          </div>
        </div>
      </div>
    </div>
  );
}
