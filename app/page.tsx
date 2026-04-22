import Link from "next/link";
import SplashScreen from "./components/SplashScreen";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const services = [
  {
    icon: "⛏",
    title: "Ground Clearing",
    description: "Full land clearance services including scrub removal, vegetation clearance, and site preparation for agriculture and development.",
    detail: "We handle all scales — from small field corners to large-scale land reclamation projects across Somerset.",
  },
  {
    icon: "🪵",
    title: "Wood Splitting & Log Stacking",
    description: "Professional firewood processing — splitting, sizing and neat stacking. Ideal for estates, farms, and domestic supply.",
    detail: "Available as a standalone service or as part of a wider tree and woodland management package.",
  },
  {
    icon: "🌲",
    title: "Tree Felling & Removal",
    description: "Safe, efficient felling of single trees or whole woodland sections. Full debris removal and site clearance included.",
    detail: "We work to minimise disruption and leave your land clean and ready for its next use.",
  },
  {
    icon: "✂️",
    title: "Hedge Trimming & Maintenance",
    description: "Seasonal hedge cutting, reshaping, and long-term maintenance contracts for farms, estates, and rural properties.",
    detail: "We use tractor-mounted and handheld equipment to achieve precise results across all hedge types and sizes.",
  },
];

const trustSignals = [
  { label: "Years Experience", value: "10+" },
  { label: "Jobs Completed", value: "500+" },
  { label: "Somerset Based", value: "Local" },
  { label: "Response Time", value: "24hr" },
];

export default function Home() {
  return (
    <>
      <SplashScreen />
      <Nav />

      {/* HERO */}
      <section
        style={{
          minHeight: "100svh",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          overflow: "hidden",
        }}
      >
        {/* Hero background — Unsplash farm/field image */}
        {/* NOTE: Replace with /images/field1.jpeg once you add your images to /public/images/ */}
        <img
          src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1200&q=80"
          alt="Somerset agricultural land"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.05) 35%, rgba(0,0,0,0.55) 65%, rgba(0,0,0,0.9) 100%)",
          }}
        />

        {/* Hero content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            padding: "2.5rem 1.5rem 4rem",
            maxWidth: "1100px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "inline-block",
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#89ada0",
              border: "1px solid #89ada0",
              padding: "0.25rem 0.6rem",
              marginBottom: "1.25rem",
            }}
          >
            Somerset, UK
          </div>
          <h1
            style={{
              fontFamily: "'DIN Condensed', 'Arial Narrow', Impact, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.8rem, 10vw, 5.5rem)",
              color: "#fff",
              lineHeight: 0.95,
              textTransform: "uppercase",
              letterSpacing: "0.02em",
              marginBottom: "1.25rem",
            }}
          >
            Land & Agricultural
            <br />
            <span style={{ color: "#89ada0" }}>Contracting</span>
          </h1>
          <p
            style={{
              fontSize: "clamp(0.9rem, 2.5vw, 1.05rem)",
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.6,
              maxWidth: "480px",
              marginBottom: "2rem",
            }}
          >
            Ground clearing, tree felling, hedge maintenance and more — delivered by an experienced Somerset-based team you can trust.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/booking">
              <button
                style={{
                  background: "#89ada0",
                  color: "#fff",
                  border: "none",
                  padding: "1rem 2rem",
                  fontFamily: "'DIN Condensed', 'Arial Narrow', sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  borderRadius: "4px",
                  transition: "background 0.2s",
                }}
              >
                Get a Free Quote
              </button>
            </Link>
            <Link href="/#services">
              <button
                style={{
                  background: "transparent",
                  color: "#fff",
                  border: "1.5px solid rgba(255,255,255,0.5)",
                  padding: "1rem 2rem",
                  fontFamily: "'DIN Condensed', 'Arial Narrow', sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  borderRadius: "4px",
                }}
              >
                Our Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section
        style={{
          background: "#000",
          padding: "1.5rem",
          borderBottom: "1px solid #1a1a1a",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "0.5rem",
            textAlign: "center",
          }}
        >
          {trustSignals.map((t) => (
            <div key={t.label} style={{ padding: "0.5rem" }}>
              <div
                style={{
                  fontFamily: "'DIN Condensed', 'Arial Narrow', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.8rem",
                  color: "#89ada0",
                  letterSpacing: "0.02em",
                }}
              >
                {t.value}
              </div>
              <div
                style={{
                  fontSize: "0.65rem",
                  color: "#666",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                }}
              >
                {t.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "5rem 1.5rem", background: "#fff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div
            style={{
              display: "inline-block",
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#89ada0",
              border: "1px solid #89ada0",
              padding: "0.25rem 0.6rem",
              marginBottom: "1rem",
            }}
          >
            What We Do
          </div>
          <h2
            style={{
              fontFamily: "'DIN Condensed', 'Arial Narrow', Impact, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.2rem, 6vw, 3.5rem)",
              textTransform: "uppercase",
              letterSpacing: "0.02em",
              color: "#000",
              marginBottom: "0.5rem",
              lineHeight: 1,
            }}
          >
            Our Services
          </h2>
          <p
            style={{
              fontSize: "0.9rem",
              color: "#666",
              maxWidth: "500px",
              lineHeight: 1.6,
              marginBottom: "3rem",
            }}
          >
            Specialist agricultural and land management contracting across Somerset and the surrounding areas.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1px",
              background: "#e8e8e8",
              border: "1px solid #e8e8e8",
            }}
          >
            {services.map((s, i) => (
              <div
                key={s.title}
                style={{
                  background: "#fff",
                  padding: "2rem 1.5rem",
                  transition: "background 0.3s",
                  cursor: "default",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "#f8f8f8";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "#fff";
                }}
              >
                <div
                  style={{
                    fontSize: "1.75rem",
                    marginBottom: "1rem",
                    display: "block",
                  }}
                >
                  {s.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'DIN Condensed', 'Arial Narrow', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    color: "#000",
                    marginBottom: "0.75rem",
                    lineHeight: 1.1,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "#555",
                    lineHeight: 1.65,
                    marginBottom: "0.75rem",
                  }}
                >
                  {s.description}
                </p>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "#888",
                    lineHeight: 1.6,
                  }}
                >
                  {s.detail}
                </p>

                {/* Teal accent line */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: "transparent",
                    transition: "background 0.3s",
                  }}
                  className={`accent-line-${i}`}
                />
              </div>
            ))}
          </div>

          <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
            <Link href="/booking">
              <button
                style={{
                  background: "#000",
                  color: "#fff",
                  border: "none",
                  padding: "1rem 2.5rem",
                  fontFamily: "'DIN Condensed', 'Arial Narrow', sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  borderRadius: "4px",
                  transition: "background 0.2s",
                }}
              >
                Enquire About a Service →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* PHOTO SECTION */}
      <section style={{ padding: "0", background: "#000" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2px",
          }}
        >
          {/* NOTE: Replace these src values with /images/field1.jpeg etc once your images are in /public/images/ */}
          {[
            {
              src: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=75",
              alt: "Agricultural field work",
            },
            {
              src: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&q=75",
              alt: "Land clearing",
            },
            {
              src: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&q=75",
              alt: "Tree work",
            },
            {
              src: "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?w=800&q=75",
              alt: "Hedge maintenance",
            },
          ].map((img, i) => (
            <div key={i} style={{ overflow: "hidden", aspectRatio: "4/3" }}>
              <img
                src={img.src}
                alt={img.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.6s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT / TRUST */}
      <section id="about" style={{ padding: "5rem 1.5rem", background: "#f5f5f5" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3rem",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-block",
                  fontSize: "0.65rem",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#89ada0",
                  border: "1px solid #89ada0",
                  padding: "0.25rem 0.6rem",
                  marginBottom: "1rem",
                }}
              >
                Why Choose Us
              </div>
              <h2
                style={{
                  fontFamily: "'DIN Condensed', 'Arial Narrow', Impact, sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(2rem, 5vw, 3rem)",
                  textTransform: "uppercase",
                  color: "#000",
                  marginBottom: "1.25rem",
                  lineHeight: 1,
                }}
              >
                Reliable,
                <br />
                Local Expertise
              </h2>
              <p style={{ fontSize: "0.9rem", color: "#555", lineHeight: 1.7, marginBottom: "1rem" }}>
                GB Contracting is a Somerset-based agricultural contracting business with years of hands-on experience working across farms, estates and rural properties throughout the region.
              </p>
              <p style={{ fontSize: "0.9rem", color: "#555", lineHeight: 1.7, marginBottom: "2rem" }}>
                We take pride in turning up on time, doing the job properly, and leaving your land in better shape than we found it. No job too small.
              </p>

              {/* Trust list */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  "Locally owned and operated in Somerset",
                  "Fully insured for agricultural and land work",
                  "All equipment maintained to professional standards",
                  "Flexible scheduling including weekends",
                  "Free site visits and no-obligation quotes",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                    }}
                  >
                    <div
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        background: "#89ada0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: "1px",
                      }}
                    >
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span style={{ fontSize: "0.85rem", color: "#444", lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial block */}
            <div
              style={{
                background: "#000",
                color: "#fff",
                padding: "2rem",
                borderRadius: "6px",
              }}
            >
              <div
                style={{
                  fontSize: "2.5rem",
                  color: "#89ada0",
                  fontFamily: "Georgia, serif",
                  lineHeight: 1,
                  marginBottom: "1rem",
                }}
              >
                "
              </div>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.85)",
                  marginBottom: "1.5rem",
                  fontStyle: "italic",
                }}
              >
                Brilliant work — cleared our overgrown corner field in a day. Professional, tidy, and great value. Would highly recommend to any Somerset farmers or landowners.
              </p>
              <div>
                <div
                  style={{
                    fontFamily: "'DIN Condensed', 'Arial Narrow', sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#89ada0",
                  }}
                >
                  Local Farmer, Somerset
                </div>
              </div>

              <div
                style={{
                  marginTop: "2rem",
                  paddingTop: "2rem",
                  borderTop: "1px solid #222",
                }}
              >
                <p
                  style={{
                    fontSize: "0.7rem",
                    color: "#666",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: "0.75rem",
                  }}
                >
                  Ready to get started?
                </p>
                <Link href="/booking">
                  <button
                    style={{
                      background: "#89ada0",
                      color: "#fff",
                      border: "none",
                      padding: "0.875rem 1.75rem",
                      fontFamily: "'DIN Condensed', 'Arial Narrow', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      borderRadius: "4px",
                      width: "100%",
                    }}
                  >
                    Request a Quote
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" style={{ padding: "5rem 1.5rem", background: "#000" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-block",
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#89ada0",
              border: "1px solid #89ada0",
              padding: "0.25rem 0.6rem",
              marginBottom: "1.25rem",
            }}
          >
            Get in Touch
          </div>
          <h2
            style={{
              fontFamily: "'DIN Condensed', 'Arial Narrow', Impact, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.2rem, 6vw, 4rem)",
              textTransform: "uppercase",
              color: "#fff",
              lineHeight: 1,
              marginBottom: "1.25rem",
            }}
          >
            Let's Talk About
            <br />
            <span style={{ color: "#89ada0" }}>Your Project</span>
          </h2>
          <p
            style={{
              fontSize: "0.9rem",
              color: "rgba(255,255,255,0.6)",
              maxWidth: "440px",
              margin: "0 auto 2.5rem",
              lineHeight: 1.7,
            }}
          >
            We offer free no-obligation site visits and quotes. Get in touch today and we'll come to you.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "3rem",
            }}
          >
            <Link href="/booking">
              <button
                style={{
                  background: "#89ada0",
                  color: "#fff",
                  border: "none",
                  padding: "1rem 2.5rem",
                  fontFamily: "'DIN Condensed', 'Arial Narrow', sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  borderRadius: "4px",
                }}
              >
                Book Online
              </button>
            </Link>
            <a href="tel:+441234567890" style={{ textDecoration: "none" }}>
              <button
                style={{
                  background: "transparent",
                  color: "#fff",
                  border: "1.5px solid rgba(255,255,255,0.3)",
                  padding: "1rem 2.5rem",
                  fontFamily: "'DIN Condensed', 'Arial Narrow', sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  borderRadius: "4px",
                }}
              >
                Call Us
              </button>
            </a>
          </div>

          {/* Contact details */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "1.5rem",
              maxWidth: "700px",
              margin: "0 auto",
              paddingTop: "2rem",
              borderTop: "1px solid #1a1a1a",
            }}
          >
            {[
              { label: "Phone", value: "Add Your Number", icon: "📞" },
              { label: "Email", value: "Add Your Email", icon: "✉️" },
              { label: "Area", value: "Somerset & Surrounds", icon: "📍" },
            ].map((c) => (
              <div key={c.label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "1.2rem", marginBottom: "0.4rem" }}>{c.icon}</div>
                <div
                  style={{
                    fontSize: "0.65rem",
                    color: "#89ada0",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    marginBottom: "0.25rem",
                  }}
                >
                  {c.label}
                </div>
                <div style={{ fontSize: "0.85rem", color: "#999" }}>{c.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
