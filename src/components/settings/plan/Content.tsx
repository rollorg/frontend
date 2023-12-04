import React, { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import closeIcon from "components/assets/icons/Close.svg";
import doneIcon from "components/assets/icons/Done.svg";
import rightIcon from "components/assets/icons/right.svg";
import MyModal from "./Modal";

export const Content: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
            <h1>Plans</h1>
          </div>
          <hr className="bg-[#CCD0D8] mt-[10px]" />
          <div className="mt-[40px] text-[#fff] lg:w-[366px] rounded-[4px] bg-[#1463F3] flex flex-col gap-[30px] lg:gap-[40px] items-center py-[25px] px-[20px]">
            <div className="flex flex-col gap-[10px] items-center text-center">
              <h1 className="text-[25.63px] lg:text-[32.44px] not-italic font-[700] leading-[110%] tracking-[0.256px] lg:tracking-[0.324px]">
                Pro
              </h1>
              <p className="text-[16px] lg:text-[18px] not-italic font-[400] leading-[140%] tracking-[0.16px] lg:tracking-[0.18px] lg:w-[283px]">
                For those who require additional features
              </p>
            </div>
            <div className="flex flex-col items-center gap-[10px]">
              <h1 className="text-[41.05px] lg:text-[46.18px] not-italic font-[700] leading-[120%] tracking-[0.41px] lg:tracking-[0.462px]">
                $29
              </h1>
              <p className="text-[16px] lg:text-[18px] not-italic font-[400] leading-[140%] tracking-[0.16px] lg:tracking-[0.18px] flex text-center lg:w-[212px] w-[188px]">
                per month billed annually or $34 billed monthly
              </p>
            </div>
            <div className="flex flex-col items-center gap-[30px]">
              <div className="lg:w-[325px] w-[100%] h-[56px] py-[8px] px-[16px] flex justify-center items-center gap-[8px] rounded-[4px] border-[1px] border-[#1463F3] bg-[#fff] lg:text-[18px] text-[16px] not-italic font-[500] leading-[100%] tracking-[0.16px] lg:tracking-[0.18px] text-[#1463F3]">
                <button onClick={showModal}>Get Pro</button>
                <img src={rightIcon} alt={rightIcon} />
                <MyModal isOpen={isModalOpen} handleCancel={handleCancel} />
              </div>
              <div className="text-[16px] lg:text-[18px] not-italic font-[400] leading-[140%] tracking-[0.16px] lg:tracking-[0.18px] flex flex-col gap-[5px]">
                <div className="flex items-center gap-[8px]">
                  <img src={doneIcon} alt={doneIcon} />
                  <p>Unlimited changelogs</p>
                </div>
                <div className="flex items-center gap-[8px]">
                  <img src={doneIcon} alt={doneIcon} />
                  <p>Pubic page customization</p>
                </div>
                <div className="flex items-center gap-[8px]">
                  <img src={doneIcon} alt={doneIcon} />
                  <p>Widget customization</p>
                </div>
                <div className="flex items-center gap-[8px]">
                  <img src={doneIcon} alt={doneIcon} />
                  <p>Custom categories</p>
                </div>
                <div className="flex items-center gap-[8px]">
                  <img src={doneIcon} alt={doneIcon} />
                  <p>Eye-catcher</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
