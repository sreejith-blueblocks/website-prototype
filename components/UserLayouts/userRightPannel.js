import BiddingHistory from "@/app/user/(components)/BiddingHistory";
import ProfileControls from "@/app/user/(components)/ProfileControls";
import ScheduleCalendar from "@/app/user/(components)/ScheduleCalendar";
import TrendingGamers from "@/app/user/(components)/TrendingGamers";
import React from "react";

const UserRightPannel = () => {
  return (
    <div className="w-[25%] h-screen overflow-y-scroll px-3 ">
      <ProfileControls />
      <ScheduleCalendar />
      <TrendingGamers />
      <BiddingHistory />
    </div>
  );
};

export default UserRightPannel;
