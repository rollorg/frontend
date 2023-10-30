import React, { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import Widget from "../../swipe_modules/widget_module/changelog/Widget";
export const Body: FC = () => {
  const [widgetVisible, setWidgetVisible] = useState(false);
  const [widgetPosition, setWidgetPosition] = useState("closed");
  const toggleWidget = () => {
    if (widgetPosition === "closed") {
      setWidgetVisible(true);
      setWidgetPosition("open");
    } else {
      setWidgetPosition("closing");
      setTimeout(() => {
        setWidgetVisible(false);
        setWidgetPosition("closed");
      }, 500);
    }
  };
  return (
    <>
      <div
        style={{ fontFamily: "Figtree" }}
        className="xl:px-[88px] md:px-[40px] py-[40px] px-[15px] lg:h-[824px] lg:gap-[30px] xl:gap-0 flex flex-col-reverse lg:flex-row md:text-[18px] text-[16px] not-italic font-[400] leading-[150%] md:tracking-[0.18px] tracking-[0.16px]"
      >
        <hr className="text-[#DADEE4] lg:hidden flex relative top-[30px]" />
        <NavLink
          to="/free_client_widegt1"
          className="flex items-center gap-[8px] xl:w-[24%] text-[#323336] lg:pt-[350px]"
        >
          <svg
            className="h-[48px] w-[48px] md:w-[88px] md:h-[88px]"
            viewBox="0 0 88 88"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="88" height="88" rx="44" fill="#F1F6FF" />
            <path
              d="M52.7234 42.591L45.499 35.3667C45.2956 35.1633 45.1528 34.9534 45.0705 34.737C44.9883 34.5206 44.9471 34.2888 44.9471 34.0415C44.9471 33.7942 44.9883 33.5643 45.0705 33.3519C45.1528 33.1395 45.2956 32.9316 45.499 32.7282L52.7234 25.5039C52.9268 25.3004 53.1367 25.1576 53.3531 25.0753C53.5695 24.9931 53.8013 24.9519 54.0486 24.9519C54.2959 24.9519 54.5257 24.9931 54.7381 25.0753C54.9506 25.1576 55.1585 25.3004 55.3618 25.5039L62.5863 32.7282C62.7897 32.9316 62.9325 33.1415 63.0148 33.3579C63.097 33.5743 63.1381 33.8061 63.1381 34.0534C63.1381 34.3007 63.097 34.5306 63.0148 34.743C62.9325 34.9554 62.7897 35.1633 62.5863 35.3667L55.3618 42.591C55.1585 42.7945 54.9486 42.9373 54.7321 43.0196C54.5158 43.1019 54.2839 43.143 54.0366 43.143C53.7893 43.143 53.5595 43.1019 53.3471 43.0196C53.1347 42.9373 52.9268 42.7945 52.7234 42.591ZM26.7695 38.8846V28.6539C26.7695 28.1199 26.9501 27.6723 27.3113 27.311C27.6726 26.9498 28.1202 26.7692 28.6542 26.7692H38.885C39.4189 26.7692 39.8665 26.9498 40.2277 27.311C40.5889 27.6723 40.7695 28.1199 40.7695 28.6539V38.8846C40.7695 39.4186 40.5889 39.8662 40.2277 40.2274C39.8665 40.5886 39.4189 40.7692 38.885 40.7692H28.6542C28.1202 40.7692 27.6726 40.5886 27.3113 40.2274C26.9501 39.8662 26.7695 39.4186 26.7695 38.8846ZM47.2311 59.3462V49.1154C47.2311 48.5814 47.4117 48.1338 47.7729 47.7726C48.1341 47.4114 48.5817 47.2308 49.1157 47.2308H59.3465C59.8805 47.2308 60.3281 47.4114 60.6893 47.7726C61.0505 48.1338 61.2311 48.5814 61.2311 49.1154V59.3462C61.2311 59.8802 61.0505 60.3278 60.6893 60.689C60.3281 61.0502 59.8805 61.2308 59.3465 61.2308H49.1157C48.5817 61.2308 48.1341 61.0502 47.7729 60.689C47.4117 60.3278 47.2311 59.8802 47.2311 59.3462ZM26.7695 59.3462V49.1154C26.7695 48.5814 26.9501 48.1338 27.3113 47.7726C27.6726 47.4114 28.1202 47.2308 28.6542 47.2308H38.885C39.4189 47.2308 39.8665 47.4114 40.2277 47.7726C40.5889 48.1338 40.7695 48.5814 40.7695 49.1154V59.3462C40.7695 59.8802 40.5889 60.3278 40.2277 60.689C39.8665 61.0502 39.4189 61.2308 38.885 61.2308H28.6542C28.1202 61.2308 27.6726 61.0502 27.3113 60.689C26.9501 60.3278 26.7695 59.8802 26.7695 59.3462ZM29.1029 38.4359H38.4362V29.1026H29.1029V38.4359ZM54.101 40.6975L60.6926 34.1058L54.101 27.5141L47.5093 34.1058L54.101 40.6975ZM49.5644 58.8975H58.8978V49.5641H49.5644V58.8975ZM29.1029 58.8975H38.4362V49.5641H29.1029V58.8975Z"
              fill="#1D2023"
            />
          </svg>
          <p className="hidden lg:flex">Add widget</p>
        </NavLink>
        <div className="flex flex-col gap-[24px] lg:gap-[50px] xl:w-[714px] lg:pt-[50px]">
          <div className="flex items-center gap-[8px] text-[#323336] text-[18px] leading-[140%] tracking-[0.18px]">
            <svg
              onClick={toggleWidget}
              className="cursor-pointer"
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
            <p>Add new changelog</p>
          </div>
          {widgetVisible && (
            <div className={`absolute top-[90px] md:top-[80px] lg:top-[200px] right-0 transition-transform ${
              widgetPosition === "open"
                ? "translate-x-0"
                : widgetPosition === "closing"
                ? "translate-x-full"
                : "translate-x-full hidden"
            }`}>
              <Widget />
            </div>
          )}
          <div className="flex flex-col gap-[24px] p-[16px] lg:p-[24px] rounded-[8px] border border-[#92B7F9] lg:w-[714px] mb-[20px] xl:mb-[100px]">
            <p className="text-[#595A5E] text-[14.22px] md:text-[16px] not-italic font-[400] leading-[140%] tracking-[0.142px] md:tracking-[0.16px]">
              July 14, 2023
            </p>
            <div className="flex items-center gap-1">
              <h1 className="text-[#1D2023] text-[25.63px] md:text-[32.44px] not-italic font-[700] leading-[140%] md:leading-[110%] tracking-[0.256px] md:tracking-[0.324px]">
                Placerat orci
              </h1>
              <p className="text-[#595A5E] text-[18px] not-italic font-[400] leading-[140%] tracking-[0.18px]">
                (Draft)
              </p>
            </div>
            <div className="box text-[#fff] text-[14.22px] not-italic font-[400] leading-[140%] tracking-[0.142px] bg-[#1463F3] w-[40px] flex justify-center">
              <p>New</p>
            </div>
            <div className="text-[#323336] lg:w-[665px] flex flex-col gap-[24px]">
              <p>
                Lorem ipsum dolor sit amet consectetur. Consectetur sed at duis
                nisl sit imperdiet eu dui. Placerat orci lacus condimentum vitae
                eget porta commodo eu. Lorem ipsum dolor sit amet consectetur.
                Consectetur sed at duis nisl sit imperdiet eu dui.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Consectetur sed at duis
                nisl sit imperdiet eu dui. Placerat orci lacus condimentum vitae
                eget porta commodo eu.
              </p>
            </div>
            <div className="text-[#D3D7DE]">
              <hr />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-1 text-[#808186]">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="6.10352e-05"
                    width="40"
                    height="40"
                    rx="20"
                    fill="#F1F6FF"
                  />
                  <path
                    d="M20 19.3847C19.175 19.3847 18.4688 19.0909 17.8812 18.5034C17.2938 17.9159 17 17.2097 17 16.3847C17 15.5597 17.2938 14.8534 17.8812 14.2659C18.4688 13.6784 19.175 13.3846 20 13.3846C20.825 13.3846 21.5312 13.6784 22.1188 14.2659C22.7063 14.8534 23 15.5597 23 16.3847C23 17.2097 22.7063 17.9159 22.1188 18.5034C21.5312 19.0909 20.825 19.3847 20 19.3847ZM25.9615 26.6154H14.0384C13.7449 26.6154 13.4984 26.5158 13.299 26.3164C13.0997 26.117 13 25.8706 13 25.577V24.9693C13 24.5565 13.1202 24.1702 13.3606 23.8106C13.601 23.451 13.9244 23.1718 14.3308 22.9731C15.2744 22.5206 16.2186 22.1811 17.1634 21.9548C18.1083 21.7286 19.0539 21.6154 20 21.6154C20.9462 21.6154 21.8917 21.7286 22.8365 21.9548C23.7814 22.1811 24.7256 22.5206 25.6692 22.9731C26.0756 23.1718 26.399 23.451 26.6394 23.8106C26.8798 24.1702 27 24.5565 27 24.9693V25.577C27 25.8706 26.9003 26.117 26.701 26.3164C26.5016 26.5158 26.2551 26.6154 25.9615 26.6154ZM14 25.6154H26V24.9693C26 24.7475 25.9285 24.5392 25.7856 24.3443C25.6426 24.1494 25.4449 23.9847 25.1923 23.85C24.3692 23.4513 23.5206 23.1459 22.6464 22.9337C21.7722 22.7215 20.8901 22.6154 20 22.6154C19.1099 22.6154 18.2278 22.7215 17.3536 22.9337C16.4794 23.1459 15.6308 23.4513 14.8077 23.85C14.5551 23.9847 14.3574 24.1494 14.2144 24.3443C14.0715 24.5392 14 24.7475 14 24.9693V25.6154ZM20 18.3847C20.55 18.3847 21.0208 18.1888 21.4125 17.7972C21.8042 17.4055 22 16.9347 22 16.3847C22 15.8347 21.8042 15.3638 21.4125 14.9722C21.0208 14.5805 20.55 14.3847 20 14.3847C19.45 14.3847 18.9792 14.5805 18.5875 14.9722C18.1958 15.3638 18 15.8347 18 16.3847C18 16.9347 18.1958 17.4055 18.5875 17.7972C18.9792 18.1888 19.45 18.3847 20 18.3847Z"
                    fill="#1D2023"
                  />
                </svg>
                <p>Franko, Lead Dev.</p>
              </div>
              <div
                onClick={toggleWidget}
                className="flex items-center gap-1 text-[#1463F3] cursor-pointer"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.30764 19H6.38072L16.2749 9.10582L15.2019 8.03274L5.30764 17.927V19ZM18.4153 8.38659L15.9153 5.89812L17.1422 4.67119C17.3333 4.48016 17.5701 4.38464 17.8528 4.38464C18.1355 4.38464 18.3724 4.48016 18.5634 4.67119L19.6365 5.74427C19.8275 5.9353 19.9249 6.17024 19.9288 6.44907C19.9326 6.72792 19.8391 6.96286 19.648 7.15389L18.4153 8.38659ZM5.11532 20C4.88327 20 4.69064 19.9234 4.53744 19.7702C4.38423 19.617 4.30762 19.4244 4.30762 19.1924V17.8289C4.30762 17.7212 4.32621 17.6209 4.36339 17.5279C4.40058 17.435 4.46276 17.3449 4.54994 17.2577L15.1961 6.61157L17.6961 9.11159L7.04994 19.7577C6.96276 19.8449 6.87269 19.9071 6.77974 19.9443C6.68679 19.9815 6.58648 20 6.47879 20H5.11532ZM15.7288 8.55967L15.2019 8.03274L16.2749 9.10582L15.7288 8.55967Z"
                    fill="#1463F3"
                  />
                </svg>
                <p>Edit</p>
              </div>
            </div>
          </div>
          <hr className="hidden lg:flex text-[#D3D7DE]" />
        </div>
      </div>
    </>
  );
};