// useLogin.ts
import { useState } from "react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import apiInstance from "axiosConfig";

const useLogin = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const login = async (email: string, password: string) => {
    setIsLoading(true);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      message.error("Please enter a valid email address.");
      setIsLoading(false);
      return;
    }

    if (!password || password.length < 6) {
      message.error("Password must be at least 6 characters.");
      setIsLoading(false);
      return;
    }

    const requestBody = {
      provider: "email",
      email: email,
      password: password,
    };

    try {
      const response = await apiInstance.post("auth/login", requestBody);

      if (response.status === 200) {
        console.log("Login successful");
        message.success("Login successful");
        const userEmail = response.data.email || requestBody.email;
        localStorage.setItem("userEmail", userEmail);
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
        message.error(
          "An error occurred during login. Please try again later."
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, setIsLoading, login };
};

export default useLogin;
