import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

import Navbar from "@/Component/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitLog — Workout Library",
  description:
    "FitLog is a dark, no-nonsense gym companion for tracking your workouts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable}`}
    >
      <body className=" bg-[#0C0D10] font-[family-name:var(--font-inter)] text-white antialiased">
        <Navbar />

        {children}
      </body>
    </html>
  );
}