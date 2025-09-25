import React, { useEffect, useState } from "react";
import Nav from "./_components/Nav";
import StatsCard from "./_components/StatsCard";
import ActivityForm from "./_components/ActivityForm";
import ActivityTable from "./_components/ActivityTable";
import { loadData, Activity } from "./utils/localStorage";

export default function Dashboard() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const refresh = () => setActivities(loadData());

  useEffect(() => {
    refresh();
  }, []);

  const totalMinutes = activities.reduce((s, a) => s + (a.duration || 0), 0);
  const totalCalories = activities.reduce((s, a) => s + (a.calories || 0), 0);
  const sessions = activities.length;

  return (
    <div>
      <Nav />
      <h1 className="text-2xl font-semibold mb-4">Fitness Tracking — Dashboard</h1>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatsCard title="Sessions" value={sessions} subtitle="Total sessions logged" />
        <StatsCard title="Minutes" value={totalMinutes} subtitle="Total active minutes" />
        <StatsCard title="Calories" value={totalCalories} subtitle="Estimated calories burned" />
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div>
          <h2 className="text-lg font-medium mb-3">Quick add activity</h2>
          <ActivityForm onAdded={refresh} />
        </div>

        <div>
          <h2 className="text-lg font-medium mb-3">Recent activities</h2>
          <ActivityTable data={activities.slice(0,6)} onChanged={refresh} />
        </div>
      </section>

      <section>
        <h2 className="text-lg font-medium mb-3">Shortcuts</h2>
        <div className="flex gap-3 flex-wrap">
          <a href="/fitness-tracking/activities" className="px-3 py-2 border rounded bg-white">View all activities</a>
          <a href="/fitness-tracking/workouts" className="px-3 py-2 border rounded bg-white">Workouts library</a>
          <a href="/fitness-tracking/profile" className="px-3 py-2 border rounded bg-white">Profile</a>
        </div>
      </section>
    </div>
  );
}