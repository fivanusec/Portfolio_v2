import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

interface TimelineCardProps {
  position: "left" | "right";
  header: JSX.Element;
  description: JSX.Element;
  date: string;
}

export const TimelineCard: React.FC<TimelineCardProps> = ({
  position,
  header,
  description,
  date,
}) => {
  if (position === "left") {
    return (
      <ScrollAnimation animateIn="animate__slideInLeft">
        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-rose shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg"></h1>
          </div>
          <div className="order-1 bg-rose rounded-full shadow-xl w-5/12 p-10">
            <h3 className="mb-3 font-bold text-white text-xl">
              {date}
              <br />
              {header}
            </h3>
            <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
              {description}
            </p>
          </div>
        </div>
      </ScrollAnimation>
    );
  }
  return (
    <ScrollAnimation animateIn="animate__slideInRight">
      <div
        className={`mb-8 flex justify-between items-center w-full right-timeline`}
      >
        <div className="order-1 w-5/12"></div>
        <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
          <h1 className="mx-auto font-semibold text-lg text-white"></h1>
        </div>
        <div className="order-1 bg-primary rounded-full shadow-xl w-5/12 p-10">
          <h3 className="mb-3 font-bold text-white text-xl">
            {date}
            <br />
            {header}
          </h3>
          <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
            {description}
          </p>
        </div>
      </div>
    </ScrollAnimation>
  );
};
