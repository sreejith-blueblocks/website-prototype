"use client";
import axios from "axios";
import React, { useState } from "react";

const PortfolioTabs = ({
  maxQuantity,
  assetName,
  assetId,
  setShowPortfolio,
  setBuySellTrigger,
  buySellTrigger,
}) => {
  const [sellQuantity, setSellQuantity] = useState("");

  const sellStocks = async (coinId) => {
    console.log("hello");
    console.log(coinId);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_USER_BASE_URL}TradeShare/Sell`,
        { userId: 1, quantity: sellQuantity, coin: coinId },
        {
          headers: {
            // Authorization: `Bearer ${token}`,
          },
        }
      );

      const responseData = response.data;

      setBuySellTrigger(!buySellTrigger);
      setShowPortfolio(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSellInput = (e, maxValue) => {
    const newValue = e.target.value;
    // Check if the new value is a valid number and less than or equal to the maximum value
    if (!isNaN(newValue) && newValue !== "" && parseInt(newValue) <= maxValue) {
      setSellQuantity(+newValue);
    } else {
      setSellQuantity("");
    }
  };
  return (
    <>
      <div className="w-full rounded-lg shadow-md bg-slate-100 p-2 py-3 my-3 flex flex-row justify-between">
        <div>
          <p className="text-[12px] text-[#363636] font-semibold">Stock name</p>
          <p className="text-[18px] font-bold">{assetName}</p>
        </div>
        <div>
          <p className="text-[12px] text-[#363636] font-semibold">
            Available Quantity
          </p>
          <p className="text-[18px] font-bold text-center">{maxQuantity}</p>
        </div>
        <div>
          <p className="text-[12px] text-[#363636] font-semibold ">Options</p>
          <input
            className="w-[50px] p-2 py-1 rounded-sm border border-[#b8b8b8]"
            type="text"
            onChange={(e) => handleSellInput(e, maxQuantity)}
            value={sellQuantity}
            inputMode="numeric"
          />
          <button
            disabled={
              sellQuantity === null ||
              sellQuantity === "" ||
              sellQuantity === "0"
            }
            className={`bg-[#ff5858] px-3 py-[4px] rounded-sm mx-1 ${
              sellQuantity === null ||
              sellQuantity === "" ||
              sellQuantity === "0"
                ? "cursor-not-allowed"
                : ""
            }`}
            onClick={() => {
              sellStocks(assetName);
              setSellQuantity("");
              setShowPortfolio(false);
            }}
          >
            sell
          </button>
        </div>
      </div>
    </>
  );
};

export default PortfolioTabs;
