import React from "react";
import design from "@/public/assets/designLogo.png";
import develop from "@/public/assets/develop.png";
import market from "@/public/assets/market.png";
import Image from "next/image";

const ServiceSection = () => {
  return (
    <>
      <div className="w-full bg-[#243E86] h-[500px] py-[50px] px-20">
        <div className="flex flex-row justify-center items-center gap-x-[10px]">
          <h1 className="text-[48px] font-bold text-white">What we Do</h1>
          <div className="flex-1 h-[3px] bg-gradient-to-r from-[#00E0FF] to-[#243E86]"></div>
          <div className="text-[#5E89FF] font-medium text-[20px] underline">
            View All services
          </div>
        </div>
        <div className="flex flex-row items-center justify-between ">
          <Card image={design} />
          <Card image={develop} />
          <Card image={market} />
        </div>
      </div>
    </>
  );
};

const Card = ({ image }) => {
  return (
    <div>
      <Image src={image} className="w-[300px] h-auto"></Image>
    </div>
  );
};
export default ServiceSection;
