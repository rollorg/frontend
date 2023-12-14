import React, { FC } from "react";
import googgle from "../assets/icons/google logo.svg";

export const Google: FC = () => {
  const clientId = "694063784083-hju6h9dcii3i30cs8pe0ibv0o8dchash.apps.googleusercontent.com";
  const redirectUri = "http://localhost:3000";
  const rollogApiUrl = "https://api.rollog.engineering/v1/auth/o/token";

  const handleGoogleSignIn = async () => {
    try {
      const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=openid%20email%20profile`;

      console.log('Generated authUrl:', authUrl);

      window.open(authUrl, '_blank', 'width=600,height=700');

      window.addEventListener("message", async (event) => {
        if (event.origin === window.location.origin) {
          const { accessToken } = event.data;

          await fetch(rollogApiUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              provider: "google", 
              accessToken,
            }),
          });
        }
      });
    } catch (error) {
      console.error("Error during Google sign-up:", error);
    }
  };

  return (
    <>
      <div onClick={handleGoogleSignIn} className="nav flex items-center gap-[15px] text-[#1D2023] text-[16px] md:text-[18px] not-italic font-[400] leading-[140%] tracking-[0.16px] md:tracking-[0.18px] p-[15px] md:w-[487px] border-[1px] border-[#DADEE4] bg-[#fff] cursor-pointer">
        <div>
          <img src={googgle} alt={googgle} />
        </div>
        <p>Your Google account</p>
      </div>
    </>
  );
};
