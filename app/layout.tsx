"use client";

import { SpeedInsights } from "@vercel/speed-insights/next";

import type { Metadata } from "next";
import "./globals.css";
import { useState } from "react";

/* Primary Meta Tags */
export const metadata: Metadata = {
  title: "Cornelius | Portfolio",
  description:
    "Welcome to my portfolio website! I'm a passionate web developer with expertise in React, Next.js, and other modern web technologies. Browse my projects and learn more about my skills and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  function toggleTheme() {
    setIsDarkTheme((prevMode) => !prevMode);
  }

  return (
    <html lang="en">
      <body>
        {children}
        <button>Theme</button>
      </body>
    </html>
  );
}
