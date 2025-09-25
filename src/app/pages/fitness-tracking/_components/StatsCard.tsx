import React from "react";

type Props = {
  title: string;
  value: string | number;
  subtitle?: string;
};

export default function StatsCard({ title, value, subtitle }: Props) {
  return (
    <div className="bg-white shadow rounded-lg p-4 flex-1 min-w-[160px]">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-2xl font-semibold">{value}</div>
      {subtitle && <div className="text-xs text-gray-400 mt-1">{subtitle}</div>}
    </div>
  );
}
