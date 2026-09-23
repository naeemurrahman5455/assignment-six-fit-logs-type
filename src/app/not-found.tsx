import Image from "next/image";
import Link from "next/link";
import logo from '../assets/logo.png'

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0C0D10] px-6 py-8 text-white">
      {/* Background Glow Effects */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-lime-400/5 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-emerald-500/5 blur-[120px]" />

      {/* Subtle Grid Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center justify-center">
        <section className="w-full max-w-3xl text-center">
          {/* Logo */}
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2.5 transition-opacity hover:opacity-90"
          >
            
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400 text-lg font-black text-black shadow-lg shadow-lime-400/10">
              F
            </span>

            <span className="text-2xl font-black tracking-tight">
              FIT<span className="text-lime-400">LOG</span>
            </span>
          </Link>

          {/* 404 Typography */}
          <div className="relative">
            <h1 className="bg-gradient-to-b from-white via-zinc-300 to-lime-400/80 bg-clip-text text-[130px] font-black leading-none tracking-[-0.08em] text-transparent sm:text-[180px] md:text-[220px]">
              404
            </h1>
            <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-36 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/10 blur-3xl" />
          </div>

          {/* Content block */}
          <div className="mx-auto mt-2 max-w-xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-lime-300">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-400 animate-pulse" />
              Page not found
            </span>

            <h2 className="mt-4 text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl">
              Looks like you missed a rep.
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
              The page you&apos;re looking for doesn&apos;t exist or may have
              been moved. Let&apos;s get you back on track.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <Link
              href="/"
              className="inline-flex w-full items-center justify-center rounded-xl bg-lime-400 px-7 py-3.5 text-sm font-bold text-black shadow-lg shadow-lime-400/10 transition-all hover:bg-lime-300 hover:shadow-lime-400/20 sm:w-auto"
            >
              ← Back to Dashboard
            </Link>

            <Link
              href="/workouts"
              className="inline-flex w-full items-center justify-center rounded-xl border border-zinc-800 bg-[#13161c] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-zinc-700 hover:bg-zinc-800/80 sm:w-auto"
            >
              Explore Workouts
            </Link>
          </div>

          {/* Stats Bar */}
          <div className="mx-auto mt-12 grid max-w-md grid-cols-3 overflow-hidden rounded-2xl border border-zinc-800/80 bg-[#13161c]/60 backdrop-blur-md shadow-2xl">
            <Stat value="01" label="Daily Goal" highlight />
            <Stat value="∞" label="Progress" />
            <Stat value="100%" label="Focus" />
          </div>

          {/* Footer Branding */}
          <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.3em] text-zinc-600">
            FITLOG • Stay Consistent
          </p>
        </section>
      </div>
    </main>
  );
}

interface StatProps {
  value: string;
  label: string;
  highlight?: boolean;
}

function Stat({ value, label, highlight = false }: StatProps) {
  return (
    <div className="border-r border-zinc-800/80 px-4 py-4 last:border-r-0">
      <p
        className={`text-lg font-bold ${
          highlight ? "text-lime-400" : "text-white"
        }`}
      >
        {value}
      </p>
      <p className="mt-0.5 text-[11px] font-medium text-zinc-500">
        {label}
      </p>
    </div>
  );
}