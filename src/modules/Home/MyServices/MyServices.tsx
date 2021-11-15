import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Card } from "../../../ui/Card/Card";
import styles from "../../../styles/MyServices.module.css";

export const MyServices: React.FC<{}> = ({}) => {
  return (
    <div id="myservices" className={"flex p-20 flex-col justify-center w-full"}>
      <ScrollAnimation
        animateIn="animate__fadeIn"
        className="flex flex-col justify-items-center items-center"
      >
        <h2 className="text-primary text-4xl uppercase font-bold">
          My services
        </h2>
        <hr className="w-1/12 mt-3 border-b-4 border-purple" />
      </ScrollAnimation>
      <div className="grid grid-cols-3 gap-4 p-20">
        <ScrollAnimation animateIn="animate__slideInLeft">
          <Card>
            <div>
              <div className="flex justify-center text-xl text-primary uppercase font-semibold">
                I create apps
              </div>
              <p className="text-gray-500 mt-5 break-all">
                I am devleoper with 4 years of experience in field and have few
                indie projects. My most notable project is Kindie which is indie
                web app that helps people with professional documentation. I can
                also develop an app for you if you want one or help you with
                your homework.
              </p>
            </div>
          </Card>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__slideInUp">
          <Card>
            <div>
              <div className="flex justify-center text-xl text-primary uppercase font-semibold">
                I play guitar
              </div>
              <p className="text-gray-500 mt-5 break-all">
                Yes, that is correct! I have been doing music for over 12 years.
                I started as an{" "}
                <a
                  style={{
                    color: "blue",
                    textDecoration: "underline",
                  }}
                  href="https://en.wikipedia.org/wiki/Oboe"
                >
                  oboist
                </a>
                . I finished 6 years of music school for oboe and 5 years of
                music school for modern and jazz music. Nowdays my main
                instrument is guitar and still play it actively.
              </p>
            </div>
          </Card>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__slideInRight">
          <Card>
            <div>
              <div className="flex justify-center text-xl text-primary uppercase font-semibold">
                I photograph stuff
              </div>
              <p className="text-gray-500 mt-5 break-all">
                I have been doing photography work for over 5 years now. My
                favorite thing to do is{" "}
                <a
                  style={{
                    color: "blue",
                    textDecoration: "underline",
                  }}
                  href="https://en.wikipedia.org/wiki/Long-exposure_photography"
                >
                  long exposure photography
                </a>{" "}
                and have a lot of photos by simply playing in the night with the
                lights. If you want some of my photos you can contact me and I
                will email it to you.
              </p>
            </div>
          </Card>
        </ScrollAnimation>
      </div>
    </div>
  );
};
