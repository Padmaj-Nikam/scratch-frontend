import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <nav className="mb-4">
      <div className="flex flex-wrap gap-2">
        <Link href="/fitness-tracking"><a className="px-3 py-2 rounded border bg-white">Dashboard</a></Link>
        <Link href="/fitness-tracking/activities"><a className="px-3 py-2 rounded border bg-white">Activities</a></Link>
        <Link href="/fitness-tracking/workouts"><a className="px-3 py-2 rounded border bg-white">Workouts</a></Link>
        <Link href="/fitness-tracking/profile"><a className="px-3 py-2 rounded border bg-white">Profile</a></Link>
      </div>
    </nav>
  );
}
