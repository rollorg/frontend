import React, { FC } from "react";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { NavLink } from "react-router-dom";

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
            <h1>GDPR</h1>
          </div>
          <hr className="bg-[#CCD0D8] mt-[10px]" />
          <div className="pt-[48px] flex flex-col gap-[30px] lg:gap-[50px]">
            <FormGroup className="text-[#1D2023] text-[16px] lg:text-[18px] not-italic font-[400] leading-[140%] tracking-[0.16px] lg:tracking-[0.18px]">
              <FormControlLabel
                control={<Switch />}
                label="I am interested in adhering to GDPR. ⓘ"
              />
            </FormGroup>

            <div className="flex flex-col lg:gap-[50px] gap-[30px]">
              <Box
                className="lg:w-[450px] w-[100%] flex flex-col gap-[10px]"
                style={{ fontFamily: "Figtree" }}
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
                <div
                  style={{ width: "100%" }}
                  className="text-[#A7A8AE] text-[18px] not-italic font-[400] leading-[100%] tracking-[0.18px]"
                >
                  <TextField placeholder="frankie@rollog.io" fullWidth />
                </div>
              </Box>
              <div className="bg-[#1463F3] rounded-[8px] flex justify-center items-center h-[56px] py-[8px] px-[16px] gap-[8px] text-center text-[#fff] text-[16px] lg:text-[18px] not-italic font-[500] leading-[100%] tracking-[0.16px] lg:tracking-[0.18px] lg:w-[450px] w-[100%]">
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
