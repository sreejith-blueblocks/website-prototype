"use client";
import UserRightPannel from "@/components/UserLayouts/userRightPannel";

import UserSidebar from "@/components/UserLayouts/userSidebar";
import withAuth from "@/lib/withAuth";
import withUserAuth from "@/lib/withUserAuth";
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
        <UserSidebar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />

        {children}
      </div>
    </div>
  );
};

export default withUserAuth(Layout, ["user"]);
