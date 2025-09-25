import React from "react";

interface Column<T> {
  key: keyof T;
  label: string;
}

interface TableProps<T extends object> {
  columns?: Column<T>[];  // made optional with safe default
  data?: T[];             // made optional with safe default
  className?: string;
}

function Table<T extends object>({
  columns = [],
  data = [],
  className = "",
}: TableProps<T>) {
  return (
    <table
      className={`min-w-full border border-gray-200 text-sm ${className}`}
    >
      <thead>
        <tr className="bg-gray-100">
          {columns.length > 0 ? (
            columns.map((col) => (
              <th
                key={String(col.key)}
                className="px-4 py-2 text-left border-b font-semibold"
              >
                {col.label}
              </th>
            ))
          ) : (
            <th className="px-4 py-2 text-center border-b" colSpan={100}>
              No columns
            </th>
          )}
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((row, i) => (
            <tr key={i} className="hover:bg-gray-50">
              {columns.map((col) => (
                <td key={String(col.key)} className="px-4 py-2 border-b">
                  {String(row[col.key])}
                </td>
              ))}
            </tr>
          ))
        ) : (
          <tr>
            <td
              className="px-4 py-4 text-center text-gray-500"
              colSpan={columns.length || 1}
            >
              No data available
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default Table;