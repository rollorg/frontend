import React, { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import closeIcon from "components/assets/icons/Close.svg";
import addIcon from "components/assets/icons/Add.svg";
import edictIcon from "components/assets/icons/Editblack.svg";
import MyModal from "./ProAddModal";
import UpdateModal from "./UpdateModal";

const ProContent: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fixModalOpen, setFixModalOpen] = useState(false);
  const [improveModalOpen, setImproveModalOpen] = useState(false);
  const [newModalOpen, setNewModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const handleAdd = () => setIsModalOpen(false);

  const updateModal = () => setFixModalOpen(true);
  const handleUpdate = () => setFixModalOpen(false);

  const improveModal = () => setImproveModalOpen(true);
  const handleImprove = () => setImproveModalOpen(false);

  const newModal = () => setNewModalOpen(true);
  const handleNew = () => setNewModalOpen(false);

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
          <NavLink to="/pro_client" className="flex lg:hidden w-[32px] h-[32px]">
            <img src={closeIcon} alt={closeIcon} />
          </NavLink>
        </div>
        <div className="lg:w-[550px]">
          <div className="flex justify-between items-center">
            <div className="text-[20.25px] pt-[20px] lg:pt-0 lg:text-[25.63px] text-[#1463F3] not-italic font-[700] leading-[140%] tracking-[0.203px] lg:tracking-[0.256px]">
              <h1>Category</h1>
            </div>
            <div className="lg:flex items-center gap-[16px] hidden text-[#323336] text-[18px] not-italic font-[400] leading-[140%] tracking-[0.18px]">
              <img
                src={addIcon}
                alt={addIcon}
                onClick={showModal}
                className="cursor-pointer"
              />
              <p>Add a category</p>
              <MyModal setOpen={isModalOpen} handleAdd={handleAdd} />
            </div>
          </div>
          <hr className="bg-[#CCD0D8] mt-[10px]" />
          <div className="flex items-center gap-[16px] lg:hidden text-[#323336] text-[18px] not-italic font-[400] leading-[140%] tracking-[0.18px] pt-[32px]">
            <img
              src={addIcon}
              alt={addIcon}
              onClick={showModal}
              className="cursor-pointer"
            />
            <p>Add a category</p>
          </div>
          <div className="lg:w-[500px] flex flex-col gap-[20px] lg:pt-[20px] text-[#323336] text-[18px] not-italic font-[400] leading-[140%] tracking-[0.18px] pt-[20px]">
            {renderCategory("Fix", fixModalOpen, updateModal, handleUpdate)}
            {renderCategory( "Improvement", improveModalOpen, improveModal, handleImprove)}
            {renderCategory("New", newModalOpen, newModal, handleNew)}
          </div>
        </div>
      </div>
    </>
  );
};

const renderCategory = (
  title: string,
  modalOpen: boolean,
  openModal: () => void,
  closeModal: () => void
) => (
<div
  key={title}
  style={{ borderLeftColor: getBorderColor(title) }}
  className={`lg:w-[500px] h-[56px] lg:h-[64px] px-[16px] flex justify-between items-center rounded-[4px] border-[1px] border-l-[32px] ${getBorderColor(title)}`}
>
  <p>{title}</p>
  <img
    src={edictIcon}
    alt={edictIcon}
    className="cursor-pointer"
    onClick={openModal}
  />
  <UpdateModal setOpen={modalOpen} handleUpdate={closeModal} />
</div>
);

const getBorderColor = (category: string) => {
  switch (category) {
    case "Fix":
      return "border-[#4BB543]";
    case "Improvement":
      return "border-[#FA8E02]";
    case "New":
      return "border-[#1463F3]";
    default:
      return "";
  }
};

export default ProContent;
