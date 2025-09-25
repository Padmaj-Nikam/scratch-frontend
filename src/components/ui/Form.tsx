// src/components/widgets/Form.tsx
import React, { useEffect, useState } from "react";

interface Field {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
}

interface FormProps {
  fields?: Field[];
  onSubmit?: (values: Record<string, string>) => void;
  className?: string;
}

const Form: React.FC<FormProps> = ({ fields = [], onSubmit, className }) => {
  const initialValues = Object.fromEntries(fields.map((f) => [f.name, ""]));
  const [values, setValues] = useState<Record<string, string>>(initialValues);

  useEffect(() => {
    // reset state when fields change
    setValues((prev) => {
      const next: Record<string, string> = {};
      fields.forEach((f) => {
        next[f.name] = prev[f.name] ?? "";
      });
      return next;
    });
  }, [fields]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(values);
  };

  if (!fields || fields.length === 0) {
    return <p className="text-gray-500 text-center">No form fields available</p>;
  }

  return (
    <form onSubmit={handleSubmit} className={className || ""}>
      {fields.map((f) => (
        <div key={f.name} className="mb-4">
          <label htmlFor={f.name} className="block text-sm font-medium text-gray-700">
            {f.label}
          </label>
          <input
            id={f.name}
            name={f.name}
            type={f.type}
            placeholder={f.placeholder}
            value={values[f.name] ?? ""}
            onChange={handleChange}
            className="mt-1 block w-full border rounded px-3 py-2"
          />
        </div>
      ))}

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
