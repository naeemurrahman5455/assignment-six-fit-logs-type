import Image from "next/image";
import { Clock, Flame, Star } from "lucide-react";
import type { Workout } from "@/type/fitlogType";
import Link from "next/link";

interface WorkoutCardProps {
  workout: Workout;
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
    return (
      <Link href={`/workouts/${workout.id}`}> 
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-800/60 bg-[#13161c] shadow-lg transition-all duration-300 hover:border-neutral-700/80">



      {/* Thumbnail Image */}
      <div className="relative h-48 w-full overflow-hidden bg-neutral-900">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between space-y-4 p-5">
        {/* Top Content */}
        <div className="space-y-3">
          {/* Muscle Group Badges */}
          <div className="flex flex-wrap items-center gap-1.5">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="rounded-full bg-[#C2F800] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-black"
              >
                {group}
              </span>
            ))}
          </div>

          {/* Workout Name & Equipment */}
          <div>
            <h3 className="line-clamp-1 text-lg font-black uppercase tracking-tight text-white">
              {workout.name}
            </h3>

            <p className="mt-0.5 text-xs font-medium text-zinc-400">
              {workout.equipment}
            </p>
          </div>
        </div>

        {/* Card Footer */}
        <div className="flex items-center justify-between border-t border-neutral-800/80 pt-3.5 text-xs font-medium text-zinc-400">
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
            <Star className="h-3.5 w-3.5 text-zinc-500" />

            <span className="text-zinc-300">
              {workout.rating.toFixed(1)}
            </span>
          </div>
        </div>
      </div>
    </article>
    </Link>
  );
}