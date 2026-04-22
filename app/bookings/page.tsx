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
  "Other / Not Sure",
];

export default function BookingPage() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    location: "",
    size: "",
    date: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.phone || !formState.service) {
      setError("Please fill in your name, phone number, and service required.");
      return;
    }
    setLoading(true);
    setError("");
    // Simulate form submission — connect to your backend/email service
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <Nav />
        <div
          style={{
            minHeight: "100svh",
            background: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <div>
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                background: "#89ada0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 2rem",
              }}
            >
              <svg width="28" height="22" viewBox="0 0 28 22" fill="none">
                <path d="M2 11L10 19L26 2" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2
              style={{
                fontFamily: "'DIN Condensed', 'Arial Narrow', sans-serif",
                fontWeight: 700,
                fontSize: "2.5rem",
                textTransform: "uppercase",
                color: "#fff",
                letterSpacing: "0.04em",
                marginBottom: "1rem",
              }}
            >
              Enquiry Received
            </h2>
            <p style={{ color: "#888", fontSize: "0.9rem", lineHeight: 1.7, maxWidth: "380px", margin: "0 auto 2rem" }}>
              Thanks, {formState.name}. We'll be in touch within 24 hours to discuss your requirements and arrange a site visit.
            </p>
            <Link href="/">
              <button
                style={{
                  background: "#89ada0",
                  color: "#fff",
                  border: "none",
                  padding: "0.875rem 2rem",
                  fontFamily: "'DIN Condensed', 'Arial Narrow', sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  borderRadius: "4px",
                }}
              >
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Nav />

      {/* Page header */}
      <div
        style={{
          paddingTop: "7rem",
          paddingBottom: "3rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          background: "#000",
          borderBottom: "1px solid #1a1a1a",
        }}
      >
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
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
            Free Quote
          </div>
          <h1
            style={{
              fontFamily: "'DIN Condensed', 'Arial Narrow', Impact, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.2rem, 8vw, 3.5rem)",
              color: "#fff",
              textTransform: "uppercase",
              letterSpacing: "0.02em",
              lineHeight: 0.95,
              marginBottom: "1rem",
            }}
          >
            Book a Service
            <br />
            <span style={{ color: "#89ada0" }}>or Get a Quote</span>
          </h1>
          <p style={{ fontSize: "0.9rem", color: "#888", lineHeight: 1.7 }}>
            Fill in the form below and we'll get back to you within 24 hours. We offer free site visits and no-obligation quotes across Somerset.
          </p>
        </div>
      </div>

      {/* Form */}
      <div style={{ background: "#f5f5f5", padding: "3rem 1.5rem 5rem" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <form onSubmit={handleSubmit}>
            <div
              style={{
                background: "#fff",
                borderRadius: "8px",
                padding: "2rem",
                boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
                marginBottom: "1.5rem",
              }}
            >
              <p
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#89ada0",
                  marginBottom: "1.5rem",
                }}
              >
                Your Details
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#555",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Full Name *
                  </label>
                  <input
                    name="name"
                    type="text"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    style={{
                      width: "100%",
                      padding: "0.85rem 1rem",
                      border: "1.5px solid #e8e8e8",
                      borderRadius: "4px",
                      fontSize: "0.9rem",
                      fontFamily: "'Inter', sans-serif",
                      outline: "none",
                      transition: "border-color 0.2s",
                      background: "#fff",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#89ada0")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "#e8e8e8")}
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#555",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Phone *
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    required
                    style={{
                      width: "100%",
                      padding: "0.85rem 1rem",
                      border: "1.5px solid #e8e8e8",
                      borderRadius: "4px",
                      fontSize: "0.9rem",
                      fontFamily: "'Inter', sans-serif",
                      outline: "none",
                      transition: "border-color 0.2s",
                      background: "#fff",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#89ada0")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "#e8e8e8")}
                  />
                </div>
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#555",
                    marginBottom: "0.4rem",
                  }}
                >
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  style={{
                    width: "100%",
                    padding: "0.85rem 1rem",
                    border: "1.5px solid #e8e8e8",
                    borderRadius: "4px",
                    fontSize: "0.9rem",
                    fontFamily: "'Inter', sans-serif",
                    outline: "none",
                    transition: "border-color 0.2s",
                    background: "#fff",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#89ada0")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#e8e8e8")}
                />
              </div>
            </div>

            {/* Service details */}
            <div
              style={{
                background: "#fff",
                borderRadius: "8px",
                padding: "2rem",
                boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
                marginBottom: "1.5rem",
              }}
            >
              <p
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#89ada0",
                  marginBottom: "1.5rem",
                }}
              >
                Service Required
              </p>

              <div style={{ marginBottom: "1rem" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#555",
                    marginBottom: "0.4rem",
                  }}
                >
                  Service Type *
                </label>
                <select
                  name="service"
                  value={formState.service}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "0.85rem 1rem",
                    border: "1.5px solid #e8e8e8",
                    borderRadius: "4px",
                    fontSize: "0.9rem",
                    fontFamily: "'Inter', sans-serif",
                    outline: "none",
                    background: "#fff",
                    appearance: "none",
                    backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 0.75rem center",
                    backgroundSize: "1.25rem",
                  }}
                >
                  <option value="">Select a service...</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#555",
                    marginBottom: "0.4rem",
                  }}
                >
                  Location / Postcode
                </label>
                <input
                  name="location"
                  type="text"
                  value={formState.location}
                  onChange={handleChange}
                  placeholder="e.g. Taunton, TA1"
                  style={{
                    width: "100%",
                    padding: "0.85rem 1rem",
                    border: "1.5px solid #e8e8e8",
                    borderRadius: "4px",
                    fontSize: "0.9rem",
                    fontFamily: "'Inter', sans-serif",
                    outline: "none",
                    transition: "border-color 0.2s",
                    background: "#fff",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#89ada0")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#e8e8e8")}
                />
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#555",
                    marginBottom: "0.4rem",
                  }}
                >
                  Approximate Size / Scope
                </label>
                <input
                  name="size"
                  type="text"
                  value={formState.size}
                  onChange={handleChange}
                  placeholder="e.g. 2 acres, 50m hedge, 3 trees"
                  style={{
                    width: "100%",
                    padding: "0.85rem 1rem",
                    border: "1.5px solid #e8e8e8",
                    borderRadius: "4px",
                    fontSize: "0.9rem",
                    fontFamily: "'Inter', sans-serif",
                    outline: "none",
                    transition: "border-color 0.2s",
                    background: "#fff",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#89ada0")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#e8e8e8")}
                />
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#555",
                    marginBottom: "0.4rem",
                  }}
                >
                  Preferred Date
                </label>
                <input
                  name="date"
                  type="date"
                  value={formState.date}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "0.85rem 1rem",
                    border: "1.5px solid #e8e8e8",
                    borderRadius: "4px",
                    fontSize: "0.9rem",
                    fontFamily: "'Inter', sans-serif",
                    outline: "none",
                    transition: "border-color 0.2s",
                    background: "#fff",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#89ada0")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#e8e8e8")}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#555",
                    marginBottom: "0.4rem",
                  }}
                >
                  Additional Details
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Any extra information about the job..."
                  rows={4}
                  style={{
                    width: "100%",
                    padding: "0.85rem 1rem",
                    border: "1.5px solid #e8e8e8",
                    borderRadius: "4px",
                    fontSize: "0.9rem",
                    fontFamily: "'Inter', sans-serif",
                    outline: "none",
                    transition: "border-color 0.2s",
                    background: "#fff",
                    resize: "vertical",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#89ada0")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#e8e8e8")}
                />
              </div>
            </div>

            {error && (
              <p
                style={{
                  color: "#c0392b",
                  fontSize: "0.85rem",
                  marginBottom: "1rem",
                  padding: "0.75rem 1rem",
                  background: "#fdf0ef",
                  borderRadius: "4px",
                  border: "1px solid #f5c6c0",
                }}
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                background: loading ? "#89ada0" : "#000",
                color: "#fff",
                border: "none",
                padding: "1.1rem",
                fontFamily: "'DIN Condensed', 'Arial Narrow', sans-serif",
                fontWeight: 700,
                fontSize: "1.1rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                cursor: loading ? "not-allowed" : "pointer",
                borderRadius: "4px",
                transition: "background 0.2s",
              }}
            >
              {loading ? "Sending..." : "Submit Enquiry →"}
            </button>

            <p
              style={{
                textAlign: "center",
                fontSize: "0.75rem",
                color: "#999",
                marginTop: "1rem",
                lineHeight: 1.5,
              }}
            >
              We'll respond within 24 hours. Free site visits and no-obligation quotes.
            </p>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}
