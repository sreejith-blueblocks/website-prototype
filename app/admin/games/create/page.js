"use client";
import React, { useState } from "react";

import { BsSearch } from "react-icons/bs";
import CreateGameSection from "./(components)/createGameSection";

import Profiletab from "./(components)/profiletab";
import FeaturedGame from "./(components)/featuredGame";
import MostRatedGame from "./(components)/mostRatedGame";
import MainGameList from "./(components)/mainGameList";
import CommonHeader from "@/components/commonHeader/page";

const page = () => {
  const [refereshGames, setRefreshGames] = useState(false);
  return (
    <>
      <div className="w-full h-screen  flex flex-row bg-[#E8E8E8]">
        <div className="w-[70%] max-w-[70%] h-full  px-12 py-5 overflow-y-scroll">
          <CommonHeader />
          <CreateGameSection
            setRefreshGames={setRefreshGames}
            refereshGames={refereshGames}
          />
          <div className="w-[95%] m-auto h-[2px]  bg-[#afaeae] rounded-lg"></div>
          <MainGameList refereshGames={refereshGames} />
        </div>
        <div
          className="w-[30%] h-full border-l bg-white
          px-4 py-5 overflow-y-scroll"
        >
          <Profiletab />
          <FeaturedGame />
          <MostRatedGame />
        </div>
      </div>
    </>
  );
};

export default page;
