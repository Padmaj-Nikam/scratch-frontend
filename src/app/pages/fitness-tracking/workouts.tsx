import React from "react";
import Nav from "./_components/Nav";
import Card from "../../../components/widgets/Card";

const SAMPLE = [
  { id: "w1", name: "5km Run", duration: 30, desc: "Steady 5km run" },
  { id: "w2", name: "HIIT 20", duration: 20, desc: "High intensity interval training" },
  { id: "w3", name: "Yoga Flow", duration: 45, desc: "Full body mobility and stretch" },
];

export default function WorkoutsPage() {
  return (
    <div>
      <Nav />
      <h1 className="text-2xl font-semibold mb-4">Workouts Library</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {SAMPLE.map((w) => (
          <Card key={w.id}>
            <div className="font-semibold">{w.name}</div>
            <div className="text-sm text-gray-500">{w.duration} mins</div>
            <div className="mt-2 text-sm">{w.desc}</div>
            <div className="mt-3">
              <a className="px-3 py-1 border rounded text-sm" href="#">Start</a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
