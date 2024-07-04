import CommonHeader from "@/components/commonHeader/page";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className=" transition-all duration-300 relative w-[100%] max-w-[100%] min-w-[82%]">
      <div className="h-screen overflow-y-scroll bg-[#e8e8e8] px-10">
        <CommonHeader />
        <div className="flex flex-row items-center justify-start gap-5">
          <Link
            className="p-4 bg-gray-300 rounded-lg font-bold text-[16px] hover:bg-gray-400"
            href={"history/betgame"}
          >
            Bet Game
          </Link>

          <Link
            className="p-4 bg-gray-300 rounded-lg font-bold text-[16px] hover:bg-gray-400"
            href={"history/trade"}
          >
            Trade Game
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
