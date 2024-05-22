"use client";
import Image from "next/image";
import React, { useState } from "react";
import backgroundImage from "@/public/assets/games/betGameBackground.png";
import horse1 from "@/public/assets/games/horse1.png";
import horse2 from "@/public/assets/games/horse2.png";
import horse3 from "@/public/assets/games/horse3.png";
import horse4 from "@/public/assets/games/horse4.png";
import horse5 from "@/public/assets/games/horse5.png";
import horse6 from "@/public/assets/games/horse6.png";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function Page({ params }) {
  const router = useRouter();
  const horses = [
    { id: 1, name: "Horse 1", imageUrl: horse1 },
    { id: 2, name: "Horse 2", imageUrl: horse2 },
    { id: 3, name: "Horse 3", imageUrl: horse3 },
    { id: 4, name: "Horse 4", imageUrl: horse4 },
    { id: 5, name: "Horse 5", imageUrl: horse5 },
    { id: 6, name: "Horse 6", imageUrl: horse6 },
  ];

  const [selectedHorse, setSelectedHorse] = useState(null);
  return (
    <div className="flex flex-col w-full overflow-y-scroll">
      <div className="relative">
        <Image
          alt="Background Image"
          src={backgroundImage}
          width={5700}
          height={3220}
          className="w-full h-[460px] object-cover"
        ></Image>
        <div className="flex w-full flex-row justify-between absolute left-0 top-0 text-white p-4">
          <div className="flex flex-row gap-2 items-center ">
            <IoIosArrowBack
              className="text-[20px] hover:scale-125 cursor-pointer"
              onClick={() => router.back()}
            />
            <h1 className="font-semibold">Front Runner Odds On</h1>
          </div>
          <div className="flex flex-row gap-x-6">
            <p>2:56:25</p>
            <p>
              Slot No:
              <span className="p-1 bg-blue-500 m-2 rounded-lg px-3">
                {params.slug}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-x-2 my-4 px-3">
        <div className="flex-1">
          <h2 className="font-bold">Select Horse</h2>
          <div className="flex-1 flex flex-row justify-between ">
            {horses.map((data, index) => (
              <div
                key={index}
                className={` p-1 px-4 rounded-lg shadow cursor-pointer hover:scale-105 ${
                  data.id === selectedHorse?.id ? "bg-blue-600" : "bg-slate-300"
                }`}
                onClick={() => {
                  setSelectedHorse(data);
                }}
              >
                <Image
                  src={data.imageUrl}
                  width={411}
                  height={462}
                  alt="Horse Image"
                  className="w-[100px] h-auto"
                ></Image>
                <p className="text-center my-2">{data.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 max-w-[300px]">
          <h2 className="font-bold">Bet Slip</h2>
          <div className="grid grid-cols-2 gap-2 p-2">
            <div>
              <p className="text-[12px]">Selected Horse</p>
              <div className="bg-slate-300 p-1 rounded-lg text-center py-3">
                {selectedHorse?.name || "Select"}
              </div>
            </div>
            <div>
              <p className="text-[12px]">Bet Amount</p>
              <input
                value={650.0}
                className="bg-slate-300 w-full p-1 rounded-lg text-center py-3"
              />
            </div>
            <div className="col-start-1 col-end-3 p-2">
              <button className="bg-[#5067EB] py-[10px] w-full rounded-md ">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
