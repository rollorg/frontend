import React, { FC } from "react";
import { Body } from "./Body";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export const FreeClient: FC = () => {
  return (
    <>
      <div className="flex flex-col h-[100vh] lg:h-[100%]">
        <Nav />
        <Body />
        <Footer />
      </div>
    </>
  );
};
