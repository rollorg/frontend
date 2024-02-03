// GoogleAuthLogic.ts
import apiInstance from "axiosConfig";
import { message } from "antd";

export const handleGoogleSignInLogic = async (clientId: string, redirectUri: string) => {
  try {
    const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=openid%20email%20profile`;

    console.log('Generated authUrl:', authUrl);

    window.location.href = authUrl;

    const receiveMessage = async (event: MessageEvent) => {
      if (event.origin === window.location.origin) {
        const { accessToken } = event.data;

        try {
          const response = await apiInstance.post("auth/o/token", {
            provider: "google",
            accessToken,
          });

          console.log("API response:", response.data);
          message.success("Google authentication successful");
          window.location.href = process.env.REACT_APP_MAIN_WEBSITE_URL!;
        } catch (error) {
          console.error("Error during Google sign-up:", error);
        }

        window.removeEventListener("message", receiveMessage);
      }
    };

    window.addEventListener("message", receiveMessage);
  } catch (error) {
    console.error("Error during Google sign-up:", error);
  }
};
