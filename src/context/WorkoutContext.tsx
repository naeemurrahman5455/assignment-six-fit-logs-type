"use client";

import React, {
  createContext,
  ReactNode,
  useState,
} from "react";

import type { Workout } from "@/type/fitlogType";

interface WorkoutContextType {
  todayPlan: Workout[];
  setTodayPlan: React.Dispatch<React.SetStateAction<Workout[]>>;
  savePlan: Workout[];
  setSavePlan: React.Dispatch<React.SetStateAction<Workout[]>>;
}

export const WorkoutContext = createContext<WorkoutContextType>({
  todayPlan: [],
  setTodayPlan: () => {},
  savePlan: [],
  setSavePlan: () => {},
});

const WorkoutContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [todayPlan, setTodayPlan] = useState<Workout[]>([]);
  const [savePlan, setSavePlan] = useState<Workout[]>([]);

  const sharedData: WorkoutContextType = {
    todayPlan,
    setTodayPlan,
    savePlan,
    setSavePlan,
  };

  return (
    <WorkoutContext.Provider value={sharedData}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutContextProvider;