import React, { FC, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import { NavLink } from "react-router-dom";
import closeIcon from "components/assets/icons/Close.svg";
import copyIcon from "components/assets/icons/Copy.svg";
import infoIcon from "components/assets/icons/Info1.svg";
import plusIcon from "components/assets/icons/plus.svg";
import doneIcon from "components/assets/icons/Done.svg";

const currencies = [
  {
    value: "TEXT",
    label: "3s",
  },
  {
    value: "TEXT2",
    label: "3",
  },
  {
    value: "TEXT3",
    label: "Don't expire",
  },
];
const text = [
  {
    value: "TEXT",
    label: "3s",
  },
  {
    value: "TEXT2",
    label: "3",
  },
  {
    value: "TEXT3",
    label: "Don't expire",
  },
];
const lorem = [
  {
    value: "TEXT",
    label: "3s",
  },
  {
    value: "TEXT2",
    label: "3",
  },
  {
    value: "TEXT3",
    label: "Don't expire",
  },
];

export const Content: FC = () => {
  const [isSaved, setIsSaved] = useState(false);
  const [isCopied, setisCopied] = useState(false);

  const handleButtonClick = () => {
    setIsSaved(true);

    setTimeout(() => {
      setIsSaved(false);
    }, 3000);
  };

  const handleButtonCopy = () => {
    setisCopied(true);

    setTimeout(() => {
      setisCopied(false);
    }, 3000);
  };

  const codeToDisplay = `
  <script> 
  // @see https://docs.rollog.co/widget for more configuration options. 
  var HW_config = { 
  selector: ".CHANGE_THIS", // CSS selector where to inject the badge account: "JR4nmx"} 
  </script> 
  <script async src="https://cdn.rollog.co/widget.js"></script>
  `;

  const copyCodeToClipboard = () => {
    const el = document.createElement("textarea");
    el.value = codeToDisplay;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
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
            className="flex lg:hidden w-[32px] h-[32px]"
          >
            <img src={closeIcon} alt={closeIcon} />
          </NavLink>
        </div>
        <div className="lg:w-[550px]">
          <div className="text-[20.25px] pt-[20px] lg:pt-0 lg:text-[25.63px] text-[#1463F3] not-italic font-[700] leading-[140%] tracking-[0.203px] lg:tracking-[0.256px]">
            <h1>Widget</h1>
          </div>
          <hr className="bg-[#CCD0D8] mt-[10px]" />

          <div className="lg:pt-[32px] pt-[20px] flex flex-col gap-[30px] lg:w-[450px] w-[100%]">
            <div className="flex flex-col gap-[20px]">
              <div className="flex items-center gap-[5px] text-[#1D2023] text-[16px] not-italic font-[400] leading-[140%] tracking-[0.16px]">
                <p>Your widget code</p>
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
              <div className="lg:p-[16px] p-[10px] rounded-[4px] border-[1px] border-[#D3D7DE] flex lg:items-end flex-col lg:flex-row">
                <div
                  style={{ fontFamily: "Fira Code" }}
                  className="text-[#323336] text-[10px] lg:text-[12px] not-italic font-[400] leading-[150%] w-[239px] lg:w-[447px]"
                >
                  {codeToDisplay}
                </div>
                <div className="flex justify-end cursor-pointer">
                  <img src={copyIcon} alt={copyIcon} onClick={() => {copyCodeToClipboard(); handleButtonCopy();}} />
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:gap-[40px] gap-[30px]">
              <Box
                className="flex flex-col gap-[20px]"
                style={{ fontFamily: "Figtree" }}
                component="form"
                sx={{
                  "& .MuiTextField-root": { width: "100%" },
                }}
                noValidate
                autoComplete="off"
              >
                <div style={{ width: "100%" }}>
                  <TextField
                    id="outlined-Delay-showing-badge-ⓘ"
                    label="Delay showing badge ⓘ"
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
                <div style={{ width: "100%" }}>
                  <TextField
                    id="outlined-Entries limit-ⓘ"
                    label="Entries limit ⓘ"
                    select
                    fullWidth
                  >
                    {text.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
                <div style={{ width: "100%" }}>
                  <TextField
                    id="outlined-Expire-badge-count-ⓘ"
                    label="Expire badge count ⓘ"
                    select
                    fullWidth
                  >
                    {lorem.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
                <div className="flex items-center">
                  <FormGroup className="text-[#1D2023] text-[16px] lg:text-[18px] not-italic font-[400] leading-[140%] tracking-[0.16px] lg:tracking-[0.18px]">
                    <FormControlLabel
                      control={<Switch />}
                      label="Soft-hide badge"
                    />
                  </FormGroup>
                  <div className="contain cursor-pointer">
                    <img src={infoIcon} alt={infoIcon} />
                    <div
                      style={{ fontFamily: "Figtree" }}
                      className="tag text-[#323336] w-[178px] lg:w-[258px] h-[71px] lg:h-[70px] hidden absolute right-[20px] lg:right-[450px] text-[11.24px] lg:text-[12.64px] not-italic font-[400] leading-[120%] lg:leading-[140%] tracking-[0.112px] lg:tracking-[0.126px] p-[8px] border-[0.5px] border-[#D3D7DE] bg-[#fff] z-10"
                    >
                      <p className="hidden lg:block">
                        Lorem ipsum dolor sit amet consectetur. Consectetur sed
                        at duis nisl sit imperdiet eu dui. Placerat orci Lorem
                        ipsum dolor ..
                      </p>
                      <p className="lg:hidden block">
                        Lorem ipsum dolor sit amet consectetur. Consectetur sed
                        at duis nisl sit imperdiet eu dui. Placerat orci Lorem
                        ipsum
                      </p>
                    </div>
                  </div>
                </div>
              </Box>
              <div>
                <div className="bg-[#1463F3] rounded-[8px] flex justify-center items-center h-[56px] py-[8px] px-[16px] gap-[8px] text-center text-[#fff] text-[16px] lg:text-[18px] not-italic font-[500] leading-[100%] tracking-[0.16px] lg:tracking-[0.18px]">
                  <button onClick={handleButtonClick}>Save</button>
                  <img src={plusIcon} alt={plusIcon} />
                </div>
                <div
                  className="transition-transform ease-in-out duration-300 absolute left-0 w-[100%] top-[750px] lg:top-[800px]"
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
                <div
                  className="transition-transform ease-in-out duration-300 absolute left-0 w-[100%] top-[750px] lg:top-[800px]"
                  style={{
                    transform: isCopied ? "translateX(0)" : "translateX(-100%)",
                  }}
                >
                  {isCopied && (
                    <div
                      className={`bg-[#4BB543] py-[16px] flex items-center text-white text-lg justify-center`}
                    >
                      <div className="px-4 flex items-center text-[#fff] text-[16px] lg:text-[18px] not-italic font-[500] leading-[140%] tracking-[0.16px] lg:tracking-[0.18px]">
                        <img src={doneIcon} alt={doneIcon} />
                        Code snippet copied!
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
