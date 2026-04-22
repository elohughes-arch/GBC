"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "1rem 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled ? "rgba(0,0,0,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          transition: "background 0.4s, backdrop-filter 0.4s",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <div
              style={{
                fontFamily: "'DIN Condensed', 'Arial Narrow', Impact, sans-serif",
                fontWeight: 700,
                fontSize: "1.5rem",
                color: "#fff",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                lineHeight: 1,
              }}
            >
              GB
            </div>
            <div
              style={{
                width: "1px",
                height: "24px",
                background: "#89ada0",
                opacity: 0.6,
              }}
            />
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.6rem",
                fontWeight: 500,
                color: "#89ada0",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                lineHeight: 1.3,
              }}
            >
              CONTRACTING
              <br />
              SOMERSET
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div
          style={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
          }}
          className="hidden-mobile"
        >
          {["Services", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/#${item.toLowerCase()}`}
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                opacity: 0.85,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.85")}
            >
              {item}
            </Link>
          ))}
          <Link href="/booking">
            <button
              style={{
                background: "#89ada0",
                color: "#fff",
                border: "none",
                padding: "0.6rem 1.4rem",
                fontFamily: "'DIN Condensed', 'Arial Narrow', sans-serif",
                fontWeight: 700,
                fontSize: "0.85rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "background 0.2s",
                borderRadius: "3px",
              }}
            >
              Get a Quote
            </button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.25rem",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
          className="show-mobile"
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: "#fff",
                transition: "transform 0.3s, opacity 0.3s",
                transformOrigin: "center",
                transform:
                  menuOpen
                    ? i === 0
                      ? "translateY(6.5px) rotate(45deg)"
                      : i === 2
                      ? "translateY(-6.5px) rotate(-45deg)"
                      : "scaleX(0)"
                    : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "#000",
          zIndex: 90,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
          transition: "opacity 0.3s",
        }}
      >
        {["Services", "About", "Contact"].map((item) => (
          <Link
            key={item}
            href={`/#${item.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            style={{
              color: "#fff",
              textDecoration: "none",
              fontFamily: "'DIN Condensed', 'Arial Narrow', sans-serif",
              fontSize: "2.5rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {item}
          </Link>
        ))}
        <Link href="/booking" onClick={() => setMenuOpen(false)}>
          <button
            style={{
              background: "#89ada0",
              color: "#fff",
              border: "none",
              padding: "1rem 3rem",
              fontFamily: "'DIN Condensed', 'Arial Narrow', sans-serif",
              fontWeight: 700,
              fontSize: "1.2rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              cursor: "pointer",
              borderRadius: "4px",
            }}
          >
            Get a Quote
          </button>
        </Link>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}
