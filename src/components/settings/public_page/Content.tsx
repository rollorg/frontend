import React, { FC, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { NavLink } from "react-router-dom";
import closeIcon from "components/assets/icons/Close.svg";
import infoIcon from "components/assets/icons/Info1.svg";
import plusIcon from "components/assets/icons/plus.svg";
import doneIcon from "components/assets/icons/Done.svg";

export const Content: FC = () => {
  const [isSaved, setIsSaved] = useState(false);

  const handleButtonClick = () => {
    setIsSaved(true);

    setTimeout(() => {
      setIsSaved(false);
    }, 3000);
  };
  return (
    <>
      <div style={{ fontFamily: "Figtree" }} className="lg:w-[780px] w-[90%]">
        <div className="flex justify-end">
          <NavLink to="/free_client" className="hidden lg:flex">
            <img src={closeIcon} alt={closeIcon} />
          </NavLink>
          <NavLink
            to="/free_client"
            className="flex lg:hidden h-[32px] w-[32px]"
          >
            <img src={closeIcon} alt={closeIcon} />
          </NavLink>
        </div>
        <div className="flex items-center text-[20.25px] pt-[20px] lg:pt-0 lg:text-[25.63px] text-[#1463F3] not-italic font-[700] leading-[140%] tracking-[0.203px] lg:tracking-[0.256px]">
          <h1>Public page</h1>
        </div>

        <hr className="bg-[#CCD0D8] mt-[10px]" />

        <div className="flex flex-col lg:flex-row items-start lg:items-end pt-[20px] gap-[8px] lg:gap-[31px]">
          <Box
            className="lg:w-[450px] w-[100%]"
            style={{ fontFamily: "Figtree" }}
            component="form"
            sx={{
              "& .MuiTextField-root": { width: "100%" },
            }}
            noValidate
            autoComplete="off"
          >
            <div className="flex flex-col gap-[10px]">
              <div style={{ width: "100%" }}>
                <TextField
                  id="outlined-Company-name"
                label="Website url ⓘ"
                placeholder="www.rollog.com"
                  fullWidth
                />
              </div>
              <div style={{ width: "100%" }} className="flex items-end">
                <TextField
                  id="outlined-Company-name"
                  placeholder="Custom domain"
                  fullWidth
                />
              </div>
            </div>
          </Box>
          <div className="pro text-[#FFF] text-[11.24px] not-italic font-[500] leading-[100%] tracking-[0.112px] bg-[#FA8E02] py-[4px] px-[8px] flex items-center justify-center">
            <p>PRO</p>
          </div>
        </div>
        <div className="flex flex-col gap-[20px] w-[100%] lg:w-[450px] pt-[20px]">
          <div className="flex items-center">
            <FormGroup className="text-[#1D2023] text-[16px] lg:text-[18px] not-italic font-[400] leading-[140%] tracking-[0.16px] lg:tracking-[0.18px] flex">
              <FormControlLabel control={<Switch />} label="Show authors" />
            </FormGroup>
            <div className="flex gap-[10px] items-center">
              <img src={infoIcon} alt={infoIcon} />
              <div className="pro text-[#FFF] text-[11.24px] not-italic font-[500] leading-[100%] tracking-[0.112px] bg-[#FA8E02] py-[4px] px-[8px] flex items-center justify-center">
                <p>PRO</p>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <FormGroup className="text-[#1D2023] text-[16px] lg:text-[18px] not-italic font-[400] leading-[140%] tracking-[0.16px] lg:tracking-[0.18px] flex">
              <FormControlLabel
                control={<Switch />}
                label="Hide from search engines"
              />
            </FormGroup>
            <div className="flex gap-[10px] items-center">
              <img src={infoIcon} alt={infoIcon} />
              <div className="pro text-[#FFF] text-[11.24px] not-italic font-[500] leading-[100%] tracking-[0.112px] bg-[#FA8E02] py-[4px] px-[8px] flex items-center justify-center">
                <p>PRO</p>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <FormGroup className="text-[#1D2023] text-[16px] lg:text-[18px] not-italic font-[400] leading-[140%] tracking-[0.16px] lg:tracking-[0.18px] flex">
              <FormControlLabel control={<Switch />} label="Private mode" />
            </FormGroup>
            <div className="flex gap-[10px] items-center">
              <img src={infoIcon} alt={infoIcon} />
              <div className="pro text-[#FFF] text-[11.24px] not-italic font-[500] leading-[100%] tracking-[0.112px] bg-[#FA8E02] py-[4px] px-[8px] flex items-center justify-center">
                <p>PRO</p>
              </div>
            </div>
          </div>
          <div className="mt-[30px]">
            <div className="bg-[#1463F3] rounded-[8px] flex justify-center items-center h-[56px] py-[8px] px-[16px] gap-[8px] text-center text-[#fff] text-[16px] lg:text-[18px] not-italic font-[500] leading-[100%] tracking-[0.16px] lg:tracking-[0.18px]">
              <button onClick={handleButtonClick}>Save</button>
              <img src={plusIcon} alt={plusIcon} />
            </div>
            <div
              className="transition-transform ease-in-out duration-300 absolute top-[670px] lg:top-[700px] left-0 w-[100%]"
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
      </div>
    </>
  );
};
