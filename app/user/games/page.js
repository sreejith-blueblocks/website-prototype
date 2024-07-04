import UserRightPannel from "@/components/UserLayouts/userRightPannel";
import React from "react";
import { BsSearch } from "react-icons/bs";
import FeaturedGamesCard from "../(components)/featuredGamesCard";
import PopularGamesCard from "../(components)/popularGamesCard";
import CommonHeader from "@/components/commonHeader/page";

const page = () => {
  console.log("heeey");
  return (
    <div className="flex flex-row flex-1 transition-all duration-300 relative">
      <div className="w-[100%] h-screen overflow-y-scroll bg-[#e8e8e8] px-10">
        <CommonHeader />
        <div>
          <FeaturedGamesCard />
          <PopularGamesCard />
        </div>
      </div>
    </div>
  );
};

export default page;
