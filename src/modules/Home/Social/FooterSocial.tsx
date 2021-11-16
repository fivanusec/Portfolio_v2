import React from "react";
import { Button } from "../../../ui/Button";
import { Email } from "../../../ui/Icons/Email";
import { Github } from "../../../ui/Icons/Github";
import { Instagram } from "../../../ui/Icons/Instagram";
import { Twitter } from "../../../ui/Icons/Twitter";
import { SlideIn } from "../Slide/SlideIn";
import Link from "next/link";

export const FooterSocial: React.FC<{}> = ({}) => {
  return (
    <div className="flex flex-row p-10 xs:p-5 xs:w-1/2 xs:h-1/2 xs:transform xs:scale-75">
      <SlideIn delay={0.9}>
        <a href="https://github.com/fivanusec">
          <Button
            variant="purple"
            style={{
              marginRight: "15px",
            }}
          >
            <Github />
          </Button>
        </a>
      </SlideIn>
      <SlideIn delay={0.5}>
        <a href="https://twitter.com/fivanusec">
          <Button
            style={{
              marginRight: "15px",
            }}
            variant="purple"
          >
            <Twitter />
          </Button>
        </a>
      </SlideIn>
      <SlideIn delay={0.3}>
        <a href="https://www.instagram.com/ivanusecfilip/">
          <Button
            style={{
              marginRight: "15px",
            }}
            variant="purple"
          >
            <Instagram />
          </Button>
        </a>
      </SlideIn>
      <SlideIn>
        <a href="mailto:fivanusec@gmail.com">
          <Button variant="purple">
            <Email />
          </Button>
        </a>
      </SlideIn>
    </div>
  );
};
