"use client";
import Image from "next/image";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import CoverImage from "@/public/assets/games/BetGameCoverImage.png";

const GetCurrentSlots = () => {
  return (
    <div>
      <div className="flex flex-row gap-2 items-center ">
        <IoIosArrowBack className="text-[20px] hover:scale-125 cursor-pointer" />
        <h1 className="font-semibold">Front Runner Odds On</h1>
      </div>
      <div onClick={() => router.back()}></div>
      <div className="my-4 flex flex-row items-center justify-between gap-x-3 h-[310px]  mt-5">
        <div className="w-[60%] ">
          <Image
            src={CoverImage}
            width={500}
            height={660}
            className="w-full h-auto object-cover"
            alt="Picture of the author"
          />
        </div>

        <div className=" flex-1  flex flex-col">
          <h1 className="text-[20px] font-semibold">Generate Slot</h1>
        </div>
      </div>
    </div>
  );
};

export default GetCurrentSlots;
