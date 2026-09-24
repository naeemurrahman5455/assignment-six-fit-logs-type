
"use client";

import { WorkoutContext } from "@/context/WorkoutContext";
import type { Workout } from "@/type/fitlogType";
import { CalendarDays } from "lucide-react";
import { useContext } from "react";
import { toast } from "react-toastify";

interface TodayPlanButtonProps {
  workout: Workout;
}

const TodayPlanButton = ({
  workout,
}: TodayPlanButtonProps) => {
  const {
    todayPlan,
    setTodayPlan,
  } = useContext(WorkoutContext);

  const isAlreadyAdded = todayPlan.some(
    (item) => item.id === workout.id
  );

  const handleAddToPlan = () => {
    if (isAlreadyAdded) {
      window.alert("Item already added");
      return;
    }
     toast.success("Saved For Later")

    setTodayPlan((prev) => [
      ...prev,
      workout,

      
    ]);

  };

  return (
    <button
      type="button"
      onClick={handleAddToPlan}
      disabled={isAlreadyAdded}
      className={`cursor-pointer flex items-center gap-2 rounded-xl px-5 py-3 text-xs font-black uppercase tracking-wider transition-all duration-200 ${
        isAlreadyAdded
          ? "cursor-not-allowed border border-neutral-700 bg-neutral-800 text-zinc-500"
          : "bg-[#C2F800] text-black shadow-md hover:bg-[#b3e600] hover:shadow-lg"
      }`}
    >
      <CalendarDays className="h-4 w-4" />

      {isAlreadyAdded
        ? "Already Added"
        : "Add to Today's Plan"}
    </button>
  );
};

export default TodayPlanButton;

