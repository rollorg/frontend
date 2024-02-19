import React, { FC } from "react";
import { Modal } from "antd";
import deleteIcon from "components/assets/icons/delete1.svg";
import cancelIcon from "components/assets/icons/small.svg";
import closeIcon from "components/assets/icons/Close.svg";

interface MyModalProps {
  isOpen: boolean;
  handleCancel: () => void;
}

const MyModal: FC<MyModalProps> = ({ isOpen, handleCancel }) => {
  const handleDelete = () => {
    window.location.reload();
  };

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
        <button className="flex justify-end" onClick={handleCancel}>
          <img
            src={closeIcon}
            alt={closeIcon}
            className="h-[32px] w-[32px] lg:h-[48px] lg:w-[48px]"
          />
        </button>
        <div className="text-[#323336]">
          <p>Do you want to delete “Company name” account?</p>
        </div>
        <div className="flex justify-end gap-[32px] pt-[20px]">
          <div className="rounded-[4px] border-[0.5px] border-[#A7A8AE] bg-[#fff] text-[#A7A8AE] px-[16px] py-[8px] lg:w-[152px] h-[56px] flex justify-center gap-[8px] items-center">
            <button onClick={handleCancel}>Cancel</button>
            <img src={cancelIcon} alt={cancelIcon} />
          </div>
          <div className="rounded-[4px] border-[0.5px] bg-[#FC1B13] text-[#fff] px-[16px] py-[8px] lg:w-[152px] h-[56px] flex justify-center gap-[8px] items-center">
            <button onClick={handleDelete}>Delete</button>
            <img src={deleteIcon} alt={deleteIcon} />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default MyModal;
