import React, { FC, useState } from "react";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";
import rightIcon from "../assets/icons/right icon.svg";
import brandlogo from "../assets/icons/Brand Logo1.svg";
import cardinal from "../assets/icons/Cardinal_points.svg";

export const Register: FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <>
      <div
        style={{ fontFamily: "Figtree" }}
        className="bg-[url('/src/components/assets/register_asset/bg_register.png')] h-[100vh] bg-no-repeat bg-cover bg-center flex justify-center px-[16px] lg:px-[40px]"
      >
        <div className="flex items-center xl:gap-[300px] lg:gap-[100px]">
          <div className="nav md:h-[642px] xl:h-[642px] lg:h-[590px] h-[630px] md:w-[551px] w-[100%] bg-[#fff] rounded-[8px] flex flex-col lg:gap-[10px] xl:gap-[15px] gap-[15px] px-[20px] md:px-[30px] md:py-[40px] lg:py-[10px] xl:py-[40px]">
            <div className="flex flex-col pt-[20px] md:pt-0">
              <h1 className="text-[#1D2023] text-[22.78px] md:text-[28.83px] not-italic font-[700] leading-[120%] tracking-[0.228px] md:tracking-normal">
                Get started with a free account
              </h1>
              <p className="text-[#6983CD] text-[16px] md:text-[20.25px] not-italic font-[500] leading-[160%] tracking-[0.203px]">
                Free forever, no credit card needed
              </p>
            </div>

            <Box
              style={{ fontFamily: "Figtree" }}
              component="form"
              sx={{
                "& .MuiTextField-root": { width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <div className="flex flex-col md:border md:border-[#C0D1FC] gap-[15px] md:gap-[13px] md:p-[20px] rounded-[8px] text-[18px] not-italic font-[400] leading-[100%] tracking-[0.18px]">
                <TextField
                  id="outlined-Full-name"
                  label="What is your name?"
                  placeholder="Full name"
                  fullWidth
                />
                <TextField
                  id="outlined-Your-website-address"
                  label="Your website address"
                  placeholder="Website address"
                  fullWidth
                />
                <TextField
                  id="outlined-Your-e-mail-address"
                  label="Your e-mail address"
                  placeholder="E-mail address"
                  fullWidth
                />
                <FormControl variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                  <p className="text-[#A7A8AE] text-[12.64px] not-italic font-[400] leading-normal tracking-[0.126px] pl-[10px] pt-[5px]">
                    Password must be at least 8 characters
                  </p>
                </FormControl>
              </div>
            </Box>
            <div className="flex">
              <Checkbox {...label} />
              <p className="text-[#1D2023] text-[12.64px] md:text-[14.22px] not-italic font-[400] leading-[140%] tracking-[0.142px] lg:w-[60%]">
                I have read and agree to the{" "}
                <span className="text-[#6983CD]">Terms of Use</span> and{" "}
                <span className="text-[#6983CD]">Customer Privacy Policy.</span>
              </p>
            </div>
            <button className="py-[10px] px-[16px] flex gap-[8px] h-[56px] rounded-[4px] bg-[#1463F3] justify-center items-center text-[#fff] text-[16px] md:text-[18px] not-italic font-[500] leading-[100%] tracking-[0.16px] md:tracking-[0.18px]">
              Authorize
              <div>
                <img src={rightIcon} alt={rightIcon} />
              </div>
            </button>
            <div className="pt-[10px] flex gap-[5px] md:gap-[10px] items-center">
              <div>
                <img src={cardinal} alt={cardinal} />
              </div>

              <p className="text-[#1D2023] text-[16px] md:text-[18px] not-italic font-[400] leading-[140%] tracking-[0.16px ] md:tracking-[0.18px] flex gap-[10px]">
                Have an account?
                <NavLink to="/">
                  <span className="underline">Login</span>
                </NavLink>
              </p>
            </div>
          </div>
          <div className="hidden md:hidden lg:block">
            <div>
              <img src={brandlogo} alt={brandlogo} />
            </div>
            <p className="text-[#FFF] text-[20.25px] not-italic font-[400] leading-[140%]">
              Sign in or create an account
            </p>
            <div className="text-[#fff] flex justify-end text-[18px] not-italic font-[400] leading-[140%] tracking-[0.18px]">
              <p className="absolute bottom-[50px] lg:left-[53rem] xl:left-[70rem]">
                &copy;2023 Rollog
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
