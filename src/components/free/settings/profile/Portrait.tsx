import React, { FC } from "react";
import { SideBar } from "./SideBar";
import { Content } from "./Content";

export const Portrait: FC = () => {
  return (
    <>
      <div className="flex justify-center gap-[100px] px-[160px]">
        <SideBar />
        <Content />
      </div>
    </>
  );
};
