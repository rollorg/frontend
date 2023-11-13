import React, { FC, useState } from "react";
import { Modal } from "antd";
import logoIcon from "components/assets/icons/Brand Logo.svg";
import closeIcon from "components/assets/icons/Close.svg";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import deleteIcon from "components/assets/icons/right icon.svg";

interface MyModalProps {
  isOpen: boolean;
  handleCancel: () => void;
}

const text = [
  {
    value: "TEXT",
    label: "item 1",
  },
  {
    value: "TEXT2",
    label: "item 2",
  },
  {
    value: "TEXT3",
    label: "item 3",
  },
];

const MyModal: FC<MyModalProps> = ({ isOpen, handleCancel }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleCheckboxChange = (value: string) => {
    setSelectedOptions((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(value)) {
        return prevSelectedOptions.filter((option) => option !== value);
      } else {
        return [...prevSelectedOptions, value];
      }
    });
  };

  return (
    <Modal
      className="modal_"
      title="Basic Modal"
      open={isOpen}
      onCancel={handleCancel}
      centered
      width={600}
    >
      <div
        style={{ fontFamily: "Figtree" }}
        className="flex flex-col gap-[20px]"
      >
        <div className="flex justify-between">
          <img
            src={logoIcon}
            alt={logoIcon}
            className="lg:w-[84.423px] lg:h-[27px] w-[75.042px] h-[24px]"
          />
          <img
            src={closeIcon}
            alt={closeIcon}
            onClick={handleCancel}
            className="h-[32px] w-[32px] lg:h-[48px] lg:w-[48px] cursor-pointer"
          />
        </div>
        <Box
          style={{ fontFamily: "Figtree" }}
          component="form"
          sx={{
            "& .MuiTextField-root": { width: "100%" },
          }}
          noValidate
          autoComplete="off"
          className="flex flex-col gap-[20px] text-[18px] not-italic font-[400] leading-[100%] tracking-[0.18px] text-[#A7A8AE]"
        >
          <div style={{ width: "100%" }}>
            <TextField
              id="outlined-Category-name"
              label="Card number"
              placeholder="1234 1234 1234 1234"
              fullWidth
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-[20px]">
            <div style={{ width: "100%" }}>
              <TextField
                id="outlined-date"
                label="Expiry date"
                placeholder="MM/YY"
                fullWidth
              />
            </div>
            <div style={{ width: "100%" }}>
              <TextField
                id="outlined-CVV"
                label="CVV"
                placeholder="123"
                fullWidth
              />
            </div>
          </div>
          <div style={{ width: "100%" }}>
            <TextField id="outlined-Country" label="Country" fullWidth select>
              {text.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  <Checkbox
                    checked={selectedOptions.includes(option.value)}
                    onChange={() => handleCheckboxChange(option.value)}
                  />
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </Box>
        <div className="text-[#595A5E] text-[12.64px] lg:text-[14.22px] not-italic font-[400] leading-[140%] tracking-[0.126px] lg:tracking-[0.142px]">
          <p>
            By giving <span className=" underline">Rollog Inc.</span> your card
            details, you authorize them to use your card to deduct future
            payments as specified in their{" "}
            <span className="underline">terms.</span>
          </p>
        </div>

        <div className="rounded-[4px] border-[0.5px] border-[#A7A8AE] bg-[#1463F3] text-[#fff] px-[16px] py-[8px] h-[56px] flex justify-center gap-[8px] items-center lg:text-[18px] text-[16px] not-italic font-[500] leading-[100%] tracking-[0.16px] lg:tracking-[0.18px]">
          <button onClick={handleCancel}>Subscribe to a $29/month plan</button>
          <img src={deleteIcon} alt={deleteIcon} />
        </div>
      </div>
    </Modal>
  );
};

export default MyModal;
