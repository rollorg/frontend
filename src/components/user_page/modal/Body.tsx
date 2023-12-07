import React, { FC, useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import Switch from "@mui/material/Switch";
import closIcon from "components/assets/icons/Close white.svg";
import chevronIcon from "components/assets/icons/Chevron.svg";
import calenderIcon from "components/assets/icons/Calendar.svg";
import plusIcon from "components/assets/icons/Add_image.svg";
import orderIcon from "components/assets/icons/Ordered_list.svg";
import bulletIcon from "components/assets/icons/Bulleted_list.svg";
import linkIcon from "components/assets/icons/Link.svg";
import quoteIcon from "components/assets/icons/Quote.svg";
import inLineIcon from "components/assets/icons/Inline_code.svg";
import codeBlockIcon from "components/assets/icons/Code_block.svg";
import infoIcon from "components/assets/icons/Info1.svg";
import deleteIcon from "components/assets/icons/Delete.svg";
import closeIcon from "components/assets/icons/small.svg";
import addIcon from "components/assets/icons/plus.svg";
import doneIcon from "components/assets/icons/Done.svg";
import MyModal from "./Modal";

const ChatBot: FC<{ closeNav: () => void }> = ({ closeNav }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeChangelogAndNav = () => {
    setIsClosing(true);
    setTimeout(() => {
      closeNav();
    }, 700);
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
  return (
    <>
      <div
        className={`nav-container ${
          isClosing ? "closing" : ""
        } flex flex-col bg-[#FFF] input lg:w-[650px] xl:w-[735px] ml-[15px] md:ml-[40px] lg:ml-0`}
      >
        <nav
          style={{ fontFamily: "Figtree" }}
          className="lg:h-[184px] h-[185px] bg-[#0D3F9C] px-[16px] lg:px-[24px] flex flex-col gap-[10px] py-[15px]"
        >
          <div className="flex justify-between items-center">
            <p className="text-[#FFF] text-[14.22px] lg:text-[16px] not-italic font-[400] leading-[140%] tracking-[0.142px] lg:tracking-[0.16px]">
              EDIT THIS CHANGELOG
            </p>
            <div
              onClick={closeChangelogAndNav}
              className="cursor-pointer lg:w-[48px] lg:h-[48px] w-[32px] h-[32px]"
            >
              <img src={closIcon} alt={closIcon} />
            </div>
          </div>
          <p className="text-[#fff] text-[20.25px] lg:text-[25.63px] not-italic font-[700] leading-[140%] tracking-[0.203px] lg:tracking-[0.256px]">
            Lorem ipsum dolor sit
          </p>
          <hr />
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

        <div
          style={{ fontFamily: "Fira Code" }}
          className="px-[15px] text-[#1D2023] text-[12px] lg:text-[16px] not-italic font-[400] leading-[140%] py-[20px] xl:py-[40px] lg:py-[30px] flex flex-col gap-[20px] xl:gap-[30px]"
        >
          <p>
            **[This is your first changelog. Below you can edit or make it
            public]**
          </p>
          <div className="flex flex-col xl:gap-[30px] lg:gap-[20px] gap-[20px]">
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur. Volutpat in non est arcu
              arcu nec euismod. Etiam aliquam enim quisque nunc turpis vulputate
              integer malesuada. In vulputate suscipit sed at sed. Aliquam sit
              tempor lectus faucibus lectus enim pellentesque.{" "}
            </p>
            <p>
              Volutpat nunc dolor cursus sed nisl. Euismod massa est scelerisque
              fermentum malesuada bibendum ultrices vulputate tristique.
              Consectetur iaculis donec nunc amet in et blandit sed vestibulum.
              Senectus eget duis euismod neque. Tellus iaculis sit lectus id sed
              suscipit ac viverra.{" "}
            </p>
            <p className="hidden md:block">
              Et velit orci phasellus ac a amet est ut at. Nulla mauris vel
              fusce massa aliquam enim neque. Arcu fames aliquam mattis
              tristique turpis in vel et arcu. Sit condimentum gravida ultrices
              dignissim enim vitae nunc. Sit pellentesque sed nulla vitae eu non
              lorem.
            </p>
          </div>
        </div>
        <hr />
        <div className="flex flex-col gap-[10px] lg:gap-[20px] px-[15px] pt-[10px] xl:pt-[16px]">
          <div
            style={{ fontFamily: "Libre Baskerville" }}
            className="flex justify-between"
          >
            <div className="flex lg:gap-[32px] gap-[16px] items-center text-[#595A5E] text-[14px] lg:text-[24px] not-italic font-[700] leading-[110%]">
              <p>H</p>
              <p>B</p>
              <p className="italic">I</p>
              <div className="lg:w-[24px] lg:h-[24px] w-[16px] h-[16px]">
                <img src={plusIcon} alt={plusIcon} />
              </div>
            </div>
            <div className="flex lg:gap-[32px] gap-[16px] items-center">
              <div className="lg:w-[24px] lg:h-[24px] w-[16px] h-[16px]">
                <img src={orderIcon} alt={orderIcon} />
              </div>
              <div className="lg:w-[24px] lg:h-[24px] w-[16px] h-[16px]">
                <img src={bulletIcon} alt={bulletIcon} />
              </div>
              <div className="lg:w-[24px] lg:h-[24px] w-[16px] h-[16px]">
                <img src={linkIcon} alt={linkIcon} />
              </div>
            </div>
            <div className="flex lg:gap-[32px] gap-[16px] items-center">
              <div className="lg:w-[24px] lg:h-[24px] w-[16px] h-[16px]">
                <img src={quoteIcon} alt={quoteIcon} />
              </div>
              <div className="lg:w-[24px] lg:h-[24px] w-[16px] h-[16px]">
                <img src={inLineIcon} alt={inLineIcon} />
              </div>
              <div className="lg:w-[24px] lg:h-[24px] w-[16px] h-[16px]">
                <img src={codeBlockIcon} alt={codeBlockIcon} />
              </div>
            </div>
            <div className="contain cursor-pointer">
              <div className="lg:w-[24px] lg:h-[24px] w-[16px] h-[16px]">
                <img src={infoIcon} alt={infoIcon} />
              </div>
              <div
                style={{ fontFamily: "Figtree" }}
                className="tag text-[#323336] w-[178px] lg:w-[258px] h-[71px] lg:h-[70px] hidden absolute right-[20px] text-[11.24px] lg:text-[12.64px] not-italic font-[400] leading-[120%] lg:leading-[140%] tracking-[0.112px] lg:tracking-[0.126px] p-[8px] border-[0.5px] border-[#D3D7DE] bg-[#fff] z-10"
              >
                <p className="hidden lg:block">
                  Lorem ipsum dolor sit amet consectetur. Consectetur sed at
                  duis nisl sit imperdiet eu dui. Placerat orci Lorem ipsum
                  dolor ..
                </p>
                <p className="lg:hidden block">
                  Lorem ipsum dolor sit amet consectetur. Consectetur sed at
                  duis nisl sit imperdiet eu dui. Placerat orci Lorem ipsum
                </p>
              </div>
            </div>
          </div>

          <div className="flex lg:hidden items-center gap-[10px]">
            <p>Published:</p>
            <FormGroup>{<Switch />}</FormGroup>
          </div>
          <div
            style={{ fontFamily: "Figtree" }}
            className="flex items-center justify-between xl:pb-[30px] pb-[15px] lg:pb-[20px]"
          >
            <div className="flex gap-[16px] text-[16px] lg:text-[18px] not-italic font-[500] leading-[100%] tracking-[0.16px] lg:tracking-[0.18px]">
              <button onClick={showModal} className="flex items-center gap-[5px] lg:gap-[10px] text-[#FC1B13]">
                <img src={deleteIcon} alt={deleteIcon} />
                <p>Delete</p>
              </button>
              <button
                onClick={closeChangelogAndNav}
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
                className="flex justify-center items-center rounded-[4px] bg-[#1463F3] gap-[5px] text-[16px] lg:text-[18px] text-[#fff] not-italic font-[500] leading-[100%] lg:tracking-[0.18px] tracking-[0.16px] py-[8px] px-[16px]"
              >
                <button>Save</button>
                <img src={addIcon} alt={addIcon} />
              </div>
              <div
                className="transition-transform ease-in-out duration-300 absolute top-[810px] lg:top-[720px] left-0 lg:w-[1350px] md:w-[850px] w-[373px] lg:-left-[620px]"
                style={{
                  transform: isSaved ? "translateX(0)" : "translateX(-100%)",
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
    </>
  );
};

export default ChatBot;
