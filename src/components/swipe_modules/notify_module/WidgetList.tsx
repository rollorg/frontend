import React, { FC } from "react";
import scale from "../../assets/widget_asset/image 2.png"

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
          <svg onClick={handleClose} className="cursor-pointer"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.4771 16.0002L19.1386 21.6617C19.2634 21.7865 19.33 21.9395 19.3386 22.1207C19.3471 22.3019 19.2805 22.4634 19.1386 22.6053C18.9967 22.7472 18.8394 22.8182 18.6668 22.8182C18.4941 22.8182 18.3369 22.7472 18.195 22.6053L12.3437 16.754C12.2275 16.6378 12.1458 16.519 12.0988 16.3976C12.0518 16.2763 12.0283 16.1438 12.0283 16.0002C12.0283 15.8566 12.0518 15.7241 12.0988 15.6028C12.1458 15.4814 12.2275 15.3626 12.3437 15.2464L18.195 9.39507C18.3198 9.27029 18.4728 9.20362 18.654 9.19507C18.8352 9.18651 18.9967 9.25318 19.1386 9.39507C19.2805 9.53695 19.3514 9.69422 19.3514 9.86687C19.3514 10.0395 19.2805 10.1968 19.1386 10.3387L13.4771 16.0002Z"
              fill="#1D2023"
            />
          </svg>
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
