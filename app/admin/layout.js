"use client";
import RightPannel from "@/components/AdminLayouts/RightPannel";
import Sidebar from "@/components/AdminLayouts/sidebar";
import withAuth from "@/lib/withAuth";
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
        {children}
      </div>
    </div>
  );
};

export default withAuth(Layout, ["admin"]);
