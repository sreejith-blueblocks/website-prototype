import React, { useContext } from "react";
import { BsSearch } from "react-icons/bs";

import GenerateSlotSection from "@/components/AdminLayouts/BetGameComponents/generateSlotSection";
import Link from "next/link";
import HeaderComponent from "./(components)/header";

const page = () => {
  return (
    <div className="flex-1 max-w-full h-screen overflow-y-scroll bg-[#E8E8E8] px-10">
      <div className="flex items-center justify-between my-[20px]">
        <div className="max-w-[300px] w-full">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-1 px-4 border border-gray-300 rounded-lg focus:outline-none  focus:border-transparent"
            />
            <div className="absolute z-[1000] inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
              <BsSearch
                className="text-[15px] text-gray-400 cursor-pointer hover:scale-110"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
        <HeaderComponent />
      </div>
      <GenerateSlotSection />
      <div className="max-w-full bg-slate-400"></div>
    </div>
  );
};

export default page;
