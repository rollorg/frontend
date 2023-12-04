import React, { FC, useState } from "react";
import Box from "@mui/material/Box";
import { Modal } from "antd";
import closeIcon from "components/assets/icons/Close.svg";
import doneIcon from "components/assets/icons/Done.svg";
import Checkbox from "@mui/material/Checkbox";
import strockIcon from "components/assets/icons/strock.svg";
import deleteIcon from "components/assets/icons/Delete.svg";
import DeleteModal from "./DeleteModal";

interface UpdateModalProps {
  setOpen: boolean;
  handleUpdate: () => void;
}

const UpdatelModal: FC<UpdateModalProps> = ({ setOpen, handleUpdate }) => {
  const [isUpdate, setUpdate] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isDeleteModal, setDeleteModal] = useState(false);
  const [isDeleteTeam, setDeleteTeam] = useState(false);

  const openModal = () => {
    setDeleteModal(true);
  };

  const closeModal = () => {
    setDeleteModal(false);
    setDeleteTeam(false);
  };

  if (!isVisible) {
    return null;
  }

  const modalUpdate = () => {
    setUpdate(true);

    setTimeout(() => {
      setUpdate(false);
      setIsVisible(false);
    }, 3000);
  };

  return (
    <Modal
      className="modal_ w-[628px]"
      title="Basic Modal"
      open={setOpen}
      onCancel={handleUpdate}
      centered
      width={570}
    >
      <div
        style={{ fontFamily: "Figtree" }}
        className="flex flex-col gap-[10px] text-[16px] lg:text-[18px] not-italic font-[400] leading-[140%] tracking-[0.16px] lg:tracking-[0.18px]"
      >
        <div className="flex justify-end cursor-pointer" onClick={handleUpdate}>
          <img
            src={closeIcon}
            alt={closeIcon}
            className="h-[32px] w-[32px] lg:h-[48px] lg:w-[48px]"
          />
        </div>
        <Box
          style={{ fontFamily: "Figtree" }}
          component="form"
          sx={{
            "& .MuiTextField-root": { width: "100%" },
          }}
          noValidate
          autoComplete="off"
          className="flex flex-col gap-[20px]"
        >
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-[#1463F3] text-[25.63px] not-italic font-[700] leading-[140%] tracking-[0.256px]">
              Team Xtcomm Inc.
            </h1>
            <div className="w-[350px]">
              <div className="lg:flex hidden justify-between text-[#323336] text-[20.25px] not-italic font-[500] leading-[140%] tracking-[0.203px]">
                <p>ID</p>
                <p>Role</p>
              </div>
            </div>
            <div className="border border-[#1463F3] rounded-[4px]">
              <div className="p-[10px] lg:p-[5px]">
                <div className="flex flex-col lg:flex-row justify-between lg:items-center text-[#1D2023] text-[14.22px] lg:text-[18px] not-italic font-[400] leading-[140%] tracking-[0.142px] lg:tracking-[0.18px]">
                  <p>xtcomm@gmail.com</p>
                    <div className="flex justify-between gap-2">
                      <div className="flex items-center">
                        <div className="flex items-center">
                          <Checkbox />
                          <p>Admin</p>
                        </div>
                        <div className="flex items-center">
                          <Checkbox />
                          <p>Editor</p>
                        </div>
                      </div>
                      <img src={deleteIcon} alt={deleteIcon} onClick={openModal} className="cursor-pointer" />
                      <DeleteModal isOpen={isDeleteModal} cancelDelete={closeModal} />
                    </div>
                </div>
              </div>
              <img src={strockIcon} alt={strockIcon} className="w-[100%]" />
              <div className="p-[10px] lg:p-[5px]">
                <div className="flex flex-col lg:flex-row justify-between lg:items-center text-[#1D2023] text-[14.22px] lg:text-[18px] not-italic font-[400] leading-[140%] tracking-[0.142px] lg:tracking-[0.18px]">
                  <p>franko4don@gmail.com</p>
                    <div className="flex justify-between gap-2">
                      <div className="flex items-center">
                        <div className="flex items-center">
                          <Checkbox />
                          <p>Admin</p>
                        </div>
                        <div className="flex items-center">
                          <Checkbox />
                          <p>Editor</p>
                        </div>
                      </div>
                      <img src={deleteIcon} alt={deleteIcon} onClick={openModal} className="cursor-pointer" />
                      <DeleteModal isOpen={isDeleteTeam} cancelDelete={closeModal} />
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[4px] border-[0.5px] bg-[#1463F3] text-[#fff] px-[16px] py-[8px] h-[56px] flex justify-center items-center text-[18px]">
            <button type="button" onClick={modalUpdate}>
              Update
            </button>
            <img src={doneIcon} alt={doneIcon} />
          </div>
        </Box>
      </div>
      <div
        className="transition-transform ease-in-out duration-300 absolute -left-[20px] md:-left-[120px] lg:-left-[403px] top-[450px] md:top-[580px] lg:top-[380px] xl:top-[440px] md:w-[800px] w-[393px] lg:w-[1360px]"
        style={{
          transform: isUpdate ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        {isUpdate && (
          <div
            className={`bg-[#4BB543] py-[10px] flex items-center justify-center`}
          >
            <div className="px-4 flex items-center text-[#fff] text-[16px] lg:text-[18px] not-italic font-[500] leading-[140%] tracking-[0.16px] lg:tracking-[0.18px]">
              <img src={doneIcon} alt={doneIcon} />
              Team member added successfully
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default UpdatelModal;
