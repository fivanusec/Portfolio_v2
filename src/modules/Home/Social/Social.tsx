import React from "react";
import { Button } from "../../../ui/Button";
import { Github } from "../../../ui/Icons/Github";
import { Instagram } from "../../../ui/Icons/Instagram";
import { Twitter } from "../../../ui/Icons/Twitter";
import { SlideIn } from "../Slide/SlideIn";

interface SocialProps {}

export const Social: React.FC<SocialProps> = ({}) => {
  return (
      <div className="flex flex-row p-10 xs:p-5 xs:w-1/2 xs:h-1/2 xs:transform xs:scale-75">
      <SlideIn delay={0.7}>
        <Button
          variant="purple"
          style={{
            marginRight: "15px",
          }}
        >
          <a href="https://github.com/fivanusec">
            <Github />
          </a>
        </Button>
      </SlideIn>
      <SlideIn delay={0.3}>
        <Button
          style={{
            marginRight: "15px",
          }}
          variant="purple"
        >
          <a href="https://twitter.com/fivanusec">
            <Twitter />
          </a>
        </Button>
      </SlideIn>
      <SlideIn>
        <Button variant="purple">
          <a href="https://www.instagram.com/ivanusecfilip/">
            <Instagram />
          </a>
        </Button>
      </SlideIn>
    </div>
  );
};
