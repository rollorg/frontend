import React, { FC, useEffect } from "react";
import { handleGoogleSignInLogic } from "components/request/google";
import google from "../assets/icons/google logo.svg";

export const Google: FC = () => {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID!;
  const redirectUri = process.env.REACT_APP_GOOGLE_REDIRECT_URI!;

  const handleGoogleSignIn = () => {
    handleGoogleSignInLogic(clientId, redirectUri);
  };

  useEffect(() => {
    const receiveMessage = (event: MessageEvent) => {
      if (event.origin === window.location.origin) {
        const { accessToken } = event.data;
        console.log("Received access token:", accessToken);
      }
    };

    return () => {
      window.removeEventListener("message", receiveMessage);
    };
  }, []);

  return (
    <>
      <button
        onClick={handleGoogleSignIn}
        className="nav flex items-center gap-[15px] text-[#1D2023] text-[16px] md:text-[18px] not-italic font-[400] leading-[140%] tracking-[0.16px] md:tracking-[0.18px] p-[15px] md:w-[487px] border-[1px] border-[#DADEE4] bg-[#fff]"
      >
        <img src={google} alt={google} />
        Your Google account
      </button>
    </>
  );
};
