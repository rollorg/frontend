import React, { FC, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Modal } from "antd";
import cancelIcon from "components/assets/icons/close brown.svg";
import closeIcon from "components/assets/icons/Close.svg";
import doneIcon from "components/assets/icons/Done.svg";
import addIcon from "components/assets/icons/plus.svg";

interface UpdateModalProps {
  setOpen: boolean;
  handleUpdate: () => void;
}

const AddModal: FC<UpdateModalProps> = ({ setOpen, handleUpdate }) => {
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
        <div className="flex justify-end">
          <button onClick={handleUpdate}>
            <img
              src={closeIcon}
              alt={closeIcon}
              className="h-[32px] w-[32px] lg:h-[48px] lg:w-[48px]"
            />
          </button>
        </div>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { width: "100%" },
          }}
          noValidate
          autoComplete="off"
          className="flex flex-col gap-[30px]"
        >
          <div className="text-[#A7A8AE] text-[18px] not-italic font-[400] leading-[100%] tracking-[0.1 8px]">
            <TextField
              id="outlined-Category-name"
              label="Team name"
              placeholder="Team name"
              fullWidth
            />
          </div>
          <div className="flex gap-[16px] justify-end">
            <div className="rounded-[4px] border-[0.5px] border-[#A7A8AE] bg-[#fff] text-[#A7A8AE] px-[16px] py-[8px] lg:w-[152px] h-[56px] flex justify-center items-center">
              <button type="button" onClick={handleUpdate}>
                Cancel
              </button>
              <img src={cancelIcon} alt={cancelIcon} />
            </div>
            <div className="rounded-[4px] border-[0.5px] bg-[#1463F3] text-[#fff] px-[16px] py-[8px] lg:w-[204px] h-[56px] flex justify-center items-center">
              <button
                type="button"
                onClick={modalUpdate}
                className="flex gap-[4px]"
              >
                Add team
              </button>
              <img src={addIcon} alt={addIcon} />
            </div>
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
              Team added successfully
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default AddModal;
