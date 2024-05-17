import React from "react";
import { BsSearch } from "react-icons/bs";

import GenerateSlotSection from "@/components/AdminLayouts/BetGameComponents/generateSlotSection";
import Link from "next/link";

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
        <div className="flex flex-row items-center justify-between gap-14">
          <p className="text-[#A2A2A2]">14 Nov 2023, 02:54 PM</p>
          <div className="flex flex-row items-center justify-center gap-x-3">
            <div>
              <Link href={"user"} className="text-[15px] font-bold">
                Admin
              </Link>
              <p className="text-[10px] font-medium text-[#C2C2C2]">
                View Profile
              </p>
            </div>
            <div className="w-[30px] h-[30px] rounded-full bg-blue-400"></div>
          </div>
        </div>
      </div>
      <GenerateSlotSection />
      <div className="max-w-full bg-slate-400"></div>
    </div>
  );
};

export default page;
