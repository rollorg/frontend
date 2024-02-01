import React, { FC } from "react";
import footerLogo from "components/assets/icons/Footer Logo.svg";
import strockIcon from "components/assets/icons/strock.svg";

export const Footer: FC = () => {
  return (
    <>
      <img
        src={strockIcon}
        alt={strockIcon}
        className="text-[#D3D7DE] lg:w-[714px] w-[100%] mt-[80px] m-auto px-[18px] lg:px-0"
      />
      <footer
        style={{ fontFamily: "Figtree" }}
        className="xl:px-[88px] md:px-[40px] px-[15px] md:text-[#595A5E] text-[#808186] text-[16px] md:text-[18px] md:not-italic font-[400] leading-[140%] tracking-[0.16px] md:tracking-[0.18px] flex justify-center gap-3 h-[80px] pt-[20px] lg:pt-[20px]"
      >
        <p>Powered by</p>
        <div>
          <img src={footerLogo} alt={footerLogo} />
        </div>
      </footer>
    </>
  );
};
