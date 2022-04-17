import React from "react";
import { useTranslation } from "react-i18next";
import { TimelineCard } from "./TimelineCard";

export const TimeLine: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto w-full h-full font-sans">
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div
          className="border-2-2 absolute border-opacity-20 border-secondary h-full border"
          style={{ left: "50%" }}
        ></div>
        {[...new Array(4)].map((_: any, idx: number) => (
          <TimelineCard
            date={t(`timeline.${idx + 1}.date`)}
            key={idx}
            num={idx + 1}
            position={(idx + 1) % 2 == 0 ? "left" : "right"}
            header={t(`timeline.${idx + 1}.title`)}
            description={t(`timeline.${idx + 1}.text`)}
          />
        ))}
      </div>
    </div>
  );
};
