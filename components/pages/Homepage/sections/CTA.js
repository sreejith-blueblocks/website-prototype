import Image from "next/image";
import React from "react";
import backgroundImage from "@/public/assets/cta-background.png";
import styles from "./style.module.scss";
import { FaArrowRightLong } from "react-icons/fa6";
const CtaSection = () => {
  return (
    <div className=" py-16 px-20 flex flex-row items-center justify-between">
      <div>
        <p className="text-[24px] font-medium text-[#081F61]">
          Embark on a transformative journey with Blue Blocks - <br />
          <span className="text-[32px] font-extrabold">
            Where Innovation Meets Excellence in IT Solutions.
          </span>
        </p>
      </div>
      <div>
        <button className="bg-[#081F61] capitalize text-white font-extrabold py-4 px-10 rounded-lg text-[24px] flex items-center justify-center ">
          <p className="">request a quote </p>
          <div className=" px-4  my-auto">
            <FaArrowRightLong className="text-[26px]" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default CtaSection;
