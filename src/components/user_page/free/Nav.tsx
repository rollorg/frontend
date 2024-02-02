import React, { FC, useState, useEffect } from "react";
import img from "components/assets/user_asset/visa.png";
import { Widget } from "components/user_page/swipeModal/Widget";
import settingLogo from "components/assets/icons/settings_32.svg";
import accountLogo from "components/assets/icons/account_circle_32.svg";
import account from "components/assets/icons/account_circle_32.svg";
import notifyLogo from "components/assets/icons/Notification_indicator.svg";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export const Nav: FC = () => {
  const [widgetPosition, setWidgetPosition] = useState("closed");
  const [widgetVisible, setWidgetVisible] = useState(false);

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
  return (
    <>
      <nav
        style={{ fontFamily: "Figtree" }}
        className="nav h-[80px] hidden md:px-[40px] xl:px-[88px] bg-[#fff] sticky top-0 md:flex justify-between items-center z-10"
      >
        <div>
          <NavLink to="/free_client_portrait1">
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
        <div
          className="flex items-center gap-2 text-[#000] text-[18px] not-italic font-[400] leading-[140%] tracking-[0.18px] cursor-pointer"
          onClick={toggleWidget}
        >
          <p>Our changelogs</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="11"
            viewBox="0 0 10 11"
            fill="none"
          >
            <circle cx="5" cy="5.5" r="5" fill="#FC1B13" />
          </svg>
        </div>
        <div>
          <NavLink to="/free_client_patron1">
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
          <div onClick={toggleWidget}>
            <img src={notifyLogo} alt={notifyLogo} />
          </div>
          <NavLink to="/free_client_portrait1">
            <img src={settingLogo} alt={settingLogo} />
          </NavLink>
          <NavLink to="/free_client_patron1">
            <img src={accountLogo} alt={accountLogo} />
          </NavLink>
        </div>
      </nav>

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
          <Widget />
        </div>
      )}
    </>
  );
};
