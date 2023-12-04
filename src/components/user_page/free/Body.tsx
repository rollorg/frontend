import React, { FC, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Widget from "components/user_page/modal/Widget";
import widget from "components/assets/icons/widget.svg";
import addLogo from "components/assets/icons/Add.svg";
import user from "components/assets/icons/user.svg";
import lefteIcon from "components/assets/icons/left icon.svg";
import AOS from "aos";
import "aos/dist/aos.css";

export const Body: FC = () => {
  const [widgetVisible, setWidgetVisible] = useState(false);
  const [widgetPosition, setWidgetPosition] = useState("closed");

  const toggleWidget = () => {
    if (widgetPosition === "closed") {
      setWidgetVisible(true);
      setWidgetPosition("open");
    } else {
      setWidgetPosition("closing");
      setTimeout(() => {
        setWidgetVisible(false);
        setWidgetPosition("closed");
      }, 500);
    }
  };
  
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div
        style={{ fontFamily: "Figtree" }}
        className="xl:px-[88px] md:px-[40px] py-[40px] px-[15px] lg:h-[824px] lg:gap-[30px] xl:gap-0 flex flex-col-reverse lg:flex-row md:text-[18px] text-[16px] not-italic font-[400] leading-[150%] md:tracking-[0.18px] tracking-[0.16px]"
      >
        <hr className="text-[#DADEE4] lg:hidden flex relative top-[30px]" />
        <NavLink
          to="/free_client_widegt1"
          className="flex items-center gap-[8px] xl:w-[24%] text-[#323336] lg:pt-[350px]"
        >
          <div className="h-[48px] w-[48px] md:w-[88px] md:h-[88px]">
            <img src={widget} alt={widget} />
          </div>
          <p className="hidden lg:flex">Add widget</p>
        </NavLink>
        <div className="flex flex-col gap-[24px] lg:gap-[50px] xl:w-[714px] lg:pt-[50px]">
          <div className="flex items-center gap-[8px] text-[#323336] text-[18px] leading-[140%] tracking-[0.18px]">
            <div onClick={toggleWidget} className="cursor-pointer">
              <img src={addLogo} alt={addLogo} />
            </div>
            <p>Add new changelog</p>
          </div>
          {widgetVisible && (
            <div data-aos="fade-left" data-aos-duration="700" className={`absolute top-[90px] md:top-[80px] lg:top-[200px] right-0 transition-transform hidden lg:block ${
              widgetPosition === "open"
                ? "translate-x-0"
                : widgetPosition === "closing"
                ? "translate-x-full"
                : "translate-x-full hidden"
            }`}>
              <Widget />
            </div>
          )}
          {widgetVisible && (
            <div className={`absolute top-[90px] md:top-[80px] lg:top-[200px] right-0 transition-transform lg:hidden ${
              widgetPosition === "open"
                ? "translate-x-0"
                : widgetPosition === "closing"
                ? "translate-x-full"
                : "translate-x-full hidden"
            }`}>
              <Widget />
            </div>
          )}
          <div className="flex flex-col gap-[24px] p-[16px] lg:p-[24px] rounded-[8px] border border-[#92B7F9] lg:w-[714px] mb-[20px] xl:mb-[100px]">
            <p className="text-[#595A5E] text-[14.22px] md:text-[16px] not-italic font-[400] leading-[140%] tracking-[0.142px] md:tracking-[0.16px]">
              July 14, 2023
            </p>
            <div className="flex items-center gap-1">
              <h1 className="text-[#1D2023] text-[25.63px] md:text-[32.44px] not-italic font-[700] leading-[140%] md:leading-[110%] tracking-[0.256px] md:tracking-[0.324px]">
                Placerat orci
              </h1>
              <p className="text-[#595A5E] text-[18px] not-italic font-[400] leading-[140%] tracking-[0.18px]">
                (Draft)
              </p>
            </div>
            <div className="box text-[#fff] text-[14.22px] not-italic font-[400] leading-[140%] tracking-[0.142px] bg-[#1463F3] w-[40px] flex justify-center">
              <p>New</p>
            </div>
            <div className="text-[#323336] lg:w-[665px] flex flex-col gap-[24px]">
              <p>
                Lorem ipsum dolor sit amet consectetur. Consectetur sed at duis
                nisl sit imperdiet eu dui. Placerat orci lacus condimentum vitae
                eget porta commodo eu. Lorem ipsum dolor sit amet consectetur.
                Consectetur sed at duis nisl sit imperdiet eu dui.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Consectetur sed at duis
                nisl sit imperdiet eu dui. Placerat orci lacus condimentum vitae
                eget porta commodo eu.
              </p>
            </div>
            <div className="text-[#D3D7DE]">
              <hr />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-1 text-[#808186]">
               <img src={user} alt={user} />
                <p>Franko, Lead Dev.</p>
              </div>
              <div
                onClick={toggleWidget}
                className="flex items-center gap-1 text-[#1463F3] cursor-pointer"
              >
               <img src={lefteIcon} alt={lefteIcon} />
                <p>Edit</p>
              </div>
            </div>
          </div>
          <hr className="hidden lg:flex text-[#D3D7DE]" />
        </div>
      </div>
    </>
  );
};