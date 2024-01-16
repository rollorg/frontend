import React, { FC, useState } from "react";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { NavLink } from "react-router-dom";
import closeIcon from "components/assets/icons/Close.svg";
import plusIcon from "components/assets/icons/plus.svg";
import doneIcon from "components/assets/icons/Done.svg";

export const ProContent: FC = () => {
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
          <NavLink to="/pro_client" className="hidden lg:flex">
            <img src={closeIcon} alt={closeIcon} />
          </NavLink>
          <NavLink
            to="/pro_client"
            className="flex lg:hidden w-[32px] h-[32px]"
          >
            <img src={closeIcon} alt={closeIcon} />
          </NavLink>
        </div>
        <div className="lg:w-[550px]">
          <div className="text-[20.25px] pt-[20px] lg:pt-0 lg:text-[25.63px] text-[#1463F3] not-italic font-[700] leading-[140%] tracking-[0.203px] lg:tracking-[0.256px]">
            <h1>GDPR</h1>
          </div>
          <hr className="bg-[#CCD0D8] mt-[10px]" />
          <div className="pt-[40px] flex flex-col gap-[30px] lg:gap-[50px]">
            <FormGroup className="text-[#1D2023] text-[16px] lg:text-[18px] not-italic font-[400] leading-[140%] tracking-[0.16px] lg:tracking-[0.18px]">
              <FormControlLabel
                control={<Switch />}
                label="I am interested in adhering to GDPR. ⓘ"
              />
            </FormGroup>

            <div className="flex flex-col lg:gap-[50px] gap-[30px]">
              <Box
                className="lg:w-[450px] w-[100%] flex flex-col gap-[10px]"
                component="form"
                sx={{
                  "& .MuiTextField-root": { width: "100%" },
                }}
                noValidate
                autoComplete="off"
              >
                <label className="text-[#323336] text-[16px] not-italic font-[400] leading-[normal] tracking-[0.16px]">
                  Who to contact with GDPR related issues?
                </label>
                <div className="text-[#A7A8AE] text-[18px] not-italic font-[400] leading-[100%] tracking-[0.18px]">
                  <TextField placeholder="frankie@rollog.io" fullWidth />
                </div>
              </Box>
              <div>
                <div className="bg-[#1463F3] rounded-[8px] flex justify-center items-center h-[56px] py-[8px] px-[16px] gap-[8px] text-center text-[#fff] text-[16px] lg:text-[18px] not-italic font-[500] leading-[100%] tracking-[0.16px] lg:tracking-[0.18px] lg:w-[450px] w-[100%]">
                  <button onClick={handleButtonClick}>Save</button>
                  <img src={plusIcon} alt={plusIcon} />
                </div>
                <div
                  className="transition-transform ease-in-out duration-300 absolute left-0 w-[100%] top-[720px] lg:top-[750px]"
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
        </div>
      </div>
    </>
  );
};
