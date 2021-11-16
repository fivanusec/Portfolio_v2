import React from "react";
import { Wave } from "../../ui/Wave";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Aboutme } from "./Aboutme";
import { DevWork } from "./DevWork";
import { Introduction } from "./Introduction";
import { MyPhotography } from "./MyPhotography";
import { TimeLine } from "./Timeline";

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  return (
    <DefaultLayout>
      <Introduction />
      <Wave />
      <Aboutme />
      <TimeLine />
      <DevWork />
      <MyPhotography />
    </DefaultLayout>
  );
};
