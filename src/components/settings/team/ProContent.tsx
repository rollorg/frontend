import React, { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import closeIcon from "components/assets/icons/Close.svg";
import xgroupIcon from "components/assets/icons/X group.svg";
import doneIcon from "components/assets/icons/Done1.svg";
import authIcon from "components/assets/icons/Authentication.svg";
import infoIcon from "components/assets/icons/Info1.svg";
import addIcon from "components/assets/icons/Add.svg";
import AddModal from "./modal/AddModal";
import AddTeamModal from "./modal/addTeam/AddModal";
import UpdatelModal from "./modal/addTeam/Update";

export const ProContent: FC = () => {
  const [ModalOpen, setModalOpen] = useState(false);
  const [AddModalOpen, setAddModalOpen] = useState(false);
  const [UpdateModalOpen, setUpdateModalOpen] = useState(false);
  const email = localStorage.getItem("userEmail");

  const Modal = () => {
    setModalOpen(true);
  };

  const handleUpdate = () => {
    setModalOpen(false);
  };

  const addModal = () => {
    setAddModalOpen(true);
  };

  const addModalUpdate = () => {
    setAddModalOpen(false);
  };

  const Update = () => {
    setUpdateModalOpen(true);
  };

  const ModalUpdate = () => {
    setUpdateModalOpen(false);
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
            <h1>Team management </h1>
          </div>
          <hr className="bg-[#CCD0D8] mt-[10px]" />
          <div className="input flex justify-between flex-col lg:flex-row items-center lg:h-[64px] h-[82px] mt-[32px] p-[16px] rounded-[4px] bg-[#fff] text-[16px] lg:text-[18px] not-italic font-[400] leading-[140%] tracking-[0.16px] lg:tracking-[0.18px]">
            <div className="flex items-center gap-[8px]">
              <img src={xgroupIcon} alt={xgroupIcon} />
              <p className="text-[#323336]">{email}</p>
              <p className="lg:flex hidden text-[#A7A8AE]">(Accepted)</p>
              <div className="block lg:hidden">
                <img src={doneIcon} alt={doneIcon} />
              </div>
            </div>
            <div className="text-[#343A3F]">
              <p>Administrator </p>
            </div>
          </div>
        </div>
        <button
          className="pt-[32px] flex items-center gap-[16px]"
          onClick={Modal}
        >
          <img src={addIcon} alt={addIcon} />
          Add team
        </button>
        <AddModal setOpen={ModalOpen} handleUpdate={handleUpdate} />
        <div className="lg:w-[550px] pt-[15px] lg:pt-[32px]">
          <div className="text-[20.25px] flex items-center gap-[8px] pt-[20px] lg:pt-0 lg:text-[25.63px] text-[#1463F3] not-italic font-[700] leading-[140%] tracking-[0.203px] lg:tracking-[0.256px]">
            <h1>Teams</h1>
            <div className="contain cursor-pointer">
              <img src={infoIcon} alt={infoIcon} />
              <div
                style={{ fontFamily: "Figtree" }}
                className="tag text-[#323336] w-[178px] lg:w-[258px] h-[71px] lg:h-[70px] hidden absolute text-[11.24px] lg:text-[12.64px] not-italic font-[400] leading-[120%] lg:leading-[140%] tracking-[0.112px] lg:tracking-[0.126px] p-[8px] border-[0.5px] border-[#D3D7DE] bg-[#fff] z-10"
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
          <hr className="bg-[#CCD0D8] mt-[10px]" />

          <div className="lg:w-[500px] flex flex-col gap-[18px] lg:gap-[20px] pt-[20px] text-[#323336] text-[16px] lg:text-[18px] not-italic font-[400] leading-[140%] tracking-[0.16px] lg:tracking-[0.18px]">
            <div>
              <button
                className="flex gap-[16px] items-center"
                onClick={addModal}
              >
                NedSoft Inc.
                <img src={authIcon} alt={authIcon} />
              </button>
            </div>
            <AddTeamModal
              setOpen={AddModalOpen}
              handleCancel={addModalUpdate}
            />
            <div>
              <button className="flex gap-[16px] items-center" onClick={Update}>
                Xtcomm Inc.
                <img src={authIcon} alt={authIcon} />
              </button>
            </div>
            <UpdatelModal
              setOpen={UpdateModalOpen}
              handleUpdate={ModalUpdate}
            />
          </div>
        </div>
      </div>
    </>
  );
};
