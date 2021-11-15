import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import { importAll } from "../../../utils/ImportAllImg";
import ScrollAnimation from "react-animate-on-scroll";
import styles from "../../../styles/MyPhotographyWork.module.css";

export const MyPhotography: React.FC<{}> = ({}) => {
  const images = importAll(
    require.context("../../../img/ShowcaseImg", false, /\.(png|jpe?g|svg)$/)
  );
  return (
    <div
      id="myphotographywork"
      className="flex flex-col justify-items-center items-center justify-center w-full "
    >
      <div className="flex flex-col justify-center items-center justify-items-center p-10">
        <ScrollAnimation
          className="flex flex-col justify-center items-center justify-items-center"
          animateIn="animate__fadeIn"
        >
          <h2
            id="aboutme"
            className="text-primary text-4xl uppercase font-bold"
          >
            My photography work
          </h2>
          <hr className="w-1/2 mt-3 border-b-4 border-purple" />
        </ScrollAnimation>
      </div>
      <div className="flex flex-row">
        <Carousel
          autoPlay={true}
          showStatus={false}
          interval={2}
          infiniteLoop
          showArrows={false}
          swipeable={false}
        >
          {images.map((img: any, idx: React.Key | null | undefined) => (
            // eslint-disable-next-line react/jsx-key
            <div>
              <Image
                className={styles.item}
                src={img}
                width="1600"
                height="700"
                alt=""
                key={idx}
                priority={true}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
