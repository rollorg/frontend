import React, { FC, useState } from "react";
import ChatBot from "./Body";

const Widget: FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <>
      {isNavOpen && <ChatBot closeNav={closeNav} />}
    </>
  );
};

export default Widget;
