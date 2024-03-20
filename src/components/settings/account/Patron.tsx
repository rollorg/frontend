import React, { FC, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SwipeTransition from "components/swipe/SwipeTrans";
import { Spin } from "antd";
import SideBar from "../sideBar/SideBar";
import { Content } from "./Content";
import { ProContent } from "./ProContent";

interface PatronProps {
  type: "free" | "pro";
  swipeTransitionURL: string;
}

const Patron: FC<PatronProps> = ({ type, swipeTransitionURL }) => {
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

export const FreePatron: FC = () => (
  <Patron type="free" swipeTransitionURL="/free_client_patron1-e925d3" />
);

export const ProPatron: FC = () => (
  <Patron type="pro" swipeTransitionURL="/pro_client_patron1-e925d3" />
);
