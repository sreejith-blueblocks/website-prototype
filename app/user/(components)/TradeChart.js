import TradingChart from "@/components/UserLayouts/tradingChart";
import React from "react";

const TradeChart = () => {
  return (
    <div>
      <header>
        <h1 className="text-[24px] font-bold">Dashboard</h1>
      </header>
      <div className="bg-white rounded-xl max-h-[500px] h-full w-full shadow-2xl  p-2 mt-[10px]">
        <TradingChart />
      </div>
    </div>
  );
};

export default TradeChart;
