import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#000",
        color: "#fff",
        padding: "3rem 1.5rem 2rem",
        borderTop: "1px solid #222",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            marginBottom: "2.5rem",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'DIN Condensed', 'Arial Narrow', Impact, sans-serif",
                fontWeight: 700,
                fontSize: "1.8rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#fff",
                marginBottom: "0.25rem",
              }}
            >
              GB Contracting
            </div>
            <p
              style={{
                fontSize: "0.8rem",
                color: "#89ada0",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Agricultural & Land Services
            </p>
            <p style={{ fontSize: "0.85rem", color: "#888", lineHeight: 1.6 }}>
              Somerset-based agricultural contractors delivering quality ground and land management services across the region.
            </p>
          </div>

          <div>
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#89ada0",
                marginBottom: "1rem",
              }}
            >
              Services
            </p>
            {["Ground Clearing", "Wood Splitting & Log Stacking", "Tree Felling & Removal", "Hedge Trimming & Maintenance"].map((s) => (
              <div key={s} style={{ marginBottom: "0.5rem" }}>
                <Link
                  href="/#services"
                  style={{ fontSize: "0.85rem", color: "#999", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#999")}
                >
                  {s}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid #222",
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          <p style={{ fontSize: "0.75rem", color: "#555" }}>
            © {new Date().getFullYear()} GB Contracting. All rights reserved. Somerset.
          </p>
          <Link href="/booking">
            <span
              style={{
                fontSize: "0.75rem",
                color: "#89ada0",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Book a service →
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
