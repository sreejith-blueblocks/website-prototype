"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import CoverImage from "@/public/assets/games/BetGameCoverImage.png";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

const GetCurrentSlots = () => {
  const router = useRouter();
  const [slots, setSlots] = useState([]);
  const [currentSlot, setCurrentSlot] = useState(null);
  const [upcomingSlots, setUpcomingSlots] = useState([]);

  useEffect(() => {
    // Fetch slots data from API
    axios
      .get("http://192.168.1.4:8087/api/Bet")
      .then((response) => {
        const { slots } = response.data;
        setSlots(slots);
        const currentTime = new Date();
        const currentTimestamp = currentTime.getTime();

        let currentSlotFound = false;
        const upcomingSlotsArray = [];

        slots.forEach((slot) => {
          const startTime = new Date(slot.startTime).getTime();
          const endTime = new Date(slot.endTime).getTime();

          if (currentTimestamp >= startTime && currentTimestamp <= endTime) {
            setCurrentSlot(slot);
            console.log(slot);
            currentSlotFound = true;
          } else if (!currentSlotFound) {
            upcomingSlotsArray.push(slot);
          }
        });

        // Sort upcoming slots by start time
        upcomingSlotsArray.sort(
          (a, b) => new Date(a.startTime) - new Date(b.startTime)
        );

        setUpcomingSlots(upcomingSlotsArray);
        console.log(upcomingSlotsArray);
      })
      .catch((error) => {
        console.error("Error fetching slots:", error);
      });
  }, []);

  useEffect(() => {
    // console.log();
    console.log("trigger");
  }, []);

  return (
    <div>
      <div className="flex flex-row gap-2 items-center ">
        <IoIosArrowBack
          className="text-[20px] hover:scale-125 cursor-pointer"
          onClick={() => router.back()}
        />
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
          <h1 className="text-[20px] font-semibold">Current Slot</h1>
          <div className="w-full h-full">
            <div className="w-full flex flex-row gap-2">
              <button
                onClick={() => {
                  router.push("betgame/slot/2232");
                }}
                className="bg-[#5067EB]   flex-1 rounded-xl text-[22px] font-bold text-white relative"
              >
                Play
                <div className=" flex flex-row items-center justify-between gap-1 absolute left-0 top-0 text-[8px] text-black p-[2px] px-2 rounded-lg bg-slate-200 m-2">
                  <div className="bg-red-500 rounded-full w-[5px] h-[5px] animate-ping"></div>
                  Live
                </div>
              </button>
              <div className="px-[8px] p-[8px] bg-slate-300 rounded-xl ">
                <p className="text-[12px]">Wallet</p>
                <div className="flex-1 w-[100px]  bg-slate-500 p-1 text-[14px] rounded-lg text-white">
                  $10000.00
                </div>
              </div>
            </div>
            <div className="py-2">
              <p className="text-[12px]">Upcoming Slots</p>
              <div className="w-full flex flex-row justify-between flex-wrap  gap-2">
                {["14:55:00", "14:58:00", "15:05:00", "15:20:00"].map(
                  (item, index) => (
                    <div
                      key={index}
                      className="cursor-pointer font-semibold hover:scale-105 w-[49%] h-[80px] rounded-xl bg-gray-300 text-center relative"
                    >
                      <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        {item}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
          <div>
            <p className="text-center text-[15px] cursor-pointer">Help?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetCurrentSlots;
