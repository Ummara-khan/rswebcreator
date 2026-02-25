import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Professional Web Design & Digital Marketing Agency | RS Web Creator",
  description: "From standout logo designs to dynamic websites, animations, and apps — we blend creativity with strategy to elevate your brand.",
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
