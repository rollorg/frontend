import React, { FC, useEffect } from "react";
import { Spin } from "antd";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import useForgotPassword from "components/request/forgotPassword";

export const ForgotPassword: FC = () => {
  const { email, setEmail, requestReset, isLoading, setIsLoading } = useForgotPassword();

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 700));
      setIsLoading(false);
    };
    fetchData();
  }, [setIsLoading]);

  return (
    <>
      {isLoading ? (
        <Spin />
      ) : (
        <div
          style={{ fontFamily: "Figtree" }}
          className="h-[100vh] bg-[url('/src/components/assets/forgotpassword_asset/texture.png')] bg-[#11678e] flex justify-center items-center text-[16px] md:text-[18px] not-italic font-[500] leading-[100%] tracking-[0.16px] md:tracking-[0.18px] px-[15px] lg:px-[80px] xl:px-[160px]"
        >
          <div className="login md:w-[551px] w-[100%] bg-[#fff] rounded-[8px] flex flex-col text-center gap-[25px] px-[20px] md:px-[30px] py-[40px]">
            <div className="lg:w-[454px] w-[100%] flex flex-col gap-[20px]">
              <h3 className="text-[#293138] text-[25.63px] md:text-[28.83px] not-italic font-[600] tracking-[0.256px] md:tracking-normal md:font-[700] leading-[120%]">
                Did you forget your password?
              </h3>
              <p>
                Enter your email address you're using for your account below and
                we will send you a password reset link.
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
              <TextField
                id="email"
                placeholder="E-mail address"
                fullWidth
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <button
                type="button"
                className="py-[8px] px-[16px] flex gap-[8px] h-[56px] rounded-[4px] bg-[#1463F3] justify-center items-center w-[100%] text-[#fff]"
                onClick={requestReset}
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
