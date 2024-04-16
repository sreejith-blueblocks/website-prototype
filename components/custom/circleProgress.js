"use client";
import { Progress } from "antd";
import React, { useEffect, useState } from "react";

const CircleProgress = ({ color, value }) => {
  const [progressValue, setProgressValue] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      if (progressValue < value) {
        setProgressValue((prevCount) => prevCount + 1);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [progressValue]);
  const conicColors = {
    "0%": color,
    "50%": color,
    "100%": color,
  };

  return (
    <div>
      <Progress
        type="circle"
        percent={progressValue}
        strokeColor={conicColors}
        size={45}
      />
    </div>
  );
};

export default CircleProgress;
