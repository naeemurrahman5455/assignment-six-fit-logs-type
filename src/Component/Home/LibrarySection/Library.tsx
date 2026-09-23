import WorkoutCard from "./WorkoutCard";
import type { Workout } from "@/type/fitlogType";

const getLibrary = async (): Promise<Workout[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!res.ok) {
    throw new Error("Failed to fetch workout library");
  }

  const data: Workout[] = await res.json();

  return data;
};

const LibrarySection = async () => {
  const libraryData = await getLibrary();

  return (
    <section className="container mx-auto px-4 pb-10 sm:px-6 lg:px-8">
      {/* Section Heading */}
      <div className="space-y-2">
        <h2 className="font-[family-name:var(--font-oswald)] text-3xl text-amber-50">
          THE LIBRARY
        </h2>

        <p className="font-[family-name:var(--font-inter)] text-[14px] text-[#9CA3AF]">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* Workout Grid */}
      <div className="grid grid-cols-1 gap-4 pt-10 md:grid-cols-2 lg:grid-cols-3">
        {libraryData.map((workout) => (
          <WorkoutCard
            key={workout.id}
            workout={workout}
          />
        ))}
      </div>
    </section>
  );
};

export default LibrarySection;