import React, { FC, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Modal } from "antd";
import closeIcon from "components/assets/icons/Close.svg";
import doneIcon from "components/assets/icons/Done.svg";
import addIcon from "components/assets/icons/plus.svg";
import Checkbox from "@mui/material/Checkbox";
import strockIcon from "components/assets/icons/strock.svg";

interface UpdateModalProps {
  setOpen: boolean;
  handleUpdate: () => void;
}

const DetailModal: FC<UpdateModalProps> = ({ setOpen, handleUpdate }) => {
  const [isUpdate, setUpdate] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

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
          <div
            style={{ width: "100%" }}
            className="text-[#A7A8AE] text-[18px] not-italic font-[400] leading-[100%] tracking-[0.1 8px]"
          >
            <TextField
              id="outlined-Category-name"
              label="E-mail address"
              placeholder="e-mail address"
              fullWidth
            />
          </div>
          <div
            style={{ width: "100%" }}
            className="text-[#A7A8AE] text-[18px] not-italic font-[400] leading-[100%] tracking-[0.1 8px]"
          >
            <TextField
              id="outlined-Category-name"
              label="Display name"
              placeholder="Display name"
              fullWidth
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-[#000] text-[18px] not-italic font-[400] leading-[140%] tracking-[0.18px]">Role</h1>
            <div className="border border-[#1463F3] rounded-[4px]">
              <div className="p-[10px] lg:p-[5px]">
                <h1 className="text-[#1D2023] text-[16px] lg:text-[18px] not-italic font-[500] leading-[140%] tracking-[0.16px] lg:tracking-[0.18px]">Administrator</h1>
                <div className="flex justify-between items-center text-[#595A5E] text-[14.22px] lg:text-[16px] not-italic font-[400] leading-[140%] tracking-[0.142px] lg:tracking-[0.16px]">
                  <p>Administrative users can perform any action</p>
                  <Checkbox />
                </div>
              </div>
              <img src={strockIcon} alt={strockIcon} className="w-[100%]" />
              <div className="p-[10px] lg:p-[5px]">
                <h1 className="text-[#1D2023] text-[16px] lg:text-[18px] not-italic font-[500] leading-[140%] tracking-[0.16px] lg:tracking-[0.18px]">Editor</h1>
                <div className="flex justify-between items-center text-[#595A5E] text-[14.22px] lg:text-[16px] not-italic font-[400] leading-[140%] tracking-[0.142px] lg:tracking-[0.16px]">
                  <p>Editorial users have the ability to read, create and update</p>
                  <Checkbox />
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[4px] border-[0.5px] bg-[#1463F3] text-[#fff] px-[16px] py-[8px] h-[56px] flex justify-center items-center">
            <button type="button" onClick={modalUpdate}>
              Add team member
            </button>
            <img src={addIcon} alt={addIcon} />
          </div>
        </Box>
      </div>
      <div
        className="transition-transform ease-in-out duration-300 absolute -left-[20px] md:-left-[120px] lg:-left-[403px] top-[540px] md:top-[580px] lg:top-[500px] xl:top-[600px] md:w-[800px] w-[393px] lg:w-[1360px]"
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

export default DetailModal;
