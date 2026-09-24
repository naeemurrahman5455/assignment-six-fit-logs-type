import { Dumbbell } from "lucide-react";

export default function PlanLoadingSkeleton() {
  return (
    <div className="min-h-screen bg-[#0C0D10] text-zinc-100 flex flex-col justify-between selection:bg-[#ccff00] selection:text-black">
      
      {/* Top Main Container */}
      <div className="mx-auto max-w-6xl px-6 py-10 w-full space-y-8 animate-pulse">
        
        {/* Page Header Section Skeleton */}
        <div className="space-y-2">
          <div className="h-8 w-44 bg-neutral-800/80 rounded-md" />
          <div className="h-4 w-64 bg-neutral-800/50 rounded-md" />
        </div>

        {/* Navigation Tabs & Sort Row Skeleton */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-neutral-800/80 pb-4">
          <div className="flex items-center gap-6">
            <div className="h-4 w-24 bg-neutral-800 rounded-md" />
            <div className="h-4 w-24 bg-neutral-800/40 rounded-md" />
          </div>
          <div className="h-8 w-32 bg-neutral-800/60 rounded-xl" />
        </div>

        {/* Stats Summary Card Skeleton */}
        <div className="w-full overflow-hidden rounded-2xl bg-[#13161c] border border-neutral-800/80 p-6 shadow-lg">
          <div className="grid grid-cols-3 divide-x divide-neutral-800/80 text-center">
            
            {/* Stat 1 */}
            <div className="flex flex-col items-center justify-center space-y-2 px-2">
              <div className="h-3 w-16 bg-neutral-800/80 rounded" />
              <div className="h-8 w-10 bg-neutral-800 rounded" />
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center justify-center space-y-2 px-2">
              <div className="h-3 w-16 bg-neutral-800/80 rounded" />
              <div className="h-8 w-10 bg-neutral-800 rounded" />
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center justify-center space-y-2 px-2">
              <div className="h-3 w-16 bg-neutral-800/80 rounded" />
              <div className="h-8 w-10 bg-neutral-800 rounded" />
            </div>

          </div>
        </div>

        {/* Section Heading Skeleton */}
        <div className="space-y-1.5 pt-4">
          <div className="h-5 w-48 bg-neutral-800 rounded-md" />
          <div className="h-3 w-32 bg-neutral-800/50 rounded-md" />
        </div>

        {/* Workout Cards List Skeleton */}
        <div className="flex flex-col gap-4">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="flex flex-col sm:flex-row items-center justify-between gap-4 overflow-hidden rounded-2xl bg-[#13161c] border border-neutral-800/80 p-4 shadow-lg"
            >
              {/* Left Side: Thumbnail & Text Placeholders */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 w-full sm:w-auto">
                {/* Thumbnail Skeleton */}
                <div className="relative h-20 w-32 shrink-0 overflow-hidden rounded-xl bg-neutral-800/70" />

                {/* Text lines */}
                <div className="flex flex-col justify-center space-y-2 w-full sm:w-64">
                  <div className="h-4 w-40 bg-neutral-800 rounded" />
                  <div className="h-3 w-24 bg-neutral-800/60 rounded" />
                  <div className="flex items-center gap-4 pt-1">
                    <div className="h-3 w-14 bg-neutral-800/50 rounded" />
                    <div className="h-3 w-16 bg-neutral-800/50 rounded" />
                    <div className="h-3 w-10 bg-neutral-800/50 rounded" />
                  </div>
                </div>
              </div>

              {/* Right Side: Action Buttons Placeholders */}
              <div className="flex items-center justify-end gap-3 w-full sm:w-auto pt-3 sm:pt-0 border-t border-neutral-800/50 sm:border-t-0">
                <div className="h-9 w-24 bg-neutral-800/70 rounded-xl" />
                <div className="h-9 w-32 bg-neutral-800/80 rounded-xl" />
                <div className="h-8 w-8 bg-neutral-800/50 rounded-lg" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Footer */}
      <footer className="w-full border-t border-neutral-800/80 bg-[#0C0D10] py-6 px-6 mt-12">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-2 font-black tracking-wider text-white">
            <Dumbbell className="h-4 w-4 text-[#ccff00]" />
            <span>FITLOG</span>
          </div>
          <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
        </div>
      </footer>

    </div>
  );
}