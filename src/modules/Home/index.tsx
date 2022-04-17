import React from "react";
import { Wave } from "../../ui/Wave";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Aboutme } from "./Aboutme";
import { DevWork } from "./DevWork";
import { Introduction } from "./Introduction";
import { TimeLine } from "./Timeline";

export const Home: React.FC = () => {
  return (
    <DefaultLayout>
      <Introduction />
      <Wave />
      <Aboutme />
      <TimeLine />
      <DevWork />
    </DefaultLayout>
  );
};
