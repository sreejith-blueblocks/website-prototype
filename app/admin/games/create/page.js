"use client";
import React, { useState } from "react";

import { BsSearch } from "react-icons/bs";
import CreateGameSection from "./(components)/createGameSection";

import Profiletab from "./(components)/profiletab";
import FeaturedGame from "./(components)/featuredGame";
import MostRatedGame from "./(components)/mostRatedGame";
import MainGameList from "./(components)/mainGameList";

const page = () => {
  const [refereshGames, setRefreshGames] = useState(false);
  return (
    <>
      <div className="w-full h-screen  flex flex-row bg-[#E8E8E8]">
        <div className="w-[70%] max-w-[70%] h-full  px-12 py-5 overflow-y-scroll">
          <div className="flex items-center justify-between ">
            <div className="max-w-[300px] w-full">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pr-8 py-1 px-4 border shadow-2xl border-gray-300 rounded-lg focus:outline-none  focus:border-transparent"
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
