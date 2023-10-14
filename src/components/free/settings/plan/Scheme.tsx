import React, { FC } from "react";
import { SideBar } from "./SideBar";
import { Content } from "./Content";

export const Scheme: FC = () => {
  return (
    <>
      <div className="flex xl:justify-center gap-[15px] md:gap-[50px] pt-[32px] lg:pt-[64px] xl:gap-[100px] px-[15px] lg:px-[80px] xl:px-[160px]">
        <SideBar />
        <Content />
      </div>
    </>
  );
};
