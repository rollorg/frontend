import React, { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import widget from "components/assets/icons/widget.svg";
import addLogo from "components/assets/icons/Add.svg";
import user from "components/assets/icons/user.svg";
import lefteIcon from "components/assets/icons/left icon.svg";
import strockIcon from "components/assets/icons/strick.svg";
import FormGroup from "@mui/material/FormGroup";
import Switch from "@mui/material/Switch";
import closIcon from "components/assets/icons/Close white.svg";
import chevronIcon from "components/assets/icons/Chevron.svg";
import calenderIcon from "components/assets/icons/Calendar.svg";
import infoIcon from "components/assets/icons/Info1.svg";
import deleteIcon from "components/assets/icons/Delete.svg";
import closeIcon from "components/assets/icons/small.svg";
import addIcon from "components/assets/icons/plus.svg";
import doneIcon from "components/assets/icons/Done.svg";
import MyModal from "../modal/Modal";
import MyEditor from "components/Editor";
import "aos/dist/aos.css";

export const Body: FC = () => {
  const [widgetVisible, setWidgetVisible] = useState(false);
  const [widgetPosition, setWidgetPosition] = useState("closed");
  const email = localStorage.getItem("userEmail");
  const [isClosing, setIsClosing] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userInput, setUserInput] = useState<string>("");
  const [editorContent, setEditorContent] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const handleButtonClick = () => {
    setIsSaved(true);

    setTimeout(() => {
      setIsSaved(false);
      setIsVisible(false);
    }, 3000);
  };

  if (!isVisible) {
    return null;
  }

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
        className="lg:w-[714px] w-[100%] px-[16px] lg:px-0 m-auto md:text-[18px] text-[16px] not-italic font-[400] leading-[150%] md:tracking-[0.18px] tracking-[0.16px]"
      >
        <NavLink
          to="/free_client_widegt1"
          className="flex items-center gap-[8px] xl:w-[24% text-[#323336] lg:pt-[350px absolute lg:left-[90px] lg:top-[600px] left-[20px] top-[790px]"
        >
          <div className="h-[48px] w-[48px] md:w-[70px] md:h-[70px]">
            <img src={widget} alt={widget} />   
          </div>
          <p className="hidden lg:flex">Add widget</p>
        </NavLink>
        <div className="flex flex-col gap-[24px] lg:gap-[50px] xl:w-[714px pt-[30px] lg:pt-[50px]">
          <div className="flex items-center gap-[8px] text-[#323336] text-[18px] leading-[140%] tracking-[0.18px]">
            <div onClick={toggleWidget} className="cursor-pointer">
              <img src={addLogo} alt={addLogo} />
            </div>
            <p>Add new changelog</p>
          </div>
          <div className="flex flex-col gap-[24px] p-[16px] lg:p-[24px] rounded-[8px] border border-[#92B7F9] lg:w-[714px] mb-[20px] xl:mb-[100px]">
            <p className="text-[#595A5E] text-[14.22px] md:text-[16px] not-italic font-[400] leading-[140%] tracking-[0.142px] md:tracking-[0.16px]">
              July 14, 2023
            </p>
            <div className="flex items-center gap-1">
              <h1 className="text-[#1D2023] text-[25.63px] md:text-[32.44px] not-italic font-[700] leading-[140%] md:leading-[110%] tracking-[0.256px] md:tracking-[0.324px]">
                {userInput}
              </h1>
              <p className="text-[#595A5E] text-[18px] not-italic font-[400] leading-[140%] tracking-[0.18px]">
                (Draft)
              </p>
            </div>
            <div className="box text-[#fff] text-[14.22px] not-italic font-[400] leading-[140%] tracking-[0.142px] bg-[#1463F3] w-[40px] flex justify-center">
              <p>New</p>
            </div>
            <div
              className="text-[#323336] lg:w-[665px] flex flex-col h-[300px gap-[10px]"
              dangerouslySetInnerHTML={{ __html: editorContent }}
            ></div>
            <img src={strockIcon} alt={strockIcon} className="w-[100%]" />
            <div className="flex justify-between">
              <div className="flex items-center gap-1 text-[#808186]">
                <img src={user} alt={user} />
                <p>{email}, Lead Dev.</p>
              </div>
              <div
                onClick={toggleWidget}
                className="flex items-center gap-1 text-[#1463F3] cursor-pointer"
              >
                <img src={lefteIcon} alt={lefteIcon} />
                <p>Edit</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Swipe widget */}
      {widgetVisible && (
        <div
          data-aos="fade-left"
          data-aos-duration="700"
          className={`z-10 fixed top-[0] right-[0] transition-transform flex ${
            widgetPosition === "open"
              ? "translate-x-0"
              : widgetPosition === "closing"
              ? "translate-x-full"
              : "translate-x-full hidden"
          }`}
        >
          <div
            className={`nav-container ${
              isClosing ? "closing" : ""
            } flex flex-col bg-[#FFF] input lg:w-[650px] xl:w-[600px] ml-[15px] md:ml-[40px] lg:ml-0 h-[100vh]`}
          >
            <nav
              style={{ fontFamily: "Figtree" }}
              className="lg:h-[30vh] h-[185px] bg-[#0D3F9C] px-[16px] lg:px-[24px] flex flex-col gap-[8px] py-[15px]"
            >
              <div className="flex justify-between items-center">
                <p className="text-[#FFF] text-[14.22px] lg:text-[16px] not-italic font-[400] leading-[140%] tracking-[0.142px] lg:tracking-[0.16px]">
                  EDIT THIS CHANGELOG
                </p>
                <div
                  onClick={toggleWidget}
                  className="cursor-pointer lg:w-[48px] lg:h-[48px] w-[32px] h-[32px]"
                >
                  <img src={closIcon} alt={closIcon} />
                </div>
              </div>
              <div className="edit text-[#fff] text-[20.25px] lg:text-[25.63px] not-italic font-[700] leading-[140%] tracking-[0.203px] lg:tracking-[0.256px] w-[100%]">
                <input
                  type="text"
                  placeholder="Header Title"
                  value={userInput}
                  onChange={handleInputChange}
                />
              </div>
              <img src={strockIcon} alt={strockIcon} />
              <div className="text-[#CCD0D8] text-[14.22px] lg:text-[16px] not-italic font-[400] leading-[normal] tracking-[0.16px] flex gap-[10px] lg:gap-[20px] lg:flex-row flex-col">
                <div className="flex gap-[10px] lg:gap-[20px]">
                  <div className="flex justify-between items-center border-[0.5px] border-[#CCD0D8] px-[8px] py-[2px] rounded-[24px]">
                    <p>Categories</p>
                    <img src={chevronIcon} alt={chevronIcon} />
                  </div>
                  <div className="flex justify-between items-center border-[0.5px] border-[#CCD0D8] px-[8px] py-[2px] rounded-[24px]">
                    <p>Display name, Job title</p>
                    <img src={chevronIcon} alt={chevronIcon} />
                  </div>
                </div>
                <div className="flex gap-[5px] items-center">
                  <img src={calenderIcon} alt={calenderIcon} />
                  <p>Aug 19</p>
                </div>
              </div>
            </nav>

            <div className="px-[15px] text-[#1D2023] text-[12px] lg:text-[16px] not-italic font-[400] leading-[140%]">
              <MyEditor content={editorContent} onChange={setEditorContent} />
            </div>
            <div className="flex flex-col gap-[10px] lg:gap-[20px] px-[15px] pt-[15px]">
              <div className="flex lg:hidden items-center gap-[10px]">
                <p>Published:</p>
                <FormGroup>{<Switch />}</FormGroup>
              </div>
              <div
                style={{ fontFamily: "Figtree" }}
                className="flex items-center justify-between xl:pb-[30px] pb-[15px] lg:pb-[20px]"
              >
                <div className="flex gap-[16px] text-[16px] lg:text-[18px] not-italic font-[500] leading-[100%] tracking-[0.16px] lg:tracking-[0.18px]">
                  <button
                    onClick={showModal}
                    className="flex items-center gap-[5px] lg:gap-[10px] text-[#FC1B13]"
                  >
                    <img src={deleteIcon} alt={deleteIcon} />
                    <p>Delete</p>
                  </button>
                  <button
                    onClick={toggleWidget}
                    className="flex items-center gap-[5px] lg:gap-[10px] text-[#A7A8AE]"
                  >
                    <p>Cancel</p>
                    <img src={closeIcon} alt={closeIcon} />
                  </button>
                  <MyModal isOpen={isModalOpen} handleCancel={handleCancel} />
                </div>
                <div className="flex gap-[16px]">
                  <div className="lg:flex items-center gap-[10px] hidden">
                    <p>Published:</p>
                    <FormGroup>{<Switch />}</FormGroup>
                  </div>
                  <div
                    onClick={handleButtonClick}
                    className="flex justify-center items-center rounded-[4px] bg-[#1463F3] gap-[5px] text-[16px] lg:text-[18px] text-[#fff] not-italic font-[500] leading-[100%] lg:tracking-[0.18px] tracking-[0.16px] py-[8px] px-[16px] relative -ml-[35px] left-[35px]"
                  >
                    <button>Save</button>
                    <img src={addIcon} alt={addIcon} />
                  </div>
                  <div className="contain cursor-pointer flex justify-end relative -top-[35px]">
                    <div className="lg:w-[24px] lg:h-[24px] w-[16px] h-[16px]">
                      <img src={infoIcon} alt={infoIcon} />
                    </div>
                    <div
                      style={{ fontFamily: "Figtree" }}
                      className="tag text-[#323336] w-[178px] lg:w-[258px] h-[71px] lg:h-[70px] hidden absolute right-[20px] text-[11.24px] lg:text-[12.64px] not-italic font-[400] leading-[120%] lg:leading-[140%] tracking-[0.112px] lg:tracking-[0.126px] p-[8px] border-[0.5px] border-[#D3D7DE] bg-[#fff] z-10"
                    >
                      <p className="hidden lg:block">
                        Lorem ipsum dolor sit amet consectetur. Consectetur sed
                        at duis nisl sit imperdiet eu dui. Placerat orci Lorem
                        ipsum dolor ..
                      </p>
                      <p className="lg:hidden block">
                        Lorem ipsum dolor sit amet consectetur. Consectetur sed
                        at duis nisl sit imperdiet eu dui. Placerat orci Lorem
                        ipsum
                      </p>
                    </div>
                  </div>
                  <div
                    className="transition-transform ease-in-out duration-300 absolute top-[810px] lg:top-[720px] left-0 lg:w-[1350px] md:w-[850px] w-[373px] lg:-left-[620px]"
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
                          <div className="w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]">
                            <img src={doneIcon} alt={doneIcon} />
                          </div>
                          Saved Successfully
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
