import React, { FC, useState, useEffect } from "react";
import { Spin } from "antd";
import SideBar from "../sideBar/SideBar";
import Content from "./Content";
import ProContent from "./ProContent";

interface SectionProps {
  type: "free" | "pro";
}

const Section: FC<SectionProps> = ({ type }) => {
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
          <SideBar type={type} />
          {type === "free" ? <Content /> : <ProContent />}
        </div>
      )}
    </>
  );
};

export const FreeSection: FC = () => <Section type="free" />;

export const ProSection: FC = () => <Section type="pro" />;
