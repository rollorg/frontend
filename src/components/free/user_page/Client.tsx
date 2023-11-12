import React, { FC, useState, useEffect } from "react";
import { Body } from "./Body";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Spin } from "antd";

export const FreeClient: FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 700));
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <Spin />
      ) : (
        <>
          <Nav />
          <Body />
          <Footer />
        </>
      )}
    </>
  );
};
