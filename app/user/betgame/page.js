import BetTables from "@/components/UserLayouts/betTables";
import GetCurrentSlots from "@/components/UserLayouts/getCurrentSlots";
import TestTimeSorting from "@/components/UserLayouts/testTimeSorting";
import CommonHeader from "@/components/commonHeader/page";
import React from "react";
import { BsSearch } from "react-icons/bs";

const page = () => {
  return (
    <div className="flex flex-row flex-1 transition-all duration-300 relative">
      <div className="w-[100%] h-screen overflow-y-scroll bg-[#e8e8e8] px-10">
        <CommonHeader />
        <GetCurrentSlots />

        <BetTables />
      </div>
    </div>
  );
};

export default page;
