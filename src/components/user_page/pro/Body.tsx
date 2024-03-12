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
import infoIcon from "components/assets/icons/Info1.svg";
import deleteIcon from "components/assets/icons/Delete.svg";
import closeIcon from "components/assets/icons/small.svg";
import addIcon from "components/assets/icons/plus.svg";
import doneIcon from "components/assets/icons/Done.svg";
import MyModal from "../modal/Modal";
import MyEditor from "components/user_page/modal/Editor";
import "aos/dist/aos.css";
import { DatePicker, Space, Button, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import type { Dayjs } from "dayjs";

const WidgetButton: FC<{ onClick: () => void }> = ({ onClick }) => (
  <button onClick={onClick} className="flex items-center gap-[8px]">
    <img src={addLogo} alt={addLogo} />
    Add new changelog
  </button>
);

const UserInfo: FC<{ email: string | null }> = ({ email }) => (
  <div className="flex items-center gap-1 text-[#808186]">
    <img src={user} alt={user} />
    <p>{email ? `${email}, Lead Dev.` : "Unknown User"}</p>
  </div>
);

const SwitchFormGroup: FC = () => (
  <div className="flex items-center gap-[10px]">
    <p>Published:</p>
    <FormGroup>{<Switch />}</FormGroup>
  </div>
);

const SaveButton: FC<{ onClick: () => void }> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="flex justify-center items-center rounded-[4px] bg-[#1463F3] gap-[5px] text-[16px] lg:text-[18px] text-[#fff] not-italic font-[500] leading-[100%] lg:tracking-[0.18px] tracking-[0.16px] py-[8px] px-[16px] relative -ml-[35px] left-[35px]"
  >
    Save
    <img src={addIcon} alt={addIcon} />
  </button>
);

const EditChangelogHeader: FC<{
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ value, onChange }) => (
  <div className="edit text-[#fff] text-[20.25px] lg:text-[25.63px] not-italic font-[700] leading-[140%] tracking-[0.203px] lg:tracking-[0.256px] w-[100%]">
    <input
      type="text"
      placeholder="Header Title"
      value={value}
      onChange={onChange}
    />
  </div>
);

interface MenuItem {
  key: string;
  label: React.ReactNode;
}

const items: MenuItem[] = [
  {
    key: "1",
    label: <>New</>,
  },
  {
    key: "2",
    label: <>Fix</>,
  },
  {
    key: "3",
    label: <>Update</>,
  },
];

const objects: { key: string; label: React.ReactNode }[] = [
  {
    key: "1",
    label: <>Dev Test</>,
  },
  {
    key: "2",
    label: <>Dev Test1</>,
  },
  {
    key: "3",
    label: <>Dev Test2</>,
  },
];

export const ProBody: FC = () => {
  const [widgetVisible, setWidgetVisible] = useState(false);
  const [widgetPosition, setWidgetPosition] = useState("closed");
  const email = localStorage.getItem("userEmail");
  const [isSaved, setIsSaved] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userInput, setUserInput] = useState<string>("");
  const [editorContent, setEditorContent] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const handleButtonClick = () => {
    setIsSaved(true);

    setTimeout(() => {
      setIsSaved(false);
      setWidgetVisible(false);
    }, 3000);
  };

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

  const handleDateChange = (date: Dayjs | null, dateString: string) => {
    console.log(date, dateString);
    setSelectedDate(date);
  };

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item);
  };

  return (
    <>
      <div
        style={{ fontFamily: "Figtree" }}
        className="lg:w-[714px] w-[100%] px-[16px] md:px-[40px] lg:px-0 m-auto md:text-[18px] text-[16px] not-italic font-[400] leading-[150%] md:tracking-[0.18px] tracking-[0.16px]"
      >
        <NavLink
          to="/pro_client_widegt1"
          className="lg:flex hidden items-center gap-[8px] text-[#323336] absolute xl:left-[90px] lg:top-[400px] lg:left-[50px] top-[450px]"
        >
          <div className="h-[48px] w-[48px] md:w-[70px] md:h-[70px]">
            <img src={widget} alt={widget} />
          </div>
          <p className="lg:hidden xl:block">Add widget</p>
        </NavLink>
        <div className="flex flex-col gap-[24px] lg:gap-[50px] pt-[30px] lg:pt-[50px]">
          <div className="text-[#323336] text-[18px] leading-[140%] tracking-[0.18px]">
            <WidgetButton onClick={toggleWidget} />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col gap-[24px] p-[16px] lg:p-[24px] rounded-[8px] border border-[#92B7F9] lg:w-[714px] mb-[20px] xl:mb-[100px]">
              <p className="text-[#595A5E] text-[14.22px] md:text-[16px] not-italic font-[400] leading-[140%] tracking-[0.142px] md:tracking-[0.16px]">
                {selectedDate && selectedDate.format("MMMM D, YYYY HH:mm")}
              </p>
              <div className="flex items-center gap-1">
                <h1 className="text-[#1D2023] text-[25.63px] not-italic font-[700] leading-[140%] md:leading-[110%] tracking-[0.256px] md:tracking-[0.324px]">
                  {userInput}
                </h1>
                {userInput && (
                  <p className="text-[#595A5E] text-[18px] not-italic font-[400] leading-[140%] tracking-[0.18px]">
                    (Draft)
                  </p>
                )}
              </div>
              {selectedItem && (
                <div
                  className={`box text-[#fff] text-[14.22px] not-italic font-[400] leading-[140%] tracking-[0.142px] flex justify-center ${
                    selectedItem.key === "1"
                      ? "bg-[#1463F3] w-[40px]"
                      : selectedItem.key === "2"
                      ? "bg-[#4BB543] w-[40px]"
                      : selectedItem.key === "3"
                      ? "bg-[#FC1B13] w-[60px]"
                      : ""
                  }`}
                >
                  <p>{selectedItem.label}</p>
                </div>
              )}
              <div
                className="text-[#323336] lg:w-[665px] flex flex-col h-[300px gap-[10px]"
                dangerouslySetInnerHTML={{ __html: editorContent }}
              ></div>
              <img src={strockIcon} alt={strockIcon} className="w-[100%]" />
              <div className="flex justify-between">
                <UserInfo email={email} />
                <button
                  onClick={toggleWidget}
                  className="flex items-center gap-1 text-[#1463F3]"
                >
                  <img src={lefteIcon} alt={lefteIcon} />
                  Edit
                </button>
              </div>
            </div>
          </div>
          <div className="h-[48px] w-[48px] lg:hidden block">
            <NavLink
              to="/pro_client_widegt1"
              className="items-center text-[#323336]"
            >
              <img src={widget} alt={widget} />
            </NavLink>
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
            className={`nav-container flex flex-col bg-[#FFF] input w-[370px] md:w-[550px] lg:w-[650px] xl:w-[600px] ml-[15px] md:ml-[40px] lg:ml-0 h-[100vh]`}
          >
            <nav
              style={{ fontFamily: "Figtree" }}
              className="lg:h-[30vh] h-[185px] bg-[#0D3F9C] px-[16px] lg:px-[24px] flex flex-col gap-[8px] py-[15px]"
            >
              <div className="flex justify-between items-center">
                <p className="text-[#FFF] text-[14.22px] lg:text-[16px] not-italic font-[400] leading-[140%] tracking-[0.142px] lg:tracking-[0.16px]">
                  EDIT THIS CHANGELOG
                </p>
                <button
                  onClick={toggleWidget}
                  className="cursor-pointer lg:w-[48px] lg:h-[48px] w-[32px] h-[32px]"
                >
                  <img src={closIcon} alt={closIcon} />
                </button>
              </div>
              <EditChangelogHeader
                value={userInput}
                onChange={handleInputChange}
              />
              <img src={strockIcon} alt={strockIcon} />
              <Space className="dropdrown flex flex-wrap">
                <Dropdown
                  menu={{
                    items: items.map((item) => ({
                      ...item,
                      onClick: () => handleItemClick(item),
                    })),
                  }}
                >
                  <Button>
                    <Space>
                      Categories
                      <DownOutlined />
                    </Space>
                  </Button>
                </Dropdown>
                <Dropdown menu={{ items: objects }}>
                  <Button>
                    <Space>
                      Display name, Job title
                      <DownOutlined />
                    </Space>
                  </Button>
                </Dropdown>
                <DatePicker
                  onChange={handleDateChange}
                  placeholder="Select Date"
                />
              </Space>
            </nav>

            <div className="px-[15px] text-[#1D2023] text-[12px] lg:text-[16px] not-italic font-[400] leading-[140%]">
              <MyEditor content={editorContent} onChange={setEditorContent} />
            </div>
            <div className="flex flex-col px-[15px] pt-[15px]">
              <SwitchFormGroup />
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
                    Delete
                  </button>
                  <button
                    onClick={toggleWidget}
                    className="flex items-center gap-[5px] lg:gap-[10px] text-[#A7A8AE]"
                  >
                    Cancel
                    <img src={closeIcon} alt={closeIcon} />
                  </button>
                  <MyModal isOpen={isModalOpen} handleCancel={handleCancel} />
                </div>
                <div className="flex gap-[16px]">
                  <SaveButton onClick={handleButtonClick} />
                  <div className="contain cursor-pointer flex justify-end relative -top-[70px]">
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
