import React, { FC, useState, useEffect } from "react";
import { Spin, message } from "antd";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import apiInstance from "axiosConfig";

export const ResetPassword: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 700));
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const handleResetPassword = async () => {
    setIsLoading(true);

    const requestBody = {
      password: password,
      email: email,
      token: token,
    };

    try {
      const response = await apiInstance.put("password/reset", requestBody);

      if (response.status === 200) {
        message.success("Password reset successful");
        navigate("/");
      } else {
        message.error("Password reset failed");
        console.log("Password reset failed", response.data);
      }
    } catch (error: any) {
      if (error.response && error.response.status === 422) {
        const validationErrors = error.response.data.errors;

        if (validationErrors.password) {
          message.warning(validationErrors.password[0]);
        } else {
          message.error("Validation Incomplete");
        }
      } else if (error.message === "Network Error") {
        message.error("Network error. Please try again later.");
      } else if (
        error.response.status === 404 &&
        error.response.data.message === "Invalid token"
      ) {
        message.error("Invalid token.");
      } else {
        console.error("Password reset failed", error);
        message.error("An error occurred. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      {isLoading ? (
        <Spin />
      ) : (
        <div className="h-[100vh] bg-[url('/src/components/assets/forgotpassword_asset/texture.png')] bg-[#11678e] flex justify-center items-center text-[16px] md:text-[18px] not-italic font-[500] leading-[100%] tracking-[0.16px] md:tracking-[0.18px] px-[15px] lg:px-[80px] xl:px-[160px]">
          <div className="login md:w-[551px] w-[100%] bg-[#fff] rounded-[8px] flex flex-col text-center gap-[25px] px-[20px] md:px-[30px] py-[40px]">
            <div className="lg:w-[454px] w-[100%] flex flex-col gap-[20px]">
              <h3 className="text-[#293138] text-[25.63px] md:text-[28.83px] not-italic font-[600] tracking-[0.256px] md:tracking-normal md:font-[700] leading-[120%]">
                Reset your password?
              </h3>
              <p>Please enter your information below to reset your password.</p>
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
                id="password"
                placeholder="Password"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <TextField
                id="email"
                placeholder="E-mail address"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                id="token"
                placeholder="Token"
                fullWidth
                value={token}
                onChange={(e) => setToken(e.target.value)}
              />
              <button
                type="button"
                className="py-[8px] px-[16px] flex gap-[8px] h-[56px] rounded-[4px] bg-[#1463F3] justify-center items-center w-[100%] text-[#fff]"
                onClick={handleResetPassword}
              >
                Reset Password
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
