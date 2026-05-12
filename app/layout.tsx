// file: app/layout.tsx
import "./globals.css";
import { Inter, Barlow_Condensed } from "next/font/google";
import { ReactNode, useEffect, useState } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-barlow",
});

export const metadata = {
  title: {
    default: "GB Contracting – Premium Construction Services",
    template: `%s | GB Contracting`,
  },
  description:
    "High‑end residential & commercial construction. Glassmorphic design, premium service.",
  keywords: [
    "construction",
    "contracting",
    "glassmorphism",
    "neumorphism",
    "premium",
    "GB Contracting",
  ],
  openGraph: {
    title: "GB Contracting – Premium Construction Services",
    description:
      "High‑end residential & commercial construction with modern UI design.",
    url: "https://gbc-contracting.vercel.app",
    siteName: "GB Contracting",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GB Contracting hero",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GB Contracting – Premium Construction Services",
    description:
      "High‑end residential & commercial construction with modern UI design.",
    images: ["/og-image.jpg"],
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  // Persist dark/high‑contrast mode
  const [theme, setTheme] = useState<"light" | "dark" | "high">("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | "high";
    if (saved) setTheme(saved);
    else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark", "high");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <html lang="en" className={`${inter.variable} ${barlow.variable}`}>
      <Head>
        {/* JSON‑LD Organization schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "GB Contracting",
              url: "https://gbc-contracting.vercel.app",
              logo: "/logo.svg",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+1-555-123-4567",
                  contactType: "Customer Service",
                },
              ],
              sameAs: [
                "https://twitter.com/gbc_contracting",
                "https://linkedin.com/company/gbc-contracting",
              ],
            }),
          }}
        />
      </Head>
      <body className="bg-surface light:bg-white dark:bg-surface-dark min-h-screen font-sans antialiased">
        {/* Skip to content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only bg-teal-500 text-white p-2 rounded absolute left-4 top-4 z-50"
        >
          Skip to main content
        </a>

        <ThemeProvider theme={theme} setTheme={setTheme} />
        <div id="main-content">{children}</div>
      </body>
    </html>
  );
}
