"use client";
import React from "react";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";

const LightActions = ({
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
    <div className="w-[300px] h-full flex flex-col cursor-pointer text-[#333333] px-4">
      <div>
        <h1 className="text-[17px]">Wallet</h1>
        <div className="bg-[#dddddd] p-2 rounded-lg flex flex-row items-center justify-between">
          <div className="flex flex-col items-start justify-start">
            <h2 className="text-[13px] text-[#858585bb]">Available Balance</h2>
            <span className="font-bold text-[20px]">${wallet.toFixed(2)}</span>
          </div>
          <div className="select-none w-[20px] h-[20px] bg-[#c5c5c5] flex items-center justify-center rounded-full font-bold text-[25px] p-5">
            +
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between mt-3 gap-x-3">
        <div className="flex-1 px-3">
          <h1 className="text-[17px] ">Quantity</h1>
          <div className="bg-[#dddddd] p-2 rounded-lg flex flex-row items-center justify-center relative">
            <h1 className="font-medium text-[16px]">{quantity}</h1>
            <div
              className="select-none w-[20px] h-[20px] bg-[#c5c5c5] flex items-center justify-center rounded-full font-medium text-[19px] p-3 absolute -left-3"
              onClick={() => {
                setQuantity(quantity - 1);
              }}
            >
              -
            </div>
            <div
              className="select-none w-[20px] h-[20px] bg-[#c5c5c5] flex items-center justify-center rounded-full font-medium text-[19px] p-3 absolute -right-3"
              onClick={() => {
                setQuantity(quantity + 1);
              }}
            >
              +
            </div>
          </div>
        </div>
        <div className="flex-1 px-3">
          <h1 className="text-[17px]">Amount</h1>
          <div className="bg-[#dddddd] p-2 rounded-lg flex flex-row items-center justify-center relative">
            <h1 className="font-medium text-[16px]">
              {quantity ? amount?.toFixed(0) : "0"}
            </h1>
            <div className="select-none w-[20px] h-[20px] bg-[#c5c5c5] flex items-center justify-center rounded-full font-medium text-[19px] p-3 absolute -left-3">
              -
            </div>
            <div className="select-none w-[20px] h-[20px] bg-[#c5c5c5] flex items-center justify-center rounded-full font-medium text-[19px] p-3 absolute -right-3">
              +
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-[17px] mt-8">P&L</h1>
        <p
          className={`text-[25px] text-center bg-[#dddddd] px-2 py-2 rounded-lg flex flex-row items-center justify-start ${
            percentageGainOrLoss < 0
              ? "text-red-700"
              : percentageGainOrLoss > 0
              ? "text-green-700"
              : ""
          }`}
        >
          {percentageGainOrLoss && (
            <span className="flex items-center gap-x-2">
              {percentageGainOrLoss < 0 ? (
                <FaArrowTrendDown className="text-[18px]" />
              ) : (
                <FaArrowTrendUp className="text-[18px]" />
              )}{" "}
              {percentageGainOrLoss.toFixed(2)}
            </span>
          )}
          <span className="text-[25px]">%</span>
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
      <div className="flex flex-row gap-4">
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

export default LightActions;
