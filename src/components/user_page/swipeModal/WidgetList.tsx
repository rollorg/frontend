import React, { FC } from "react";
import scale from "components/assets/widget_asset/image 2.png"
import chevronIcon from "components/assets/icons/Left arrow.svg"

export const WidgetList: FC = () => {
    const handleClose = () => {
        window.location.reload();
      };

  return (
    <>
      <div
        style={{ fontFamily: "Figtree" }}
        className="input lg:w-[435px] round-[8px] bg-[#fff] px-[16px] pt-[20px] pb-[24px] flex flex-col gap-[10px]"
      >
        <div className="flex gap-[50px] lg:gap-[100px] items-center text-[#1463F3] text-[18px] not-italic font-[700] leading-[140%] tracking-[0.18px]">
          <img src={chevronIcon} alt={chevronIcon} onClick={handleClose} className="cursor-pointer" />
          <p>Lorem ipsum dolor</p>
        </div>
        <hr />
        <div className="flex flex-col gap-[10px]">
          <div className="flex gap-[10px] items-center text-[#FFFFFF] text-[12.64px] not-italic font-[500] leading-[100%] tracking-[0.126px]">
            <div className="box bg-[#4BB543] py-[4px] px-[8px]">
              <p>Fix</p>
            </div>
            <div className="update bg-[#FC1B13] py-[4px] px-[8px]">
              <p>Update</p>
            </div>
          </div>
          <div className="text-[#323336] text-[16px] not-italic font-[400] leading-[150%] tracking-[0.16px]">
            <p>
              Aliquam hac magna eu tincidunt. Interdum condimentum dui quis duis
              aliquet nunc diam. At neque id tellus eu sed leo. Aliquam hac
              magna eu tincidunt.
            </p>
          </div>
        </div>
        <div>
            <img src={scale} alt="scsle_img" />
        </div>
        <div className="text-[#323336] text-[16px] not-italic font-[400] leading-[150%] tracking-[0.16px]">
            <p>Convallis in nam eros ultrices a vulputate condiment aliquam. Lacus fusce ut pulvinar accumsan id. In risu posuere quis arcu. </p>
        </div>
      </div>
    </>
  );
};
