import type { Metadata } from "next";
import "./globals.css";

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
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body>{children}</body>
    </html>
  );
}
