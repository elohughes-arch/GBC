"use client";
import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Link from "next/link";

const services = [
  "Ground Clearing",
  "Wood Splitting & Log Stacking",
  "Tree Felling & Removal",
  "Hedge Trimming & Maintenance",
  "Multiple Services",
  "Not Sure — Need Advice",
];

// ─────────────────────────────────────────────────────────────
// IMPORTANT: Replace YOUR_FORM_ID below with your Formspree ID.
// Sign up free at formspree.io → New Form → copy the ID.
// e.g. if your endpoint is https://formspree.io/f/xpzgvkqn
// then FORM_ID = "xpzgvkqn"
// ─────────────────────────────────────────────────────────────
const FORM_ID = "YOUR_FORM_ID";

export default function BookingPage() {
  const [fields, setFields] = useState({ name: "", phone: "", email: "", service: "", location: "", size: "", date: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const set = (k: string, v: string) => setFields(p => ({ ...p, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fields.name || !fields.phone || !fields.service) {
      setError("Please complete your name, phone and service type.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: fields.name,
          phone: fields.phone,
          email: fields.email,
          service: fields.service,
          location: fields.location,
          size: fields.size,
          preferredDate: fields.date,
          message: fields.message,
          _subject: `New enquiry from ${fields.name} — ${fields.service}`,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      setError("Something went wrong. Please call us directly on +44 7464 062317.");
    }
    setLoading(false);
  };

  const inputStyle = {
    width: "100%",
    padding: "0.9rem 1rem",
    border: "1.5px solid #e0e0e0",
    borderRadius: "3px",
    fontSize: "0.875rem",
    fontFamily: "'Inter',sans-serif",
    background: "#fff",
    color: "#000",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
    WebkitAppearance: "none" as const,
  };
  const labelStyle = {
    display: "block" as const,
    fontSize: "0.68rem",
    fontWeight: 600 as const,
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    color: "#666",
    marginBottom: "0.45rem",
  };

  if (submitted) return (
    <>
      <Nav />
      <div style={{ minHeight: "100svh", background: "#000", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem", textAlign: "center" }}>
        <div>
          <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#89ada0", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 2rem" }}>
            <svg width="28" height="22" viewBox="0 0 28 22" fill="none"><path d="M2 11L10 19L26 2" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <h2 style={{ fontFamily: "'DIN Condensed','Arial Narrow',sans-serif", fontWeight: 700, fontSize: "2.5rem", textTransform: "uppercase", color: "#fff", letterSpacing: "0.04em", marginBottom: "1rem" }}>
            Enquiry Sent
          </h2>
          <p style={{ color: "#888", fontSize: "0.9rem", lineHeight: 1.7, maxWidth: "360px", margin: "0 auto 0.75rem" }}>
            Thanks, {fields.name}. We'll be in touch within 24 hours to discuss your project.
          </p>
          <p style={{ color: "#555", fontSize: "0.85rem", marginBottom: "2rem" }}>
            Or call us now: <a href="tel:+447464062317" style={{ color: "#89ada0", textDecoration: "none" }}>+44 7464 062317</a>
          </p>
          <Link href="/" className="btn-primary">Back to Home</Link>
        </div>
      </div>
    </>
  );

  return (
    <>
      <Nav />

      {/* Header */}
      <div style={{ paddingTop: "7rem", paddingBottom: "3rem", paddingLeft: "2rem", paddingRight: "2rem", background: "#000" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div className="section-tag">Free Quote</div>
          <h1 style={{ fontFamily: "'DIN Condensed','Arial Narrow',Impact,sans-serif", fontWeight: 700, fontSize: "clamp(2.5rem, 8vw, 4rem)", color: "#fff", textTransform: "uppercase", letterSpacing: "0.02em", lineHeight: 0.92, marginBottom: "1rem" }}>
            Book a Service<br />
            <span style={{ color: "#89ada0" }}>or Get a Quote</span>
          </h1>
          <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
            Fill in the form and we'll respond within 24 hours. Prefer to talk? Call <a href="tel:+447464062317" style={{ color: "#89ada0", textDecoration: "none" }}>+44 7464 062317</a> directly.
          </p>
        </div>
      </div>

      {/* Form */}
      <div style={{ background: "#f5f5f5", padding: "3rem 2rem 6rem" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <form onSubmit={handleSubmit} noValidate>

            {/* Section 1 */}
            <div style={{ background: "#fff", borderRadius: "4px", padding: "2rem", marginBottom: "1.25rem", boxShadow: "0 1px 8px rgba(0,0,0,0.05)" }}>
              <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#89ada0", marginBottom: "1.5rem" }}>Your Details</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                <div>
                  <label style={labelStyle}>Full Name *</label>
                  <input type="text" value={fields.name} onChange={e => set("name", e.target.value)} placeholder="Your name" required style={inputStyle}
                    onFocus={e => { e.currentTarget.style.borderColor = "#89ada0"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(137,173,160,0.12)"; }}
                    onBlur={e => { e.currentTarget.style.borderColor = "#e0e0e0"; e.currentTarget.style.boxShadow = "none"; }} />
                </div>
                <div>
                  <label style={labelStyle}>Phone Number *</label>
                  <input type="tel" value={fields.phone} onChange={e => set("phone", e.target.value)} placeholder="Your phone number" required style={inputStyle}
                    onFocus={e => { e.currentTarget.style.borderColor = "#89ada0"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(137,173,160,0.12)"; }}
                    onBlur={e => { e.currentTarget.style.borderColor = "#e0e0e0"; e.currentTarget.style.boxShadow = "none"; }} />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Email Address</label>
                <input type="email" value={fields.email} onChange={e => set("email", e.target.value)} placeholder="your@email.com" style={inputStyle}
                  onFocus={e => { e.currentTarget.style.borderColor = "#89ada0"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(137,173,160,0.12)"; }}
                  onBlur={e => { e.currentTarget.style.borderColor = "#e0e0e0"; e.currentTarget.style.boxShadow = "none"; }} />
              </div>
            </div>

            {/* Section 2 */}
            <div style={{ background: "#fff", borderRadius: "4px", padding: "2rem", marginBottom: "1.25rem", boxShadow: "0 1px 8px rgba(0,0,0,0.05)" }}>
              <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#89ada0", marginBottom: "1.5rem" }}>Project Details</p>

              <div style={{ marginBottom: "1rem" }}>
                <label style={labelStyle}>Service Required *</label>
                <select value={fields.service} onChange={e => set("service", e.target.value)} required style={{ ...inputStyle, backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23666' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 0.75rem center", backgroundSize: "1.2rem", paddingRight: "2.5rem" }}
                  onFocus={e => { e.currentTarget.style.borderColor = "#89ada0"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(137,173,160,0.12)"; }}
                  onBlur={e => { e.currentTarget.style.borderColor = "#e0e0e0"; e.currentTarget.style.boxShadow = "none"; }}>
                  <option value="">Select a service...</option>
                  {services.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                <div>
                  <label style={labelStyle}>Location / Postcode</label>
                  <input type="text" value={fields.location} onChange={e => set("location", e.target.value)} placeholder="e.g. Taunton, TA1" style={inputStyle}
                    onFocus={e => { e.currentTarget.style.borderColor = "#89ada0"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(137,173,160,0.12)"; }}
                    onBlur={e => { e.currentTarget.style.borderColor = "#e0e0e0"; e.currentTarget.style.boxShadow = "none"; }} />
                </div>
                <div>
                  <label style={labelStyle}>Approximate Size</label>
                  <input type="text" value={fields.size} onChange={e => set("size", e.target.value)} placeholder="e.g. 2 acres, 50m hedge" style={inputStyle}
                    onFocus={e => { e.currentTarget.style.borderColor = "#89ada0"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(137,173,160,0.12)"; }}
                    onBlur={e => { e.currentTarget.style.borderColor = "#e0e0e0"; e.currentTarget.style.boxShadow = "none"; }} />
                </div>
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <label style={labelStyle}>Preferred Date</label>
                <input type="date" value={fields.date} onChange={e => set("date", e.target.value)} style={inputStyle}
                  onFocus={e => { e.currentTarget.style.borderColor = "#89ada0"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(137,173,160,0.12)"; }}
                  onBlur={e => { e.currentTarget.style.borderColor = "#e0e0e0"; e.currentTarget.style.boxShadow = "none"; }} />
              </div>

              <div>
                <label style={labelStyle}>Additional Details</label>
                <textarea value={fields.message} onChange={e => set("message", e.target.value)} placeholder="Tell us anything else about the job — access, timings, specific requirements..." rows={4}
                  style={{ ...inputStyle, resize: "vertical" as const }}
                  onFocus={e => { e.currentTarget.style.borderColor = "#89ada0"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(137,173,160,0.12)"; }}
                  onBlur={e => { e.currentTarget.style.borderColor = "#e0e0e0"; e.currentTarget.style.boxShadow = "none"; }} />
              </div>
            </div>

            {error && (
              <div style={{ background: "#fdf0ef", border: "1px solid #f5c6c0", borderRadius: "4px", padding: "0.85rem 1rem", marginBottom: "1rem" }}>
                <p style={{ fontSize: "0.85rem", color: "#c0392b" }}>{error}</p>
              </div>
            )}

            <button type="submit" disabled={loading} style={{
              width: "100%", background: loading ? "#89ada0" : "#000", color: "#fff", border: "none",
              padding: "1.1rem", fontFamily: "'DIN Condensed','Arial Narrow',sans-serif", fontWeight: 700,
              fontSize: "1rem", letterSpacing: "0.14em", textTransform: "uppercase", cursor: loading ? "not-allowed" : "pointer",
              borderRadius: "3px", transition: "background 0.2s",
            }}>
              {loading ? "Sending..." : "Submit Enquiry"}
            </button>

            <p style={{ textAlign: "center", fontSize: "0.78rem", color: "#999", marginTop: "1rem", lineHeight: 1.5 }}>
              We respond within 24 hours. Prefer to call?{" "}
              <a href="tel:+447464062317" style={{ color: "#89ada0", textDecoration: "none" }}>+44 7464 062317</a>
            </p>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}
