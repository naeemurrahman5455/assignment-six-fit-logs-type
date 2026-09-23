import React from 'react';

export default function Loading(): React.ReactNode {
  return (
    <div className="min-h-screen bg-[#0d0f12] text-white animate-pulse">
      {/* 1. Header / Navbar Skeleton */}
      <header className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo Placeholder */}
        <div className="h-8 w-28 bg-neutral-800 rounded-lg" />

        {/* Center Nav Links Placeholder */}
        <div className="hidden md:flex items-center gap-6">
          <div className="h-9 w-24 bg-neutral-800 rounded-full" />
          <div className="h-5 w-16 bg-neutral-800/60 rounded-md" />
        </div>

        {/* Right Counters/Badges Placeholder */}
        <div className="flex items-center gap-4">
          <div className="h-7 w-16 bg-neutral-800/80 rounded-full" />
          <div className="h-7 w-16 bg-neutral-800/80 rounded-full" />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-6 space-y-12">
        {/* 2. Hero Section Skeleton */}
        <section className="bg-[#13161c] border border-neutral-800/60 rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Hero Left Content */}
          <div className="space-y-6 max-w-xl w-full">
            {/* Tagline */}
            <div className="h-3 w-32 bg-neutral-800 rounded-sm" />

            {/* Main Heading Lines */}
            <div className="space-y-3">
              <div className="h-10 md:h-12 w-full bg-neutral-800 rounded-lg" />
              <div className="h-10 md:h-12 w-3/4 bg-neutral-800 rounded-lg" />
            </div>

            {/* Subtext Paragraph */}
            <div className="space-y-2 pt-2">
              <div className="h-4 w-full bg-neutral-800/60 rounded" />
              <div className="h-4 w-4/5 bg-neutral-800/60 rounded" />
            </div>

            {/* Action Button */}
            <div className="pt-4">
              <div className="h-12 w-44 bg-neutral-800 rounded-xl" />
            </div>
          </div>

          {/* Hero Right 3D Model Placeholder */}
          <div className="w-full lg:w-[420px] h-[280px] md:h-[340px] bg-neutral-800/40 rounded-2xl flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-neutral-800/60" />
          </div>
        </section>

        {/* 3. The Library Section Header */}
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="h-8 w-44 bg-neutral-800 rounded-md" />
            <div className="h-4 w-72 bg-neutral-800/60 rounded-sm" />
          </div>

          {/* 4. Workout Cards Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index: number) => (
              <div
                key={index}
                className="bg-[#13161c] border border-neutral-800/60 rounded-2xl overflow-hidden flex flex-col"
              >
                {/* Thumbnail Image */}
                <div className="h-48 w-full bg-neutral-800/40" />

                {/* Card Content Body */}
                <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    {/* Muscle Badges */}
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-14 bg-neutral-800 rounded-md" />
                      <div className="h-5 w-14 bg-neutral-800 rounded-md" />
                    </div>

                    {/* Workout Title */}
                    <div className="h-6 w-3/4 bg-neutral-800 rounded-md" />

                    {/* Equipment Subtitle */}
                    <div className="h-3.5 w-1/2 bg-neutral-800/60 rounded" />
                  </div>

                  {/* Card Footer Info */}
                  <div className="pt-4 border-t border-neutral-800/40 flex items-center justify-between">
                    <div className="h-4 w-14 bg-neutral-800/60 rounded" />
                    <div className="h-4 w-16 bg-neutral-800/60 rounded" />
                    <div className="h-4 w-12 bg-neutral-800/60 rounded" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}