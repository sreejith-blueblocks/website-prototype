import React from "react";
import Statistics from "./(components)/Statistics";
import ActiveBiddingStatus from "./(components)/ActiveBiddingStatus";
import PervBiddingStatus from "./(components)/PervBiddingStatus";
import { BsSearch } from "react-icons/bs";
import FeaturedGamesCard from "./(components)/featuredGamesCard";
import PopularGamesCard from "./(components)/popularGamesCard";
import RightPannel from "@/components/AdminLayouts/RightPannel";

const page = () => {

  return (
    <div className="flex flex-row flex-1 transition-all duration-300 relative">
      <div className="w-[75%] h-screen overflow-y-scroll bg-[#E8E8E8] px-10">
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
          <div>
            <p className="text-[#A2A2A2]">14 Nov 2023, 02:54 PM</p>
            
          </div>
        </div>

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
