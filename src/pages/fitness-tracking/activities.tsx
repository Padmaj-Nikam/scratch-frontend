import React, { useEffect, useState } from "react";
import Nav from "./_components/Nav";
import ActivityTable from "./_components/ActivityTable";
import { loadData, Activity } from "./utils/localStorage";

export default function ActivitiesPage() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const refresh = () => setActivities(loadData());

  useEffect(() => refresh(), []);

  return (
    <div>
      <Nav />
      <h1 className="text-2xl font-semibold mb-4">All Activities</h1>
      <ActivityTable data={activities} onChanged={refresh} />
    </div>
  );
}
