import Image from "next/image";
import React from "react";
import logo from "@/public/icon.png";
import { FiLogOut } from "react-icons/fi";
import { FaHome, FaWallet } from "react-icons/fa";

const layout = ({ children }) => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="relative w-full h-screen flex flex-row gap-1 bg-[#353535]">
        <div className="bg-[rgb(34,34,34)] w-[60px] flex flex-col justify-between items-center py-3">
          <div className="flex flex-col gap-2 items-center justify-center">
            <Image
              alt="Logo"
              src={logo}
              className="w-10 h-auto"
              width={500}
              height={500}
            />
            <div>
              {" "}
              <FaHome className="text-[28px] text-[#747474] font-medium my-6" />
              <FaWallet className="text-[28px] text-[#747474] font-medium my-6" />
            </div>
          </div>
          <div>
            <FiLogOut className="text-[25px] font-medium text-[#747474]" />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-1">
          {" "}
          <div className="bg-[rgb(34,34,34)] h-[60px] rounded-bl-lg p-4 flex flex-row justify-between items-center">
            <p className="font-bold text-white">Dashboard</p>
            <div className="bg-slate-600 h-10 w-10 rounded-full mr-2"></div>
          </div>
          <div className="bg-[rgb(34,34,34)] h-full rounded-tl-lg p-4 overflow-y-scroll">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default layout;
