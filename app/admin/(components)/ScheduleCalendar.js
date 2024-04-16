import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

const ScheduleCalendar = () => {
  return (
    <>
      <div className="relative flex items-center justify-between">
        <div className=" left-0">
          <p className="text-[18px] font-bold">Schedule Calendar</p>
        </div>
        <div className=" right-0 bg-[#EDEFFC] p-1 rounded-lg px-2 cursor-pointer">
          <FaRegCalendarAlt className="text-[18px] text-[#5067EB] inline-block" />
          <p className="text-[12px] inline-block mx-1 text-[#5067EB]">Nov</p>
        </div>
      </div>
      <div className="flex flex-row justify-between gap-x-2 my-4">
        <div className="bg-[#EDEFFC] px-[13px] p-[8px] rounded-xl font-bold hover:text-white hover:bg-[#5067EB]">
          <p className="text-center text-[15px]">Mon</p>
          <p className="text-center text-[30px]">12</p>
        </div>
        <div className="bg-[#EDEFFC] px-[13px] p-[8px] rounded-xl font-bold hover:text-white hover:bg-[#5067EB]">
          <p className="text-center text-[15px]">Mon</p>
          <p className="text-center text-[30px]">13</p>
        </div>
        <div className="bg-[#EDEFFC] px-[13px] p-[8px] rounded-xl font-bold hover:text-white hover:bg-[#5067EB]">
          <p className="text-center text-[15px]">Mon</p>
          <p className="text-center text-[30px]">14</p>
        </div>
        <div className="bg-[#EDEFFC] px-[13px] p-[8px] rounded-xl font-bold hover:text-white hover:bg-[#5067EB]">
          <p className="text-center text-[15px]">Mon</p>
          <p className="text-center text-[30px]">15</p>
        </div>
      </div>
    </>
  );
};

export default ScheduleCalendar;
