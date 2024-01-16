import React, { FC, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { NavLink } from "react-router-dom";
import closeIcon from "components/assets/icons/Close.svg";
import plusIcon from "components/assets/icons/plus.svg";
import doneIcon from "components/assets/icons/Done.svg";
import downloadIcon from "components/assets/icons/Download.svg";
import strockIcon from "components/assets/icons/Vector 19.svg";

export const ProContent: FC = () => {
  const [isSaved, setIsSaved] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleButtonClick = () => {
    setIsSaved(true);

    setTimeout(() => {
      setIsSaved(false);
    }, 3000);
  };

  const handleDownload = () => {
    setIsDownloading(true);

    setTimeout(() => {
      setIsDownloading(false);
      setIsDownloaded(true);

      setTimeout(() => {
        setIsDownloaded(false);
      }, 3000);
    }, 3000);
  };

  return (
    <>
      <div
        style={{ fontFamily: "Figtree" }}
        className="lg:w-[780px] lg:pb-[98px] pb-[61px] w-[90%]"
      >
        <div className="flex justify-end">
          <NavLink to="/pro_client" className="hidden lg:flex">
            <img src={closeIcon} alt={closeIcon} />
          </NavLink>
          <NavLink
            to="/pro_client"
            className="flex lg:hidden w-[32px] h-[32px]"
          >
            <img src={closeIcon} alt={closeIcon} />
          </NavLink>
        </div>
        <div className="lg:w-[550px]">
          <div className="text-[20.25px] pt-[20px] lg:pt-0 lg:text-[25.63px] text-[#1463F3] not-italic font-[700] leading-[140%] tracking-[0.203px] lg:tracking-[0.256px]">
            <h1>Billing details</h1>
          </div>
          <hr className="bg-[#CCD0D8] mt-[10px]" />
          <div className="flex flex-col lg:gap-[72px] gap-[30px]">
            <div className="pt-[48px] flex flex-col gap-[30px] lg:gap-[50px]">
              <div className="flex flex-col lg:gap-[50px] gap-[30px]">
                <Box
                  className="lg:w-[450px] w-[100%] flex flex-col gap-[10px]"
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { width: "100%" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div className="text-[#A7A8AE] text-[18px] not-italic font-[400] leading-[100%] tracking-[0.18px]">
                    <TextField
                      label="frankie@rollog.io"
                      id="frankie@rollog.io"
                      fullWidth
                    />
                  </div>
                  <div className="text-[#A7A8AE] text-[18px] not-italic font-[400] leading-[100%] tracking-[0.18px]">
                    <TextField
                      placeholder="Billing details"
                      label="Billing address"
                      multiline
                      rows={4}
                      fullWidth
                    />
                  </div>
                </Box>
                <div>
                  <div className="bg-[#1463F3] rounded-[8px] flex justify-center items-center h-[56px] py-[8px] px-[16px] gap-[8px] text-center text-[#fff] text-[16px] lg:text-[18px] not-italic font-[500] leading-[100%] tracking-[0.16px] lg:tracking-[0.18px] lg:w-[450px] w-[100%]">
                    <button onClick={handleButtonClick}>Save</button>
                    <img src={plusIcon} alt={plusIcon} />
                  </div>
                  <div
                    className="transition-transform ease-in-out duration-300 absolute left-0 w-[100%] top-[720px] lg:top-[850px]"
                    style={{
                      transform: isSaved
                        ? "translateX(0)"
                        : "translateX(-100%)",
                    }}
                  >
                    {isSaved && (
                      <div
                        className={`bg-[#4BB543] py-[16px] flex items-center text-white text-lg justify-center`}
                      >
                        <div className="px-4 flex items-center text-[#fff] text-[16px] lg:text-[18px] not-italic font-[500] leading-[140%] tracking-[0.16px] lg:tracking-[0.18px]">
                          <img src={doneIcon} alt={doneIcon} />
                          Saved Successfully
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-[20.25px] lg:text-[25.63px] text-[#1463F3] not-italic font-[700] leading-[140%] tracking-[0.203px] lg:tracking-[0.256px]">
                <h1>Invoices</h1>
              </div>
              <hr className="bg-[#CCD0D8] mt-[10px]" />
              <div className="mt-[32px] text-[16px] lg:text-[18px] not-italic font-[400] leading-[140%] tracking-[0.16px] lg:tracking-[0.18px] text-[#323336] border border-[#1463F3] rounded-[4px] py-[16px] px-[5px] lg:px-[24px] flex flex-col gap-[16px]">
                <div className="flex items-center gap-[10px] lg:gap-[24px]">
                  <p>Rollog_invoice_bill_sept-002</p>
                  <img
                    src={downloadIcon}
                    alt={downloadIcon}
                    onClick={handleDownload}
                    className="cursor-pointer"
                  />
                </div>
                <img src={strockIcon} alt={strockIcon} />
                <div className="flex items-center gap-[10px] lg:gap-[24px]">
                  <p>Rollog_invoice_bill_aug-001</p>
                  <img
                    src={downloadIcon}
                    alt={downloadIcon}
                    onClick={handleDownload}
                    className="cursor-pointer"
                  />
                </div>
                <div
                  className="transition-transform ease-in-out duration-300 absolute left-0 w-[100%] top-[720px] lg:top-[850px]"
                  style={{
                    transform: isDownloading
                      ? "translateX(0)"
                      : "translateX(-100%)",
                  }}
                >
                  {isDownloading && (
                    <div
                      className={`bg-[#FF9F29] py-[16px] flex items-center text-white text-lg justify-center`}
                    >
                      <div className="px-4 flex items-center text-[#fff] text-[16px] lg:text-[18px] not-italic font-[500] leading-[140%] tracking-[0.16px] lg:tracking-[0.18px]">
                        <img src={downloadIcon} alt={downloadIcon} />
                        Downloading...
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className="transition-transform ease-in-out duration-300 absolute left-0 w-[100%] top-[720px] lg:top-[850px]"
                  style={{
                    transform: isDownloaded
                      ? "translateX(0)"
                      : "translateX(-100%)",
                  }}
                >
                  {isDownloaded && (
                    <div
                      className={`bg-[#4BB543] py-[16px] flex items-center text-white text-lg justify-center`}
                    >
                      <div className="px-4 flex items-center text-[#fff] text-[16px] lg:text-[18px] not-italic font-[500] leading-[140%] tracking-[0.16px] lg:tracking-[0.18px]">
                        <img src={doneIcon} alt={doneIcon} />
                        Downloaded successfully!
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
