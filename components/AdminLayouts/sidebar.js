import React from "react";
import {
  MdDashboard,
  MdPeople,
  MdSettings,
  MdShoppingBasket,
  MdWork,
} from "react-icons/md";
// import { useSession } from "next-auth/react";

import { IoExitOutline } from "react-icons/io5";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
const Sidebar = ({ toggleSidebar, isSidebarOpen }) => {
  // const { data } = useSession();
  // console.log(data.user.image);
  const router = useRouter();
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
          className={`text-[32px] font-extrabold cursor-pointer  `}
        >{`${isSidebarOpen ? "LOGO" : "BB"}`}</p>
      </div>
      <div className="mt-10">
        <Link
          href={"/admin"}
          className={`menuItem flex items-center hover:bg-[#E5E5E5] hover:text-[#5067EB] hover:font-bold hover:border-r-[6px] border-[#5067EB] my-2 px-4  ${
            isSidebarOpen ? "" : "justify-center"
          }`}
        >
          <div className="flex flex-row items-start  rounded-md w-full cursor-pointer p-2">
            <div>
              <MdDashboard className="text-2xl mr-2" />
            </div>
            <div
              className={`${
                isSidebarOpen ? "block" : "hidden"
              } overflow-hidden whitespace-nowrap text-[16px] font-medium`}
            >
              Dashboard
            </div>
          </div>
        </Link>
        <Link
          href={"/admin/betgame"}
          className={`menuItem flex items-center hover:bg-[#E5E5E5] hover:text-[#5067EB] hover:font-bold hover:border-r-[6px] border-[#5067EB]  my-2 px-4  cursor-pointer ${
            isSidebarOpen ? "" : "justify-center"
          }`}
        >
          <div className="flex flex-row items-start   rounded-md w-full cursor-pointer p-2">
            <div>
              <MdWork className="text-2xl mr-2" />
            </div>
            <div
              className={`${
                isSidebarOpen ? "block" : "hidden"
              } overflow-hidden whitespace-nowrap text-[16px] font-medium`}
            >
              Bid Management
            </div>
          </div>
        </Link>
        <div
          className={`menuItem flex items-center hover:bg-[#E5E5E5] hover:text-[#5067EB] hover:font-bold hover:border-r-[6px] border-[#5067EB]  my-2 px-4  cursor-pointer ${
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
              User Management
            </p>
          </div>
        </div>
        <div
          className={`menuItem flex items-center hover:bg-[#E5E5E5] hover:text-[#5067EB] hover:font-bold hover:border-r-[6px] border-[#5067EB]  my-2 px-4  cursor-pointer ${
            isSidebarOpen ? "" : "justify-center"
          }`}
        >
          <div className="flex flex-row items-start rounded-md w-full cursor-pointer p-2">
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
          className={`menuItem flex items-center hover:bg-[#E5E5E5] hover:text-[#5067EB] hover:font-bold hover:border-r-[6px] border-[#5067EB] my-2 px-4  cursor-pointer ${
            isSidebarOpen ? "" : "justify-center"
          }`}
        >
          <div className="flex flex-row items-start rounded-md w-full cursor-pointer p-2">
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
          className={`menuItem w-full flex items-center hover:bg-[#E5E5E5] hover:text-[#5067EB] hover:font-bold hover:border-r-[6px] border-[#5067EB] my-2 px-4  cursor-pointer absolute bottom-0 ${
            isSidebarOpen ? "" : "justify-center"
          }`}
        >
          <div
            className="flex w-full flex-row items-start rounded-md  cursor-pointer p-2"
            onClick={() => {
              Cookies.remove("token");
              router.push("/login");
            }}
          >
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
            <p></p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
