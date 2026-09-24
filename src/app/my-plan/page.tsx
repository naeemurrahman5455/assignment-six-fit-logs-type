

"use client";

import EmptyCard from "@/Component/GlobalCard/EmptyCard";
import PlanListCard from "@/Component/GlobalCard/PlanListCard";
import SavePlanListCard from "@/Component/GlobalCard/SavePlanListCard";
import WorkoutStatsSummary from "@/Component/GlobalCard/WorkoutStatsSummary";

import { WorkoutContext } from "@/context/WorkoutContext";
import { useContext } from "react";

const MyPlanPage = () => {
  const {
    todayPlan,
    setTodayPlan,
    savePlan,
    setSavePlan,
  } = useContext(WorkoutContext);

  // =====================================
  // TODAY PLAN CALCULATIONS
  // =====================================

  const todayExercisesCount = todayPlan.length;

  const todayTotalMinutes = todayPlan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const todayTotalCalories = todayPlan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  // =====================================
  // SAVED PLAN CALCULATIONS
  // =====================================

  const savedExercisesCount = savePlan.length;

  const savedTotalMinutes = savePlan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const savedTotalCalories = savePlan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  // =====================================
  // TODAY PLAN ACTIONS
  // =====================================

  const handleMarkAsDone = (id: number) => {
    setTodayPlan((prev) =>
      prev.filter((workout) => workout.id !== id)
    );
  };

  const handleRemoveTodayWorkout = (id: number) => {
    setTodayPlan((prev) =>
      prev.filter((workout) => workout.id !== id)
    );
  };

  // =====================================
  // SAVED PLAN ACTIONS
  // =====================================

  const handleRemoveSavedWorkout = (id: number) => {
    setSavePlan((prev) =>
      prev.filter((workout) => workout.id !== id)
    );
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
            TABS
        ====================================== */}

        <div className="tabs tabs-border w-full">

          {/* =====================================
              TODAY PLAN TAB
          ====================================== */}

          <input
            type="radio"
            name="my_tabs_2"
            className="
              tab
              text-white
              hover:text-[#CCFF00]
              checked:text-[#CCFF00]
              [--tab-color:#CCFF00]
            "
            aria-label="Today Plan"
            defaultChecked
          />

          <div className="tab-content border-base-300 bg-[#14171E] p-5 sm:p-8">

            {/* Today Plan Statistics */}

            <div className="mb-8">
              <WorkoutStatsSummary
                exercisesCount={todayExercisesCount}
                totalMinutes={todayTotalMinutes}
                totalCalories={todayTotalCalories}
              />
            </div>

            {/* Today Plan List */}

            {todayPlan.length > 0 ? (
              <PlanListCard
                workouts={todayPlan}
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

          {/* =====================================
              SAVED PLAN TAB
          ====================================== */}

          <input
            type="radio"
            name="my_tabs_2"
            className="
              tab
              text-white
              hover:text-[#CCFF00]
              checked:text-[#CCFF00]
              [--tab-color:#CCFF00]
            "
            aria-label="Saved Plan"
          />

          <div className="tab-content border-base-300 bg-[#14171E] p-5 sm:p-8">

            {/* Saved Plan Statistics */}

            <div className="mb-8">
              <WorkoutStatsSummary
                exercisesCount={savedExercisesCount}
                totalMinutes={savedTotalMinutes}
                totalCalories={savedTotalCalories}
              />
            </div>

            {/* Saved Plan List */}

            {savePlan.length > 0 ? (
              <SavePlanListCard
                workouts={savePlan}
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

        </div>
      </div>
    </main>
  );
};

export default MyPlanPage;




