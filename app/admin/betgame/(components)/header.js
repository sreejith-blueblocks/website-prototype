"use client";
import { UserContext } from "@/contexts/UserContext";
import Link from "next/link";
import React, { useContext } from "react";

const HeaderComponent = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="flex flex-row items-center justify-between gap-14">
      <p className="text-[#A2A2A2]">14 Nov 2023, 02:54 PM</p>
      <div className="flex flex-row items-center justify-center gap-x-3">
        <div>
          <Link href={"/user"} className="text-[15px] font-bold">
            {user?.sub || "Admin"}
          </Link>
          <p className="text-[10px] font-medium text-[#C2C2C2]">View Profile</p>
        </div>
        <div className="w-[30px] h-[30px] rounded-full bg-blue-400"></div>
      </div>
    </div>
  );
};

export default HeaderComponent;
