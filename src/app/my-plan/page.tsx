

"use client";

import EmptyCard from "@/Component/GlobalCard/EmptyCard";
import PlanListCard from "@/Component/GlobalCard/PlanListCard";
import SavePlanListCard from "@/Component/GlobalCard/SavePlanListCard";
import WorkoutStatsSummary from "@/Component/GlobalCard/WorkoutStatsSummary";

import { WorkoutContext } from "@/context/WorkoutContext";
import { ChevronDown } from "lucide-react";
import { useContext, useState } from "react";

type SortOption = "duration" | "calories" | "rating";

type ActiveTab = "today" | "saved";

const MyPlanPage = () => {
  const {
    todayPlan,
    setTodayPlan,
    savePlan,
    setSavePlan,
  } = useContext(WorkoutContext);

  // =====================================
  // ACTIVE TAB
  // =====================================

  const [activeTab, setActiveTab] =
    useState<ActiveTab>("today");

  // =====================================
  // SORT STATES
  // =====================================

  const [todaySort, setTodaySort] =
    useState<SortOption>("duration");

  const [savedSort, setSavedSort] =
    useState<SortOption>("duration");

  // =====================================
  // SORT FUNCTION
  // =====================================

  const sortWorkouts = (
    workouts: typeof todayPlan,
    sortBy: SortOption
  ) => {
    return [...workouts].sort((a, b) => {
      if (sortBy === "duration") {
        return b.duration - a.duration;
      }

      if (sortBy === "calories") {
        return b.caloriesBurned - a.caloriesBurned;
      }

      return b.rating - a.rating;
    });
  };

  // =====================================
  // SORTED WORKOUTS
  // =====================================

  const sortedTodayPlan = sortWorkouts(
    todayPlan,
    todaySort
  );

  const sortedSavedPlan = sortWorkouts(
    savePlan,
    savedSort
  );

  // =====================================
  // TODAY PLAN CALCULATIONS
  // =====================================

  const todayExercisesCount = todayPlan.length;

  const todayTotalMinutes = todayPlan.reduce(
    (total, workout) =>
      total + workout.duration,
    0
  );

  const todayTotalCalories = todayPlan.reduce(
    (total, workout) =>
      total + workout.caloriesBurned,
    0
  );

  // =====================================
  // SAVED PLAN CALCULATIONS
  // =====================================

  const savedExercisesCount = savePlan.length;

  const savedTotalMinutes = savePlan.reduce(
    (total, workout) =>
      total + workout.duration,
    0
  );

  const savedTotalCalories = savePlan.reduce(
    (total, workout) =>
      total + workout.caloriesBurned,
    0
  );

  // =====================================
  // TODAY PLAN ACTIONS
  // =====================================

  const handleMarkAsDone = (id: number) => {
    setTodayPlan((prev) =>
      prev.filter(
        (workout) => workout.id !== id
      )
    );
  };

  const handleRemoveTodayWorkout = (id: number) => {
    setTodayPlan((prev) =>
      prev.filter(
        (workout) => workout.id !== id
      )
    );
  };

  // =====================================
  // SAVED PLAN ACTION
  // =====================================

  const handleRemoveSavedWorkout = (id: number) => {
    setSavePlan((prev) =>
      prev.filter(
        (workout) => workout.id !== id
      )
    );
  };

  // =====================================
  // CURRENT SORT
  // =====================================

  const currentSort =
    activeTab === "today"
      ? todaySort
      : savedSort;

  // =====================================
  // SORT CHANGE
  // =====================================

  const handleSortChange = (
    value: SortOption
  ) => {
    if (activeTab === "today") {
      setTodaySort(value);
    } else {
      setSavedSort(value);
    }
  };

  return (
    <main className="min-h-screen bg-[#0C0D10] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* =====================================
            PAGE HEADER
        ====================================== */}

        <div className="mb-8">
          <h1 className="font-[family-name:var(--font-oswald)] text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
            My Plan
          </h1>

          <p className="mt-2 text-sm text-zinc-500">
            Manage your workout plan and saved workouts.
          </p>
        </div>

        {/* =====================================
            TABS + SORT BY
        ====================================== */}

        <div className="flex flex-col gap-4 border-b border-neutral-800 sm:flex-row sm:items-end sm:justify-between">

          {/* LEFT - TABS */}

          <div className="flex items-center gap-6">

            {/* TODAY PLAN TAB */}

            <button
              type="button"
              onClick={() => setActiveTab("today")}
              className={`relative pb-3 text-sm font-bold uppercase tracking-wider transition-colors ${
                activeTab === "today"
                  ? "text-[#CCFF00]"
                  : "text-white hover:text-[#CCFF00]"
              }`}
            >
              Today Plan

              {activeTab === "today" && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-[#CCFF00]" />
              )}
            </button>

            {/* SAVED PLAN TAB */}

            <button
              type="button"
              onClick={() => setActiveTab("saved")}
              className={`relative pb-3 text-sm font-bold uppercase tracking-wider transition-colors ${
                activeTab === "saved"
                  ? "text-[#CCFF00]"
                  : "text-white hover:text-[#CCFF00]"
              }`}
            >
              Saved Plan

              {activeTab === "saved" && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-[#CCFF00]" />
              )}
            </button>

          </div>

          {/* RIGHT - SORT BY */}

          <div className="flex items-center gap-2 pb-2">

            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Sort By
            </span>

            <div className="relative">

              <select
                value={currentSort}
                onChange={(e) =>
                  handleSortChange(
                    e.target.value as SortOption
                  )
                }
                className="
                  appearance-none
                  rounded-lg
                  border
                  border-neutral-700
                  bg-[#0F1116]
                  py-2
                  pl-3
                  pr-9
                  text-xs
                  font-semibold
                  text-white
                  outline-none
                  transition-colors
                  hover:border-[#CCFF00]
                  focus:border-[#CCFF00]
                  focus:ring-1
                  focus:ring-[#CCFF00]
                "
                aria-label="Sort workouts"
              >
                <option value="duration">
                  Duration
                </option>

                <option value="calories">
                  Calories
                </option>

                <option value="rating">
                  Rating
                </option>
              </select>

              <ChevronDown
                className="
                  pointer-events-none
                  absolute
                  right-2.5
                  top-1/2
                  h-4
                  w-4
                  -translate-y-1/2
                  text-zinc-400
                "
              />

            </div>
          </div>

        </div>

        {/* =====================================
            TODAY PLAN
        ====================================== */}

        {activeTab === "today" && (
          <div className="bg-[#14171E] p-5 sm:p-8">

            {/* TODAY STATISTICS */}

            <div className="mb-8">
              <WorkoutStatsSummary
                exercisesCount={todayExercisesCount}
                totalMinutes={todayTotalMinutes}
                totalCalories={todayTotalCalories}
              />
            </div>

            {/* TODAY LIST */}

            {todayPlan.length > 0 ? (
              <PlanListCard
                workouts={sortedTodayPlan}
                onMarkAsDone={handleMarkAsDone}
                onRemove={handleRemoveTodayWorkout}
              />
            ) : (
              <EmptyCard
                title="Your Plan Is Empty"
                description="Add workouts to your today plan and start your training session."
                buttonText="Add Workout"
                href="/#library"
              />
            )}

          </div>
        )}

        {/* =====================================
            SAVED PLAN
        ====================================== */}

        {activeTab === "saved" && (
          <div className="bg-[#14171E] p-5 sm:p-8">

            {/* SAVED STATISTICS */}

            <div className="mb-8">
              <WorkoutStatsSummary
                exercisesCount={savedExercisesCount}
                totalMinutes={savedTotalMinutes}
                totalCalories={savedTotalCalories}
              />
            </div>

            {/* SAVED LIST */}

            {savePlan.length > 0 ? (
              <SavePlanListCard
                workouts={sortedSavedPlan}
                onRemove={handleRemoveSavedWorkout}
              />
            ) : (
              <EmptyCard
                title="No Saved Workouts"
                description="Workouts you save for later will appear here."
                buttonText="Explore Library"
                href="/#library"
              />
            )}

          </div>
        )}

      </div>
    </main>
  );
};

export default MyPlanPage;




