import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import closeIcon from "components/assets/icons/Close.svg";
import addIcon from "components/assets/icons/Add.svg";
import edictIcon from "components/assets/icons/Editblack.svg";

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
            className="flex lg:hidden h-[32px] w-[32px]"
          ></NavLink>
        </div>
        <div className="lg:w-[550px]">
          <div className="flex justify-between items-center">
            <div className="text-[20.25px] pt-[20px] lg:pt-0 lg:text-[25.63px] text-[#1463F3] not-italic font-[700] leading-[140%] tracking-[0.203px] lg:tracking-[0.256px]">
              <h1>Category</h1>
            </div>
            <div className="lg:flex items-center gap-[16px] hidden text-[#323336] text-[18px] not-italic font-[400] leading-[140%] tracking-[0.18px]">
              <img src={addIcon} alt={addIcon} />
              <p>Add a category</p>
            </div>
          </div>
          <hr className="bg-[#CCD0D8] mt-[10px]" />
          <div className="flex items-center gap-[16px] lg:hidden text-[#323336] text-[18px] not-italic font-[400] leading-[140%] tracking-[0.18px] pt-[32px]">
            <img src={addIcon} alt={addIcon} />
            <p>Add a category</p>
          </div>
          <div className="lg:w-[500px] flex flex-col gap-[20px] pt-[20px] text-[#323336] text-[18px] not-italic font-[400] leading-[140%] tracking-[0.18px]">
            <div className="text-[#000] text-[18px] not-italic font-[400] leading-[140%] tracking-[0.18px] mt-[32px]">
              <p>
                Custom categories are available on the {""}
                <span className="text-[18px] not-italic font-[700] leading-[140%] tracking-[0.18px]">
                  Pro
                </span>{" "}
                plan
              </p>
            </div>
            <div className="lg:w-[500px] h-[56px] lg:h-[64px] pt-[16px] px-[16px] flex justify-between rounded-[4px] border-[1px] border-[#4BB543] border-l-[32px]">
              <p>Fix</p>
              <img src={edictIcon} alt={edictIcon} />
            </div>
            <div className="lg:w-[500px] h-[56px] lg:h-[64px] pt-[16px] px-[16px] flex justify-between rounded-[4px] border-[1px] border-[#FA8E02] border-l-[32px]">
              <p>Improvement</p>
              <img src={edictIcon} alt={edictIcon} />
            </div>
            <div className="lg:w-[500px] h-[56px] lg:h-[64px] pt-[16px] px-[16px] flex justify-between rounded-[4px] border-[1px] border-[#1463F3] border-l-[32px]">
              <p>New</p>
              <img src={edictIcon} alt={edictIcon} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
