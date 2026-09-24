import React from "react";
import { Dumbbell } from "lucide-react";

interface FooterProps {
  appName?: string;
  copyrightText?: string;
}

export default function Footer({
  appName = "FITLOG",
  copyrightText = "© 2026 FitLog — Workout Library. Train hard, log honest.",
}: FooterProps) {
  return (
    <footer className=" container mx-auto w-full border-t border-neutral-800/80 bg-[#0C0D10] py-6 px-6">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
        
        {/* Left Side: Brand Logo & Icon */}
        <div className="flex items-center gap-2 font-black tracking-wider text-white">
          <Dumbbell className="h-4 w-4 text-[#ccff00]" />
          <span>{appName}</span>
        </div>

        {/* Right Side: Copyright & Tagline */}
        <p className="text-center sm:text-right">{copyrightText}</p>

      </div>
    </footer>
  );
}