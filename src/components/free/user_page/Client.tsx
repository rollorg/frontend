import React, { FC } from "react";
import { Body } from "./Body";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export const FreeClient: FC = () => {
  return (
    <>
      <Nav />
      <Body />
      <Footer />
    </>
  );
};
