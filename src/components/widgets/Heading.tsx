import React, { JSX } from "react";

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const levelClasses: Record<1 | 2 | 3 | 4 | 5 | 6, string> = {
  1: "text-4xl",
  2: "text-3xl",
  3: "text-2xl",
  4: "text-xl",
  5: "text-lg",
  6: "text-base",
};

export const Heading: React.FC<HeadingProps> = ({
  level = 2,
  children,
  className = "",
  id,
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag
      id={id}
      className={`font-bold text-gray-900 mb-2 ${levelClasses[level]} ${className}`}
    >
      {children}
    </Tag>
  );
};

export default Heading;