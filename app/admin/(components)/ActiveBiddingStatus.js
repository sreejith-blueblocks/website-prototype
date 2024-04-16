import React from "react";
import bidImage1 from "@/public/assets/bidImage1.png";
import bidImage2 from "@/public/assets/bidImage2.png";
import bidImage3 from "@/public/assets/bidImage3.png";
import bidImage4 from "@/public/assets/bidImage4.png";
import bidImage5 from "@/public/assets/bidImage5.png";
import Image from "next/image";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

const ActiveBiddingStatus = () => {
  const data = [
    { id: 1, name: "Bitcoin", user: "18K", image: bidImage1 },
    { id: 2, name: "Bitcoin", user: "15K", image: bidImage2 },
    { id: 3, name: "Bitcoin", user: "42K", image: bidImage3 },
    { id: 4, name: "Bitcoin", user: "10K", image: bidImage4 },
    { id: 5, name: "Bitcoin", user: "7K", image: bidImage5 },
  ];
  return (
    <div className="my-10">
      <header className="flex flex-row justify-between items-center gap-x-4">
        <h1 className="text-[24px] font-bold">Active Bidding Status</h1>
        <div className="flex-1 h-[1px] bg-[#C2C2C2] "></div>
        <div>
          <IoIosArrowDropleft className="inline-block text-[30px] text-[#5067EB]" />
          <IoIosArrowDroprightCircle className="inline-block text-[30px] text-[#5067EB] ml-1" />
        </div>
      </header>
      <div className="flex flex-row my-4 gap-x-3 justify-between">
        {data.map((bid) => (
          <div
            key={bid.id}
            className="bg-[#ffffff] p-4 px-9 relative flex flex-col gap-y-3 items-center justify-center rounded-lg drop-shadow-lg"
          >
            <Image
              src={bid.image}
              width={300}
              height={300}
              className="w-[50px] h-[50px] "
            />
            <p className="text-center text-[14px] font-semibold">
              {bid.name} <br />{" "}
              <span className="text-[#1E1E1E] font-medium text-[12px]">
                {`(${bid.user}+ Users)`}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveBiddingStatus;
