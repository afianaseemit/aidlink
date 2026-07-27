import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AidLink",
  description: "Connecting Kindness with Communities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}