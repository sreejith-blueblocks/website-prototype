"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import backgroundImage from "@/public/assets/games/betGameBackground.png";
import horse1 from "@/public/assets/games/horse1.png";

import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";
import axios from "axios";
import { UserContext } from "@/contexts/UserContext";

export default function Page({ params }) {
  const router = useRouter();
  const [slotDetails, setSlotDetails] = useState();
  const [counter, setCounter] = useState("");
  const [betAmount, setBetAmount] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [winner, setWinner] = useState(null);
  const [selectedHorse, setSelectedHorse] = useState(null);

  const [message, setMessage] = useState(null);

  const [betItems, setBetItems] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BETGAME_BASE_URL}list/betitems/${params.gameId}`
        );
        setBetItems(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (showPopup) {
      const fetchWinner = async () => {
        try {
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_BETGAME_BASE_URL}winningDetails`,
            {
              slotNumber: slotDetails?.slotNumber,
              userid: user.userid,
              slotId: slotDetails?.slotId,
              startTime: slotDetails?.startTime,
              endTime: slotDetails?.endTime,
              gameId: +params?.gameId,
            }
          );
          // setSlotDetails(response.data);

          if (response.status === 200 && response.data?.winningItemName) {
            setWinner(
              `Congratulations, ${response.data?.winningItemName} is the winner`
            );

            const endTime = getEndTime(response.data.endTime);
            startCounter(endTime);
          } else {
            setWinner(response.data?.message || response.data?.error);
          }
        } catch (error) {
          console.error("Error fetching slot details:", error);
        }
      };

      fetchWinner();
    }
  }, [showPopup, slotDetails]);

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setWinner(null);
  };

  useEffect(() => {
    const fetchSlotDetails = async () => {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BETGAME_BASE_URL}slotDetails`,
          { slotId: params?.slotId }
        );
        setSlotDetails(response.data);
        const endTime = getEndTime(response.data.endTime);
        startCounter(endTime);
      } catch (error) {
        console.error("Error fetching slot details:", error);
      }
    };
    if (params?.slotId) {
      fetchSlotDetails();
    }
  }, [params?.slotId]);

  const getEndTime = (endTimeString) => {
    const [hours, minutes, seconds] = endTimeString.split(":").map(Number);
    const now = new Date();
    now.setHours(hours, minutes, seconds, 0);
    return now.getTime();
  };

  const startCounter = (endTime) => {
    const intervalId = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeLeft = endTime - currentTime;

      if (timeLeft <= 0) {
        setTimeout(() => {
          setShowPopup(true);
        }, 1500);

        clearInterval(intervalId);
        setCounter("Time's up!");
      } else {
        const hours = Math.floor(timeLeft / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        setCounter(`${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BETGAME_BASE_URL}Bet`,
        {
          userid: user.userid,
          selectedHorse: selectedHorse?.betItemId,
          betAmount: betAmount,
          slotNumber: slotDetails?.slotNumber,
          gameId: +params?.gameId,
        }
      );
      if (response.status === 200) {
        setMessage(`Bet Saved Sucessfully for ${selectedHorse?.betItemName}`);
        setBetAmount(null);
        setSelectedHorse(null);
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (message) {
      // Hide the message after 5 seconds
      const timer = setTimeout(() => {
        setMessage(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleInputChange = (e) => {
    const { value } = e.target;
    // Allow only numbers (including decimal point) and empty string
    const validValue =
      value === "" || /^[0-9]*\.?[0-9]*$/.test(value) ? value : betAmount;
    setBetAmount(validValue);
  };

  return (
    <div className="flex flex-col w-full overflow-y-scroll relative">
      <div className="relative">
        <Image
          alt="Background Image"
          src={backgroundImage}
          width={5700}
          height={3220}
          className="w-full h-[460px] object-cover"
        />
        <div className="flex w-full justify-between absolute left-0 top-0 text-white p-4">
          <div className="flex items-center gap-2">
            <IoIosArrowBack
              className="text-[20px] hover:scale-125 cursor-pointer"
              onClick={() => router.back()}
            />
            <h1 className="font-semibold">Front Runner Odds On</h1>
          </div>
          {counter && slotDetails && (
            <div className="flex gap-x-6">
              <div className="flex flex-row items-center justify-center gap-x-2">
                <p className="text-[16px]">Start time :</p>
                <p className="text-[14px]">{slotDetails?.startTime}</p>
              </div>
              <div className="flex flex-row items-center justify-center gap-x-2">
                <p className="text-[16px]">End time :</p>
                <p className="text-[14px]">{slotDetails?.endTime}</p>
              </div>
              <div className="flex flex-row items-center justify-center gap-x-2">
                <p className="text-[16px]">Counter :</p>
                <p className="text-[14px]">{counter}</p>
              </div>
              <p>
                Slot No:
                <span className="p-1 bg-blue-500 m-2 rounded-lg px-3">
                  {slotDetails?.slotNumber}
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-row gap-x-2 my-4 px-3">
        <div className="flex-1">
          <h2 className="font-bold">Select Horse</h2>
          <div className="flex flex-row justify-between">
            {betItems.map((data, index) => (
              <div
                key={index}
                className={`p-1 px-4 rounded-lg shadow cursor-pointer hover:scale-105 ${
                  data.betItemId === selectedHorse?.betItemId
                    ? "bg-blue-600"
                    : "bg-slate-300"
                }`}
                onClick={() => setSelectedHorse(data)}
              >
                <Image
                  src={horse1}
                  width={411}
                  height={462}
                  alt="Horse Image"
                  className="w-[100px] h-auto"
                />
                <p className="text-center my-2">{data.betItemName}</p>
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
                {selectedHorse?.betItemName || "Select"}
              </div>
            </div>
            <div>
              <p className="text-[12px]">Bet Amount</p>
              <input
                type="text"
                value={betAmount || "00.00"}
                // onChange={(e) => setBetAmount(e.target.value)}
                pattern="[0-9]*"
                onChange={handleInputChange}
                className="bg-slate-300 w-full p-1 rounded-lg text-center py-3"
              />
            </div>
            <div className="col-span-2 p-2">
              <button
                disabled={!betAmount || !selectedHorse}
                onClick={handleSubmit}
                className="bg-[#5067EB] py-[10px] w-full rounded-md"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      {message && (
        <div
          className={`absolute rounded-lg px-10 py-2 shadow-xl min-w-28 text-white font-bold right-6 top-12 bg-blue-500 ${
            message ? "slide-in" : "slide-out"
          }`}
        >
          {message}
        </div>
      )}
      {showPopup && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
            <button
              onClick={() => {
                router.push(`/user/games/${params.gameId}`);
                // handleClosePopup;
              }}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <h2 className="text-xl font-semibold mb-4">Winner</h2>
            <p className="text-gray-600 mb-6">
              {winner ? `${winner}!` : "Fetching winner details..."}
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => {
                  router.push(`/user/games/${params.gameId}`);
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
