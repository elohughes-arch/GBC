import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#000000",
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
};

export const metadata: Metadata = {
  title: "GB Contracting | Agricultural & Land Services — Taunton, Somerset",
  description: "Agricultural contracting in Taunton, Somerset. Ground clearing, tree felling, hedge trimming, log splitting. Free quotes. Call +44 7464 062317.",
  keywords: "agricultural contracting taunton somerset, ground clearing somerset, tree felling taunton, hedge trimming somerset, log splitting somerset",
  openGraph: {
    title: "GB Contracting | Taunton, Somerset",
    description: "Ground clearing, tree felling, hedge maintenance & log splitting across Somerset.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Added Barlow Condensed to support the heading styles */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Barlow+Condensed:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
