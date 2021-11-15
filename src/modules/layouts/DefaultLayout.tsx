import React from "react";
import { Navbar } from "../../ui/Navbar";

interface DefaultLayoutProps {}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="w-full">{children}</div>
    </>
  );
};
