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
export const Login: FC = () => {
  const [showPassword, setShowPassword] = useState(false);

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
        className="bg-[url('/src/components/assets/login_assets/bg_login.png')] h-[100vh] bg-no-repeat bg-cover bg-center flex justify-center px-[40px] py-[25px"
      >
        <div className="flex items-center gap-[300px]">
          <div className="login md:h-[642px] h-[613px] md:w-[551px] w-[361px] bg-[#fff] rounded-[8px] flex flex-col gap-[25px] px-[20px] md:px-[30px] md:py-[40px]">
            <div className="flex flex-col gap-[10px pt-[30px] md:pt-0">
              <svg
                className="md:hidden"
                width="91"
                height="29"
                viewBox="0 0 91 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.9804 22.6205H14.6894L9.05295 12.6367C10.0501 12.5112 10.9423 12.2077 11.7295 11.7263C12.5272 11.2344 13.157 10.5803 13.6188 9.76404C14.0911 8.94775 14.3273 7.99542 14.3273 6.90704C14.3273 5.70354 14.0544 4.67271 13.5086 3.81457C12.9628 2.94596 12.2175 2.28141 11.2729 1.82095C10.3387 1.36048 9.28387 1.13024 8.1083 1.13024H0V0H8.1083C9.4833 0 10.7323 0.287793 11.8554 0.86338C12.9785 1.43897 13.8707 2.24479 14.532 3.28084C15.1932 4.3169 15.5238 5.52563 15.5238 6.90704C15.5238 8.52914 15.0883 9.90532 14.2171 11.0356C13.3564 12.1658 12.2071 12.9559 10.7691 13.4059L15.9804 22.6205Z"
                  fill="#1D2023"
                />
                <path
                  d="M29.0293 6.84425C30.5093 6.84425 31.8108 7.20529 32.9339 7.92739C34.057 8.64949 34.9334 9.61753 35.5632 10.8315C36.193 12.035 36.5079 13.3745 36.5079 14.8501C36.5079 16.3257 36.193 17.6705 35.5632 18.8845C34.9334 20.0984 34.057 21.0665 32.9339 21.7886C31.8108 22.5107 30.5093 22.8717 29.0293 22.8717C27.5494 22.8717 26.2426 22.5107 25.109 21.7886C23.9754 21.0665 23.0885 20.0984 22.4482 18.8845C21.8185 17.6705 21.5036 16.3257 21.5036 14.8501H22.7316C22.7316 16.1269 22.9888 17.2885 23.5031 18.335C24.0279 19.3816 24.7574 20.2188 25.6916 20.8467C26.6362 21.4641 27.7488 21.7729 29.0293 21.7729C30.2994 21.7729 31.4015 21.4641 32.3356 20.8467C33.2803 20.2188 34.0045 19.3816 34.5084 18.335C35.0227 17.2885 35.2798 16.1269 35.2798 14.8501C35.2798 13.5838 35.0227 12.4274 34.5084 11.3809C34.0045 10.3344 33.2803 9.50241 32.3356 8.88496C31.4015 8.25705 30.2994 7.94309 29.0293 7.94309C29.0188 7.94309 29.0136 7.94309 29.0136 7.94309V6.84425C29.0136 6.84425 29.0188 6.84425 29.0293 6.84425Z"
                  fill="#1D2023"
                />
                <path
                  d="M42.0114 0H43.1449V22.6205H42.0114V0Z"
                  fill="#1D2023"
                />
                <path
                  d="M48.6709 0H49.8045V22.6205H48.6709V0Z"
                  fill="#1D2023"
                />
                <path
                  d="M62.8563 6.84425C64.3362 6.84425 65.6377 7.20529 66.7608 7.92739C67.8839 8.64949 68.7604 9.61753 69.3901 10.8315C70.0199 12.035 70.3348 13.3745 70.3348 14.8501C70.3348 16.3257 70.0199 17.6705 69.3901 18.8845C68.7604 20.0984 67.8839 21.0665 66.7608 21.7886C65.6377 22.5107 64.3362 22.8717 62.8563 22.8717C61.3763 22.8717 60.0695 22.5107 58.9359 21.7886C57.8024 21.0665 56.9154 20.0984 56.2752 18.8845C55.6454 17.6705 55.3305 16.3257 55.3305 14.8501H56.5586C56.5586 16.1269 56.8157 17.2885 57.33 18.335C57.8548 19.3816 58.5843 20.2188 59.5185 20.8467C60.4631 21.4641 61.5757 21.7729 62.8563 21.7729C64.1263 21.7729 65.2284 21.4641 66.1626 20.8467C67.1072 20.2188 67.8315 19.3816 68.3353 18.335C68.8496 17.2885 69.1067 16.1269 69.1067 14.8501C69.1067 13.5838 68.8496 12.4274 68.3353 11.3809C67.8315 10.3344 67.1072 9.50241 66.1626 8.88496C65.2284 8.25705 64.1263 7.94309 62.8563 7.94309C62.8458 7.94309 62.8405 7.94309 62.8405 7.94309V6.84425C62.8405 6.84425 62.8458 6.84425 62.8563 6.84425Z"
                  fill="#1D2023"
                />
                <path
                  d="M91 7.1896C90.4647 7.1896 89.9819 7.28378 89.5515 7.47216C89.1212 7.65007 88.7486 7.87507 88.4337 8.14716C88.1188 8.40879 87.8616 8.67042 87.6622 8.93205C88.0086 9.36113 88.2815 9.85299 88.4809 10.4076C88.6908 10.9623 88.7958 11.5902 88.7958 12.2914C88.7958 13.474 88.5072 14.4682 87.9299 15.274C87.3631 16.0798 86.6178 16.692 85.6942 17.1106C84.7705 17.5188 83.7996 17.7228 82.7815 17.7228C82.2567 17.7228 81.7371 17.6653 81.2228 17.5502C80.7925 17.9269 80.5091 18.3036 80.3726 18.6804C80.2362 19.0467 80.2047 19.3397 80.2782 19.5595C80.3621 19.8734 80.635 20.0984 81.0969 20.2345C81.5692 20.3601 82.3459 20.4281 83.427 20.4385C84.823 20.449 86.0301 20.5798 87.0482 20.831C88.0768 21.0717 88.8693 21.4746 89.4256 22.0397C89.9819 22.5944 90.26 23.3636 90.26 24.3473C90.26 25.7182 89.6198 26.8485 88.3392 27.738C87.0587 28.638 85.2166 29.0566 82.813 28.9939C80.8607 28.8683 79.323 28.5125 78.1999 27.9264C77.0768 27.3508 76.2896 26.8223 75.8383 26.3409L76.5468 25.5403C77.1765 26.1055 78.0005 26.613 79.0186 27.063C80.0472 27.5235 81.312 27.8008 82.813 27.895C83.9361 27.9578 84.9647 27.8636 85.8989 27.6124C86.8435 27.3613 87.5992 26.9636 88.166 26.4194C88.7433 25.8857 89.032 25.2264 89.032 24.4415C89.032 23.6566 88.7748 23.0601 88.2605 22.6519C87.7462 22.2543 87.0639 21.9822 86.2137 21.8357C85.374 21.6787 84.4346 21.5897 83.3955 21.5688C82.1675 21.5374 81.1808 21.4066 80.4356 21.1763C79.6904 20.9356 79.2495 20.4699 79.1131 19.7792C79.0501 19.4025 79.1131 18.9839 79.302 18.5234C79.4909 18.0525 79.7848 17.6234 80.1837 17.2362C79.5329 16.985 78.9451 16.6344 78.4203 16.1844C77.906 15.7344 77.4967 15.185 77.1923 14.5362C76.8984 13.8769 76.7514 13.1286 76.7514 12.2914C76.7514 12.2914 76.7514 12.2862 76.7514 12.2757H77.9795C77.9795 12.2862 77.9795 12.2914 77.9795 12.2914C77.9795 13.2751 78.2052 14.0862 78.6565 14.7245C79.1078 15.3525 79.6956 15.8234 80.4199 16.1374C81.1546 16.4408 81.9418 16.5926 82.7815 16.5926C83.6107 16.5926 84.3874 16.4408 85.1116 16.1374C85.8464 15.8234 86.4394 15.3525 86.8907 14.7245C87.3421 14.0862 87.5678 13.2751 87.5678 12.2914C87.5678 11.2972 87.3421 10.4809 86.8907 9.84253C86.4394 9.20415 85.8464 8.73321 85.1116 8.42972C84.3874 8.11577 83.6107 7.95879 82.7815 7.95879V6.82855C83.5582 6.82855 84.3087 6.9489 85.0329 7.1896C85.7572 7.4303 86.4079 7.78088 86.9852 8.24135C87.4785 7.52972 88.0663 6.95936 88.7486 6.53029C89.4413 6.10122 90.1918 5.88668 91 5.88668V7.1896Z"
                  fill="#1D2023"
                />
              </svg>

              <h1 className="text-[#1D2023] text-[25.63px] md:text-[28.83px] not-italic font-[600] tracking-[0.256px] md:tracking-normal md:font-[700] leading-[120%]">
                Log in with:{" "}
              </h1>
            </div>

            <div className="borders flex items-center gap-[15px] text-[#1D2023] text-[16px] md:text-[18px] not-italic font-[400] leading-[140%] tracking-[0.16px] md:tracking-[0.18px] p-[15px] md:w-[487px] border-[1px] border-[#DADEE4] bg-[#fff]">
              <svg
                width="38"
                height="39"
                viewBox="0 0 38 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1829_2316)">
                  <path
                    d="M37.9804 19.8645C37.9804 18.2667 37.8511 17.1008 37.5713 15.8916H19.3789V23.1033H30.0574C29.8422 24.8955 28.6796 27.5946 26.0961 29.4082L26.0598 29.6497L31.8119 34.1187L32.2105 34.1586C35.8704 30.7686 37.9804 25.7808 37.9804 19.8645Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M19.3781 38.8659C24.6097 38.8659 29.0016 37.1385 32.2096 34.1589L26.0952 29.4084C24.459 30.5528 22.263 31.3517 19.3781 31.3517C14.2541 31.3517 9.9052 27.9619 8.35493 23.2764L8.1277 23.2957L2.14658 27.9381L2.06836 28.1561C5.25469 34.5042 11.7997 38.8659 19.3781 38.8659Z"
                    fill="#34A853"
                  />
                  <path
                    d="M8.3553 23.2765C7.94625 22.0674 7.70952 20.7718 7.70952 19.4331C7.70952 18.0943 7.94625 16.7988 8.33378 15.5897L8.32295 15.3322L2.26688 10.6152L2.06873 10.7098C0.755493 13.344 0.00195312 16.3022 0.00195312 19.4331C0.00195312 22.564 0.755493 25.522 2.06873 28.1563L8.3553 23.2765Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M19.3781 7.51405C23.0165 7.51405 25.4708 9.09027 26.8703 10.4075L32.3388 5.05258C28.9803 1.92172 24.6097 0 19.3781 0C11.7997 0 5.25469 4.3616 2.06836 10.7097L8.33341 15.5896C9.9052 10.9041 14.2541 7.51405 19.3781 7.51405Z"
                    fill="#EB4335"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1829_2316">
                    <rect width="38" height="39" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <p>Your Google account</p>
            </div>

            <div className="flex justify-center items-center gap-[20px] text-[#1D2023] text-[14.22px] md:text-[16px] not-italic font-[400] leading-[140%] tracking-[0.142px] md:tracking-[0.16px]">
              <svg
                width="208"
                height="2"
                viewBox="0 0 208 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0.765625L207.999 1.23409"
                  stroke="#D3D7DE"
                  strokeWidth="0.5"
                />
              </svg>

              <p className="flex justify-center">OR</p>
              <svg
                width="208"
                height="2"
                viewBox="0 0 208 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0.765625L207.999 1.23409"
                  stroke="#D3D7DE"
                  strokeWidth="0.5"
                />
              </svg>
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
              <div className="flex flex-col md:border md:border-[#C0D1FC] gap-[16px] md:p-[20px] rounded-[8px] text-[18px] not-italic font-[400] leading-[100%] tracking-[0.18px]">
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
                </FormControl>
              </div>
            </Box>
            <p className="text-[#595A5E] text-[16px] leading-[140%] not-italic font-[400] tracking-[0.16px]">
              Forgot Password?
            </p>
            <button className="py-[8px] px-[16px] flex gap-[8px] h-[56px] rounded-[4px] bg-[#1463F3] justify-center items-center text-[#fff] text-[16px] md:text-[18px] not-italic font-[500] leading-[100%] tracking-[0.16px] md:tracking-[0.18px]">
              Login
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
            <p className="text-[#1D2023] text-[16px] md:text-[18px] not-italic font-[400] leading-[140%] tracking-[0.16px ] md:tracking-[0.18px] flex gap-[10px] justify-center md:justify-start">
              New user?{" "}
              <span className="md:text-[#1463F3] cursor-pointer">
                <Link to="/register">Create an account</Link>
              </span>
            </p>
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
              <p className="absolute bottom-[90px] left-[70rem]">
                &copy;2023 Rollog
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
