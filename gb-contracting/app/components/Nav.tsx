"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        padding: "0 2rem",
        height: "64px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "rgba(0,0,0,0.94)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        transition: "background 0.4s, backdrop-filter 0.4s, border-color 0.4s",
      }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.65rem" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="GB Contracting" style={{ height: 32, width: "auto", objectFit: "contain" }}
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
          />
          <div>
            <div style={{ fontFamily: "'DIN Condensed','Arial Narrow',Impact,sans-serif", fontWeight: 700, fontSize: "1.15rem", color: "#fff", letterSpacing: "0.08em", textTransform: "uppercase", lineHeight: 1 }}>
              GB Contracting
            </div>
            <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.55rem", color: "#89ada0", letterSpacing: "0.18em", textTransform: "uppercase", lineHeight: 1, marginTop: "2px" }}>
              Taunton, Somerset
            </div>
          </div>
        </Link>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }} className="nav-desktop">
          {links.map(l => (
            <Link key={l.label} href={l.href} className="nav-link">{l.label}</Link>
          ))}
          <div style={{ display: "flex", gap: "0.75rem" }}>
            <a href="tel:+447464062317" className="btn-outline-white" style={{ padding: "0.55rem 1.2rem", fontSize: "0.78rem" }}>
              Call Now
            </a>
            <Link href="/booking" className="btn-primary" style={{ padding: "0.55rem 1.4rem", fontSize: "0.78rem" }}>
              Get a Quote
            </Link>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="nav-burger" aria-label="Menu"
          style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", gap: "5px", padding: "4px" }}>
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: "block", width: "22px", height: "1.5px", background: "#fff",
              transition: "transform 0.3s, opacity 0.3s",
              transform: open ? (i===0 ? "translateY(6.5px) rotate(45deg)" : i===2 ? "translateY(-6.5px) rotate(-45deg)" : "none") : "none",
              opacity: open && i===1 ? 0 : 1,
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      <div style={{
        position: "fixed", inset: 0, background: "#000", zIndex: 190,
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2rem",
        opacity: open ? 1 : 0, pointerEvents: open ? "all" : "none",
        transition: "opacity 0.35s",
      }}>
        {links.map(l => (
          <Link key={l.label} href={l.href} onClick={() => setOpen(false)}
            style={{ fontFamily: "'DIN Condensed','Arial Narrow',sans-serif", fontWeight: 700, fontSize: "2.8rem", color: "#fff", textDecoration: "none", letterSpacing: "0.06em", textTransform: "uppercase" }}>
            {l.label}
          </Link>
        ))}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", width: "220px", marginTop: "0.5rem" }}>
          <a href="tel:+447464062317" onClick={() => setOpen(false)} className="btn-outline-white" style={{ textAlign: "center", fontSize: "1rem" }}>
            +44 7464 062317
          </a>
          <Link href="/booking" onClick={() => setOpen(false)} className="btn-primary" style={{ textAlign: "center", fontSize: "1rem" }}>
            Get a Quote
          </Link>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) { .nav-desktop { display: flex !important; } .nav-burger { display: none !important; } }
        @media (max-width: 767px) { .nav-desktop { display: none !important; } .nav-burger { display: flex !important; } }
      `}</style>
    </>
  );
}
