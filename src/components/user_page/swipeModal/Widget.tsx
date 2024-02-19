import React, { FC, useState } from "react";
import { WidgetList } from "./WidgetList";

export const Widget: FC = () => {
  const [list, setList] = useState(false);

  const toggleList = () => {
    setList((prev) => !prev);
  };

  return (
    <>
      <div
        style={{ fontFamily: "Figtree" }}
        className="input lg:w-[435px] rounded-[8px] bg-[#fff] pt-[24px] pb-[16px] px-[16px] flex flex-col gap-[10px]"
      >
        <div className="flex justify-center text-[18px] lg:text-[20.25px] not-italic font-[700] leading-[140%] tracking-[0.18px] lg:tracking-[0.203px] text-[#1463F3]">
          <h1>Recent changes</h1>
        </div>
        <hr />
        <div className="flex flex-col gap-[10px]">
          <div className="flex gap-[10px] items-center text-[#FFFFFF] text-[11.24px] lg:text-[12.64px] not-italic font-[500] leading-[100%] tracking-[0.126px]">
            <div className="box bg-[#4BB543] py-[4px] px-[8px]">
              <p>Fix</p>
            </div>
            <div className="update bg-[#FC1B13] py-[4px] px-[8px]">
              <p>Update</p>
            </div>
            <div className="text-[#1D2023] text-[16px] lg:text-[18px] not-italic font-[500] leading-[140%] tracking-[0.16px] lg:tracking-[0.18px]">
              <p>Lorem ipsum dolor</p>
            </div>
          </div>
          <button
            className="text-[#595A5E] text-[16px] not-italic font-[400] leading-[140%] tracking-[0.16px] text-start"
            onClick={toggleList}
          >
            Aliquam hac magna eu tincidunt. Interdum condimentum dui quis duis
            aliquet nunc diam. At neque id tellus eu sed leo.
          </button>
          <div className="flex gap-[10px] items-center text-[#FFFFFF] text-[11.24px] lg:text-[12.64px] not-italic font-[500] leading-[100%] tracking-[0.126px]">
            <div className="box bg-[#4BB543] py-[4px] px-[8px]">
              <p>Fix</p>
            </div>
            <div className="text-[#1D2023] text-[16px] lg:text-[18px] not-italic font-[500] leading-[140%] tracking-[0.16px] lg:tracking-[0.18px]">
              <p>Lorem ipsum dolor</p>
            </div>
          </div>
          <button
            className="text-[#595A5E] text-[16px] not-italic font-[400] leading-[140%] tracking-[0.16px] text-start"
            onClick={toggleList}
          >
            Aliquam hac magna eu tincidunt. Interdum condimentum dui quis duis
            aliquet nunc diam. At neque id tellus eu sed leo.
          </button>
          <div>
            <div className="flex gap-[10px] items-center text-[#FFFFFF] text-[11.24px] lg:text-[12.64px] not-italic font-[500] leading-[100%] tracking-[0.126px]">
              <div className="box bg-[#FA8E02] py-[4px] px-[8px]">
                <p>New</p>
              </div>
              <div className="text-[#1D2023] text-[16px] lg:text-[18px] not-italic font-[500] leading-[140%] tracking-[0.16px] lg:tracking-[0.18px]">
                <p>Lorem ipsum dolor</p>
              </div>
            </div>
            <div className="text-[#595A5E] text-[16px] not-italic font-[400] leading-[140%] tracking-[0.16px]">
              <p>
                Aliquam hac magna eu tincidunt. Interdum condimentum dui quis
                duis aliquet nunc diam. At neque id tellus eu sed leo.
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex justify-center text-center text-[#84A4FC] text-[14.22px] not-italic font-[400] leading-[140%] tracking-[0.142px]">
          <p>
            <span className="underline">Rollog changelog</span> powered by
            Rollog
          </p>
        </div>
      </div>

      {list && (
        <div
          data-aos="fade-left"
          data-aos-duration="700"
          className="absolute top-0 right-0 flex"
        >
          <WidgetList />
        </div>
      )}
    </>
  );
};
