import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Inter } from "next/font/google";

import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Amodh Dhakal | Portfolio",
  description: "Build with NextJS",
};

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
      <Analytics />
      <SpeedInsights />
    </html>
  );
}
