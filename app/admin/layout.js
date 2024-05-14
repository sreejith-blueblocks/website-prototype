"use client";
import RightPannel from "@/components/AdminLayouts/RightPannel";
import Sidebar from "@/components/AdminLayouts/sidebar";
import { useState } from "react";
import React from "react";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="w-full max-w-[1600px]">
      <div className="w-full  h-screen flex flex-row">
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="flex flex-row flex-1 transition-all duration-300 relative">
          {children}
          <RightPannel />
        </div>
      </div>
    </div>
  );
};

export default Layout;
