import React, { FC } from "react";
import { NavLink } from "react-router-dom";

export const Content: FC = () => {
  return (
    <>
      <div
        style={{ fontFamily: "Figtree" }}
        className="lg:w-[780px] lg:pb-[98px] pb-[61px] w-[90%]"
      >
        <div className="flex justify-end">
          <NavLink to="/free_client">
            <svg
              className="hidden lg:flex"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.9999 25.4154L13.5076 35.9077C13.3204 36.0949 13.0909 36.1949 12.8191 36.2077C12.5473 36.2205 12.305 36.1205 12.0922 35.9077C11.8794 35.6949 11.7729 35.459 11.7729 35.2C11.7729 34.941 11.8794 34.7051 12.0922 34.4923L22.5845 24L12.0922 13.5077C11.905 13.3205 11.805 13.0911 11.7922 12.8193C11.7794 12.5475 11.8794 12.3051 12.0922 12.0923C12.305 11.8795 12.5409 11.7731 12.7999 11.7731C13.0589 11.7731 13.2948 11.8795 13.5076 12.0923L23.9999 22.5846L34.4922 12.0923C34.6794 11.9051 34.9089 11.8051 35.1807 11.7923C35.4525 11.7795 35.6948 11.8795 35.9076 12.0923C36.1204 12.3051 36.2269 12.541 36.2269 12.8C36.2269 13.059 36.1204 13.2949 35.9076 13.5077L25.4153 24L35.9076 34.4923C36.0948 34.6795 36.1948 34.909 36.2076 35.1808C36.2204 35.4526 36.1204 35.6949 35.9076 35.9077C35.6948 36.1205 35.4589 36.227 35.1999 36.227C34.9409 36.227 34.705 36.1205 34.4922 35.9077L23.9999 25.4154Z"
                fill="#1D2023"
              />
            </svg>
          </NavLink>
          <NavLink to="/free_client">
            <svg
              className="flex lg:hidden"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.9999 16.9436L9.00507 23.9385C8.88029 24.0632 8.7273 24.1299 8.5461 24.1385C8.3649 24.147 8.20335 24.0804 8.06147 23.9385C7.91958 23.7966 7.84863 23.6393 7.84863 23.4667C7.84863 23.294 7.91958 23.1368 8.06147 22.9949L15.0563 16L8.06147 9.00513C7.93669 8.88035 7.87002 8.72736 7.86147 8.54616C7.85291 8.36496 7.91958 8.20342 8.06147 8.06153C8.20335 7.91964 8.36062 7.84869 8.53327 7.84869C8.70591 7.84869 8.86318 7.91964 9.00507 8.06153L15.9999 15.0564L22.9948 8.06153C23.1196 7.93675 23.2726 7.87008 23.4538 7.86153C23.635 7.85297 23.7965 7.91964 23.9384 8.06153C24.0803 8.20342 24.1512 8.36068 24.1512 8.53333C24.1512 8.70597 24.0803 8.86324 23.9384 9.00513L16.9435 16L23.9384 22.9949C24.0632 23.1196 24.1298 23.2726 24.1384 23.4538C24.147 23.635 24.0803 23.7966 23.9384 23.9385C23.7965 24.0804 23.6392 24.1513 23.4666 24.1513C23.294 24.1513 23.1367 24.0804 22.9948 23.9385L15.9999 16.9436Z"
                fill="#1D2023"
              />
            </svg>
          </NavLink>
        </div>
        <div className="lg:w-[550px]">
          <div className="flex justify-between items-center">
            <div className="text-[20.25px] pt-[20px] lg:pt-0 lg:text-[25.63px] text-[#1463F3] not-italic font-[700] leading-[140%] tracking-[0.203px] lg:tracking-[0.256px]">
              <h1>Category</h1>
            </div>
            <div className="lg:flex items-center gap-[16px] hidden text-[#323336] text-[18px] not-italic font-[400] leading-[140%] tracking-[0.18px]">
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.3333 17.6667H9.66667C9.47778 17.6667 9.31944 17.6027 9.19167 17.4747C9.06389 17.3468 9 17.1883 9 16.9991C9 16.8099 9.06389 16.6517 9.19167 16.5244C9.31944 16.397 9.47778 16.3333 9.66667 16.3333H16.3333V9.66667C16.3333 9.47778 16.3973 9.31944 16.5253 9.19167C16.6532 9.06389 16.8117 9 17.0009 9C17.1901 9 17.3483 9.06389 17.4756 9.19167C17.603 9.31944 17.6667 9.47778 17.6667 9.66667V16.3333H24.3333C24.5222 16.3333 24.6806 16.3973 24.8083 16.5253C24.9361 16.6532 25 16.8117 25 17.0009C25 17.1901 24.9361 17.3483 24.8083 17.4756C24.6806 17.603 24.5222 17.6667 24.3333 17.6667H17.6667V24.3333C17.6667 24.5222 17.6027 24.6806 17.4747 24.8083C17.3468 24.9361 17.1883 25 16.9991 25C16.8099 25 16.6517 24.9361 16.5244 24.8083C16.397 24.6806 16.3333 24.5222 16.3333 24.3333V17.6667Z"
                  fill="#1463F3"
                />
                <rect
                  x="1"
                  y="1"
                  width="32"
                  height="32"
                  rx="16"
                  stroke="#1463F3"
                  strokeWidth="0.5"
                />
              </svg>
              <p>Add a category</p>
            </div>
          </div>
          <hr className="bg-[#CCD0D8] mt-[10px]" />
          <div className="flex items-center gap-[16px] lg:hidden text-[#323336] text-[18px] not-italic font-[400] leading-[140%] tracking-[0.18px] pt-[32px]">
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.3333 17.6667H9.66667C9.47778 17.6667 9.31944 17.6027 9.19167 17.4747C9.06389 17.3468 9 17.1883 9 16.9991C9 16.8099 9.06389 16.6517 9.19167 16.5244C9.31944 16.397 9.47778 16.3333 9.66667 16.3333H16.3333V9.66667C16.3333 9.47778 16.3973 9.31944 16.5253 9.19167C16.6532 9.06389 16.8117 9 17.0009 9C17.1901 9 17.3483 9.06389 17.4756 9.19167C17.603 9.31944 17.6667 9.47778 17.6667 9.66667V16.3333H24.3333C24.5222 16.3333 24.6806 16.3973 24.8083 16.5253C24.9361 16.6532 25 16.8117 25 17.0009C25 17.1901 24.9361 17.3483 24.8083 17.4756C24.6806 17.603 24.5222 17.6667 24.3333 17.6667H17.6667V24.3333C17.6667 24.5222 17.6027 24.6806 17.4747 24.8083C17.3468 24.9361 17.1883 25 16.9991 25C16.8099 25 16.6517 24.9361 16.5244 24.8083C16.397 24.6806 16.3333 24.5222 16.3333 24.3333V17.6667Z"
                fill="#1463F3"
              />
              <rect
                x="1"
                y="1"
                width="32"
                height="32"
                rx="16"
                stroke="#1463F3"
                strokeWidth="0.5"
              />
            </svg>
            <p>Add a category</p>
          </div>
          <div className="lg:w-[500px] flex flex-col gap-[20px] pt-[20px] text-[#323336] text-[18px] not-italic font-[400] leading-[140%] tracking-[0.18px]">
            <div className="lg:w-[500px] h-[56px] lg:h-[64px] pt-[16px] px-[16px] flex justify-between rounded-[4px] border-[1px] border-[#4BB543] border-l-[32px]">
              <p>Fix</p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.30764 19.0002H6.38072L16.2749 9.10594L15.2019 8.03287L5.30764 17.9271V19.0002ZM18.4153 8.38672L15.9153 5.89824L17.1422 4.67132C17.3333 4.48028 17.5701 4.38477 17.8528 4.38477C18.1355 4.38477 18.3724 4.48028 18.5634 4.67132L19.6365 5.74439C19.8275 5.93542 19.9249 6.17036 19.9288 6.44919C19.9326 6.72804 19.8391 6.96298 19.648 7.15402L18.4153 8.38672ZM5.11532 20.0002C4.88327 20.0002 4.69064 19.9236 4.53744 19.7704C4.38423 19.6172 4.30762 19.4245 4.30762 19.1925V17.829C4.30762 17.7213 4.32621 17.621 4.36339 17.528C4.40058 17.4351 4.46276 17.345 4.54994 17.2578L15.1961 6.61169L17.6961 9.11172L7.04994 19.7579C6.96276 19.845 6.87269 19.9072 6.77974 19.9444C6.68679 19.9816 6.58648 20.0002 6.47879 20.0002H5.11532ZM15.7288 8.55979L15.2019 8.03287L16.2749 9.10594L15.7288 8.55979Z"
                  fill="#1D2023"
                />
              </svg>
            </div>
            <div className="lg:w-[500px] h-[56px] lg:h-[64px] pt-[16px] px-[16px] flex justify-between rounded-[4px] border-[1px] border-[#FA8E02] border-l-[32px]">
              <p>Improvement</p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.30764 19.0002H6.38072L16.2749 9.10594L15.2019 8.03287L5.30764 17.9271V19.0002ZM18.4153 8.38672L15.9153 5.89824L17.1422 4.67132C17.3333 4.48028 17.5701 4.38477 17.8528 4.38477C18.1355 4.38477 18.3724 4.48028 18.5634 4.67132L19.6365 5.74439C19.8275 5.93542 19.9249 6.17036 19.9288 6.44919C19.9326 6.72804 19.8391 6.96298 19.648 7.15402L18.4153 8.38672ZM5.11532 20.0002C4.88327 20.0002 4.69064 19.9236 4.53744 19.7704C4.38423 19.6172 4.30762 19.4245 4.30762 19.1925V17.829C4.30762 17.7213 4.32621 17.621 4.36339 17.528C4.40058 17.4351 4.46276 17.345 4.54994 17.2578L15.1961 6.61169L17.6961 9.11172L7.04994 19.7579C6.96276 19.845 6.87269 19.9072 6.77974 19.9444C6.68679 19.9816 6.58648 20.0002 6.47879 20.0002H5.11532ZM15.7288 8.55979L15.2019 8.03287L16.2749 9.10594L15.7288 8.55979Z"
                  fill="#1D2023"
                />
              </svg>
            </div>
            <div className="lg:w-[500px] h-[56px] lg:h-[64px] pt-[16px] px-[16px] flex justify-between rounded-[4px] border-[1px] border-[#1463F3] border-l-[32px]">
              <p>New</p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.30764 19.0002H6.38072L16.2749 9.10594L15.2019 8.03287L5.30764 17.9271V19.0002ZM18.4153 8.38672L15.9153 5.89824L17.1422 4.67132C17.3333 4.48028 17.5701 4.38477 17.8528 4.38477C18.1355 4.38477 18.3724 4.48028 18.5634 4.67132L19.6365 5.74439C19.8275 5.93542 19.9249 6.17036 19.9288 6.44919C19.9326 6.72804 19.8391 6.96298 19.648 7.15402L18.4153 8.38672ZM5.11532 20.0002C4.88327 20.0002 4.69064 19.9236 4.53744 19.7704C4.38423 19.6172 4.30762 19.4245 4.30762 19.1925V17.829C4.30762 17.7213 4.32621 17.621 4.36339 17.528C4.40058 17.4351 4.46276 17.345 4.54994 17.2578L15.1961 6.61169L17.6961 9.11172L7.04994 19.7579C6.96276 19.845 6.87269 19.9072 6.77974 19.9444C6.68679 19.9816 6.58648 20.0002 6.47879 20.0002H5.11532ZM15.7288 8.55979L15.2019 8.03287L16.2749 9.10594L15.7288 8.55979Z"
                  fill="#1D2023"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
