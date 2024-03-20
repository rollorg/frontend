import React, { FC, useEffect, useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import settingIcon from "components/assets/icons/settings_32.svg";
import accountIcon from "components/assets/icons/account_circle_32.svg";
import documentIcon from "components/assets/icons/Document.svg";
import widgetIcon from "components/assets/icons/Widgets.svg";
import categoryIcon from "components/assets/icons/Category.svg";
import teamIcon from "components/assets/icons/Team.svg";
import planIcon from "components/assets/icons/Plan.svg";
import gdprIcon from "components/assets/icons/gdpr.svg";
import creditIcon from "components/assets/icons/Credit_card.svg";

interface NavItemProps {
  to: string | string[];
  icon: string;
  label: string;
}

const NavItem: FC<NavItemProps> = ({ to, icon, label }) => {
  const { pathname } = useLocation();
  const isActive = Array.isArray(to) ? to.includes(pathname) : pathname === to;

  return (
    <>
      {isActive ? (
        <div className="input lg:pt-[12.5px] lg:pr-[48px] lg:pl-[11.5px] lg:pb-[14px] p-[14px] flex items-center gap-[10px] rounded-[4px] border-[0.5px] border-[#92B7F9] bg-[#FFF]">
          <img src={icon} alt={icon} />
          <p className="hidden lg:block">{label}</p>
        </div>
      ) : (
        <NavLink to={Array.isArray(to) ? to[0] : to}>
          <div className="lg:pt-[12.5px] lg:pr-[48px] lg:pl-[11.5px] lg:pb-[14px] p-[14px] flex items-center gap-[10px]">
            <img src={icon} alt={icon} />
            <p className="hidden lg:block">{label}</p>
          </div>
        </NavLink>
      )}
    </>
  );
};

const SideBar: FC<{ type: "free" | "pro" }> = ({ type }) => {
 const sidebarItems = useMemo(() => [
    { to: [`/${type}_client_portrait-e925d9`, `/${type}_client_portrait1-e925d9`], icon: settingIcon, label: "Profile" },
    { to: [`/${type}_client_patron-e925d3`, `/${type}_client_patron1-e925d3`], icon: accountIcon, label: "Account" },
    { to: `/${type}_client_general-e925d5`, icon: documentIcon, label: "Public page" },
    { to: [`/${type}_client_widegt-e925d4`, `/${type}_client_widegt1-e925d4`], icon: widgetIcon, label: "Widget" },
    { to: `/${type}_client_section-e925d7`, icon: categoryIcon, label: "Categories" },
    { to: `/${type}_client_crew-e925d6`, icon: teamIcon, label: "Team" },
    { to: `/${type}_client_scheme-e925d1`, icon: planIcon, label: "Plans" },
    { to: `/${type}_client_gdpr-e925d8`, icon: gdprIcon, label: "GDPR" },
    { to: `/${type}_client_cost-e925d0`, icon: creditIcon, label: "Billing" },
  ], [type]);

  useEffect(() => {
    const selectedTab = sidebarItems.find((item) =>
      Array.isArray(item.to) ? item.to.includes(window.location.pathname) : item.to === window.location.pathname
    );

    if (selectedTab) {
      document.title = `Rollog | ${selectedTab.label}`;
    }
  }, [type, sidebarItems]);

  return (
    <>
      <div style={{ fontFamily: "Figtree" }}>
        <div className="lg:w-[206px] w-[50px] pb-[13px] text-[#1D2023] text-[25.63px] md:text-[32.44px] not-italic font-[700] leading-[140%] md:leading-[110%] tracking-[0.256px] md:tracking-[0.324px]">
          <h1>Settings</h1>
        </div>
        <div className="bg-[#fff] flex flex-col items-center lg:items-start text-[#1D2023] text-[18px] not-italic font-[400] leading-[140%] tracking-[0.18px]">
          {sidebarItems.map((item, index) => (
            <NavItem key={index} to={item.to} icon={item.icon} label={item.label} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;
