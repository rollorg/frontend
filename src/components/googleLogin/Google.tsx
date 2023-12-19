import React, { FC, useEffect } from "react";
import axios from "axios";
import google from "../assets/icons/google logo.svg";

export const Google: FC = () => {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID!;
  const redirectUri = process.env.REACT_APP_GOOGLE_REDIRECT_URI!;
  const rollogApiUrl = process.env.REACT_APP_ROLLOG_TOKEN_URL!;

  const handleGoogleSignIn = () => {
    try {
      const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=openid%20email%20profile`;

      console.log('Generated authUrl:', authUrl);

      const popup = window.open(authUrl, '_blank', 'width=600,height=700');

      const receiveMessage = async (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
          const { accessToken } = event.data;

          try {
            const response = await axios.post(rollogApiUrl, {
              provider: "google",
              accessToken,
            });

            console.log("API response:", response.data);
          } catch (error) {
            console.error("Error during Google sign-up:", error);
          } finally {
            popup?.close();
          }

          window.removeEventListener("message", receiveMessage);
        }
      };

      window.addEventListener("message", receiveMessage);
    } catch (error) {
      console.error("Error during Google sign-up:", error);
    }
  };

  useEffect(() => {
    const receiveMessage = (event: MessageEvent) => {
      if (event.origin === window.location.origin) {
      }
    };

    return () => {
      window.removeEventListener("message", receiveMessage);
    };
  }, []);

  return (
    <>
      <div onClick={handleGoogleSignIn} className="nav flex items-center gap-[15px] text-[#1D2023] text-[16px] md:text-[18px] not-italic font-[400] leading-[140%] tracking-[0.16px] md:tracking-[0.18px] p-[15px] md:w-[487px] border-[1px] border-[#DADEE4] bg-[#fff] cursor-pointer">
        <div>
          <img src={google} alt={google} />
        </div>
        <p>Your Google account</p>
      </div>
    </>
  );
};
