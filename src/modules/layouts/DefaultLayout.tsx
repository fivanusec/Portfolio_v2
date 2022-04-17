import React from "react";
import { Navbar } from "../../ui/Navbar";
import { Footer } from "../Home/Footer";

export const DefaultLayout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="w-full">{children}</div>
      <Footer />
    </>
  );
};
