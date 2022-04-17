import React from "react";
import Typed from "react-typed";
import Image from "next/image";

import ProgrammingSvg from "../../../img/undraw_programming_-2-svr.svg";
import LazyShow from "../LazyShow";
import { Social } from "../Social/Social";
import { useTranslation } from "react-i18next";

export const Introduction: React.FC = () => {
  const { t } = useTranslation();
  const typeText: string[] = [
    "Student.",
    "Developer.",
    t("welcome-screen.typed"),
  ];
  return (
    <div
      id="introduction"
      className="flex p-20 xs:p-0 xs:flex-col lg:flex-row sm:flex-col md:flex-col justify-center w-full bg-primary font-sans"
    >
      <div className="flex p-10 xs:p-5 flex-col w-1/2 md:w-full sm:w-full xs:w-full xs:mt-20">
        <div className="flex flex-col p-10 inset-y-0 left-0">
          <h1 className="uppercase text-white font-bold text-left font-serif text-5xl xs:text-3xl  break-all xs:break-normal">
            {t("welcome-screen.header")}
          </h1>
          <h2 className="uppercase font-serif font-bold text-white text-3xl xs:text-xl mt-10 break-all xs:break-normal">
            {t("welcome-screen.i-am")}{" "}
            <Typed
              strings={typeText}
              typeSpeed={80}
              backDelay={1100}
              backSpeed={30}
              loop
            />
          </h2>
        </div>
        <div className="flex px-10">
          <h3 className="font-serif font-bold text-white text-3xl xs:text-xl break-all xs:break-normal">
            {t("welcome-screen.text")}
          </h3>
        </div>
        <Social />
      </div>
      <LazyShow
        className="flex p-5 mb-5 justify-center w-1/2 xs:w-full md:w-full sm:w-full inset-y-0 right-0"
        x={100}
        opacity={0}
      >
        <Image
          className="rounded-xl drop-shadow-2xl"
          src={ProgrammingSvg}
          alt="Programming"
        />
      </LazyShow>
    </div>
  );
};
