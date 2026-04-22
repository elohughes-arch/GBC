import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GB Contracting | Agricultural & Land Services — Somerset",
  description: "Professional agricultural contracting in Somerset. Ground clearing, tree felling, hedge trimming, wood splitting and more. Get a quote today.",
  keywords: "agricultural contracting somerset, ground clearing somerset, tree felling somerset, hedge trimming somerset",
  openGraph: {
    title: "GB Contracting | Agricultural & Land Services",
    description: "Professional agricultural contracting across Somerset.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body>{children}</body>
    </html>
  );
}
