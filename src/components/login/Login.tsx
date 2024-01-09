import React, { FC, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import brandlogo from "../assets/icons/Brand Logo1.svg";
import logo from "../assets/icons/Brand Logo.svg";
import rightIcon from "../assets/icons/right icon.svg";
import line from "../assets/icons/line.svg";
import { Spin, message } from "antd";
import { Google } from "components/googleLogin/Google";
import axios from "axios";

const apiUrl = process.env.REACT_APP_ROLLOG_LOGIN_URL;

export const Login: FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleLogin = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (!apiUrl) {
      console.error("API endpoint is not defined.");
      return;
    }

    const emailInput = document.getElementById("email") as HTMLInputElement;
    const passwordInput = document.getElementById("password") as HTMLInputElement;

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      message.error("Please enter a valid email address.");
      return;
    }

    if (!password || password.length < 6) {
      message.error("Password must be at least 6 characters.");
      return;
    }

    const requestBody = {
      provider: 'email',
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(apiUrl, requestBody);

      if (response.status === 200) {
        console.log("Login successful");
        message.success("Login successful");
        navigate("/free_client");
      } else {
        console.error("Login failed:", response.data);
        if (response.status === 404) {
          message.error("Unauthorized email");
        } else if (response.status === 401) {
          message.error("Unauthorized. Password");
        } else {
          message.error("Login failed. Please try again later.");
        }
      }
    } catch (error: any) {
      console.error("Error during login:", error);
      if (error.response && error.response.status === 404) {
        message.error("Unauthorized email");
      } else if (error.response && error.response.status === 401) {
        message.error("Unauthorized. Password");
      } else if (error.message === "Network Error") {
        message.error("Network error. Please try again later.");
      } else {
        message.error("An error occurred during login. Please try again later.");
      }
    }   
  };
  

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 700));
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <Spin />
      ) : (
        <div
          style={{ fontFamily: "Figtree" }}
          className="bg-[url('/src/components/assets/login_asset/bg_login.png')] h-[100vh] bg-no-repeat bg-cover bg-center flex justify-center px-[16px] lg:px-[40px]"
        >
          <div className="flex items-center xl:gap-[300px] lg:gap-[100px]">
            <div className="login xl:h-[642px] md:h-[642px] lg:h-[590px] h-[613px] md:w-[551px] w-[100%] bg-[#fff] rounded-[8px] flex flex-col gap-[25px] px-[20px] md:px-[30px] md:py-[40px]">
              <div className="flex flex-col pt-[30px] md:pt-0">
                <div className="md:hidden">
                  <img src={logo} alt={logo} />
                </div>
                <h1 className="text-[#1D2023] text-[25.63px] md:text-[28.83px] not-italic font-[600] tracking-[0.256px] md:tracking-normal md:font-[700] leading-[120%]">
                  Log in with:{" "}
                </h1>
              </div>
                <Google />
              <div className="flex justify-center items-center gap-[20px] text-[#1D2023] text-[14.22px] md:text-[16px] not-italic font-[400] leading-[140%] tracking-[0.142px] md:tracking-[0.16px]">
                <div className="lg:w-[208] w-[100%]">
                  <img src={line} alt={line} />
                </div>
                <p className="flex justify-center">OR</p>
                <div className="lg:w-[208] w-[100%]">
                  <img src={line} alt={line} />
                </div>
              </div>
              <Box
                style={{ fontFamily: "Figtree" }}
                component="form"
                sx={{
                  "& .MuiTextField-root": { width: "100%" },
                }}
                noValidate
                autoComplete="off" className="flex flex-col gap-[30px]"
              >
                <div className="flex flex-col md:border md:border-[#C0D1FC] gap-[16px] md:p-[20px] rounded-[8px] text-[18px] not-italic font-[400] leading-[100%] tracking-[0.18px]">
                  <div className="lg:w-[454px] w-[100%]">
                    <TextField
                      id="email"
                      label="Your e-mail address"
                      placeholder="E-mail address"
                      fullWidth
                    />
                  </div>
                  <FormControl
                    variant="outlined"
                    className="lg:w-[454px] w-[100%]"
                  >
                    <InputLabel htmlFor="password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      id="password"
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
                  </FormControl>
                </div>
              <Link to="/forgot_password" className="text-[#595A5E] text-[16px] leading-[140%] not-italic font-[400] tracking-[0.16px]">
                Forgot Password?
              </Link>
              <button onClick={handleLogin} className="py-[8px] px-[16px] flex gap-[8px] h-[56px] rounded-[4px] bg-[#1463F3] justify-center items-center text-[#fff] text-[16px] md:text-[18px] not-italic font-[500] leading-[100%] tracking-[0.16px] md:tracking-[0.18px] w-[100%]">
                Login
                <img src={rightIcon} alt={rightIcon} />
              </button>
              </Box>
              <p className="text-[#1D2023] text-[16px] md:text-[18px] not-italic font-[400] leading-[140%] tracking-[0.16px ] md:tracking-[0.18px] flex gap-[5px] items-center md:gap-[10px]">
                New user?{" "}
                <span className="md:text-[#1463F3] cursor-pointer">
                  <Link to="/register">Create an account</Link>
                </span>
              </p>
            </div>
            <div className="hidden md:hidden lg:block">
              <img src={brandlogo} alt={brandlogo} />
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
      )}
    </>
  );
};
