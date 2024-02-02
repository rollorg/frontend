// useResetPassword.ts
import { useState } from "react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import apiInstance from "axiosConfig";

const useResetPassword = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const resetPassword = async (password: string, email: string, token: string) => {
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
        error.response &&
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

  return { isLoading, setIsLoading, resetPassword };
};

export default useResetPassword;
