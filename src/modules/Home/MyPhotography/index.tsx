import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import { importAll } from "../../../utils/ImportAllImg";
import ScrollAnimation from "react-animate-on-scroll";
import styles from "../../../styles/MyPhotographyWork.module.css";

export const MyPhotography: React.FC<{}> = ({}) => {
  const images: string[] = importAll(
    require.context("../../../img/ShowcaseImg", false, /\.(png|jpe?g|svg)$/)
  );
  return (
    <div
      id="myphotographywork"
      className="flex flex-col justify-items-center items-center justify-center w-full font-sans"
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
        <div className="flex flex-col w-1/2 mt-10">
          <p className="text-xl xs:text-l">
            I love doing photography and I have been doing photography since I
            know what camera is. Since I love to explore and especially travel I
            love to take out my camera and just take pictrues and make them feel
            like I felt while taking them. Here is mini display of few of my
            favorite photos of mine.
          </p>
        </div>
      </div>
      <div className="flex flex-row">
        <Carousel
          autoPlay={true}
          showStatus={false}
          interval={2}
          infiniteLoop
          showArrows={false}
          swipeable={false}
          emulateTouch={false}
          preventMovementUntilSwipeScrollTolerance={false}
          showThumbs={false}
        >
          {images.map((img: string, idx: React.Key | null | undefined) => (
            <Image
              className={styles.item}
              src={img}
              width="1600"
              height="700"
              alt=""
              key={idx}
              priority={true}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};
