import React, { useEffect, useState } from "react";
import { i18n } from "i18next";
import { useTranslation } from "react-i18next";
import styles from "../../styles/Navbar.module.css";
import { scrollToDiv } from "../../utils/ScrollTo";
import Flags from "country-flag-icons/react/3x2";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
  const { t, i18n } = useTranslation();
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
          {t("navbar.introduction")}
        </button>
        <button
          className="px-4 uppercase font-semibold"
          onClick={() => {
            scrollToDiv("aboutme");
          }}
        >
          {t("navbar.about-me")}
        </button>
        <button
          className="px-4 uppercase font-semibold"
          onClick={() => {
            scrollToDiv("mywork");
          }}
        >
          {t("navbar.my-work")}
        </button>
        <button
          className="px4 bg-transparent w-10 h-10"
          onClick={() => i18n.changeLanguage("hr-HR")}
        >
          <Flags.HR title="Hrvatski" />
        </button>
        <button
          className="px4 bg-transparent w-10 h-10 ml-5"
          onClick={() => i18n.changeLanguage("en")}
        >
          <Flags.GB title="English" />
        </button>
      </div>
    </nav>
  );
};
