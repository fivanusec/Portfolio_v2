import React from "react";
import Image from "next/image";
import Masnoca from "../../../img/ShowcaseImg/Masnoca.jpg";
import styles from "../../../styles/Aboutme.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import { useTranslation } from "react-i18next";

export const Aboutme: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-items-center items-center justify-center w-full font-sans">
      <div className="flex flex-col justify-center items-center justify-items-center p-10">
        <ScrollAnimation
          className="flex flex-col justify-center items-center justify-items-center"
          animateIn="animate__backInUp"
        >
          <h2
            id="aboutme"
            className="text-primary text-4xl uppercase font-bold"
          >
            {t("about-me.header")}
          </h2>
          <hr className="w-1/2 mt-3 border-b-4 border-purple" />
        </ScrollAnimation>
      </div>
      <div className="flex flex-row xs:flex-col justify-items-center justify-center items-center col-start-1 col-end-3 p-20 xs:p-2  w-9/12 xs:w-full">
        <ScrollAnimation
          animateIn="animate__slideInLeft"
          className="flex justify-center items-center"
        >
          <p className="text-xl xs:text-l">{t("about-me.text")}</p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="animate__slideInRight"
          className="flex justify-center items-center p-10"
        >
          <Image
            className={styles.img + " shadow-md"}
            src={Masnoca}
            alt="Shooting long exposure"
            priority={true}
            loading="eager"
          />
        </ScrollAnimation>
      </div>
    </div>
  );
};
