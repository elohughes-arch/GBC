"use client";
import Link from "next/link";
import SplashScreen from "./components/SplashScreen";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import TrustStats from "./components/TrustStats";

const services = [
  {
    num: "01",
    title: "Ground Clearing",
    short: "Full land clearance. Scrub, vegetation, and site preparation for agricultural and development use.",
    detail: "We handle all scales — from overgrown field margins to large-scale land reclamation across Somerset. Sites left clean and ready.",
  },
  {
    num: "02",
    title: "Wood Splitting & Log Stacking",
    short: "Professional firewood processing — split, sized, and neatly stacked to your specification.",
    detail: "Available as a standalone service or as part of a wider tree and woodland management package.",
  },
  {
    num: "03",
    title: "Tree Felling & Removal",
    short: "Safe, efficient felling of single trees or whole woodland sections. Full debris clearance included.",
    detail: "We work methodically to minimise disruption and leave your land clean and ready for its next use.",
  },
  {
    num: "04",
    title: "Hedge Trimming & Maintenance",
    short: "Seasonal cutting, reshaping, and ongoing maintenance contracts for farms, estates and rural properties.",
    detail: "Tractor-mounted and handheld equipment — precise results across all hedge types and sizes.",
  },
];

export default function Home() {
  return (
    <>
      <SplashScreen />
      <Nav />

      {/* ── HERO ── */}
      <section style={{ minHeight: "100svh", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", overflow: "hidden" }}>
        {/* Replace src with /cleared-1.jpeg once your image is in /public */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/cleared-1.jpeg"
          alt="GB Contracting land clearance Somerset"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.background = "#1a2e25";
            (e.currentTarget as HTMLImageElement).src = "";
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.05) 30%, rgba(0,0,0,0.55) 65%, rgba(0,0,0,0.92) 100%)" }} />

        <div style={{ position: "relative", zIndex: 2, padding: "2rem 2rem 5rem", maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
          <div className="section-tag fade-up fade-up-1">Taunton, Somerset</div>
          <h1 className="fade-up fade-up-2" style={{
            fontFamily: "'DIN Condensed','Arial Narrow',Impact,sans-serif",
            fontWeight: 700,
            fontSize: "clamp(3rem, 11vw, 6.5rem)",
            color: "#fff",
            lineHeight: 0.92,
            textTransform: "uppercase",
            letterSpacing: "0.01em",
            marginBottom: "1.5rem",
          }}>
            Land & Ground<br />
            <span style={{ color: "#89ada0" }}>Contracting</span><br />
            Done Right.
          </h1>
          <p className="fade-up fade-up-3" style={{ fontSize: "clamp(0.9rem, 2vw, 1.05rem)", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, maxWidth: "440px", marginBottom: "2.5rem" }}>
            Ground clearing, tree felling, hedge maintenance and log splitting — delivered by a Somerset team with a decade of hands-on experience.
          </p>
          <div className="fade-up fade-up-3" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/booking" className="btn-primary">Get a Free Quote</Link>
            <a href="tel:+447464062317" className="btn-outline-white">Call +44 7464 062317</a>
          </div>
        </div>
      </section>

      {/* ── TRUST STATS ── */}
      <TrustStats />

      {/* ── SERVICES ── */}
      <section id="services" style={{ padding: "6rem 2rem", background: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1.5rem", marginBottom: "3.5rem" }}>
            <div>
              <div className="section-tag">What We Do</div>
              <h2 style={{ fontFamily: "'DIN Condensed','Arial Narrow',Impact,sans-serif", fontWeight: 700, fontSize: "clamp(2.2rem, 5vw, 3.5rem)", textTransform: "uppercase", color: "#000", lineHeight: 0.95 }}>
                Our Services
              </h2>
            </div>
            <p style={{ fontSize: "0.9rem", color: "#666", maxWidth: "380px", lineHeight: 1.7 }}>
              Agricultural and land management contracting across Taunton, Somerset and the surrounding region.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: "1px", background: "#e8e8e8", border: "1px solid #e8e8e8" }}>
            {services.map(s => (
              <div key={s.title} className="service-card">
                <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", color: "#89ada0", marginBottom: "1.25rem" }}>{s.num}</div>
                <h3 style={{ fontFamily: "'DIN Condensed','Arial Narrow',sans-serif", fontWeight: 700, fontSize: "1.35rem", textTransform: "uppercase", letterSpacing: "0.04em", color: "#000", marginBottom: "0.85rem", lineHeight: 1 }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "#444", lineHeight: 1.7, marginBottom: "0.85rem" }}>{s.short}</p>
                <p style={{ fontSize: "0.8rem", color: "#888", lineHeight: 1.65 }}>{s.detail}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "2.5rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/booking" className="btn-dark">Request a Quote</Link>
            <a href="tel:+447464062317" style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "#555", textDecoration: "none", fontWeight: 500 }}>
              Or call us directly: <span style={{ color: "#000", fontWeight: 600 }}>+44 7464 062317</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── PHOTO GRID ── */}
      <section style={{ background: "#000" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridTemplateRows: "repeat(2, 240px)", gap: "2px" }}>
          {[
            { src: "/log-stack.jpeg", alt: "Log stacking Somerset" },
            { src: "/log-splitting.jpeg", alt: "Log splitting service" },
            { src: "/cleared-1.jpeg", alt: "Ground clearing Somerset" },
            { src: "/cleared-2.jpeg", alt: "Land clearance Somerset" },
          ].map((img, i) => (
            <div key={i} className="photo-wrap" style={{ gridColumn: i === 0 ? "1" : undefined, gridRow: i === 0 ? "1" : undefined }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.src} alt={img.alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT / TRUST ── */}
      <section id="about" style={{ padding: "6rem 2rem", background: "#f7f7f7" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "start" }}>
          <div>
            <div className="section-tag">Who We Are</div>
            <h2 style={{ fontFamily: "'DIN Condensed','Arial Narrow',Impact,sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", textTransform: "uppercase", color: "#000", lineHeight: 0.95, marginBottom: "1.5rem" }}>
              Reliable.<br />Local.<br />Professional.
            </h2>
            <p style={{ fontSize: "0.9rem", color: "#555", lineHeight: 1.75, marginBottom: "1rem" }}>
              GB Contracting is a Taunton-based agricultural contracting business with a decade of hands-on experience working across farms, estates and rural properties throughout Somerset.
            </p>
            <p style={{ fontSize: "0.9rem", color: "#555", lineHeight: 1.75, marginBottom: "2rem" }}>
              We turn up when we say we will, do the job properly, and leave your land in better shape than we found it. No job is too small.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
              {[
                "Locally owned and operated in Taunton, Somerset",
                "Fully insured for agricultural and land work",
                "All equipment maintained to professional standards",
                "Flexible scheduling — including weekends",
                "Free site visits and no-obligation quotes",
              ].map(item => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#89ada0", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                    <svg width="9" height="7" viewBox="0 0 9 7" fill="none"><path d="M1 3.5L3 5.5L8 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span style={{ fontSize: "0.85rem", color: "#444", lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div>
            <div className="testimonial-card" style={{ background: "#1a2e25", padding: "2.5rem", borderRadius: "4px" }}>
              <div style={{ width: 36, height: 2, background: "#89ada0", marginBottom: "1.5rem" }} />
              <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(255,255,255,0.88)", fontStyle: "italic", marginBottom: "2rem" }}>
                "Mungo took down some trees for me a few months ago. I was very impressed by his knowledge, skills and emphasis on safety first. He's also an incredibly polite and straightforward supplier. He did the job quickly, efficiently and with zero fuss. I will use him again and I recommend him highly without hesitation."
              </p>
              <div>
                <div style={{ fontFamily: "'DIN Condensed','Arial Narrow',sans-serif", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#89ada0" }}>
                  Nick Hughes
                </div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em", marginTop: "3px" }}>Local Client, Somerset</div>
              </div>
            </div>

            {/* Quick CTA */}
            <div style={{ marginTop: "1.5rem", background: "#000", padding: "2rem", borderRadius: "4px" }}>
              <p style={{ fontSize: "0.75rem", color: "#666", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Free site visit — no obligation</p>
              <p style={{ fontSize: "0.95rem", color: "#fff", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                Tell us about your project and we'll come to you. Quotes are free, and there's no pressure.
              </p>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <Link href="/booking" className="btn-primary" style={{ flex: 1, textAlign: "center" }}>Book Online</Link>
                <a href="tel:+447464062317" className="btn-outline-white" style={{ flex: 1, textAlign: "center" }}>Call Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: "6rem 2rem", background: "#000" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
            <div>
              <div className="section-tag">Get in Touch</div>
              <h2 style={{ fontFamily: "'DIN Condensed','Arial Narrow',Impact,sans-serif", fontWeight: 700, fontSize: "clamp(2.2rem, 5vw, 4rem)", textTransform: "uppercase", color: "#fff", lineHeight: 0.92, marginBottom: "1.5rem" }}>
                Let's Talk<br />
                <span style={{ color: "#89ada0" }}>About Your<br />Project.</span>
              </h2>
              <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, maxWidth: "380px", marginBottom: "2.5rem" }}>
                We cover Taunton and all surrounding Somerset areas. Get in touch — we'll arrange a free site visit and quote at your convenience.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { label: "Phone", val: "+44 7464 062317", href: "tel:+447464062317" },
                  { label: "Email", val: "hello@gbcontracting.co.uk", href: "mailto:hello@gbcontracting.co.uk" },
                  { label: "Area", val: "Taunton, Somerset & Surrounding", href: null },
                ].map(c => (
                  <div key={c.label} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#89ada0", paddingTop: "2px", minWidth: "44px" }}>{c.label}</div>
                    {c.href ? (
                      <a href={c.href} style={{ fontSize: "0.9rem", color: "#fff", textDecoration: "none", fontWeight: 500, transition: "color 0.2s" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "#89ada0")}
                        onMouseLeave={e => (e.currentTarget.style.color = "#fff")}>
                        {c.val}
                      </a>
                    ) : (
                      <span style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)" }}>{c.val}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Link href="/booking" className="btn-primary" style={{ textAlign: "center", fontSize: "1rem", padding: "1.1rem 2rem" }}>
                Book a Free Site Visit
              </Link>
              <a href="tel:+447464062317" className="btn-outline-white" style={{ textAlign: "center", fontSize: "1rem", padding: "1.1rem 2rem" }}>
                Call +44 7464 062317
              </a>
              <a href="mailto:hello@gbcontracting.co.uk" style={{ textAlign: "center", fontSize: "0.85rem", color: "rgba(255,255,255,0.4)", textDecoration: "none", padding: "0.5rem", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}>
                hello@gbcontracting.co.uk
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
