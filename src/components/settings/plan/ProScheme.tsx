import React, { FC, useState, useEffect } from "react";
import { Spin } from "antd";
import { ProSideBar } from "./ProSideBar";
import { ProContent } from "./ProContent";

export const ProScheme: FC = () => {
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
        <div className="flex xl:justify-center gap-[15px] md:gap-[50px] pt-[32px] lg:pt-[64px] xl:gap-[100px] px-[15px] lg:px-[80px] xl:px-[160px]">
          <ProSideBar />
          <ProContent />
        </div>
      )}
    </>
  );
};
