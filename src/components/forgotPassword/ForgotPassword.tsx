import React, { FC, useState, useEffect } from "react";
import { Spin, message } from "antd";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const resetUrl = process.env.REACT_APP_ROLLOG_FORGOTPASSWORD_URL;

export const ForgotPassword: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleRequestReset = async () => {
    if (!email) {
      message.error("Email is required. Please try again.");
      return;
    }

    if (!resetUrl) {
      console.error("API endpoint is not defined.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(resetUrl, {
        email,
      });

      if (response.status >= 200 && response.status < 300) {
        console.log("Password reset link sent successfully!");
        message.success("Password reset link sent successfully!");
        navigate("/");
      } else {
        console.error("Error requesting password reset link:", response.statusText);
        message.error("An error occurred while requesting the reset link.");
      }
    } catch (error: any) {
      if (error.response) {
        console.error("Error response from server:", error.response.data);
        message.error("Invalid email");
      } else if (error.request) {
        console.error("No response received from server:", error.request);
        message.error("Network error. Please try again later.");
      } else {
        console.error("An unexpected error occurred:", error.message);
        message.error("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setIsLoading(false);
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
          className="h-[100vh] bg-[url('/src/components/assets/forgotpassword_asset/texture.png')] bg-[#11678e] flex justify-center items-center text-[#fff] text-[16px] md:text-[18px] not-italic font-[500] leading-[100%] tracking-[0.16px] md:tracking-[0.18px] px-[15px] lg:px-[80px] xl:px-[160px]"
        >
          <div className="flex flex-col text-center gap-[30px] lg:gap-[50px]">
            <div className="lg:w-[454px] w-[100%] flex flex-col gap-[20px]">
              <h3 className="text-[#293138] text-[25.63px] md:text-[28.83px] not-italic font-[600] tracking-[0.256px] md:tracking-normal md:font-[700] leading-[120%]">
                Did you forget your password?
              </h3>
              <p>
                Enter your email address you're using for your account below and
                we will send you a password reset link
              </p>
            </div>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { width: "100%" },
              }}
              noValidate
              autoComplete="off"
              className="flex flex-col gap-[20px]"
            >
              <div className="lg:w-[454px] w-[100%]">
                <TextField
                className="text"
                  id="email"
                  placeholder="E-mail address"
                  fullWidth
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <button
                type="button"
                className="py-[8px] px-[16px] flex gap-[8px] h-[56px] rounded-[4px] bg-[#1463F3] justify-center items-center w-[100%]"
                onClick={handleRequestReset}
              >
                Request Reset Link
              </button>
            </Box>
            <Link to="/" className="underline">
              Back to Sign in
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
