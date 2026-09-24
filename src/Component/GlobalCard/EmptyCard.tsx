import React from 'react';


import { Dumbbell, Plus } from "lucide-react";
import Link from "next/link";

interface EmptyCardProps {
  title?: string;
  description?: string;
  buttonText?: string;
  href?: string;
}

const EmptyCard = ({
  title = "Your Plan Is Empty",
  description = "You haven't added any workouts yet. Explore the library and build your workout plan.",
  buttonText = "Explore Workouts",
  href = "/#library",
}: EmptyCardProps) => {
  return (
    <div className="flex min-h-[380px] w-full items-center justify-center rounded-2xl border border-dashed border-neutral-700 bg-[#0F1116] px-6 py-12">
      <div className="flex max-w-md flex-col items-center text-center">
        {/* Icon */}
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#C2F800]/20 bg-[#C2F800]/10">
          <Dumbbell className="h-7 w-7 text-[#C2F800]" />
        </div>

        {/* Heading */}
        <h2 className="font-[family-name:var(--font-oswald)] text-2xl font-bold uppercase tracking-tight text-white">
          {title}
        </h2>

        {/* Description */}
        <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-500">
          {description}
        </p>

        {/* Button */}
        <Link
          href={href}
          className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#C2F800] px-5 py-3 text-xs font-black uppercase tracking-wider text-black transition-all duration-200 hover:scale-105 hover:bg-[#d0ff33]"
        >
          <Plus className="h-4 w-4" />
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default EmptyCard;

