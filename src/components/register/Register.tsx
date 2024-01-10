import React, { FC, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { NavLink, useNavigate } from "react-router-dom";
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
import { Spin, message } from "antd";
import axios from "axios";


const registerUrl = process.env.REACT_APP_ROLLOG_REGISTER_URL

export const Register: FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [isInputsFilled, setIsInputsFilled] = useState<boolean | string>(false);
  const [buttonBackgroundColor, setButtonBackgroundColor] = useState("#1463F3");
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleInputChange = () => {
    const firstNameInput = document.getElementById("firstName") as HTMLInputElement;
    const lastNameInput = document.getElementById("lastName") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const passwordInput = document.getElementById("password") as HTMLInputElement;

    setFirstNameError(firstNameInput.value.trim() === "");
    setLastNameError(lastNameInput.value.trim() === "");
    setEmailError(emailInput.value.trim() === "");
    setPasswordError(passwordInput.value.length < 6);

    const areInputsFilled =
      emailInput.value &&
      firstNameInput.value &&
      lastNameInput.value &&
      passwordInput.value;

    setIsInputsFilled(areInputsFilled);
  };

  const handleCheckboxChange = () => {
    if (isInputsFilled) {
      setIsChecked((prev) => !prev);
    }
  };

  const handleRegistration = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setIsLoading(true);
    
    const firstNameInput = document.getElementById("firstName") as HTMLInputElement;
    const lastNameInput = document.getElementById("lastName") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const passwordInput = document.getElementById("password") as HTMLInputElement;

    const requestBody = {
      firstName: firstNameInput.value,
      lastName: lastNameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
      provider: "email",
    };

    if (!registerUrl) {
      console.error("API endpoint is not defined.");
      return;
    }

    try {
      const response = await axios.post(registerUrl, requestBody, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        console.log("Registration successful");
        message.success("Registration successful");
        navigate("/");
      } else {
        console.error("Registration failed:", response.data);

        if (response.status === 422) {
          message.error("Email already exists. Try another or log in.");
        } else {
          message.error("Registration failed. Please check your details and try again.");
        }
      }
    } catch (error: any) {
      console.error("Error during registration:", error);
      if (error.response && error.response.status === 422) {
        message.error("Email already exists. Try another or log in.");
      } else if (error.message === "Network Error") {
        message.error("Network error. Please try again later.");
      } else {
        message.error("An error occurred during login. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };
  

const handleButtonClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();

  const passwordInput = document.getElementById("password") as HTMLInputElement;
  if (passwordInput.value.length < 6) {
    message.warning("Password must be at least 6 characters.");
    return;
  }

  if (isChecked) {
    try {
      await handleRegistration(event);
    } catch (error) {
      message.error("An unexpected error occurred. Please try again later.");
    }
  } else {
    message.warning("Please check the required fields and agree to the terms.");
  }
};

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 700));
      setIsLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const color = isChecked ? "#1463F3" : "#277ca5";
    setButtonBackgroundColor(color);
  }, [isChecked]);

  return (
    <>
      {isLoading ? (
        <Spin />
      ) : (
        <div
          style={{ fontFamily: "Figtree" }}
          className="bg-[url('/src/components/assets/register_asset/bg_register.png')] h-[100vh] bg-no-repeat bg-cover bg-center flex justify-center px-[16px] lg:px-[40px]"
        >
          <div className="flex items-center xl:gap-[300px] lg:gap-[100px]">
            <Box
              style={{ fontFamily: "Figtree" }}
              component="form"
              sx={{
                "& .MuiTextField-root": { width: "100%" },
              }}
              noValidate
              autoComplete="off"
              className="nav md:h-[642px] xl:h-[642px] lg:h-[590px] h-[630px] md:w-[551px] w-[100%] bg-[#fff] rounded-[8px] flex flex-col lg:gap-[10px] xl:gap-[15px] gap-[15px] px-[20px] md:px-[30px] md:py-[40px] lg:py-[10px] xl:py-[40px]"
            >
              <div className="flex flex-col pt-[20px] md:pt-0">
                <h1 className="text-[#1D2023] text-[22.78px] md:text-[28.83px] not-italic font-[700] leading-[120%] tracking-[0.228px] md:tracking-normal">
                  Get started with a free account
                </h1>
                <p className="text-[#6983CD] text-[16px] md:text-[20.25px] not-italic font-[500] leading-[160%] tracking-[0.203px]">
                  Free forever, no credit card needed
                </p>
              </div>
              <div className="flex flex-col md:border md:border-[#C0D1FC] gap-[15px] md:gap-[13px] md:p-[20px] rounded-[8px] text-[18px] not-italic font-[400] leading-[100%] tracking-[0.18px]">
                <TextField
                  id="firstName"
                  label="Your first name"
                  placeholder="First name"
                  fullWidth
                  typeof="text"
                  onChange={handleInputChange}
                  error={!isInputsFilled && firstNameError}
                />
                <TextField
                    id="lastName"
                    label="Your last name"
                    placeholder="Last name"
                    fullWidth
                    typeof="text"
                    onChange={handleInputChange}
                    error={!isInputsFilled && lastNameError}
                  />
                <TextField
                  id="email"
                  label="Your e-mail address"
                  placeholder="E-mail address"
                  fullWidth
                  typeof="email"
                  onChange={handleInputChange}
                  error={!isInputsFilled && emailError}
                />
                <FormControl variant="outlined">
                  <InputLabel htmlFor="password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="password"
                    onChange={handleInputChange}
                    typeof="password"
                    error={!isInputsFilled && passwordError}
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
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
                    Password must be at least 6 characters
                  </p>
                </FormControl>
              </div>
              <div className="flex">
                <Checkbox
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  disabled={!isInputsFilled}
                />

                <p className="text-[#1D2023] text-[12.64px] md:text-[14.22px] not-italic font-[400] leading-[140%] tracking-[0.142px] lg:w-[60%]">
                  I have read and agree to the{" "}
                  <span className="text-[#6983CD]">Terms of Use</span> and{" "}
                  <span className="text-[#6983CD]">
                    Customer Privacy Policy.
                  </span>
                </p>
              </div>
              <button
               onClick={(event) => handleButtonClick(event)}
                className={`py-[10px] px-[16px] flex gap-[8px] h-[56px] rounded-[4px] justify-center items-center text-[#fff] text-[16px] md:text-[18px] not-italic font-[500] leading-[100%] tracking-[0.16px] md:tracking-[0.18px]`}
                disabled={!isChecked || !isInputsFilled}
                style={{ backgroundColor: buttonBackgroundColor }}
              >
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
            </Box>
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
      )}
    </>
  );
};
