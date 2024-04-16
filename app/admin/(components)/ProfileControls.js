import React from "react";
import { VscBellDot } from "react-icons/vsc";
import { AiFillSetting } from "react-icons/ai";

const ProfileControls = () => {
  return (
    <div className="my-[20px] flex items-center flex-row justify-between mb-8">
      <div>
        <div class="inline-block mx-2">
          <AiFillSetting className="text-[23px] text-[#A2A2A2]" />
        </div>
        <div class="inline-block ">
          <VscBellDot className="text-[23px] text-[#A2A2A2]" />
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-x-3">
        <div>
          <p className="text-[15px] font-bold">Admin</p>
          <p className="text-[10px] font-medium text-[#C2C2C2]">View Profile</p>
        </div>
        <div className="w-[30px] h-[30px] rounded-full bg-blue-400"></div>
      </div>
    </div>
  );
};

export default ProfileControls;
