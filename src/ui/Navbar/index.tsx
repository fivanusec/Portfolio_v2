import React, { useEffect, useState } from "react";
import styles from "../../styles/Navbar.module.css";
import { scrollToDiv } from "../../utils/ScrollTo";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
  const [className, setClassName] = useState(styles.variant2);

  const listenScrollEvent = () => {
    if (window.scrollY === 0) {
      return setClassName(styles.variant2);
    } else if (window.scrollY > 0) {
      return setClassName(styles.variant1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);
  return (
    <nav className={"fixed top-0 z-10 flex flex-row w-full p-6 " + className}>
      <div className="flex px-20 mr-auto">
        <h2 className="text-2xl uppercase font-bold">Filip Ivanusec</h2>
      </div>
      <div className="flex flex-row px-20 ml-auto">
        <button
          className="px-4 uppercase font-semibold"
          onClick={() => {
            scrollToDiv("introduction");
          }}
        >
          Introduction
        </button>
        <button
          className="px-4 uppercase font-semibold"
          onClick={() => {
            scrollToDiv("aboutme");
          }}
        >
          About me
        </button>
        <button
          className="px-4 uppercase font-semibold"
          onClick={() => {
            scrollToDiv("mywork");
          }}
        >
          My work
        </button>
        <button
          className="px-4 uppercase font-semibold"
          onClick={() => {
            scrollToDiv("myphotographywork");
          }}
        >
          My photography work
        </button>
      </div>
    </nav>
  );
};
