import React from "react";
import Statistics from "./(components)/Statistics";
import ActiveBiddingStatus from "./(components)/ActiveBiddingStatus";
import PervBiddingStatus from "./(components)/PervBiddingStatus";
import { BsSearch } from "react-icons/bs";
import FeaturedGamesCard from "./(components)/featuredGamesCard";
import PopularGamesCard from "./(components)/popularGamesCard";
import RightPannel from "@/components/AdminLayouts/RightPannel";
import CommonHeader from "@/components/commonHeader/page";

const page = () => {
  return (
    <div className="flex flex-row flex-1 transition-all duration-300 relative">
      <div className="w-[75%] h-screen overflow-y-scroll bg-[#E8E8E8] px-10">
        <CommonHeader />

        <Statistics />
        <FeaturedGamesCard />
        <PopularGamesCard />
        <ActiveBiddingStatus />
        <PervBiddingStatus />
      </div>
      <RightPannel />
    </div>
  );
};

export default page;
