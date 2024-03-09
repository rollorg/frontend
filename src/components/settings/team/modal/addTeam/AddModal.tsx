import React, { FC, useState } from "react";
import { Modal } from "antd";
import closeIcon from "components/assets/icons/Close.svg";
import plusIcon from "components/assets/icons/plus.svg";
import DetailModal from "./Detail";

interface UpdateModalProps {
  setOpen: boolean;
  handleCancel: () => void;
}

const AddTeamModal: FC<UpdateModalProps> = ({ setOpen, handleCancel }) => {
  const [DetailModalOpen, setDetailModalOpen] = useState(false);

  const updateModal = () => {
    setDetailModalOpen(true);
  };

  const handleUpdate = () => {
    setDetailModalOpen(false);
  };

  return (
    <Modal
      className="modal_ w-[628px]"
      title="Basic Modal"
      open={setOpen}
      onCancel={handleCancel}
      centered
      width={570}
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
        <div className="lg:text-[#1D2023] text-[#323336] text-[16px] lg:text-[20.25px] not-italic font-[400] leading-[140%] tracking-[0.16px] text-center lg:tracking-normal flex justify-start">
          <p>This team has no member(s) yet.</p>
        </div>
        <div className="flex justify-center gap-[32px] pt-[10px] lg:pt-[20px]">
          <div className="rounded-[4px] hover:text-[#fff] bg-[#1463F3] text-[#ffff] px-[16px] py-[8px] w-[100%] h-[56px] flex justify-center gap-[8px] items-center">
            <button onClick={updateModal}>Add team member</button>
            <img src={plusIcon} alt={plusIcon} />
            <DetailModal
              setOpen={DetailModalOpen}
              handleUpdate={handleUpdate}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddTeamModal;
