import React, { FC } from "react";
import footerLogo from "components/assets/icons/Footer Logo.svg";

export const ProFooter: FC = () => {
  return (
    <>
      <footer
        style={{ fontFamily: "Figtree" }}
        className="xl:px-[88px] md:px-[40px] px-[15px] md:text-[#595A5E] text-[#808186] text-[16px] md:text-[18px] md:not-italic font-[400] leading-[140%] tracking-[0.16px] md:tracking-[0.18px] flex justify-center gap-3 h-[80px] pt-[20px]"
      >
        <p>Powered by</p>
        <div>
          <img src={footerLogo} alt={footerLogo} />
        </div>
      </footer>
    </>
  );
};
