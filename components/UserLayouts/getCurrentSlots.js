"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import CoverImage from "@/public/assets/games/BetGameCoverImage.png";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { UserContext } from "@/contexts/UserContext";

import CryptoJS from "crypto-js";

const GetCurrentSlots = ({ gameId }) => {
  const router = useRouter();
  const [slots, setSlots] = useState([]);
  const [currentSlot, setCurrentSlot] = useState(null);
  const [upcomingSlots, setUpcomingSlots] = useState([]);
  const { user, token } = useContext(UserContext);
  const [gameDetails, setGameDetails] = useState(null);

  const [wallet, setWallet] = useState(100);
  const encryptionKey = "LrbRvi4BsGZMCsygsKdSLs043SPC8sgeSqu7L";
  const additionalData = { gameId };

  const encryptedData = CryptoJS.AES.encrypt(
    JSON.stringify(additionalData),
    encryptionKey
  ).toString();
  const encodedEncryptedData = encodeURIComponent(encryptedData);

  useEffect(() => {
    const fetchSlots = async () => {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BETGAME_BASE_URL}upcomingSlots`,
          { gameId }
        );
        setSlots(response.data.slots);
      } catch (error) {
        console.error("Error fetching slot data:", error);
      }
    };

    fetchSlots();

    const fetchIntervalId = setInterval(fetchSlots, 300000);
    return () => {
      clearInterval(fetchIntervalId);
    };
  }, []);

  useEffect(() => {
    const fetchWallet = async () => {
      // console.log("user", user.userid);
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_USER_BASE_URL}User/ViewBalance`,
          {
            userid: user.userid,
            coin: "string",
            quantity: 0,
            price: 0,
            stockId: 0,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const responseData = response.data?.balance;
        setWallet(responseData || 0);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchWallet();

    const fetchSlots = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BETGAME_BASE_URL}single/game/${gameId}`,
          { gameId }
        );
        if (response.status == 200) {
          setGameDetails(response.data);
          console.log(response.data);
        }
      } catch (error) {
        console.error("Error fetching Game details:", error);
      }
    };

    fetchSlots();
  }, []);

  useEffect(() => {}, []);

  useEffect(() => {
    const checkSlots = () => {
      determineCurrentAndUpcomingSlots(slots);
    };
    const checkIntervalId = setInterval(checkSlots, 1000);
    checkSlots();
    return () => {
      clearInterval(checkIntervalId);
    };
  }, [slots]);

  const determineCurrentAndUpcomingSlots = (slots) => {
    const now = new Date();
    const currentTime = `${String(now.getHours()).padStart(2, "0")}:${String(
      now.getMinutes()
    ).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;

    const current = slots.find(
      (slot) => currentTime >= slot.startTime && currentTime <= slot.endTime
    );
    const upcoming = slots
      .filter((slot) => slot.startTime > currentTime)
      .slice(0, 4);

    setCurrentSlot(current);
    setUpcomingSlots(upcoming);
  };

  // console.log(currentSlot?.slotId ? "true" : "false");
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
          <h1 className="text-[20px] font-semibold">
            {" "}
            {`${gameDetails?.gameName || "Game"} Slots`}
          </h1>
          <div className="w-full h-full">
            <div className="w-full flex flex-row gap-2">
              <button
                onClick={() => {
                  if (currentSlot?.slotId) {
                    router.push(`${gameId}/${currentSlot.slotId}`);
                  }
                }}
                className={` ${
                  currentSlot?.slotId
                    ? "bg-[#5067EB] text-[22px]"
                    : "bg-[#838383] text-[18px] cursor-not-allowed"
                }    flex-1 rounded-xl  font-bold text-white relative`}
              >
                {currentSlot?.slotId ? "Play" : "No Live Game"}
                {currentSlot?.slotId ? (
                  <div className=" flex flex-row items-center justify-between gap-1 absolute left-0 top-0 text-[8px] text-black p-[2px] px-2 rounded-lg bg-slate-200 m-2">
                    <div className="bg-red-500 rounded-full w-[5px] h-[5px] animate-ping"></div>
                    Live
                  </div>
                ) : (
                  ""
                )}
              </button>
              <div className="px-[8px] p-[8px] bg-slate-300 rounded-xl ">
                <p className="text-[12px]">Wallet</p>
                <div className="flex-1 w-[100px]  bg-slate-500 p-1 text-[14px] rounded-lg text-white">
                  ${wallet}
                </div>
              </div>
            </div>
            <div className="py-2">
              <p className="text-[12px]">Upcoming Slots</p>
              {upcomingSlots.length !== 0 ? (
                <div className="w-full flex flex-row justify-between flex-wrap  gap-2">
                  {upcomingSlots.map((item, index) => (
                    <div
                      key={index}
                      className="cursor-pointer font-semibold hover:scale-105 w-[49%] h-[80px] rounded-xl bg-gray-300 text-center relative"
                    >
                      <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        {item?.startTime}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="w-full flex flex-row justify-between flex-wrap  gap-2 animate-pulse">
                  {[1].map((item, index) => (
                    <div
                      key={index}
                      className="cursor-pointer font-semibold hover:scale-105 w-full h-[80px] rounded-xl bg-gray-300 text-center relative"
                    >
                      <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        Loading..
                      </p>
                    </div>
                  ))}
                </div>
              )}
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
