import React from "react";

import CircleProgress from "@/components/custom/circleProgress";
import Image from "next/image";

import logo from "@/public/assets/dashImg1.png";
import { FaAngleDown } from "react-icons/fa6";

const Statistics = () => {
  return (
    <div className="grid grid-cols-6 grid-rows-6 bg-[#5067EB] p-4 gap-5 rounded-xl mt-[50px]">
      <div className=" col-start-1 col-end-3 row-start-1 row-end-4 rounded-xl bg-white p-4 flex flex-row items-center justify-between">
        <div className="">
          <p className="text-[#686868] text-[12px]">Total Users</p>
          <p className="text-[16px] font-semibold">2.3M</p>
        </div>
        <div className=" left-0">
          <CircleProgress color="#5067EB" value={42} />
        </div>
      </div>
      <div className="col-start-3 col-end-5 row-start-1 row-end-4 bg-white rounded-xl p-4 flex flex-row items-center justify-between">
        <div className="">
          <p className="text-[#686868] text-[12px]">Bidding Status</p>
          <p className="text-[16px] font-semibold">52K</p>
        </div>
        <div className=" left-0">
          <CircleProgress color="#AC44A8" value={75} />
        </div>
      </div>
      <div className="row-start-4 col-start-1 col-end-3 row-end-7 rounded-xl bg-white p-4 flex flex-row items-center justify-between">
        <div className="">
          <p className="text-[#686868] text-[12px]">New Users</p>
          <p className="text-[16px] font-semibold">62K</p>
        </div>
        <div className=" left-0">
          <CircleProgress color="#5EF800" value={35} />
        </div>
      </div>
      <div className="row-start-4 col-start-3 col-end-5 row-end-7 rounded-xl bg-white p-4 flex flex-row items-center justify-between">
        <div className="">
          <p className="text-[#686868] text-[12px]">Gaming Status</p>
          <p className="text-[16px] font-semibold">27K</p>
        </div>
        <div className=" left-0">
          <CircleProgress color="#EB5050" value={62} />
        </div>
      </div>
      <div className="row-start-1 col-start-5 col-end-7 row-end-5 rounded-xl  p-4 relative">
        <Image
          alt="Logo"
          src={logo}
          className="w-[200px] h-auto absolute top-[38px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
          width={816}
          height={816}
        />
      </div>
      <div className="row-start-5 col-start-5 col-end-7 row-end-7 bg-white rounded-xl p-2 flex flex-row justify-between items-center">
        <p className="text-[#686868] text-[12px]">2022 - 2023</p>
        <FaAngleDown className="text-[18px]" />
      </div>
    </div>
  );
};

export default Statistics;
