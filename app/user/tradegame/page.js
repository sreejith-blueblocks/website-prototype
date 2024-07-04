import React from "react";
import TradeChart from "../(components)/TradeChart";
import { BsSearch } from "react-icons/bs";
import UserRightPannel from "@/components/UserLayouts/userRightPannel";
import CommonHeader from "@/components/commonHeader/page";

const TradeGame = () => {
  return (
    <div className="flex flex-row flex-1 transition-all duration-300 relative">
      <div className="w-[75%] h-screen overflow-y-scroll bg-[#e8e8e8] px-10">
        <CommonHeader />

        <TradeChart />
      </div>
      <UserRightPannel />
    </div>
  );
};

export default TradeGame;
