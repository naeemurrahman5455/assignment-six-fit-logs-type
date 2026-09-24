
interface WorkoutStatsSummaryProps {
  exercisesCount: number;
  totalMinutes: number;
  totalCalories: number;
}

export default function WorkoutStatsSummary({
  exercisesCount,
  totalMinutes,
  totalCalories,
}: WorkoutStatsSummaryProps) {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-neutral-800/80 bg-[#13161C] p-6 shadow-lg">
      <div className="grid grid-cols-3 divide-x divide-neutral-800/80 text-center">

        {/* Exercises */}
        <div className="flex flex-col items-center justify-center px-2">
          <span className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
            Exercises
          </span>

          <span className="text-3xl font-black tracking-tight text-[#CCFF00]">
            {exercisesCount}
          </span>
        </div>

        {/* Minutes */}
        <div className="flex flex-col items-center justify-center px-2">
          <span className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
            Minutes
          </span>

          <span className="text-3xl font-black tracking-tight text-white">
            {totalMinutes}
          </span>
        </div>

        {/* Calories */}
        <div className="flex flex-col items-center justify-center px-2">
          <span className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
            Calories
          </span>

          <span className="text-3xl font-black tracking-tight text-white">
            {totalCalories}
          </span>
        </div>

      </div>
    </div>
  );
}

