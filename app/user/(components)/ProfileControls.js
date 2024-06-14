"use client";
import React, { useContext } from "react";
import { VscBellDot } from "react-icons/vsc";
import { AiFillSetting } from "react-icons/ai";
import Link from "next/link";
import { UserContext } from "@/contexts/UserContext";

const ProfileControls = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="my-[20px] flex items-center flex-row justify-between mb-8">
      <div>
        <div className="inline-block mx-2">
          <AiFillSetting className="text-[23px] text-[#A2A2A2]" />
        </div>
        <div className="inline-block ">
          <VscBellDot className="text-[23px] text-[#A2A2A2]" />
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-x-3">
        <div>
          <Link href="/admin" className="text-[15px] font-bold">
            {user?.sub || "User"}
          </Link>
          <p className="text-[10px] font-medium text-[#C2C2C2]">View Profile</p>
        </div>
        <div className="w-[30px] h-[30px] rounded-full bg-blue-400"></div>
      </div>
    </div>
  );
};

export default ProfileControls;
