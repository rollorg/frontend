import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import closeIcon from "components/assets/icons/Close.svg";
import xgroupIcon from "components/assets/icons/X group.svg";
import doneIcon from "components/assets/icons/Done1.svg";
import authIcon from "components/assets/icons/Authentication.svg";
import infoIcon from "components/assets/icons/Info1.svg";

export const Content: FC = () => {
  return (
    <>
      <div
        style={{ fontFamily: "Figtree" }}
        className="lg:w-[780px] lg:pb-[98px] pb-[61px] w-[90%]"
      >
        <div className="flex justify-end">
          <NavLink to="/free_client" className="hidden lg:flex">
            <img src={closeIcon} alt={closeIcon} />
          </NavLink>
          <NavLink
            to="/free_client"
            className="flex lg:hidden w-[32px] h-[32px]"
          >
            <img src={closeIcon} alt={closeIcon} />
          </NavLink>
        </div>
        <div className="lg:w-[550px]">
          <div className="text-[20.25px] pt-[20px] lg:pt-0 lg:text-[25.63px] text-[#1463F3] not-italic font-[700] leading-[140%] tracking-[0.203px] lg:tracking-[0.256px]">
            <h1>Team management </h1>
          </div>
          <hr className="bg-[#CCD0D8] mt-[10px]" />
          <div className="text-[#000] text-[18px] not-italic font-[400] leading-[140%] tracking-[0.18px] mt-[32px]">
            <p>
              Team management is available on the {""}
              <span className="text-[18px] not-italic font-[700] leading-[140%] tracking-[0.18px]">
                Pro
              </span>{" "}
              plan
            </p>
          </div>
          <div className="input flex justify-between flex-col lg:flex-row items-center lg:h-[64px] h-[82px] mt-[32px] p-[16px] rounded-[4px] bg-[#fff] text-[16px] lg:text-[18px] not-italic font-[400] leading-[140%] tracking-[0.16px] lg:tracking-[0.18px]">
            <div className="flex items-center gap-[8px]">
              <img src={xgroupIcon} alt={xgroupIcon} />
              <p className="text-[#323336]">xtcomm@gmail.com</p>
              <p className="lg:flex hidden text-[#A7A8AE]">(Accepted)</p>
              <div className="block lg:hidden">
                <img src={doneIcon} alt={doneIcon} />
              </div>
            </div>
            <div className="text-[#343A3F]">
              <p>Administrator </p>
            </div>
          </div>
        </div>
        <div className="lg:w-[550px] pt-[32px] lg:hidden">
          <div className="text-[20.25px] flex items-center gap-[8px] pt-[20px] lg:pt-0 lg:text-[25.63px] text-[#1463F3] not-italic font-[700] leading-[140%] tracking-[0.203px] lg:tracking-[0.256px]">
            <h1>Teams</h1>
            <img src={infoIcon} alt={infoIcon} />
          </div>
          <hr className="bg-[#CCD0D8] mt-[10px]" />

          <div className="lg:w-[500px] flex flex-col gap-[18px] lg:gap-[20px] pt-[20px] text-[#323336] text-[16px] lg:text-[18px] not-italic font-[400] leading-[140%] tracking-[0.16px] lg:tracking-[0.18px]">
            <div className="flex gap-[16px] items-center">
              <p>NedSoft Inc.</p>
              <img src={authIcon} alt={authIcon} />
            </div>
            <div className="flex gap-[16px] items-center">
              <p>Xtcomm Inc.</p>
              <img src={authIcon} alt={authIcon} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
