import React from "react";

type AlertType = "info" | "success" | "error";

interface AlertProps {
  type: AlertType;
  message: string;
}

const styles: Record<AlertType, string> = {
  info: "bg-blue-100 text-blue-800 border-blue-300",
  success: "bg-green-100 text-green-800 border-green-300",
  error: "bg-red-100 text-red-800 border-red-300",
};

export const Alert: React.FC<AlertProps> = ({ type, message }) => (
  <div
    className={`border px-4 py-2 rounded-md ${styles[type]} my-2`}
    role="alert"
  >
    {message}
  </div>
);

export default Alert;