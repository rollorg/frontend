import React, { FC, useState } from "react";
import { Modal } from "antd";
import deleteIcon from "components/assets/icons/delete1.svg";
import cancelIcon from "components/assets/icons/small.svg";
import closeIcon from "components/assets/icons/Close.svg";
import doneIcon from "components/assets/icons/Done.svg";

interface ModalProps {
  isOpen: boolean;
  cancelDelete: () => void;
}

const MyModal: FC<ModalProps> = ({ isOpen, cancelDelete }) => {
  const [isDelete, setDelete] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  const handleDelete = () => {
    setDelete(true);

    setTimeout(() => {
      setDelete(false);
      setIsVisible(false);
    }, 700);
    window.location.reload();
  };

  return (
    <Modal
      className="modal_"
      title="Basic Modal"
      open={isOpen}
      onCancel={cancelDelete}
      centered
    >
      <div
        style={{ fontFamily: "Figtree" }}
        className="flex flex-col gap-[10px]  text-[16px] lg:text-[18px] not-italic font-[400] leading-[140%] tracking-[0.16px] lg:tracking-[0.18px]"
      >
        <div className="flex justify-end cursor-pointer" onClick={cancelDelete}>
          <img
            src={closeIcon}
            alt={closeIcon}
            className="h-[32px] w-[32px] lg:h-[48px] lg:w-[48px]"
          />
        </div>
        <div className="text-[#323336]">
          <p>Do you want to delete “Company name” account?</p>
        </div>
        <div className="flex justify-end gap-[32px] pt-[20px]">
          <div className="rounded-[4px] border-[0.5px] border-[#A7A8AE] bg-[#fff] text-[#A7A8AE] px-[16px] py-[8px] lg:w-[152px] h-[56px] flex justify-center gap-[8px] items-center">
            <button onClick={cancelDelete}>Cancel</button>
            <img src={cancelIcon} alt={cancelIcon} />
          </div>
          <div className="rounded-[4px] border-[0.5px] border-[#A7A8AE] bg-[#FC1B13] text-[#fff] px-[16px] py-[8px] lg:w-[152px] h-[56px] flex justify-center gap-[8px] items-center">
            <button onClick={handleDelete}>Delete</button>
            <img src={deleteIcon} alt={deleteIcon} />
          </div>
        </div>
      </div>
      <div
        className="transition-transform ease-in-out duration-300 absolute -left-[15px] md:-left-[120px] lg:-left-[430px] top-[400px] md:top-[580px] lg:top-[380px] xl:top-[440px] md:w-[800px] w-[393px] lg:w-[1360px]"
        style={{
          transform: isDelete ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        {isDelete && (
          <div
            className={`bg-[#4BB543] py-[10px] flex items-center justify-center`}
          >
            <div className="px-4 flex items-center text-[#fff] text-[16px] lg:text-[18px] not-italic font-[500] leading-[140%] tracking-[0.16px] lg:tracking-[0.18px]">
              <img src={doneIcon} alt={doneIcon} />
              Delete successful
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default MyModal;
