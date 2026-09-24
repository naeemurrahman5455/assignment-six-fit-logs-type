"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, Clock, Flame, Star, X } from "lucide-react";

import type { Workout } from "@/type/fitlogType";
import { toast } from "react-toastify";

interface WorkoutPlanListProps {
  workouts: Workout[];
  onMarkAsDone?: (id: number) => void;
  onRemove?: (id: number) => void;
}

export default function PlanListCard({
  workouts,
  onMarkAsDone,
  onRemove,
}: WorkoutPlanListProps) {
  return (
    <div className="w-full">
      <div className="w-full">
        {/* Section Heading */}
        <div className="mb-6">
          <h2 className="text-xl font-black uppercase tracking-tight text-white">
            Today&apos;s Workout Plan
          </h2>

          <p className="mt-1 text-sm text-zinc-500">
            {workouts.length} workout
            {workouts.length !== 1 ? "s" : ""} in your plan
          </p>
        </div>

        {/* Workout List */}
        {workouts.length > 0 ? (
          <div className="flex flex-col gap-4">
            {workouts.map((workout) => (
              <div
                key={workout.id}
                className="group relative flex flex-col items-center justify-between gap-4 overflow-hidden rounded-2xl border border-neutral-800/80 bg-[#13161C] p-4 shadow-lg transition-all duration-300 hover:border-neutral-700/80 sm:flex-row"
              >
                {/* Left Side */}
                <div className="flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row sm:items-start">
                  {/* Thumbnail */}
                  <div className="relative h-20 w-32 shrink-0 overflow-hidden rounded-xl border border-neutral-800/60 bg-neutral-900">
                    <Image
                      src={workout.image}
                      alt={workout.name}
                      fill
                      sizes="128px"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Workout Info */}
                  <div className="flex flex-col justify-center space-y-1 text-center sm:text-left">
                    <h3 className="text-base font-black uppercase tracking-tight text-white">
                      {workout.name}
                    </h3>

                    <p className="text-xs font-medium text-zinc-400">
                      {workout.equipment}
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap items-center justify-center gap-4 pt-1 text-xs font-medium text-zinc-400 sm:justify-start">
                      {/* Duration */}
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-zinc-500" />
                        <span>{workout.duration} min</span>
                      </div>

                      {/* Calories */}
                      <div className="flex items-center gap-1.5">
                        <Flame className="h-3.5 w-3.5 text-zinc-500" />

                        <span>{workout.caloriesBurned} kcal</span>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-1.5">
                        <Star className="h-3.5 w-3.5 text-[#C2F800]" />

                        <span className="text-zinc-300">
                          {workout.rating.toFixed(1)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex w-full items-center justify-end gap-2 border-t border-neutral-800/50 pt-3 sm:w-auto sm:border-t-0 sm:pt-0">
                  {/* View Details */}
                  <Link
                    href={`/workouts/${workout.id}`}
                    className="rounded-xl border border-neutral-700/80 bg-transparent px-4 py-2.5 text-xs font-black uppercase tracking-wider text-zinc-200 transition-colors hover:border-zinc-500 hover:text-white"
                  >
                    View Details
                  </Link>

                  {/* Mark as Done */}
                  <button
                    type="button"
                    onClick={() => {
                      onMarkAsDone?.(workout.id);
                      toast.success("Great job! Workout completed.");
                    }}
                    className="cursor-pointer flex items-center gap-2 rounded-xl bg-[#C2F800] px-4 py-2.5 text-xs font-black uppercase tracking-wider text-black shadow-md transition-colors hover:bg-[#B3E600]"
                  >
                    <Check className="h-4 w-4 stroke-[3]" />

                    <span className="hidden lg:inline">Mark as Done</span>

                    <span className="lg:hidden">Done</span>
                  </button>

                  {/* Remove */}
                  {/* <button
                    type="button"
                    onClick={() =>
                      onRemove?.(workout.id)
                    }
                    className="cursor-pointer rounded-lg p-2 text-zinc-500 transition-colors hover:bg-neutral-800/50 hover:text-zinc-300"
                    aria-label={`Remove ${workout.name}`}
                  >
                    <X className="h-4 w-4" />
                  </button> */}

                  {/* Remove */}
                  <button
                    type="button"
                    onClick={() => {
                      onRemove?.(workout.id);
                      toast.success("Removed from today's plan.");
                    }}
                    className="cursor-pointer rounded-lg p-2 text-zinc-500 transition-colors hover:bg-neutral-800/50 hover:text-zinc-300"
                    aria-label={`Remove ${workout.name}`}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex min-h-48 items-center justify-center rounded-2xl border border-dashed border-neutral-700 bg-[#13161C]">
            <p className="text-sm font-medium text-zinc-500">
              Your workout plan is empty.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
