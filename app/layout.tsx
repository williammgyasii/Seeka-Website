import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Seekr — Discover, Qualify & Win Opportunities",
  description:
    "Seekr is your all-in-one platform for opportunity discovery, qualification, outreach, and pipeline management. Whether you're job hunting, freelancing, or building a business — Seekr helps you find and win.",
  keywords: [
    "job search",
    "freelancing",
    "business development",
    "opportunity management",
    "outreach",
    "pipeline management",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
