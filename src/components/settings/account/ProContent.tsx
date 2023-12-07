import React, { FC, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { NavLink } from "react-router-dom";
import userImg from "components/assets/account_asset/Frame 234.png";
import closeIcon from "components/assets/icons/Close.svg";
import deleteIcon from "components/assets/icons/Delete.svg";
import infoIcon from "components/assets/icons/Info1.svg";
import plusIcon from "components/assets/icons/plus.svg";
import doneIcon from "components/assets/icons/Done.svg";
import info from "components/assets/icons/Info.svg";
import MyModal from "./Modal";

const currencies = [
  {
    value: "TEXT",
    label: "Changelog",
  },
  {
    value: "TEXT2",
    label: "Changelog2",
  },
  {
    value: "TEXT3",
    label: "Changelog3",
  },
  {
    value: "TEXT4",
    label: "Changelog4",
  },
];

export const ProContent: FC = () => {
  const [isSaved, setIsSaved] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsSaved(true);

    setTimeout(() => {
      setIsSaved(false);
    }, 3000);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div style={{ fontFamily: "Figtree" }} className="lg:w-[780px] w-[90%]">
        <div className="flex justify-end">
          <NavLink to="/pro_client" className="hidden lg:flex">
            <img src={closeIcon} alt={closeIcon} />
          </NavLink>
          <NavLink to="/pro_client" className="flex lg:hidden w-[32px] h-[32px]">
            <img src={closeIcon} alt={closeIcon} />
          </NavLink>
        </div>
        <div className="flex items-center gap-[10px] text-[20.25px] pt-[20px] lg:pt-0 lg:text-[25.63px] text-[#1463F3] not-italic font-[700] leading-[140%] tracking-[0.203px] lg:tracking-[0.256px]">
          <h1>Account</h1>
          <div onClick={showModal} className="cursor-pointer">
            <img src={deleteIcon} alt={deleteIcon} />
          </div>
          <MyModal isOpen={isModalOpen} handleCancel={handleCancel} />
        </div>

        <hr className="bg-[#CCD0D8] mt-[10px]" />

        <div className="flex lg:justify-between lg:flex-row flex-col-reverse gap-[30px] lg:gap-0 pt-[20px]">
          <Box
            style={{ fontFamily: "Figtree" }}
            component="form"
            sx={{
              "& .MuiTextField-root": { width: "100%" },
            }}
            noValidate
            autoComplete="off"
            className="flex flex-col gap-[20px] w-[100%] lg:w-[450px]"
          >
            <div className="flex flex-col gap-[10px]">
              <div style={{ width: "100%" }}>
                <TextField
                  id="outlined-Company-name"
                  label="Company name"
                  placeholder="Company name"
                  fullWidth
                />
              </div>
              <div style={{ width: "100%" }}>
                <TextField
                  id="outlined-Terminology-ⓘ"
                  label="Terminology ⓘ"
                  select
                  fullWidth
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
            </div>
            <div className="flex items-center">
              <FormGroup className="text-[#1D2023] text-[16px] lg:text-[18px] not-italic font-[400] leading-[140%] tracking-[0.16px] lg:tracking-[0.18px] flex">
                <FormControlLabel control={<Switch />} label="Whitelabel" />
              </FormGroup>
              <div className="contain cursor-pointer">
                <img src={infoIcon} alt={infoIcon} />
                <div
                  style={{ fontFamily: "Figtree" }}
                  className="tag text-[#323336] w-[178px] lg:w-[258px] h-[71px] lg:h-[70px] hidden absolute right-[20px] lg:right-[500px] text-[11.24px] lg:text-[12.64px] not-italic font-[400] leading-[120%] lg:leading-[140%] tracking-[0.112px] lg:tracking-[0.126px] p-[8px] border-[0.5px] border-[#D3D7DE] bg-[#fff] z-10"
                >
                  <p className="hidden lg:block">
                    Lorem ipsum dolor sit amet consectetur. Consectetur sed at
                    duis nisl sit imperdiet eu dui. Placerat orci Lorem ipsum
                    dolor ..
                  </p>
                  <p className="lg:hidden block">
                    Lorem ipsum dolor sit amet consectetur. Consectetur sed at
                    duis nisl sit imperdiet eu dui. Placerat orci Lorem ipsum
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-[20px] pt-[20px]">
                <div className="bg-[#1463F3] rounded-[8px] flex justify-center items-center h-[56px] py-[8px] px-[16px] gap-[8px] text-center text-[#fff] text-[16px] lg:text-[18px] not-italic font-[500] leading-[100%] tracking-[0.16px] lg:tracking-[0.18px]">
                  <button type="button" onClick={handleButtonClick}>Save</button>
                  <img src={plusIcon} alt={plusIcon} />
                </div>
                <div
                  className="transition-transform ease-in-out duration-300 absolute top-[680px] lg:top-[700px] left-0 w-[100%]"
                  style={{
                    transform: isSaved ? "translateX(0)" : "translateX(-100%)",
                  }}
                >
                  {isSaved && (
                    <div
                      className={`bg-[#4BB543] py-[16px] flex items-center text-white text-lg justify-center`}
                    >
                      <div className="px-4 flex items-center text-[#fff] text-[16px] lg:text-[18px] not-italic font-[500] leading-[140%] tracking-[0.16px] lg:tracking-[0.18px]">
                        <img src={doneIcon} alt={doneIcon} />
                        Saved Successfully
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Box>
          <div className="w-[173px] lg:w-[190px] lg:h-[215px] pt-[14px] pb-[8px] lg:pb-[13px] lg:px-[38px] px-[22px] flex flex-col gap-[18px] rounded-[4px] border-[1px] border-[#1463F3] bg-[#fff] text-[14.22px] not-italic font-[400] leading-[140%] tracking-[0.142px]">
            <div className="flex justify-center items-center">
              <p>Company logo</p>
              <div className="contain cursor-pointer">
                <img src={info} alt={info} />
                <div
                  style={{ fontFamily: "Figtree" }}
                  className="tag text-[#323336] w-[178px] lg:w-[258px] h-[71px] lg:h-[70px] hidden absolute right-[20px] text-[11.24px] lg:text-[12.64px] not-italic font-[400] leading-[120%] lg:leading-[140%] tracking-[0.112px] lg:tracking-[0.126px] p-[8px] border-[0.5px] border-[#D3D7DE] bg-[#fff] z-10"
                >
                  <p className="hidden lg:block">
                    Lorem ipsum dolor sit amet consectetur. Consectetur sed at
                    duis nisl sit imperdiet eu dui. Placerat orci Lorem ipsum
                    dolor ..
                  </p>
                  <p className="lg:hidden block">
                    Lorem ipsum dolor sit amet consectetur. Consectetur sed at
                    duis nisl sit imperdiet eu dui. Placerat orci Lorem ipsum
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-[111px] lg:h-[111px] h-[90px] w-[90px] rounded-[111px] m-auto">
              <img src={userImg} alt="visaimg" />
            </div>
            <div className="flex justify-between">
              <p>Change</p>
              <p className="text-[#808186]">Remove</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
