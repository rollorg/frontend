import React, { FC } from "react";
import { Modal } from "antd";
import closeIcon from "components/assets/icons/Close.svg";
import rightArrow from "components/assets/icons/right icon.svg";
import { NavLink } from "react-router-dom";

interface MyModalProps {
  isOpen: boolean;
  handleCancel: () => void;
}

const MyModal: FC<MyModalProps> = ({ isOpen, handleCancel }) => {
  return (
    <Modal
      className="modal_"
      title="Basic Modal"
      open={isOpen}
      onCancel={handleCancel}
      centered
    >
      <div
        style={{ fontFamily: "Figtree" }}
        className="flex flex-col gap-[10px]  text-[16px] lg:text-[18px] not-italic font-[400] leading-[140%] tracking-[0.16px] lg:tracking-[0.18px]"
      >
        <div className="flex justify-end">
          <button onClick={handleCancel}>
            <img
              src={closeIcon}
              alt={closeIcon}
              className="h-[32px] w-[32px] lg:h-[48px] lg:w-[48px]"
            />
          </button>
        </div>
        <div className="lg:text-[#1D2023] text-[#323336] text-[16px] lg:text-[20.25px] not-italic font-[400] leading-[140%] tracking-[0.16px] text-center lg:tracking-normal">
          <p>
            Upgrade to{" "}
            <span className="font-[700] tracking-[0.16px] lg:tracking-[0.203px]">
              Pro
            </span>{" "}
            plan to add up to 20 categories!
          </p>
        </div>
        <div className="flex justify-center gap-[32px] pt-[10px] lg:pt-[20px]">
          <NavLink
            to="/free_client_scheme"
            className="rounded-[4px] hover:text-[#fff] bg-[#1463F3] text-[#ffff] px-[16px] py-[8px] w-[100%] h-[56px] flex justify-center gap-[8px] items-center"
          >
            Upgrade
            <img src={rightArrow} alt={rightArrow} />
          </NavLink>
        </div>
      </div>
    </Modal>
  );
};

export default MyModal;
