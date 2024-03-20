import React, { FC, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SwipeTransition from "components/swipe/SwipeTrans";
import { Spin } from "antd";
import SideBar from "../sideBar/SideBar";
import { Content } from "./Content";
import { ProContent } from "./ProContent";

interface WidgetProps {
  type: "free" | "pro";
  swipeTransitionURL: string;
}

const Widget: FC<WidgetProps> = ({ type, swipeTransitionURL }) => {
  const location = useLocation();
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
          {location.pathname === swipeTransitionURL ? (
            <SwipeTransition>
              <div className="flex xl:justify-center gap-[15px] md:gap-[50px] py-[32px] lg:py-[64px] xl:gap-[100px] px-[15px] lg:px-[80px] xl:px-[160px]">
                <SideBar type={type} />
                {type === "free" ? <Content /> : <ProContent />}
              </div>
            </SwipeTransition>
          ) : (
            <div className="flex xl:justify-center gap-[15px] md:gap-[50px] py-[32px] lg:py-[64px] xl:gap-[100px] px-[15px] lg:px-[80px] xl:px-[160px]">
              <SideBar type={type} />
              {type === "free" ? <Content /> : <ProContent />}
            </div>
          )}
        </>
      )}
    </>
  );
};

export const FreeWidget: FC = () => (
  <Widget type="free" swipeTransitionURL="/free_client_widegt1-e925d4" />
);

export const ProWidget: FC = () => (
  <Widget type="pro" swipeTransitionURL="/pro_client_widegt1-e925d4" />
);
