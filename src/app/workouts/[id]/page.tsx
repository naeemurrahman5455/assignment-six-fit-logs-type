import Image from "next/image";
import React from "react";
import { CalendarDays, Bookmark, Dumbbell } from "lucide-react";
import { Workout } from "@/type/fitlogType";
import TodayPlanButton from "@/Component/ButtonsComponent/todayPlanButton";
import SavePlanButton from "@/Component/ButtonsComponent/savePlanButton";


interface WorkoutsDetailsPageProps {
  params: Promise<{ id: string }>;
}

const getLibrary = async (): Promise<Workout[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch workout library");
  }

  const data: Workout[] = await res.json();
  return data;
};

export default async function WorkoutsDetailsPage({
  params,
}: WorkoutsDetailsPageProps) {
  const { id } = await params;
  const workoutData = await getLibrary();
  const workout = workoutData.find(
    (item: Workout) => item.id === Number(id)
  ) as Workout;

  if (!workout) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0C0D10] text-white">
        <p className="text-lg font-bold uppercase">Workout not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0C0D10] text-zinc-100 flex flex-col justify-between selection:bg-[#ccff00] selection:text-black">
      {/* Main Container */}
      <div className="mx-auto max-w-6xl px-6 py-12 w-full">
        {/* Added items-stretch to match heights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Image Showcase (h-full makes it match the right side height) */}
          <div className="lg:col-span-5 relative h-[380px] lg:h-full min-h-[450px] w-full overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800/80 shadow-2xl">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center"
            />
          </div>

          {/* Right Column: Details & Specs */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              {/* Title & Description */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
                  {workout.name}
                </h1>
                <p className="text-sm font-normal text-zinc-400 leading-relaxed max-w-2xl">
                  {workout.description}
                </p>

                {/* Muscle Groups Badges */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {workout.muscleGroups.map((group, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-[#ccff00] px-3.5 py-1 text-[11px] font-black uppercase tracking-wider text-black shadow-sm"
                    >
                      {group}
                    </span>
                  ))}
                </div>
              </div>

              {/* Specifications Table */}
              <div className="overflow-hidden rounded-xl border border-neutral-800/80 bg-[#13161c]">
                <div className="divide-y divide-neutral-800/80 text-xs font-semibold">
                  <div className="flex items-center justify-between px-5 py-3">
                    <span className="text-zinc-500 uppercase tracking-wider">Equipment</span>
                    <span className="text-zinc-200 font-medium">{workout.equipment}</span>
                  </div>
                  <div className="flex items-center justify-between px-5 py-3">
                    <span className="text-zinc-500 uppercase tracking-wider">Difficulty</span>
                    <span className="text-zinc-200 font-medium">{workout.difficulty}</span>
                  </div>
                  <div className="flex items-center justify-between px-5 py-3">
                    <span className="text-zinc-500 uppercase tracking-wider">Sets</span>
                    <span className="text-zinc-200 font-medium">{workout.sets}</span>
                  </div>
                  <div className="flex items-center justify-between px-5 py-3">
                    <span className="text-zinc-500 uppercase tracking-wider">Reps</span>
                    <span className="text-zinc-200 font-medium">{workout.reps}</span>
                  </div>
                  <div className="flex items-center justify-between px-5 py-3">
                    <span className="text-zinc-500 uppercase tracking-wider">Duration</span>
                    <span className="text-zinc-200 font-medium">{workout.duration} min</span>
                  </div>
                  <div className="flex items-center justify-between px-5 py-3">
                    <span className="text-zinc-500 uppercase tracking-wider">Calories</span>
                    <span className="text-zinc-200 font-medium">{workout.caloriesBurned} kcal</span>
                  </div>
                  <div className="flex items-center justify-between px-5 py-3">
                    <span className="text-zinc-500 uppercase tracking-wider">Rating</span>
                    <span className="text-zinc-200 font-medium">{workout.rating.toFixed(1)}</span>
                  </div>
                </div>
              </div>

              {/* Instructions Section */}
              <div className="space-y-3">
                <h2 className="text-xs font-black uppercase tracking-widest text-zinc-400">
                  Instructions
                </h2>
                <ol className="space-y-2 text-xs font-medium text-zinc-300">
                  {workout.instructions.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3 leading-relaxed">
                      <span className="text-zinc-500 font-bold shrink-0">{idx + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">

                  <TodayPlanButton workout={workout}></TodayPlanButton>

                  <SavePlanButton workout={workout}></SavePlanButton>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}






























