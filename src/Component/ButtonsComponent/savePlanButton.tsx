
"use client";

import { WorkoutContext } from "@/context/WorkoutContext";
import type { Workout } from "@/type/fitlogType";
import { Bookmark } from "lucide-react";
import { useContext } from "react";
import { toast } from "react-toastify";

interface SavePlanButtonProps {
  workout: Workout;
}

const SavePlanButton = ({
  workout,
}: SavePlanButtonProps) => {
  const {
    savePlan,
    setSavePlan,
  } = useContext(WorkoutContext);

  const isAlreadySaved = savePlan.some(
    (item) => item.id === workout.id
  );

  const handleSaveButton = () => {
    if (isAlreadySaved) {
      toast.info("Item already added");
      return;
    }

    setSavePlan((prev) => [
      ...prev,
      workout,
    ]);

    toast.success("Saved For Later");
  };

  return (
    <button
      type="button"
      onClick={handleSaveButton}
      disabled={isAlreadySaved}
      className={` cursor-pointer flex items-center gap-2 rounded-xl px-5 py-3 text-xs font-black uppercase tracking-wider transition-colors ${
        isAlreadySaved
          ? "cursor-not-allowed border border-neutral-700 bg-neutral-800 text-zinc-500"
          : "border border-neutral-700 bg-transparent text-zinc-300 hover:border-zinc-500 hover:text-white"
      }`}
    >
      <Bookmark className="h-4 w-4" />

      {isAlreadySaved
        ? "Already Saved"
        : "Save for later"}
    </button>
  );
};

export default SavePlanButton;

