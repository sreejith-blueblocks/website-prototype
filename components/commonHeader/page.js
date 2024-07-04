"use client";
import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";

const CommonHeader = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setCurrentTime(new Date());

    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };

  const formatTime = (date) => {
    const options = { hour: "2-digit", minute: "2-digit", second: "2-digit" };
    return date.toLocaleTimeString(undefined, options);
  };
  return (
    <div className="flex items-center justify-between my-[20px]">
      <div className="max-w-[300px] w-full">
        <div className="relative text-[14px]">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pr-8 py-1 px-4 border shadow-2xl border-gray-300 rounded-lg focus:outline-none  focus:border-transparent"
          />
          <div className="absolute z-[1000] inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-[14px]">
            <BsSearch
              className="text-[15px] text-gray-400 cursor-pointer hover:scale-110"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
      <div>
        <p className="text-[#A2A2A2] text-[14px]">
          {" "}
          {formatDate(currentTime)}, {formatTime(currentTime)}
        </p>
      </div>
    </div>
  );
};

export default CommonHeader;
