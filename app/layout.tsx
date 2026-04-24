import "./globals.css";

export const metadata = {
  title: "GB Contracting",
  description: "Agricultural contracting services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
