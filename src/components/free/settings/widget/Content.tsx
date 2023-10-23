import React, { FC } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import { NavLink } from "react-router-dom";

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
  return (
    <>
      <div
        style={{ fontFamily: "Figtree" }}
        className="lg:w-[780px] lg:pb-[98px] pb-[61px] w-[90%]"
      >
        <div className="flex justify-end">
          <NavLink to="/free_client">
            <svg
              className="hidden lg:flex"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.9999 25.4154L13.5076 35.9077C13.3204 36.0949 13.0909 36.1949 12.8191 36.2077C12.5473 36.2205 12.305 36.1205 12.0922 35.9077C11.8794 35.6949 11.7729 35.459 11.7729 35.2C11.7729 34.941 11.8794 34.7051 12.0922 34.4923L22.5845 24L12.0922 13.5077C11.905 13.3205 11.805 13.0911 11.7922 12.8193C11.7794 12.5475 11.8794 12.3051 12.0922 12.0923C12.305 11.8795 12.5409 11.7731 12.7999 11.7731C13.0589 11.7731 13.2948 11.8795 13.5076 12.0923L23.9999 22.5846L34.4922 12.0923C34.6794 11.9051 34.9089 11.8051 35.1807 11.7923C35.4525 11.7795 35.6948 11.8795 35.9076 12.0923C36.1204 12.3051 36.2269 12.541 36.2269 12.8C36.2269 13.059 36.1204 13.2949 35.9076 13.5077L25.4153 24L35.9076 34.4923C36.0948 34.6795 36.1948 34.909 36.2076 35.1808C36.2204 35.4526 36.1204 35.6949 35.9076 35.9077C35.6948 36.1205 35.4589 36.227 35.1999 36.227C34.9409 36.227 34.705 36.1205 34.4922 35.9077L23.9999 25.4154Z"
                fill="#1D2023"
              />
            </svg>
          </NavLink>
          <NavLink to="/free_client">
            <svg
              className="flex lg:hidden"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.9999 16.9436L9.00507 23.9385C8.88029 24.0632 8.7273 24.1299 8.5461 24.1385C8.3649 24.147 8.20335 24.0804 8.06147 23.9385C7.91958 23.7966 7.84863 23.6393 7.84863 23.4667C7.84863 23.294 7.91958 23.1368 8.06147 22.9949L15.0563 16L8.06147 9.00513C7.93669 8.88035 7.87002 8.72736 7.86147 8.54616C7.85291 8.36496 7.91958 8.20342 8.06147 8.06153C8.20335 7.91964 8.36062 7.84869 8.53327 7.84869C8.70591 7.84869 8.86318 7.91964 9.00507 8.06153L15.9999 15.0564L22.9948 8.06153C23.1196 7.93675 23.2726 7.87008 23.4538 7.86153C23.635 7.85297 23.7965 7.91964 23.9384 8.06153C24.0803 8.20342 24.1512 8.36068 24.1512 8.53333C24.1512 8.70597 24.0803 8.86324 23.9384 9.00513L16.9435 16L23.9384 22.9949C24.0632 23.1196 24.1298 23.2726 24.1384 23.4538C24.147 23.635 24.0803 23.7966 23.9384 23.9385C23.7965 24.0804 23.6392 24.1513 23.4666 24.1513C23.294 24.1513 23.1367 24.0804 22.9948 23.9385L15.9999 16.9436Z"
                fill="#1D2023"
              />
            </svg>
          </NavLink>
        </div>
        <div className="lg:w-[550px]">
          <div className="text-[20.25px] pt-[20px] lg:pt-0 lg:text-[25.63px] text-[#1463F3] not-italic font-[700] leading-[140%] tracking-[0.203px] lg:tracking-[0.256px]">
            <h1>Widget</h1>
          </div>
          <hr className="bg-[#CCD0D8] mt-[10px]" />

          <div className="lg:pt-[48px] pt-[20px] flex flex-col gap-[30px] lg:w-[450px] w-[100%]">
            <div className="flex flex-col gap-[20px]">
              <div className="flex items-center gap-[5px] text-[#1D2023] text-[16px] not-italic font-[400] leading-[140%] tracking-[0.16px]">
                <p>Your widget code</p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0007 16.5C12.1425 16.5 12.2612 16.4521 12.3567 16.3562C12.4522 16.2604 12.5 16.1417 12.5 16V11.5C12.5 11.3583 12.452 11.2396 12.3561 11.1438C12.2601 11.0479 12.1412 11 11.9993 11C11.8575 11 11.7388 11.0479 11.6433 11.1438C11.5478 11.2396 11.5 11.3583 11.5 11.5V16C11.5 16.1417 11.548 16.2604 11.644 16.3562C11.7399 16.4521 11.8588 16.5 12.0007 16.5ZM12 9.57693C12.1744 9.57693 12.3205 9.51795 12.4385 9.4C12.5564 9.28205 12.6154 9.13589 12.6154 8.96152C12.6154 8.78718 12.5564 8.64102 12.4385 8.52307C12.3205 8.40512 12.1744 8.34615 12 8.34615C11.8256 8.34615 11.6795 8.40512 11.5615 8.52307C11.4436 8.64102 11.3846 8.78718 11.3846 8.96152C11.3846 9.13589 11.4436 9.28205 11.5615 9.4C11.6795 9.51795 11.8256 9.57693 12 9.57693ZM12.0034 21C10.7588 21 9.58872 20.7638 8.4931 20.2915C7.39748 19.8192 6.44444 19.1782 5.63397 18.3685C4.82352 17.5588 4.18192 16.6066 3.70915 15.512C3.23638 14.4174 3 13.2479 3 12.0034C3 10.7588 3.23616 9.58872 3.70848 8.4931C4.18081 7.39748 4.82183 6.44444 5.63153 5.63398C6.44123 4.82353 7.39337 4.18192 8.48795 3.70915C9.58255 3.23638 10.7521 3 11.9966 3C13.2412 3 14.4113 3.23616 15.5069 3.70847C16.6025 4.18081 17.5556 4.82182 18.366 5.63152C19.1765 6.44122 19.8181 7.39337 20.2908 8.48795C20.7636 9.58255 21 10.7521 21 11.9966C21 13.2412 20.7638 14.4113 20.2915 15.5069C19.8192 16.6025 19.1782 17.5556 18.3685 18.366C17.5588 19.1765 16.6066 19.8181 15.512 20.2909C14.4174 20.7636 13.2479 21 12.0034 21ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
                    fill="#595A5E"
                  />
                </svg>
              </div>
              <div className="lg:p-[16px] p-[10px] rounded-[4px] border-[1px] border-[#D3D7DE] flex lg:items-end flex-col lg:flex-row">
                <div
                  style={{ fontFamily: "Fira Code" }}
                  className="text-[#323336] text-[10px] lg:text-[12px] not-italic font-[400] leading-[150%] w-[239px] lg:w-[447px]"
                >
                  <p>
                    @see https://docs.rollog.co/widget for more configuration
                    options. var HW_config = selector: ".CHANGE_THIS", // CSS
                    selector where to inject the badge account: "JR4nmx" async
                    src="https://cdn.rollog.co/widget.js"
                  </p>
                </div>
                <div className="flex justify-end">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.66668 27.487C8.053 27.487 7.5406 27.2815 7.12948 26.8703C6.71837 26.4592 6.51282 25.9468 6.51282 25.3331V10.8203C6.51282 10.6306 6.5765 10.472 6.70385 10.3447C6.83121 10.2173 6.98975 10.1536 7.17948 10.1536C7.36924 10.1536 7.5278 10.2173 7.65515 10.3447C7.78248 10.472 7.84615 10.6306 7.84615 10.8203V25.3331C7.84615 25.5383 7.93163 25.7263 8.10258 25.8972C8.27352 26.0682 8.46155 26.1536 8.66668 26.1536H19.1795C19.3693 26.1536 19.5278 26.2173 19.6552 26.3447C19.7825 26.472 19.8462 26.6306 19.8462 26.8203C19.8462 27.0101 19.7825 27.1686 19.6552 27.296C19.5278 27.4233 19.3693 27.487 19.1795 27.487H8.66668ZM12.6667 23.487C12.053 23.487 11.5406 23.2814 11.1295 22.8703C10.7184 22.4592 10.5128 21.9468 10.5128 21.3331V6.97415C10.5128 6.36048 10.7184 5.84809 11.1295 5.43698C11.5406 5.02587 12.053 4.82031 12.6667 4.82031H23.0257C23.6393 4.82031 24.1517 5.02587 24.5629 5.43698C24.974 5.84809 25.1795 6.36048 25.1795 6.97415V21.3331C25.1795 21.9468 24.974 22.4592 24.5629 22.8703C24.1517 23.2814 23.6393 23.487 23.0257 23.487H12.6667ZM12.6667 22.1536H23.0257C23.2308 22.1536 23.4188 22.0682 23.5898 21.8972C23.7607 21.7263 23.8462 21.5383 23.8462 21.3331V6.97415C23.8462 6.76903 23.7607 6.581 23.5898 6.41005C23.4188 6.23911 23.2308 6.15365 23.0257 6.15365H12.6667C12.4616 6.15365 12.2735 6.23911 12.1026 6.41005C11.9317 6.581 11.8462 6.76903 11.8462 6.97415V21.3331C11.8462 21.5383 11.9317 21.7263 12.1026 21.8972C12.2735 22.0682 12.4616 22.1536 12.6667 22.1536Z"
                      fill="#1D2023"
                    />
                  </svg>
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
                <FormGroup className="text-[#1D2023] text-[16px] lg:text-[18px] not-italic font-[400] leading-[140%] tracking-[0.16px] lg:tracking-[0.18px]">
                  <FormControlLabel
                    control={<Switch />}
                    label="Soft-hide badge ⓘ"
                  />
                </FormGroup>
              </Box>
              <div className="bg-[#1463F3] rounded-[8px] flex justify-center items-center h-[56px] py-[8px] px-[16px] gap-[8px] text-center text-[#fff] text-[16px] lg:text-[18px] not-italic font-[500] leading-[100%] tracking-[0.16px] lg:tracking-[0.18px]">
                <button>Save</button>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 12.5H7C6.85833 12.5 6.73958 12.452 6.64375 12.3561C6.54792 12.2601 6.5 12.1412 6.5 11.9993C6.5 11.8575 6.54792 11.7388 6.64375 11.6433C6.73958 11.5478 6.85833 11.5 7 11.5H12V6.5C12 6.35833 12.048 6.23958 12.1439 6.14375C12.2399 6.04792 12.3588 6 12.5007 6C12.6425 6 12.7612 6.04792 12.8567 6.14375C12.9522 6.23958 13 6.35833 13 6.5V11.5H18C18.1417 11.5 18.2604 11.548 18.3562 11.6439C18.4521 11.7399 18.5 11.8588 18.5 12.0007C18.5 12.1425 18.4521 12.2612 18.3562 12.3567C18.2604 12.4522 18.1417 12.5 18 12.5H13V17.5C13 17.6417 12.952 17.7604 12.8561 17.8562C12.7601 17.9521 12.6412 18 12.4993 18C12.3575 18 12.2388 17.9521 12.1433 17.8562C12.0478 17.7604 12 17.6417 12 17.5V12.5Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};