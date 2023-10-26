import React, { FC, useState } from "react";
import { Changelog } from "./Changelog";
import Nav from "./Nav";

const Widget: FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [isChangelogOpen, setIsChangelogOpen] = useState(true);

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const closeChangelog = () => {
    setIsChangelogOpen(false);
  };

  return (
    <>
      <div className="input w-[735px] bg-[#FFF]">
        {isNavOpen && <Nav closeNav={closeNav} closeChangelog={closeChangelog} />}
        {isChangelogOpen && <Changelog />}
      </div>
    </>
  );
};

export default Widget;
