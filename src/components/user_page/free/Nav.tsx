import React, { FC, useState, useEffect } from "react";
import img from "components/assets/user_asset/visa.png";
import settingLogo from "components/assets/icons/settings_32.svg";
import accountLogo from "components/assets/icons/account_circle_32.svg";
import account from "components/assets/icons/account_circle_32.svg";
import notifyLogo from "components/assets/icons/Notification_indicator.svg";
import scale from "components/assets/widget_asset/image 2.png";
import chevronIcon from "components/assets/icons/Left arrow.svg";
import dotIcon from "components/assets/icons/dot.svg";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export const Nav: FC = () => {
  const [widgetPosition, setWidgetPosition] = useState("closed");
  const [widgetVisible, setWidgetVisible] = useState(false);
  const [list, setList] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

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

  const toggleList = () => {
    setList((prev) => !prev);
  };

  return (
    <>
      <nav
        style={{ fontFamily: "Figtree" }}
        className="nav h-[80px] hidden md:px-[40px] xl:px-[88px] bg-[#fff] sticky top-0 md:flex justify-between items-center z-10"
      >
        <div>
          <NavLink to="/free_client_portrait1-e925d9">
            <img src={settingLogo} alt={settingLogo} />
          </NavLink>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <img src={img} alt="img_logo" />
          </div>
          <div className="flex flex-col">
            <p className="text-[18px] not-italic font-[500] leading-[140%] tracking-[0.18px] text-[#1D2023]">
              Visa Inc. changelog
            </p>
            <p className="text-[#595A5E] text-[16px] not-italic font-[400] leading-[140%] tracking-[0.16px]">
              www.visa.com
            </p>
          </div>
        </div>
        <button
          className="flex items-center gap-2 text-[#000] text-[18px] not-italic font-[400] leading-[140%] tracking-[0.18px]"
          onClick={toggleWidget}
        >
          Our changelogs
          <img src={dotIcon} alt={dotIcon} />
        </button>
        <div>
          <NavLink to="/free_client_patron1-e925d3">
            <img src={account} alt={account} />
          </NavLink>
        </div>
      </nav>

      <nav
        style={{ fontFamily: "Figtree" }}
        className="md:hidden flex justify-between px-[15px] sticky top-0 py-[20px] bg-[#FFF] border-b border-b-[#DADEE4] z-10"
      >
        <div className="flex items-center gap-2">
          <img src={img} alt="img_logo" />
          <div>
            <p className="text-[#1D2023] text-[16px] not-italic font-[500] leading-[140%] tracking-[0.16px]">
              Visa Inc. change...
            </p>
            <p className="text-[#595A5E] text-[14.22px] not-italic font-[400] leading-[140%] tracking-[0.142px]">
              www.visa.com
            </p>
          </div>
        </div>
        <div className="flex items-center gap-[16px]">
          <button onClick={toggleWidget}>
            <img src={notifyLogo} alt={notifyLogo} />
          </button>
          <NavLink to="/free_client_portrait1-e925d9">
            <img src={settingLogo} alt={settingLogo} />
          </NavLink>
          <NavLink to="/free_client_patron1-e925d3">
            <img src={accountLogo} alt={accountLogo} />
          </NavLink>
        </div>
      </nav>

      {/* <Widget changelogs /> */}
      {widgetVisible && (
        <div
          className={`transition-transform fixed lg:right-[40px] xl:right-[80px] top-[90px] lg:top-[80px] z-10 ${
            widgetPosition === "open"
              ? "translate-x-0"
              : widgetPosition === "closing"
              ? "translate-x-full"
              : "translate-x-full hidden"
          }`}
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <>
            <div
              style={{ fontFamily: "Figtree" }}
              className="input lg:w-[435px] rounded-[8px] bg-[#fff] pt-[24px] pb-[16px] px-[16px] flex flex-col gap-[10px]"
            >
              <div className="flex justify-center text-[18px] lg:text-[20.25px] not-italic font-[700] leading-[140%] tracking-[0.18px] lg:tracking-[0.203px] text-[#1463F3]">
                <h1>Recent changes</h1>
              </div>
              <hr />
              <div className="flex flex-col gap-[10px]">
                <div className="flex gap-[10px] items-center text-[#FFFFFF] text-[11.24px] lg:text-[12.64px] not-italic font-[500] leading-[100%] tracking-[0.126px]">
                  <div className="box bg-[#4BB543] py-[4px] px-[8px]">
                    <p>Fix</p>
                  </div>
                  <div className="update bg-[#FC1B13] py-[4px] px-[8px]">
                    <p>Update</p>
                  </div>
                  <div className="text-[#1D2023] text-[16px] lg:text-[18px] not-italic font-[500] leading-[140%] tracking-[0.16px] lg:tracking-[0.18px]">
                    <p>Lorem ipsum dolor</p>
                  </div>
                </div>
                <button
                  className="text-[#595A5E] text-[16px] not-italic font-[400] leading-[140%] tracking-[0.16px] text-start"
                  onClick={toggleList}
                >
                  Aliquam hac magna eu tincidunt. Interdum condimentum dui quis
                  duis aliquet nunc diam. At neque id tellus eu sed leo.
                </button>
                <div className="flex gap-[10px] items-center text-[#FFFFFF] text-[11.24px] lg:text-[12.64px] not-italic font-[500] leading-[100%] tracking-[0.126px]">
                  <div className="box bg-[#4BB543] py-[4px] px-[8px]">
                    <p>Fix</p>
                  </div>
                  <div className="text-[#1D2023] text-[16px] lg:text-[18px] not-italic font-[500] leading-[140%] tracking-[0.16px] lg:tracking-[0.18px]">
                    <p>Lorem ipsum dolor</p>
                  </div>
                </div>
                <button
                  className="text-[#595A5E] text-[16px] not-italic font-[400] leading-[140%] tracking-[0.16px] text-start"
                  onClick={toggleList}
                >
                  Aliquam hac magna eu tincidunt. Interdum condimentum dui quis
                  duis aliquet nunc diam. At neque id tellus eu sed leo.
                </button>
                <div>
                  <div className="flex gap-[10px] items-center text-[#FFFFFF] text-[11.24px] lg:text-[12.64px] not-italic font-[500] leading-[100%] tracking-[0.126px]">
                    <div className="box bg-[#FA8E02] py-[4px] px-[8px]">
                      <p>New</p>
                    </div>
                    <div className="text-[#1D2023] text-[16px] lg:text-[18px] not-italic font-[500] leading-[140%] tracking-[0.16px] lg:tracking-[0.18px]">
                      <p>Lorem ipsum dolor</p>
                    </div>
                  </div>
                  <div className="text-[#595A5E] text-[16px] not-italic font-[400] leading-[140%] tracking-[0.16px]">
                    <p>
                      Aliquam hac magna eu tincidunt. Interdum condimentum dui
                      quis duis aliquet nunc diam. At neque id tellus eu sed
                      leo.
                    </p>
                  </div>
                </div>
              </div>
              <hr />
              <div className="flex justify-center text-center text-[#84A4FC] text-[14.22px] not-italic font-[400] leading-[140%] tracking-[0.142px]">
                <p>
                  <span className="underline">Rollog changelog</span> powered by
                  Rollog
                </p>
              </div>
            </div>

            {/* <WidgetList changelogs /> */}
            {list && (
              <div
                data-aos="fade-left"
                data-aos-duration="700"
                className="absolute top-0 right-0 flex"
              >
                <div
                  style={{ fontFamily: "Figtree" }}
                  className="input lg:w-[435px] round-[8px] bg-[#fff] px-[16px] pt-[20px] pb-[24px] flex flex-col gap-[10px]"
                >
                  <div className="flex gap-[50px] lg:gap-[100px] items-center">
                    <button onClick={toggleWidget}>
                      <img src={chevronIcon} alt={chevronIcon} />
                    </button>
                    <div className="text-[#1463F3] text-[18px] not-italic font-[700] leading-[140%] tracking-[0.18px]">
                      Lorem ipsum dolor
                    </div>
                  </div>
                  <hr />
                  <div className="flex flex-col gap-[10px]">
                    <div className="flex gap-[10px] items-center text-[#FFFFFF] text-[12.64px] not-italic font-[500] leading-[100%] tracking-[0.126px]">
                      <div className="box bg-[#4BB543] py-[4px] px-[8px]">
                        <p>Fix</p>
                      </div>
                      <div className="update bg-[#FC1B13] py-[4px] px-[8px]">
                        <p>Update</p>
                      </div>
                    </div>
                    <div className="text-[#323336] text-[16px] not-italic font-[400] leading-[150%] tracking-[0.16px]">
                      <p>
                        Aliquam hac magna eu tincidunt. Interdum condimentum dui
                        quis duis aliquet nunc diam. At neque id tellus eu sed
                        leo. Aliquam hac magna eu tincidunt.
                      </p>
                    </div>
                  </div>
                  <div>
                    <img src={scale} alt="scsle_img" />
                  </div>
                  <div className="text-[#323336] text-[16px] not-italic font-[400] leading-[150%] tracking-[0.16px]">
                    <p>
                      Convallis in nam eros ultrices a vulputate condiment
                      aliquam. Lacus fusce ut pulvinar accumsan id. In risu
                      posuere quis arcu.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </>
        </div>
      )}
    </>
  );
};
