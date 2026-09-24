

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useContext } from "react";

import { WorkoutContext } from "@/context/WorkoutContext";

const middleMenu = [
  {
    label: "Workouts",
    href: "/",
  },
  {
    label: "My Plan",
    href: "/my-plan",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Get live data from Context
  const { todayPlan, savePlan } =
    useContext(WorkoutContext);

  // Live counts
  const planCount = todayPlan.length;
  const savedCount = savePlan.length;

  // Active menu check
  const isActive = (href: string) => {
    if (href === "/") {
      return (
        pathname === "/" ||
        pathname.startsWith("/workouts/")
      );
    }

    return pathname.startsWith(href);
  };

  // Close mobile menu after clicking a link
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="container sticky top-0 z-50 mx-auto w-full border-b border-[#9CA3AF]/20 bg-[#0C0D10]">
      <nav className="mx-auto grid min-h-[72px] max-w-7xl grid-cols-3 items-center px-4 sm:px-6 lg:px-8">

        {/* =====================================
            LEFT - LOGO
        ====================================== */}

        <div className="justify-self-start">
          <Link
            href="/"
            onClick={closeMenu}
            className="group flex items-center gap-2"
            aria-label="FitLog Home"
          >
            {/* Logo Icon */}
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#C2F800] transition-transform duration-200 group-hover:scale-105">
              <span className="text-sm font-black text-[#0C0D10]">
                F
              </span>
            </div>

            {/* Logo Text */}
            <span className="text-xl font-black tracking-[-0.04em] text-white sm:text-2xl">
              FITLOG
            </span>
          </Link>
        </div>

        {/* =====================================
            CENTER - DESKTOP/TABLET MENU
        ====================================== */}

        <div className="hidden items-center justify-center gap-7 md:flex lg:gap-10">
          {middleMenu.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-2 text-sm font-semibold transition-colors duration-200 lg:text-base ${
                  active
                    ? "text-[#C2F800]"
                    : "text-[#9CA3AF] hover:text-white"
                }`}
              >
                {item.label}

                {/* Active underline */}
                {active && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-[#C2F800]" />
                )}
              </Link>
            );
          })}
        </div>

        {/* =====================================
            RIGHT - PLAN & SAVED
        ====================================== */}

        <div className="hidden items-center justify-self-end gap-3 md:flex lg:gap-4">

          {/* PLAN */}

          <Link
            href="/my-plan"
            className="flex items-center gap-2 rounded-full border border-transparent px-3 py-2 text-sm font-semibold text-[#9CA3AF] transition-all duration-200 hover:border-[#C2F800]/30 hover:text-white"
          >
            <span>Plan</span>

            {/* Live Plan Count */}
            <span className="flex min-w-6 items-center justify-center rounded-full bg-[#C2F800] px-1.5 py-0.5 text-xs font-bold text-[#0C0D10]">
              {planCount}
            </span>
          </Link>

          {/* SAVED */}

          <Link
            href="/my-plan"
            className="flex items-center gap-2 rounded-full border border-[#9CA3AF]/40 px-3 py-2 text-sm font-semibold text-[#9CA3AF] transition-all duration-200 hover:border-[#C2F800] hover:text-white"
          >
            <span>Saved</span>

            {/* Live Saved Count */}
            <span className="flex min-w-6 items-center justify-center rounded-full bg-[#9CA3AF]/10 px-1.5 py-0.5 text-xs font-bold text-[#9CA3AF]">
              {savedCount}
            </span>
          </Link>
        </div>

        {/* =====================================
            MOBILE MENU BUTTON
        ====================================== */}

        <div className="col-start-3 justify-self-end md:hidden">
          <button
            type="button"
            onClick={() =>
              setIsMenuOpen((prev) => !prev)
            }
            className="flex h-10 w-10 items-center justify-center rounded-md border border-[#9CA3AF]/30 text-[#9CA3AF] transition-colors duration-200 hover:border-[#C2F800] hover:text-[#C2F800]"
            aria-label={
              isMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              /* Close Icon */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              /* Hamburger Icon */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* =====================================
          MOBILE NAVIGATION
      ====================================== */}

      <div
        className={`overflow-hidden border-t border-[#9CA3AF]/20 transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 sm:px-6">

          {/* Middle Menu */}

          <div className="space-y-1">
            {middleMenu.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`block rounded-lg px-4 py-3 text-sm font-semibold transition-colors duration-200 ${
                    active
                      ? "bg-[#C2F800]/10 text-[#C2F800]"
                      : "text-[#9CA3AF] hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Divider */}

          <div
            className="my-3 h-px bg-[#9CA3AF]/30"
            aria-hidden="true"
          />

          {/* Right Menu */}

          <div className="space-y-1">

            {/* Plan */}

            <Link
              href="/my-plan"
              onClick={closeMenu}
              className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold text-[#9CA3AF] transition-colors duration-200 hover:bg-white/5 hover:text-white"
            >
              <span>Plan</span>

              <span className="flex min-w-7 items-center justify-center rounded-full bg-[#C2F800] px-2 py-1 text-xs font-bold text-[#0C0D10]">
                {planCount}
              </span>
            </Link>

            {/* Saved */}

            <Link
              href="/my-plan"
              onClick={closeMenu}
              className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold text-[#9CA3AF] transition-colors duration-200 hover:bg-white/5 hover:text-white"
            >
              <span>Save</span>

              <span className="flex min-w-7 items-center justify-center rounded-full border border-[#9CA3AF]/40 px-2 py-1 text-xs font-bold text-[#9CA3AF]">
                {savedCount}
              </span>
            </Link>

          </div>
        </div>
      </div>
    </header>
  );
}

