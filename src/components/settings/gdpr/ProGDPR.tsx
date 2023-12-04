import React, { FC, useState, useEffect } from "react";
import { Spin } from "antd";
import { ProSideBar } from "./ProSideBar";
import { ProContent } from "./ProContent";

export const ProGDPR: FC = () => {
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
        <div className="flex xl:justify-center gap-[15px] md:gap-[50px] py-[32px] lg:py-[64px] xl:gap-[100px] px-[15px] lg:px-[80px] xl:px-[160px]">
          <ProSideBar />
          <ProContent />
        </div>
      )}
    </>
  );
};
