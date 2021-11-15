import React from "react";
import { Navbar } from "../../ui/Navbar";
import { Footer } from "../Home/Footer";

interface DefaultLayoutProps {}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="w-full">{children}</div>
      <Footer />
    </>
  );
};
