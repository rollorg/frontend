import React, { FC, useState } from "react";
import { BasicDatePicker } from "./Date";

const Nav: FC<{ closeNav: () => void; closeChangelog: () => void }> = ({
  closeNav,
  closeChangelog,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Category");
  const [selected, setSelected] = useState("Display name, Job title");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const dropdown = () => {
    setOpen(!open);
  };
  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  const handleSelect = (option: string) => {
    setSelected(option);
    setOpen(false);
  };
  const closeChangelogAndNav = () => {
    closeChangelog();
    closeNav();
  };
  return (
    <>
      <nav
        style={{ fontFamily: "Figtree" }}
        className="h-[184px] bg-[#0D3F9C] px-[24px]"
      >
        <div className="flex justify-between items-center pt-[28px]">
          <p className="text-[#FFF] text-[16px] not-italic font-[400] leading-[140%] tracking-[0.16px]">
            EDIT THIS CHANGELOG
          </p>
          <svg
            onClick={closeChangelogAndNav}
            className="cursor-pointer"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.9999 25.4158L13.5076 35.9081C13.3204 36.0953 13.0909 36.1953 12.8191 36.2081C12.5473 36.2209 12.305 36.1209 12.0922 35.9081C11.8794 35.6953 11.7729 35.4594 11.7729 35.2004C11.7729 34.9414 11.8794 34.7055 12.0922 34.4927L22.5845 24.0004L12.0922 13.5081C11.905 13.3209 11.805 13.0914 11.7922 12.8196C11.7794 12.5478 11.8794 12.3055 12.0922 12.0927C12.305 11.8799 12.5409 11.7734 12.7999 11.7734C13.0589 11.7734 13.2948 11.8799 13.5076 12.0927L23.9999 22.585L34.4922 12.0927C34.6794 11.9055 34.9089 11.8055 35.1807 11.7927C35.4525 11.7799 35.6948 11.8799 35.9076 12.0927C36.1204 12.3055 36.2269 12.5414 36.2269 12.8004C36.2269 13.0594 36.1204 13.2953 35.9076 13.5081L25.4153 24.0004L35.9076 34.4927C36.0948 34.6799 36.1948 34.9093 36.2076 35.1811C36.2204 35.4529 36.1204 35.6953 35.9076 35.9081C35.6948 36.1209 35.4589 36.2273 35.1999 36.2273C34.9409 36.2273 34.705 36.1209 34.4922 35.9081L23.9999 25.4158Z"
              fill="white"
            />
          </svg>
        </div>
        <p className="text-[#fff] text-[25.63px] not-italic font-[700] leading-[140%] tracking-[0.256px]">
          Lorem ipsum dolor sit
        </p>
        <hr />
        <div className="text-[#CCD0D8] pt-[20px] text-[16px] not-italic font-[400] leading-[normal] tracking-[0.16px] flex gap-[20px]">
          <div className="flex justify-between items-center border-[0.5px] border-[#CCD0D8] px-[8px] py-[2px] rounded-[24px]">
            <p>{selectedOption}</p>
            <svg
              onClick={toggleDropdown}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9999 14.379C11.8922 14.379 11.7928 14.3614 11.7018 14.3262C11.6108 14.2909 11.5217 14.2297 11.4345 14.1425L7.04606 9.75404C6.95247 9.66046 6.90247 9.54572 6.89606 9.40982C6.88964 9.27392 6.93964 9.15276 7.04606 9.04634C7.15247 8.93993 7.27042 8.88672 7.3999 8.88672C7.52939 8.88672 7.64734 8.93993 7.75375 9.04634L11.9999 13.2925L16.2461 9.04634C16.3396 8.95276 16.4544 8.90276 16.5903 8.89634C16.7262 8.88993 16.8473 8.93993 16.9538 9.04634C17.0602 9.15276 17.1134 9.27071 17.1134 9.40019C17.1134 9.52968 17.0602 9.64763 16.9538 9.75404L12.5653 14.1425C12.4781 14.2297 12.389 14.2909 12.298 14.3262C12.207 14.3614 12.1076 14.379 11.9999 14.379Z"
                fill="#CCD0D8"
              />
            </svg>
          </div>
          <div className="flex justify-between items-center border-[0.5px] border-[#CCD0D8] px-[8px] py-[2px] rounded-[24px]">
            <p>{selected}</p>
            <svg
              onClick={dropdown}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9999 14.379C11.8922 14.379 11.7928 14.3614 11.7018 14.3262C11.6108 14.2909 11.5217 14.2297 11.4345 14.1425L7.04606 9.75404C6.95247 9.66046 6.90247 9.54572 6.89606 9.40982C6.88964 9.27392 6.93964 9.15276 7.04606 9.04634C7.15247 8.93993 7.27042 8.88672 7.3999 8.88672C7.52939 8.88672 7.64734 8.93993 7.75375 9.04634L11.9999 13.2925L16.2461 9.04634C16.3396 8.95276 16.4544 8.90276 16.5903 8.89634C16.7262 8.88993 16.8473 8.93993 16.9538 9.04634C17.0602 9.15276 17.1134 9.27071 17.1134 9.40019C17.1134 9.52968 17.0602 9.64763 16.9538 9.75404L12.5653 14.1425C12.4781 14.2297 12.389 14.2909 12.298 14.3262C12.207 14.3614 12.1076 14.379 11.9999 14.379Z"
                fill="#CCD0D8"
              />
            </svg>
          </div>
          <BasicDatePicker />
        </div>
        {isOpen && (
          <div className="dropdown absolute bg-[#fff] border-[1px] border-[#B2BBB6] p-[10px]">
            <ul className="flex flex-col gap-[20px]">
              <li
                onClick={() => handleOptionSelect("Lorem ipsum dolor")}
                className="cursor-pointer border-b-[2px] border-b-[#B2BBB6]"
              >
                Lorem ipsum dolor
              </li>
              <li
                onClick={() => handleOptionSelect("Lorem ipsum dolor")}
                className="cursor-pointer border-b-[2px] border-b-[#B2BBB6]"
              >
                Lorem ipsum dolor
              </li>
            </ul>
          </div>
        )}
        {open && (
          <div className="dropdown absolute bg-[#fff] border-[1px] border-[#B2BBB6] left-[150px] p-[10px]">
            <ul className="flex flex-col gap-[20px]">
              <li
                onClick={() => handleSelect("Lorem ipsum dolor")}
                className="cursor-pointer border-b-[2px] border-b-[#B2BBB6]"
              >
                Lorem ipsum dolor
              </li>
              <li
                onClick={() => handleSelect("Lorem ipsum dolor")}
                className="cursor-pointer border-b-[2px] border-b-[#B2BBB6]"
              >
                Lorem ipsum dolor
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;
