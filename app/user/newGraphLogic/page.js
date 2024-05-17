"use client";
import TimerSvg from "@/components/timerSvg/TimerSvg";
import React, { useState, useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import { BsSearch } from "react-icons/bs";

const Page = () => {
  // const [graphData, setGraphData] = useState([]);

  // // Function to generate graph data
  // const generateGraphData = () => {
  //   const initialAmount = 100; // Initial amount of money
  //   const finalAmount = 1000; // Final amount of money
  //   const timeFrame = 12 * 60 * 60 * 1000; // Time frame in milliseconds (12 hours)

  //   const currentTime = Date.now(); // Get current time in milliseconds
  //   const finalTime = currentTime + timeFrame; // Calculate final time

  //   const data = [];

  //   let currentAmount = initialAmount;
  //   let currentTimeStamp = currentTime;

  //   while (currentTimeStamp <= finalTime) {
  //     if (currentTimeStamp <= currentTime) {
  //       // If the current time stamp is before or equal to the current time, generate data point
  //       data.push({
  //         x: currentTimeStamp,
  //         y: currentAmount,
  //       });
  //     } else {
  //       // If the current time stamp is after the current time, generate data point with final value
  //       data.push({
  //         x: currentTimeStamp,
  //         y: finalAmount,
  //       });
  //     }

  //     // Increment current time by 1 second
  //     currentTimeStamp += 1000; // Adding 1000 milliseconds (1 second)

  //     // Calculate new amount based on linear interpolation until the final time
  //     if (currentTimeStamp < finalTime) {
  //       const timeElapsed = currentTimeStamp - currentTime;
  //       const totalTime = finalTime - currentTime;
  //       currentAmount =
  //         initialAmount +
  //         (finalAmount - initialAmount) * (timeElapsed / totalTime);
  //     }
  //   }

  //   console.log(data); // Log the generated graph data to console

  //   setGraphData(data); // Set the graph data state
  // };

  // useEffect(() => {
  //   generateGraphData();
  // }, []);

  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [showTimer, setShowTimer] = useState(false);
  const [timeDifference, setTimeDifference] = useState(null);
  const [counter, setCounter] = useState(null);
  const timerRef = useRef(null);
  console.log(timeDifference);

  const calculateTimeDifference = (start, end) => {
    const startParts = start.split(":");
    const endParts = end.split(":");

    const startDate = new Date();
    startDate.setHours(startParts[0], startParts[1], 0);

    const endDate = new Date();
    endDate.setHours(endParts[0], endParts[1], 0);

    const diffInMs = endDate - startDate;
    const diffInSeconds = Math.max(diffInMs / 1000, 0);

    return diffInSeconds;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const difference = calculateTimeDifference(startTime, endTime);
    setTimeDifference(difference);
    setCounter(difference);

    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    timerRef.current = setInterval(() => {
      setCounter((prev) => {
        if (prev <= 1) {
          setTimeDifference(null);
          clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);
  return (
    <div className="flex flex-row flex-1 transition-all duration-300 relative">
      <div className="w-[100%] h-screen overflow-y-scroll bg-[#e8e8e8] px-10">
        <div className="flex items-center justify-between my-[20px]">
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
        <div className="border-2    p-2 rounded-xl  w-full">
          <div>
            <form
              className="bg-white p-6 rounded shadow-md w-full"
              onSubmit={handleSubmit}
            >
              <h2 className="text-2xl font-bold mb-4">Select Time</h2>
              <div className="flex flex-row gap-4 justify-center items-center">
                <div className="mb-4">
                  <label className="block text-gray-700">Start Time</label>
                  <input
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">End Time</label>
                  <input
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-[150px] px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Submit
                </button>
              </div>
            </form>
            {counter !== null && (
              <div className="mt-4 p-4 bg-gray-100 rounded">
                {counter === 0 ? (
                  <p className="text-gray-700">Finished</p>
                ) : (
                  <p className="text-gray-700">
                    Time Remaining: {counter} seconds
                  </p>
                )}
              </div>
            )}

            {timeDifference && (
              <div className="mt-4 p-4 bg-gray-100 rounded flex justify-center">
                <TimerSvg time={`${timeDifference}s`} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  ); // Return null as we don't need to render anything in the UI
};

export default Page;
