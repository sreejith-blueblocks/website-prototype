import React from "react";
import { FaBars } from "react-icons/fa6";
import {
  MdDashboard,
  MdPeople,
  MdSettings,
  MdShoppingBasket,
  MdWork,
} from "react-icons/md";

import { IoExitOutline } from "react-icons/io5";
import Link from "next/link";
const UserSidebar = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <aside
      className={`relative transition-all duration-300 flex flex-col border-r-2 border-[#e4e4e4]  ${
        isSidebarOpen ? "w-[220px]" : "w-[80px]"
      }`}
    >
      <div className="my-2 flex items-center justify-center gap-x-2">
        <p
          onClick={() => {
            toggleSidebar();
          }}
          className={`text-[32px] font-extrabold cursor-pointer `}
        >{`${isSidebarOpen ? "LOGO" : "BB"}`}</p>
      </div>
      <div className="mt-10">
        <Link
          href={"/user"}
          className={`menuItem flex items-center  hover:bg-[#E5E5E5] hover:text-[#5067EB] hover:font-bold hover:border-r-[6px] border-[#5067EB] my-2 px-4  ${
            isSidebarOpen ? "" : "justify-center"
          }`}
        >
          <div className="flex flex-row items-start  rounded-md w-full cursor-pointer p-2">
            <div>
              <MdDashboard className="text-2xl mr-2" />
            </div>
            <p
              className={`${
                isSidebarOpen ? "block" : "hidden"
              } overflow-hidden whitespace-nowrap text-[16px] font-medium`}
            >
              Dashboard
            </p>
          </div>
        </Link>
        <Link
          href={""}
          className={`menuItem flex items-center  hover:bg-[#E5E5E5] hover:text-[#5067EB] hover:font-bold hover:border-r-[6px] border-[#5067EB] my-2 px-4  cursor-pointer ${
            isSidebarOpen ? "" : "justify-center"
          }`}
        >
          <div className="flex flex-row items-start  rounded-md w-full cursor-pointer p-2">
            <div>
              <MdWork className="text-2xl mr-2" />
            </div>
            <p
              className={`${
                isSidebarOpen ? "block" : "hidden"
              } overflow-hidden whitespace-nowrap text-[16px] font-medium`}
            >
              Assets
            </p>
          </div>
        </Link>
        <Link
          href={"/user/games"}
          className={`menuItem flex items-center  hover:bg-[#E5E5E5] hover:text-[#5067EB] hover:font-bold hover:border-r-[6px] border-[#5067EB] my-2 px-4  cursor-pointer ${
            isSidebarOpen ? "" : "justify-center"
          }`}
        >
          <div className="flex flex-row items-start  rounded-md w-full cursor-pointer p-2">
            <div>
              <MdPeople className="text-2xl mr-2" />
            </div>
            <p
              className={`${
                isSidebarOpen ? "block" : "hidden"
              } overflow-hidden whitespace-nowrap text-[16px] font-medium`}
            >
              Games
            </p>
          </div>
        </Link>
        <Link
          href={""}
          className={`menuItem flex items-center hover:bg-[#E5E5E5] hover:text-[#5067EB] hover:font-bold hover:border-r-[6px] border-[#5067EB] my-2 px-4 cursor-pointer ${
            isSidebarOpen ? "" : "justify-center"
          }`}
        >
          <div className="flex flex-row items-start  rounded-md w-full cursor-pointer p-2">
            <div>
              <MdShoppingBasket className="text-2xl mr-2" />
            </div>
            <p
              className={`${
                isSidebarOpen ? "block" : "hidden"
              } overflow-hidden whitespace-nowrap text-[16px] font-medium`}
            >
              Wallet
            </p>
          </div>
        </Link>

        <Link
          href={""}
          className={`menuItem w-full flex items-center hover:bg-[#E5E5E5] hover:text-[#5067EB] hover:font-bold hover:border-r-[6px] border-[#5067EB] my-2 px-4  cursor-pointer absolute bottom-0 ${
            isSidebarOpen ? "" : "justify-center"
          }`}
        >
          <div className="flex w-full flex-row items-start  rounded-md  cursor-pointer p-2">
            <div>
              <IoExitOutline className="text-2xl mr-2" />
            </div>
            <p
              className={`${
                isSidebarOpen ? "block" : "hidden"
              } overflow-hidden whitespace-nowrap text-[16px] font-medium w-full`}
            >
              Logout
            </p>
          </div>
        </Link>
      </div>
    </aside>
  );
};

export default UserSidebar;
