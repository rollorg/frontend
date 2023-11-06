import React, { FC } from "react";
import { SideBar } from "./SideBar";
import { Content } from "./Content";

export const General: FC = () => {
  return (
    <>
      <div className="flex xl:justify-center gap-[15px] md:gap-[50px] py-[32px] lg:py-[64px] xl:gap-[100px] px-[15px] lg:px-[80px] xl:px-[160px]">
        <SideBar />
        <Content />
      </div>
    </>
  );
};
