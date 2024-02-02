// useRegistration.ts
import { useState } from "react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import apiInstance from "axiosConfig";

const useRegistration = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const register = async (requestBody: any) => {
    setIsLoading(true);

    try {
      const response = await apiInstance.post("auth/register", requestBody, {
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
          message.error(
            "Registration failed. Please check your details and try again."
          );
        }
      }
    } catch (error: any) {
      console.error("Error during registration:", error);
      if (error.response && error.response.status === 422) {
        message.error("Email already exists. Try another or log in.");
      } else if (error.message === "Network Error") {
        message.error("Network error. Please try again later.");
      } else {
        message.error(
          "An error occurred during registration. Please try again later."
        );
      }
    } finally {
        setIsLoading(false);
    }
  };

  return { isLoading, setIsLoading, register };
};

export default useRegistration;
