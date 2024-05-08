"use client";
import React from "react";

const Actions = ({
  buy,
  sell,
  wallet,
  buyAt,
  sellAt,
  pl,
  percentageGainOrLoss,
  setQuantity,
  quantity,
  amount,
}) => {
  return (
    <div className="w-[100px] flex flex-col cursor-pointer text-[#b3b3b3]">
      <div>
        <h1 className="text-[12px]">Wallet</h1>
        <div className="bg-[#444444] p-2 rounded-lg flex items-center justify-center">
          {wallet.toFixed(1)}
        </div>
      </div>
      <div>
        <h1 className="text-[12px]">Quatity</h1>
        <div className="bg-[#444444] p-2 rounded-lg flex items-center justify-center">
          {quantity}
        </div>
        <div className="flex flex-row items-center my-1 gap-x-1 select-none">
          <div
            className="bg-[#3a3a3a] p-1 rounded-lg flex-1 flex items-center justify-center"
            onClick={() => {
              setQuantity(quantity - 1);
            }}
          >
            -
          </div>
          <div
            className="bg-[#3a3a3a] p-1 rounded-lg flex-1 flex items-center justify-center"
            onClick={() => {
              setQuantity(quantity + 1);
            }}
          >
            +
          </div>
        </div>
      </div>
      <div className="mt-1">
        <h1 className="text-[12px]">Amount</h1>
        <div className="bg-[#444444] p-2 rounded-lg flex items-center justify-center">
          <span className="px-1">$</span> {amount.toFixed(0)}
        </div>
        <div className="flex flex-row items-center my-1 gap-x-1 select-none">
          <div
            className="bg-[#3a3a3a] p-1 rounded-lg flex-1 flex items-center justify-center"
            onClick={() => {}}
          >
            -
          </div>
          <div
            className="bg-[#3a3a3a] p-1 rounded-lg flex-1 flex items-center justify-center"
            onClick={() => {}}
          >
            +
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-[12px]">P&L</h1>
        <p
          className={`text-[35px] text-center ${
            percentageGainOrLoss < 0
              ? "text-red-700"
              : percentageGainOrLoss > 0
              ? "text-green-700"
              : ""
          }`}
        >
          {percentageGainOrLoss && percentageGainOrLoss.toFixed(2)}
          <span className="text-[20px]">%</span>
        </p>
        <p
          className={` text-center ${
            percentageGainOrLoss < 0
              ? "text-red-700"
              : percentageGainOrLoss > 0
              ? "text-green-700"
              : ""
          }`}
        >
          {pl !== 0 && pl.toFixed(2)}
        </p>
      </div>
      <div>
        <button
          className="w-full bg-green-500 p-2 rounded-lg my-2"
          onClick={() => buy()}
        >
          Buy
        </button>
        {buyAt > 0 ? <p>@{buyAt.toFixed()}</p> : ""}
        <button
          className="w-full bg-red-500 p-2 rounded-lg my-2"
          onClick={() => sell()}
        >
          Sell
        </button>
        {sellAt > 0 ? <p>@{sellAt.toFixed()}</p> : ""}
      </div>
    </div>
  );
};

export default Actions;
