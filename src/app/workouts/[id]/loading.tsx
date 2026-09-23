
export default function Loading() {
  return (
    <main className="min-h-screen bg-[#0C0D10] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl animate-pulse">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Image Skeleton */}
          <div className="h-[400px] rounded-2xl bg-neutral-800" />

          {/* Content Skeleton */}
          <div className="space-y-6">
            <div className="h-10 w-3/4 rounded-lg bg-neutral-800" />

            <div className="h-5 w-1/3 rounded bg-neutral-800" />

            <div className="space-y-3">
              <div className="h-4 w-full rounded bg-neutral-800" />
              <div className="h-4 w-5/6 rounded bg-neutral-800" />
              <div className="h-4 w-4/6 rounded bg-neutral-800" />
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="h-20 rounded-xl bg-neutral-800" />
              <div className="h-20 rounded-xl bg-neutral-800" />
              <div className="h-20 rounded-xl bg-neutral-800" />
              <div className="h-20 rounded-xl bg-neutral-800" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

