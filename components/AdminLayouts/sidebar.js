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
const Sidebar = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <aside
      className={`relative transition-all duration-300 flex flex-col border-r-2 border-[#e4e4e4]  ${
        isSidebarOpen ? "w-[220px]" : "w-[80px]"
      }`}
    >
      <div className="my-2 flex items-center justify-center gap-x-2">
        <p className={`text-[32px] font-extrabold  `}>{`${
          isSidebarOpen ? "LOGO" : "BB"
        }`}</p>
      </div>
      <div className="mt-10">
        <div
          className={`menuItem flex items-center  py-2 px-4  ${
            isSidebarOpen ? "" : "justify-center"
          }`}
        >
          <div className="flex flex-row items-start hover:bg-[#5067EB] hover:text-[#fff] rounded-md w-full cursor-pointer p-2">
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
        </div>
        <div
          className={`menuItem flex items-center  py-2 px-4  cursor-pointer ${
            isSidebarOpen ? "" : "justify-center"
          }`}
        >
          <div className="flex flex-row items-start hover:bg-[#5067EB] hover:text-[#fff]  rounded-md w-full cursor-pointer p-2">
            <div>
              <MdWork className="text-2xl mr-2" />
            </div>
            <p
              className={`${
                isSidebarOpen ? "block" : "hidden"
              } overflow-hidden whitespace-nowrap text-[16px] font-medium`}
            >
              Bid Management
            </p>
          </div>
        </div>
        <div
          className={`menuItem flex items-center  py-2 px-4  cursor-pointer ${
            isSidebarOpen ? "" : "justify-center"
          }`}
        >
          <div className="flex flex-row items-start hover:bg-[#5067EB] hover:text-[#fff] rounded-md w-full cursor-pointer p-2">
            <div>
              <MdPeople className="text-2xl mr-2" />
            </div>
            <p
              className={`${
                isSidebarOpen ? "block" : "hidden"
              } overflow-hidden whitespace-nowrap text-[16px] font-medium`}
            >
              User Management
            </p>
          </div>
        </div>
        <div
          className={`menuItem flex items-center  py-2 px-4  cursor-pointer ${
            isSidebarOpen ? "" : "justify-center"
          }`}
        >
          <div className="flex flex-row items-start hover:bg-[#5067EB] hover:text-[#fff] rounded-md w-full cursor-pointer p-2">
            <div>
              <MdShoppingBasket className="text-2xl mr-2" />
            </div>
            <p
              className={`${
                isSidebarOpen ? "block" : "hidden"
              } overflow-hidden whitespace-nowrap text-[16px] font-medium`}
            >
              Order Management
            </p>
          </div>
        </div>
        <div
          className={`menuItem flex items-center  py-2 px-4  cursor-pointer ${
            isSidebarOpen ? "" : "justify-center"
          }`}
        >
          <div className="flex flex-row items-start hover:bg-[#5067EB] hover:text-[#fff] rounded-md w-full cursor-pointer p-2">
            <div>
              <MdSettings className="text-2xl mr-2" />
            </div>
            <p
              className={`${
                isSidebarOpen ? "block" : "hidden"
              } overflow-hidden whitespace-nowrap text-[16px] font-medium`}
            >
              Settings
            </p>
          </div>
        </div>
        <div
          className={`menuItem w-full flex items-center  py-2 px-4  cursor-pointer absolute bottom-0 ${
            isSidebarOpen ? "" : "justify-center"
          }`}
        >
          <div className="flex w-full flex-row items-start hover:bg-[#5067EB] hover:text-[#fff] rounded-md  cursor-pointer p-2">
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
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
