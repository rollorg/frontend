import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import settingIcon from "components/assets/icons/settings_32.svg";
import accountIcon from "components/assets/icons/account_circle_32.svg";
import documentIcon from "components/assets/icons/Document.svg";
import widgetIcon from "components/assets/icons/Widgets.svg";
import categoryIcon from "components/assets/icons/Category.svg";
import teamIcon from "components/assets/icons/Team.svg";
import planIcon from "components/assets/icons/Plan.svg";
import gdprIcon from "components/assets/icons/gdpr.svg";
import creditIcon from "components/assets/icons/Credit_card.svg";

export const ProSideBar: FC = () => {
  return (
    <>
      <div style={{ fontFamily: "Figtree" }}>
        <div className="lg:w-[206px] w-[50px] pb-[13px] text-[#1D2023] text-[25.63px] md:text-[32.44px] not-italic font-[700] leading-[140%] md:leading-[110%] tracking-[0.256px] md:tracking-[0.324px]">
          <h1>Settings</h1>
        </div>
        <div className="bg-[#fff] flex flex-col items-center lg:items-start text-[#1D2023] text-[18px] not-italic font-[400] leading-[140%] tracking-[0.18px]">
          <NavLink to="/pro_client_portrait">
            <div className="lg:pt-[12.5px] lg:pr-[48px] lg:pl-[11.5px] lg:pb-[14px] p-[14px] flex items-center gap-[10px]">
              <img src={settingIcon} alt={settingIcon} />
              <p className="hidden lg:block">Profile</p>
            </div>
          </NavLink>
          <NavLink to="/pro_client_patron">
            <div className="lg:pt-[12.5px] lg:pr-[48px] lg:pl-[11.5px] lg:pb-[14px] p-[14px] flex items-center gap-[10px] rounded-[4px]">
              <img src={accountIcon} alt={accountIcon} />
              <p className="hidden lg:block">Account</p>
            </div>
          </NavLink>
          <div className="input lg:pt-[12.5px] lg:pr-[48px] lg:pl-[11.5px] lg:pb-[14px] p-[14px] flex items-center gap-[10px] rounded-[4px] border-[0.5px] border-[#92B7F9] bg-[#FFF]">
            <img src={documentIcon} alt={documentIcon} />
            <p className="hidden lg:block">Public page</p>
          </div>
          <NavLink to="/pro_client_widegt">
            <div className="lg:pt-[12.5px] lg:pr-[48px] lg:pl-[11.5px] lg:pb-[14px] p-[14px] flex items-center gap-[10px] rounded-[4px]">
              <img src={widgetIcon} alt={widgetIcon} />
              <p className="hidden lg:block">Widget</p>
            </div>
          </NavLink>
          <NavLink to="/pro_client_section">
            <div className="lg:pt-[12.5px] lg:pr-[48px] lg:pl-[11.5px] lg:pb-[14px] p-[14px] flex items-center gap-[10px] rounded-[4px]">
              <img src={categoryIcon} alt={categoryIcon} />
              <p className="hidden lg:block">Categories</p>
            </div>
          </NavLink>
          <NavLink to="/pro_client_crew">
            <div className="lg:pt-[12.5px] lg:pr-[48px] lg:pl-[11.5px] lg:pb-[14px] p-[14px] flex items-center gap-[10px] rounded-[4px]">
              <img src={teamIcon} alt={teamIcon} />
              <p className="hidden lg:block">Team</p>
            </div>
          </NavLink>
          <NavLink to="/pro_client_scheme">
            <div className="lg:pt-[12.5px] lg:pr-[48px] lg:pl-[11.5px] lg:pb-[14px] p-[14px] flex items-center gap-[10px] rounded-[4px]">
              <img src={planIcon} alt={planIcon} />
              <p className="hidden lg:block">Plans</p>
            </div>
          </NavLink>
          <NavLink to="/pro_client_gdpr">
            <div className="lg:pt-[12.5px] lg:pr-[48px] lg:pl-[11.5px] lg:pb-[14px] p-[14px] flex items-center gap-[10px] rounded-[4px]">
              <img src={gdprIcon} alt={gdprIcon} />
              <p className="hidden lg:block">GDPR</p>
            </div>
          </NavLink>
          <NavLink to="/pro_client_cost">
            <div className="lg:pt-[12.5px] lg:pr-[48px] lg:pl-[11.5px] lg:pb-[14px] p-[14px] flex items-center gap-[10px] rounded-[4px]">
              <img src={creditIcon} alt={creditIcon} />
              <p className="hidden lg:block">Billing</p>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};
