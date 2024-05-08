"use client";
import UserRightPannel from "@/components/UserLayouts/userRightPannel";

import UserSidebar from "@/components/UserLayouts/userSidebar";
import { useState } from "react";
import React from "react";

const layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="w-full max-w-[1600px]">
      <div className="w-full  h-screen flex flex-row">
        <UserSidebar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
        <div className="flex flex-row flex-1 transition-all duration-300 relative">
          {children}
          <UserRightPannel />
        </div>
      </div>
    </div>
  );
};

export default layout;
