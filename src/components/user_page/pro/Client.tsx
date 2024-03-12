import React, { FC, useState, useEffect } from "react";
import { Spin } from "antd";
import { ProNav } from "./Nav";
import { ProBody } from "./Body";
import { ProFooter } from "./Footer";

export const ProClient: FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 700));
      setIsLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    document.title = "Rollog | Pro Client";
  }, []);

  return (
    <>
      {isLoading ? (
        <Spin />
      ) : (
        <>
          <ProNav />
          <ProBody />
          <ProFooter />
        </>
      )}
    </>
  );
};
