import React from "react";
import { BsSearch } from "react-icons/bs";
import TradeChart from "./(components)/TradeChart";
import TradeGame from "./tradegame/page";
import CommonHeader from "@/components/commonHeader/page";
import UserRightPannel from "@/components/UserLayouts/userRightPannel";
import FeaturedGamesCard from "./(components)/featuredGamesCard";
import PopularGamesCard from "./(components)/popularGamesCard";
import DashboardGamesCard from "./(components)/dashboardGamesCard";

const page = () => {
  return (
    <div className="flex flex-row flex-1 transition-all duration-300 relative w-[100%] max-w-[100%] min-w-[82%]">
      <div className="w-[75%] h-screen overflow-y-scroll bg-[#e8e8e8] px-10">
        <CommonHeader />
        <DashboardGamesCard />
      </div>
      <UserRightPannel />
    </div>
  );
};

export default page;
