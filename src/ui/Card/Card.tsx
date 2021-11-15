import React from "react";

interface CardProps {}

export const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="p-10 max-w-sm max-h-1/2 mx-auto bg-white justify-items-center justify-center rounded-xl shadow-md flex items-center space-x-4">
      <div>{children}</div>
    </div>
  );
};
