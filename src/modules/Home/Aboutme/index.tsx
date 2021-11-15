import React from "react";
import Image from "next/image";
import Masnoca from "../../../img/ShowcaseImg/Masnoca.jpg";
import styles from "../../../styles/Aboutme.module.css";
import ScrollAnimation from "react-animate-on-scroll";

export const Aboutme: React.FC<{}> = ({}) => {
  return (
    <div className="flex flex-col justify-items-center items-center justify-center w-full">
      <div className="flex flex-col justify-center items-center justify-items-center p-10">
        <ScrollAnimation
          className="flex flex-col justify-center items-center justify-items-center"
          animateIn="animate__backInUp"
        >
          <h2
            id="aboutme"
            className="text-primary text-4xl uppercase font-bold"
          >
            About me
          </h2>
          <hr className="w-1/2 mt-3 border-b-4 border-purple" />
        </ScrollAnimation>
      </div>
      <div className="flex flex-row xs:flex-col justify-items-center justify-center items-center col-start-1 col-end-3 p-20 xs:p-2  w-9/12 xs:w-full">
        <ScrollAnimation
          animateIn="animate__slideInLeft"
          className="flex justify-center items-center"
        >
          <p className="text-xl xs:text-l">
            My name is Filip and I am a Croatian based student, musician,
            photographer and software developer. I started my journey at the age
            of 18 when I first learned programming working on Arduino and
            Arduino-based systems. Why Arduino? I went to engineering school and
            studied electrical engineering. After I finished In high school, I
            started college for electrical engineering and along the way, I
            found that I was more into software than into electrical engineering
            so I decided to switch college to telematics which I found to be
            more fun and challenging than electrical engineering.
          </p>
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
