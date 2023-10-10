import React, { FC } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import userImg from "../../../assets/setting_assets/Frame 234.png";

export const Content: FC = () => {
  return (
    <>
      <div
        style={{ fontFamily: "Figtree" }}
        className="w-[780px] pt-[64px] pb-[98px]"
      >
        <div className="flex justify-end">
          <svg
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
        </div>
        <div className="flex items-center text-[25.63px] text-[#1463F3] not-italic font-[700] leading-[140%] tracking-[0.256px]">
          <h1>Your user profile</h1>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.61537 20C7.16794 20 6.78685 19.8426 6.4721 19.5279C6.15737 19.2131 6 18.8321 6 18.3846V5.99999H5.5C5.35768 5.99999 5.23878 5.95224 5.14328 5.85672C5.04776 5.7612 5 5.64229 5 5.49999C5 5.35768 5.04776 5.23877 5.14328 5.14327C5.23878 5.04775 5.35768 4.99999 5.5 4.99999H9C9 4.79358 9.0766 4.61377 9.2298 4.46057C9.38302 4.30735 9.56283 4.23074 9.76923 4.23074H14.2308C14.4372 4.23074 14.617 4.30735 14.7702 4.46057C14.9234 4.61377 15 4.79358 15 4.99999H18.5C18.6423 4.99999 18.7612 5.04775 18.8567 5.14327C18.9522 5.23877 19 5.35768 19 5.49999C19 5.64229 18.9522 5.7612 18.8567 5.85672C18.7612 5.95224 18.6423 5.99999 18.5 5.99999H18V18.3846C18 18.8321 17.8426 19.2131 17.5279 19.5279C17.2132 19.8426 16.8321 20 16.3846 20H7.61537ZM17 5.99999H7V18.3846C7 18.5641 7.05769 18.7115 7.17308 18.8269C7.28846 18.9423 7.43589 19 7.61537 19H16.3846C16.5641 19 16.7115 18.9423 16.8269 18.8269C16.9423 18.7115 17 18.5641 17 18.3846V5.99999ZM9.80768 17H10.8077V7.99999H9.80768V17ZM13.1923 17H14.1923V7.99999H13.1923V17Z"
              fill="#FC1B13"
            />
          </svg>
        </div>

        <hr className="bg-[#CCD0D8]" />

        <div className="flex justify-between pt-[20px]">
          <div className="flex flex-col gap-[20px]">
            <div>
              <Box
                style={{ fontFamily: "Figtree" }}
                component="form"
                sx={{
                  "& .MuiTextField-root": { width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <div className="flex flex-col gap-[10px]">
                  <div>
                    <TextField
                      id="outlined-Full-name"
                      label="Full name"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <TextField
                      id="outlined-Display-name"
                      label="Display name"
                      placeholder="Display name"
                    />
                  </div>
                  <div>
                    <TextField
                      id="outlined-E-mail-address"
                      label="E-mail address"
                      placeholder="E-mail address"
                    />
                  </div>
                  <div>
                    <TextField
                      id="outlined-Job title"
                      label="Job title"
                      placeholder="Job title"
                    />
                  </div>
                </div>
              </Box>
            </div>
            <FormGroup className="text-[#1D2023] text-[18px] not-italic font-[400] leading-[140%] tracking-[0.18px]">
              <FormControlLabel control={<Switch />} label="Tips, tutorials, best practices" />
            </FormGroup>
            <div className="flex flex-col gap-[20px] pt-[30px]">
              <h1 className="text-[#1463F3] text-[25.63px] not-italic font-[700] leading-[140%] tracking-[0.256px]">Security</h1>
              <div className="flex flex-col gap-[20px]">
                <p className="text-[#1D2023] text-[16px] not-italic font-[400] leading-[140%] tracking-[0.16px]">
                  Log in with:
                </p>
                <div className="flex gap-[39.5px]">
                  <div className="w-[208px] h-[56px] py-[8px] px-[16px] flex items-center gap-[8px] rounded-[4px] border-[1px] border-[#A7A8AE] bg-[#fff] text-[#A7A8AE] text-[18px] not-italic font-[500] leading-[100%] tracking-[0.18px]">
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.0475 8.30327C15.1407 7.49361 13.9329 7 12.6089 7C9.78696 7 7.5 9.23899 7.5 12C7.5 14.761 9.78696 17 12.6089 17C16.0781 17 17.36 14.4296 17.5 12.4167H13.341"
                        stroke="#1D2023"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z"
                        stroke="#1D2023"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <p>Google account</p>
                  </div>
                  <div className="w-[208px] h-[56px] py-[8px] px-[16px] flex items-center gap-[8px] rounded-[4px] border-[1px] border-[#1463F3] bg-[#fff] text-[#1463F3] text-[18px] not-italic font-[500] leading-[100%] tracking-[0.18px]">
                    <p>E-mail and password</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1463F3] rounded-[8px] flex justify-center items-center h-[56px] py-[8px] px-[16px] gap-[8px] text-center text-[#fff] text-[18px] not-italic font-[500] leading-[100%] tracking-[0.18px]">
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
          <div className="pt-[14px] pb-[13px] h-[220px] px-[38px] flex flex-col gap-[18px] rounded-[4px] border-[1px] border-[#1463F3] bg-[#fff] text-[14.22px] not-italic font-[400] leading-[140%] tracking-[0.142px]">
            <div className="flex items-center">
              <p>Profile picture</p>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.00045 11C8.09503 11 8.17415 10.9681 8.23782 10.9042C8.3015 10.8403 8.33333 10.7611 8.33333 10.6667V7.66667C8.33333 7.57222 8.30134 7.49306 8.23737 7.42917C8.1734 7.36528 8.09413 7.33333 7.99955 7.33333C7.90497 7.33333 7.82585 7.36528 7.76218 7.42917C7.69851 7.49306 7.66667 7.57222 7.66667 7.66667V10.6667C7.66667 10.7611 7.69866 10.8403 7.76263 10.9042C7.8266 10.9681 7.90587 11 8.00045 11ZM8 6.38462C8.11624 6.38462 8.21368 6.3453 8.29232 6.26667C8.37094 6.18803 8.41025 6.09059 8.41025 5.97435C8.41025 5.85812 8.37094 5.76068 8.29232 5.68205C8.21368 5.60342 8.11624 5.5641 8 5.5641C7.88376 5.5641 7.78632 5.60342 7.70768 5.68205C7.62906 5.76068 7.58975 5.85812 7.58975 5.97435C7.58975 6.09059 7.62906 6.18803 7.70768 6.26667C7.78632 6.3453 7.88376 6.38462 8 6.38462ZM8.00223 14C7.17253 14 6.39248 13.8426 5.66207 13.5277C4.93166 13.2128 4.29629 12.7855 3.75598 12.2457C3.21568 11.7059 2.78794 11.0711 2.47277 10.3414C2.15759 9.61163 2 8.83192 2 8.00223C2 7.17253 2.15744 6.39248 2.47232 5.66207C2.78721 4.93166 3.21455 4.29629 3.75435 3.75598C4.29415 3.21568 4.92891 2.78794 5.65863 2.47277C6.38837 2.15759 7.16808 2 7.99777 2C8.82747 2 9.60752 2.15744 10.3379 2.47232C11.0683 2.78721 11.7037 3.21455 12.244 3.75435C12.7843 4.29415 13.2121 4.92891 13.5272 5.65863C13.8424 6.38837 14 7.16808 14 7.99777C14 8.82747 13.8426 9.60752 13.5277 10.3379C13.2128 11.0683 12.7855 11.7037 12.2457 12.244C11.7059 12.7843 11.0711 13.2121 10.3414 13.5272C9.61163 13.8424 8.83192 14 8.00223 14ZM8 13.3333C9.48889 13.3333 10.75 12.8167 11.7833 11.7833C12.8167 10.75 13.3333 9.48889 13.3333 8C13.3333 6.51111 12.8167 5.25 11.7833 4.21667C10.75 3.18333 9.48889 2.66667 8 2.66667C6.51111 2.66667 5.25 3.18333 4.21667 4.21667C3.18333 5.25 2.66667 6.51111 2.66667 8C2.66667 9.48889 3.18333 10.75 4.21667 11.7833C5.25 12.8167 6.51111 13.3333 8 13.3333Z"
                  fill="#1463F3"
                />
              </svg>
            </div>
            <div className="w-[111px] h-[111px] rounded-[111px]">
              <img src={userImg} alt="userimg" />
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