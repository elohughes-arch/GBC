import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#1a2e25", color: "#fff" }}>
      {/* CTA strip */}
      <div style={{ background: "#89ada0", padding: "1.5rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
        <div>
          <div style={{ fontFamily: "'DIN Condensed','Arial Narrow',sans-serif", fontWeight: 700, fontSize: "1.3rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "#fff" }}>
            Ready to get started?
          </div>
          <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.8)", marginTop: "2px" }}>
            Free site visit and no-obligation quote across Taunton and surrounding areas
          </div>
        </div>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <a href="tel:+447464062317" style={{ background: "#fff", color: "#1a2e25", border: "none", padding: "0.7rem 1.6rem", fontFamily: "'DIN Condensed','Arial Narrow',sans-serif", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", borderRadius: "2px", textDecoration: "none", transition: "background 0.2s" }}>
            Call: +44 7464 062317
          </a>
          <Link href="/booking" style={{ background: "#000", color: "#fff", border: "none", padding: "0.7rem 1.6rem", fontFamily: "'DIN Condensed','Arial Narrow',sans-serif", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", borderRadius: "2px", textDecoration: "none" }}>
            Book Online
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div style={{ padding: "4rem 2rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "3rem", marginBottom: "3rem" }}>

          {/* Brand */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="GB Contracting" style={{ height: 44, width: "auto", objectFit: "contain", marginBottom: "1rem", filter: "brightness(0) invert(1)" }}
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            />
            <div style={{ fontFamily: "'DIN Condensed','Arial Narrow',sans-serif", fontWeight: 700, fontSize: "1.4rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "#fff", marginBottom: "0.5rem" }}>
              GB Contracting
            </div>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: "1.25rem" }}>
              Agricultural and land management contractors based in Taunton, Somerset. Serving farms, estates and rural properties across the region.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <a href="tel:+447464062317" style={{ color: "#89ada0", textDecoration: "none", fontSize: "0.9rem", fontWeight: 500 }}>+44 7464 062317</a>
              <a href="mailto:hello@gbcontracting.co.uk" style={{ color: "#89ada0", textDecoration: "none", fontSize: "0.85rem" }}>hello@gbcontracting.co.uk</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#89ada0", marginBottom: "1.25rem" }}>Services</div>
            {["Ground Clearing", "Wood Splitting & Log Stacking", "Tree Felling & Removal", "Hedge Trimming & Maintenance"].map(s => (
              <div key={s}>
                <Link href="/#services" className="footer-link">{s}</Link>
              </div>
            ))}
          </div>

          {/* Area */}
          <div>
            <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#89ada0", marginBottom: "1.25rem" }}>Service Area</div>
            {["Taunton", "Bridgwater", "Wellington", "Yeovil", "Chard", "Minehead", "Glastonbury", "Surrounding Somerset"].map(a => (
              <div key={a} style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.85rem", lineHeight: 2 }}>{a}</div>
            ))}
          </div>

          {/* Trust */}
          <div>
            <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#89ada0", marginBottom: "1.25rem" }}>Why GB Contracting</div>
            {[
              "Fully insured",
              "Free site visits",
              "No-obligation quotes",
              "Flexible scheduling",
              "24hr response",
              "Local Somerset business",
            ].map(t => (
              <div key={t} style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#89ada0", flexShrink: 0 }} />
                <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.82rem" }}>{t}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.75rem" }}>
          <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)" }}>
            © {new Date().getFullYear()} GB Contracting Ltd. Taunton, Somerset. All rights reserved.
          </p>
          <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.25)" }}>
            Agricultural & Land Management Contractors
          </p>
        </div>
      </div>
    </footer>
  );
}
