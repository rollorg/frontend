import React, { FC, useState, useEffect } from "react";
import { SideBar } from "./SideBar";
import { Content } from "./Content";
import { useLocation } from "react-router-dom";
import SwipeTransition from "components/swipe/SwipeTrans";
import { Spin } from 'antd';

export const Patron: FC = () => {
  const location = useLocation();
  const swipeTransitionURL = "/free_client_patron1";
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 700));
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
                <SideBar />
                <Content />
              </div>
            </SwipeTransition>
          ) : (
            <div className="flex xl:justify-center gap-[15px] md:gap-[50px] py-[32px] lg:py-[64px] xl:gap-[100px] px-[15px] lg:px-[80px] xl:px-[160px]">
              <SideBar />
              <Content />
            </div>
          )}
        </>
      )}
    </>
  );
};
