import React from "react";
import { FaBars } from "react-icons/fa6";
import { VscBellDot } from "react-icons/vsc";

const TopNav = ({ toggleSidebar }) => {
  return (
    <header className=" h-[50px] w-full flex flex-row items-center justify-between px-4 absolute z-30">
      <div className="flex flex-row gap-x-3 items-center justify-center">
        <FaBars
          className="text-[25px] cursor-pointer"
          onClick={() => {
            toggleSidebar();
          }}
        />
        <p className="text-[25px]">Dashboard</p>
      </div>
      <div className="flex items-center justify-center gap-4">
        <div className=" p-[6px] rounded-lg border-2 border-[#f0f0f0]">
          <VscBellDot className="text-[20px]" />
        </div>
        <div className="h-[35px] w-[35px] rounded-full bg-slate-400"></div>
        <p className="font-semibold -ml-2">Admin</p>
      </div>
    </header>
  );
};

export default TopNav;
