import React, { FC, useState } from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";
export const Register: FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <>
      <div
        style={{ fontFamily: "Figtree" }}
        className="bg-[url('/src/components/assets/register_assets/bg_register.png')] h-[100vh] bg-no-repeat bg-cover bg-center flex justify-center px-[40px]"
      >
        <div className="flex items-center xl:gap-[300px] lg:gap-[100px]">
          <div className="borders md:h-[642px] xl:h-[642px] lg:h-[590px] h-[630px] md:w-[551px] w-[361px] bg-[#fff] rounded-[8px] flex flex-col lg:gap-[10px] xl:gap-[15px] gap-[15px] px-[20px] md:px-[30px] md:py-[40px] lg:py-[10px] xl:py-[40px]">
            <div className="flex flex-col pt-[20px] md:pt-0">
              <h1 className="text-[#1D2023] text-[22.78px] md:text-[28.83px] not-italic font-[700] leading-[120%] tracking-[0.228px] md:tracking-normal">
                Get started with a free account
              </h1>
              <p className="text-[#6983CD] text-[16px] md:text-[20.25px] not-italic font-[500] leading-[160%] tracking-[0.203px]">
                Free forever, no credit card needed
              </p>
            </div>

            <Box
              style={{ fontFamily: "Figtree" }}
              component="form"
              sx={{
                "& .MuiTextField-root": { width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div className="flex flex-col md:border md:border-[#C0D1FC] gap-[20px] md:gap-[13px] md:p-[20px] rounded-[8px] text-[18px] not-italic font-[400] leading-[100%] tracking-[0.18px]">
                <TextField
                  id="outlined-Full-name"
                  label="What is your name?"
                  placeholder="Full name"
                />
                <TextField
                  id="outlined-Your-website-address"
                  label="Your website address"
                  placeholder="Website address"
                />
                <TextField
                  id="outlined-Your-e-mail-address"
                  label="Your e-mail address"
                  placeholder="E-mail address"
                />
                <FormControl variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                  <p className="text-[#A7A8AE] text-[12.64px] not-italic font-[400] leading-normal tracking-[0.126px] pl-[10px] pt-[5px]">
                    Password must be at least 8 characters
                  </p>
                </FormControl>
              </div>
            </Box>
            <div className="flex">
              <Checkbox {...label} />
              <p className="text-[#1D2023] text-[12.64px] md:text-[14.22px] not-italic font-[400] leading-[140%] tracking-[0.142px] lg:w-[60%]">
                I have read and agree to the{" "}
                <span className="text-[#6983CD]">Terms of Use</span> and{" "}
                <span className="text-[#6983CD]">Customer Privacy Policy.</span>
              </p>
            </div>
            <button className="py-[10px] px-[16px] flex gap-[8px] h-[56px] rounded-[4px] bg-[#1463F3] justify-center items-center text-[#fff] text-[16px] md:text-[18px] not-italic font-[500] leading-[100%] tracking-[0.16px] md:tracking-[0.18px]">
              Authorize
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.617 12.4804H3.98047C3.8388 12.4804 3.72005 12.4324 3.62422 12.3364C3.52839 12.2404 3.48047 12.1215 3.48047 11.9797C3.48047 11.8378 3.52839 11.7191 3.62422 11.6236C3.72005 11.5281 3.8388 11.4804 3.98047 11.4804H19.617L14.8189 6.67651C14.7296 6.58612 14.6829 6.47314 14.6789 6.33756C14.6748 6.20199 14.7215 6.08437 14.8189 5.98471C14.9082 5.89334 15.0219 5.84766 15.1599 5.84766C15.298 5.84766 15.4138 5.89445 15.5074 5.98803L20.9343 11.415C21.0215 11.5021 21.0827 11.5921 21.118 11.6848C21.1532 11.7776 21.1708 11.8769 21.1708 11.9829C21.1708 12.0889 21.1529 12.1912 21.1171 12.29C21.0813 12.3887 21.0203 12.4803 20.9343 12.565L15.5074 17.9919C15.417 18.0855 15.304 18.1323 15.1684 18.1323C15.0329 18.1323 14.9164 18.0855 14.8189 17.9919C14.7087 17.8944 14.6567 17.7755 14.6631 17.6352C14.6696 17.4948 14.7215 17.3759 14.8189 17.2784L19.617 12.4804Z"
                  fill="white"
                />
              </svg>
            </button>
            <div className="pt-[20px] flex gap-[10px] justify-center md:justify-start items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.90218 12.4804H20.5195C20.6611 12.4804 20.7799 12.4324 20.8757 12.3364C20.9716 12.2404 21.0195 12.1215 21.0195 11.9797C21.0195 11.8378 20.9716 11.7191 20.8757 11.6236C20.7799 11.5281 20.6611 11.4804 20.5195 11.4804H4.88295L9.68103 6.67651C9.77034 6.58612 9.81703 6.47314 9.82108 6.33756C9.82514 6.20199 9.77846 6.08437 9.68103 5.98471C9.59171 5.89334 9.47803 5.84766 9.34 5.84766C9.20197 5.84766 9.08615 5.89445 8.99255 5.98803L3.56563 11.415C3.47844 11.5021 3.41723 11.5921 3.38198 11.6848C3.34673 11.7776 3.3291 11.8769 3.3291 11.9829C3.3291 12.0889 3.34702 12.1912 3.38285 12.29C3.41868 12.3887 3.47961 12.4803 3.56563 12.565L8.99255 17.9919C9.08293 18.0855 9.19592 18.1323 9.3315 18.1323C9.46708 18.1323 9.58359 18.0855 9.68103 17.9919C9.79128 17.8944 9.8432 17.7755 9.8368 17.6352C9.83038 17.4948 9.77846 17.3759 9.68103 17.2784L4.90218 12.4804Z"
                  fill="#1D2023"
                />
              </svg>

              <p className="text-[#1D2023] text-[16px] md:text-[18px] not-italic font-[400] leading-[140%] tracking-[0.16px ] md:tracking-[0.18px] flex gap-[10px]">
                Have an account?
                <Link to="/">
                  <span className="underline">Login</span>
                </Link>
              </p>
            </div>
          </div>
          <div className="hidden md:hidden lg:block">
            <svg
              width="247"
              height="71"
              viewBox="0 0 247 71"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M111.657 55.7511H109.327L99.1587 37.6734C100.958 37.446 102.567 36.8965 103.987 36.0248C105.427 35.1342 106.563 33.9498 107.396 32.4718C108.248 30.9937 108.674 29.2693 108.674 27.2986C108.674 25.1194 108.182 23.2529 107.197 21.699C106.212 20.1262 104.868 18.923 103.164 18.0892C101.478 17.2554 99.5753 16.8385 97.4544 16.8385H82.8262V14.792H97.4544C99.935 14.792 102.188 15.3131 104.215 16.3553C106.241 17.3975 107.85 18.8566 109.043 20.7326C110.236 22.6086 110.833 24.7973 110.833 27.2986C110.833 30.2357 110.047 32.7276 108.475 34.7741C106.923 36.8207 104.849 38.2513 102.255 39.0662L111.657 55.7511Z"
                fill="white"
              />
              <path
                d="M135.198 27.1849C137.868 27.1849 140.216 27.8386 142.242 29.1462C144.269 30.4537 145.85 32.2065 146.986 34.4046C148.122 36.5838 148.69 39.0093 148.69 41.6812C148.69 44.353 148.122 46.788 146.986 48.9862C145.85 51.1843 144.269 52.9371 142.242 54.2446C140.216 55.5521 137.868 56.2059 135.198 56.2059C132.528 56.2059 130.171 55.5521 128.126 54.2446C126.08 52.9371 124.48 51.1843 123.325 48.9862C122.189 46.788 121.621 44.353 121.621 41.6812H123.836C123.836 43.993 124.3 46.0964 125.228 47.9913C126.175 49.8863 127.491 51.4022 129.176 52.5392C130.881 53.6572 132.888 54.2162 135.198 54.2162C137.489 54.2162 139.478 53.6572 141.163 52.5392C142.867 51.4022 144.174 49.8863 145.083 47.9913C146.011 46.0964 146.475 43.993 146.475 41.6812C146.475 39.3883 146.011 37.2944 145.083 35.3995C144.174 33.5045 142.867 31.998 141.163 30.88C139.478 29.7431 137.489 29.1746 135.198 29.1746C135.179 29.1746 135.17 29.1746 135.17 29.1746V27.1849C135.17 27.1849 135.179 27.1849 135.198 27.1849Z"
                fill="white"
              />
              <path
                d="M158.619 14.792H160.664V55.7511H158.619V14.792Z"
                fill="white"
              />
              <path
                d="M170.634 14.792H172.679V55.7511H170.634V14.792Z"
                fill="white"
              />
              <path
                d="M196.226 27.1849C198.896 27.1849 201.244 27.8386 203.27 29.1462C205.296 30.4537 206.877 32.2065 208.013 34.4046C209.15 36.5838 209.718 39.0093 209.718 41.6812C209.718 44.353 209.15 46.788 208.013 48.9862C206.877 51.1843 205.296 52.9371 203.27 54.2446C201.244 55.5521 198.896 56.2059 196.226 56.2059C193.556 56.2059 191.198 55.5521 189.153 54.2446C187.108 52.9371 185.508 51.1843 184.353 48.9862C183.216 46.788 182.648 44.353 182.648 41.6812H184.864C184.864 43.993 185.328 46.0964 186.256 47.9913C187.202 49.8863 188.519 51.4022 190.204 52.5392C191.908 53.6572 193.915 54.2162 196.226 54.2162C198.517 54.2162 200.505 53.6572 202.19 52.5392C203.895 51.4022 205.201 49.8863 206.11 47.9913C207.038 46.0964 207.502 43.993 207.502 41.6812C207.502 39.3883 207.038 37.2944 206.11 35.3995C205.201 33.5045 203.895 31.998 202.19 30.88C200.505 29.7431 198.517 29.1746 196.226 29.1746C196.207 29.1746 196.197 29.1746 196.197 29.1746V27.1849C196.197 27.1849 196.207 27.1849 196.226 27.1849Z"
                fill="white"
              />
              <path
                d="M247 27.8102C246.034 27.8102 245.163 27.9808 244.387 28.3219C243.61 28.644 242.938 29.0514 242.37 29.5441C241.802 30.0178 241.338 30.4916 240.978 30.9653C241.603 31.7422 242.095 32.6328 242.455 33.6372C242.834 34.6415 243.023 35.7784 243.023 37.0481C243.023 39.1893 242.502 40.9895 241.461 42.4486C240.438 43.9077 239.094 45.0163 237.428 45.7743C235.761 46.5133 234.01 46.8828 232.173 46.8828C231.226 46.8828 230.289 46.7786 229.361 46.5701C228.584 47.2523 228.073 47.9345 227.827 48.6167C227.581 49.2799 227.524 49.8105 227.656 50.2084C227.808 50.7769 228.3 51.1843 229.133 51.4306C229.986 51.658 231.387 51.7812 233.337 51.8002C235.856 51.8191 238.034 52.056 239.87 52.5108C241.726 52.9466 243.156 53.6762 244.159 54.6994C245.163 55.7037 245.665 57.0965 245.665 58.8778C245.665 61.3601 244.51 63.4067 242.199 65.0174C239.889 66.647 236.566 67.405 232.23 67.2913C228.707 67.0639 225.933 66.4196 223.907 65.3584C221.881 64.3162 220.461 63.3593 219.646 62.4876L220.925 61.038C222.061 62.0613 223.547 62.9803 225.384 63.7951C227.24 64.6289 229.522 65.1311 232.23 65.3016C234.256 65.4153 236.111 65.2448 237.797 64.79C239.501 64.3352 240.864 63.6151 241.887 62.6297C242.929 61.6633 243.449 60.4695 243.449 59.0483C243.449 57.6271 242.985 56.547 242.057 55.808C241.13 55.0879 239.899 54.5952 238.365 54.3299C236.85 54.0457 235.155 53.8846 233.281 53.8467C231.065 53.7898 229.285 53.553 227.941 53.1361C226.596 52.7003 225.801 51.857 225.555 50.6063C225.441 49.9242 225.555 49.1662 225.895 48.3324C226.236 47.4797 226.766 46.7028 227.486 46.0016C226.312 45.5469 225.252 44.9121 224.305 44.0972C223.377 43.2824 222.638 42.2876 222.089 41.1127C221.559 39.9189 221.294 38.564 221.294 37.0481C221.294 37.0481 221.294 37.0386 221.294 37.0196H223.509C223.509 37.0386 223.509 37.0481 223.509 37.0481C223.509 38.8293 223.917 40.2979 224.731 41.4538C225.545 42.5908 226.606 43.4435 227.912 44.012C229.238 44.5615 230.658 44.8363 232.173 44.8363C233.669 44.8363 235.07 44.5615 236.377 44.012C237.702 43.4435 238.772 42.5908 239.586 41.4538C240.401 40.2979 240.808 38.8293 240.808 37.0481C240.808 35.2479 240.401 33.7698 239.586 32.6139C238.772 31.458 237.702 30.6053 236.377 30.0557C235.07 29.4872 233.669 29.203 232.173 29.203V27.1565C233.574 27.1565 234.928 27.3744 236.235 27.8102C237.541 28.2461 238.715 28.8809 239.757 29.7146C240.647 28.4261 241.707 27.3933 242.938 26.6164C244.188 25.8395 245.542 25.451 247 25.451V27.8102Z"
                fill="white"
              />
              <path
                d="M67.6682 0H3.32586C1.48904 0 0 1.48916 0 3.32614V67.6739C0 69.5108 1.48904 71 3.32586 71H67.6682C69.505 71 70.994 69.5108 70.994 67.6739V3.32614C70.994 1.48916 69.505 0 67.6682 0Z"
                fill="#1D2023"
              />
              <path
                d="M36.1285 56.2428V14.8436C36.3682 14.8052 36.6256 14.7874 36.9038 14.7785C37.1701 14.7667 37.5518 14.7578 38.0578 14.7578C42.3601 14.7578 45.5232 15.6189 47.5678 17.3205C49.6125 19.0309 50.6333 21.6764 50.6333 25.26C50.6333 28.7015 49.6598 31.2908 47.7217 33.0397C45.7806 34.7886 42.9045 35.6586 39.0993 35.6586C38.6525 35.6586 37.9069 35.6201 36.8564 35.5432H36.6937L53.1011 56.2428H36.1285ZM17.8955 56.2428V14.8436H32.6311V56.2428H17.8955Z"
                fill="#F1F2F4"
              />
            </svg>
            <p className="text-[#FFF] text-[20.25px] not-italic font-[400] leading-[140%]">
              Sign in or create an account
            </p>
            <div className="text-[#fff] flex justify-end text-[18px] not-italic font-[400] leading-[140%] tracking-[0.18px]">
              <p className="absolute bottom-[50px] lg:left-[53rem] xl:left-[70rem]">
                &copy;2023 Rollog
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
