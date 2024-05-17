import React from "react";
import { BsSearch } from "react-icons/bs";
import TradeChart from "./(components)/TradeChart";
import TradeGame from "./tradegame/page";

const page = () => {
  return (
    <div className="flex flex-row flex-1 transition-all duration-300 relative">
      <TradeGame />
    </div>
  );
};

export default page;
