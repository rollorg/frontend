// useForgotPassword
import { useState } from "react";
import { message } from "antd";
import apiInstance from "axiosConfig";

const useForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState("");

  const requestReset = async () => {
    if (!email) {
      message.error("Email is required. Please try again.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await apiInstance.post("password/reset", {
        email,
      });

      if (response.status >= 200 && response.status < 300) {
        console.log("Password reset link sent successfully!");
        message.success("Password reset link sent successfully!");
      } else {
        console.error(
          "Error requesting password reset link:",
          response.statusText
        );
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

  return { isLoading, setIsLoading, email, setEmail, requestReset };
};

export default useForgotPassword;
