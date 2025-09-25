import React, { useState } from "react";
import Nav from "./_components/Nav";
import Card from "../../../components/widgets/Card";
import Button from "../../../components/widgets/Button";

export default function ProfilePage() {
  const [name, setName] = useState("John Doe");
  const [age, setAge] = useState(28);
  const [weight, setWeight] = useState(72);

  return (
    <div>
      <Nav />
      <h1 className="text-2xl font-semibold mb-4">Profile</h1>

      <div className="max-w-md">
        <Card>
          <div className="space-y-3">
            <div>
              <label className="block text-sm text-gray-600">Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full border rounded px-2 py-1" />
            </div>

            <div>
              <label className="block text-sm text-gray-600">Age</label>
              <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} className="mt-1 w-full border rounded px-2 py-1" />
            </div>

            <div>
              <label className="block text-sm text-gray-600">Weight (kg)</label>
              <input type="number" value={weight} onChange={(e) => setWeight(Number(e.target.value))} className="mt-1 w-full border rounded px-2 py-1" />
            </div>

            <div className="flex justify-end">
              <Button>Save</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
