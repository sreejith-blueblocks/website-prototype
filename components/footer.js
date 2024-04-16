import Image from "next/image";
import React from "react";
import logo from "@/public/assets/logo.png";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

const FooterSection = () => {
  return (
    <footer className=" w-full py-6 pt-[60px] text-gray-300 bg-[#243E86] px-20 max-w-[1600px]">
      <div className="flex flex-row gap-x-5 justify-between">
        <div>
          <Image
            src={logo}
            className="w-[280px] h-auto"
            height={1252}
            width={384}
          ></Image>
          <div className="mt-2">
            <p className="text-[16px] leading-[24px] font-medium">
              41/2097-A8, Second Floor,
              <br /> Chakkalakkal Arcade, Palarivattom Pipeline,
              <br /> NH47, Ernamkulam, Kerala - 682025
            </p>
          </div>
        </div>
        <div className=" flex flex-row gap-x-[68px]">
          <div>
            <h2 className="text-[18px] font-bold">Quick Link</h2>
            <ul className="mt-[5px] ">
              <li className="text-[16px] my-[2px] leading-[24.8px] font-medium">
                Home
              </li>
              <li className="text-[16px] my-[2px] font-medium">About Us</li>
              <li className="text-[16px] my-[2px] font-medium">Industries</li>
              <li className="text-[16px] my-[2px] font-medium">Careers</li>
              <li className="text-[16px] my-[2px] font-medium">Contact Us</li>
            </ul>
          </div>

          <div className="max-w-[300px] flex-1">
            <h2 className="text-[18px] font-bold">Connect</h2>
            <ul className="justify-between mt-[5px]">
              <li className="my-[2px] flex flex-row justify-between gap-x-2 text-[16px] font-medium">
                <p className="w-[138px]">General Enquiry</p>
                <span>:</span>
                <span className="w-[148px]">+91 9876543210</span>
              </li>
              <li className="my-[2px] flex flex-row justify-between gap-x-2 text-[16px] font-medium">
                <p className="w-[138px]">Office Enquiry</p>
                <span>:</span>
                <span className="w-[148px]">+91 9876543210</span>
              </li>
              <li className="my-[2px] flex flex-row justify-between gap-x-2 text-[16px] font-medium">
                <p className="w-[138px]">Email</p>
                <span>:</span>
                <span className="w-[148px]">info@blueblocks.net</span>
              </li>
              <li className="my-[2px] flex flex-row justify-between gap-x-2 text-[16px] font-medium">
                <p className="w-[138px]">HR Enquiry</p>
                <span>:</span>
                <span className="w-[148px]">+91 9876543210</span>
              </li>
              <li className="my-[2px] flex flex-row justify-between gap-x-2 text-[16px] font-medium">
                <p className="w-[138px]">WhatsApp</p>
                <span>:</span>
                <span className="w-[148px]">+91 9876543210</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between mt-12">
        <div className="flex gap-x-32 flex-row items-center justify-between">
          <p>BLUE BLOCKS © 2024 All rights reserved</p>
          <p>Privacy Policy | Terms & Conditions</p>
        </div>
        <div className="flex flex-row items-center justify-between gap-x-3">
          <div className="p-[5px] border border-white rounded-full">
            <FaInstagram className="text-[18px]" />
          </div>
          <div className="p-[5px] border border-white rounded-full">
            <FaFacebook className="text-[18px]" />
          </div>
          <div className="p-[5px] border border-white rounded-full">
            <FaLinkedin className="text-[18px]" />
          </div>
          <div className="p-[5px] border border-white rounded-full">
            <FaXTwitter className="text-[18px]" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
