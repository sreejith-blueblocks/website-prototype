"use client";
import React, { useState, useEffect } from "react";

const Page = () => {
  const [openTime] = useState(
    Math.floor(new Date("2024-05-13T17:13:30").getTime() / 1000)
  ); // Replace with your open time
  const [closingTime] = useState(
    Math.floor(new Date("2024-05-13T17:15:50").getTime() / 1000)
  ); // Replace with your closing time
  const [remainingTime, setRemainingTime] = useState(null);

  useEffect(() => {
    // Check if the current time is greater than or equal to the open time
    const currentTime = Math.floor(
      new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }) / 1000
    );
    if (currentTime >= openTime && currentTime <= closingTime) {
      // Calculate remaining time only if the current time is within open and closing times
      const timeDiff = closingTime - currentTime;
      setRemainingTime(timeDiff);
   

      // Start the interval to update remaining time every second
      const intervalId = setInterval(() => {
        const currentTime = Math.floor(
          new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }) /
            1000
        );
        if (currentTime >= closingTime) {
          setRemainingTime(null);
          clearInterval(intervalId); // Clear interval when closing time is reached
        } else {
          setRemainingTime(closingTime - currentTime);
        }
      }, 1000);

      return () => clearInterval(intervalId); // Clean up the interval when component unmounts
    }
  }, [openTime, closingTime]);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);

    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div>
      {remainingTime !== null ? (
        <p>Time remaining: {formatTime(remainingTime)}</p>
      ) : (
        <p>Currently closed</p>
      )}
    </div>
  );
};

export default Page;
