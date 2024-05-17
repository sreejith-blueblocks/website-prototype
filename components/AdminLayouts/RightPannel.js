import ActiveGamers from "@/app/admin/(components)/ActiveGamers";
import FeedbackSections from "@/app/admin/(components)/FeedbackSections";
import ProfileControls from "@/app/admin/(components)/ProfileControls";
import ScheduleCalendar from "@/app/admin/(components)/ScheduleCalendar";
import React from "react";

const RightPannel = () => {
  return (
    <div className="max-w-[25%] w-[25%] h-screen overflow-y-scroll px-3 ">
      <ProfileControls />
      <ScheduleCalendar />
      <ActiveGamers />
      <FeedbackSections />
    </div>
  );
};

export default RightPannel;
