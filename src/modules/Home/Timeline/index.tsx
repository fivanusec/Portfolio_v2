import moment from "moment";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

export const TimeLine: React.FC<{}> = ({}) => {
  return (
    <div className="container mx-auto w-full h-full">
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div
          className="border-2-2 absolute border-opacity-20 border-secondary h-full border"
          style={{ left: "50%" }}
        ></div>
        <ScrollAnimation animateIn="animate__slideInRight">
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
            </div>
            <div className="order-1 bg-primary rounded-full shadow-xl w-5/12 p-10">
              <h3 className="mb-3 font-bold text-white text-xl">
                01/07/2017 - 15/08/2017 <br /> Working as help in apartment
                complex
              </h3>
              <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
                I worrked as sesonal worker at apartment complex as part of
                housekeeping.
              </p>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="animate__slideInLeft">
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-rose shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
            </div>
            <div className="order-1 bg-rose rounded-full shadow-xl w-5/12 p-10">
              <h3 className="mb-3 font-bold text-white text-xl">
                21/06/2021 - 13/09/2021 <br /> Student dormitory Trsat
              </h3>
              <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                I started working at student Centre Rijeka as worker on
                infrastructure. I was part of maitenance crew that did regular
                summer maitenance of the full complex
              </p>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="animate__slideInRight">
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
            </div>
            <div className="order-1 bg-primary rounded-full shadow-xl w-5/12 p-10">
              <h3 className="mb-3 font-bold text-white text-xl">
                13/09/2021 - 01/11/2021 <br /> Working as receptionsit at
                Student dormitory Trsat
              </h3>
              <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
                When summer maitenance finished I got work as student
                receptionist at dorimtory Kampus Trsat.
              </p>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="animate__slideInLeft">
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-rose shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
            </div>
            <div className="order-1 bg-rose rounded-full shadow-xl w-5/12 p-10">
              <h3 className="mb-3 font-bold text-white text-xl">
                16/11/2021 - still <br /> Working as software developer
              </h3>
              <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                I got offerd software developer job as part of my education and
                training as software developer.
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};
