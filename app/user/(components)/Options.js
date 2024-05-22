"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";

const Options = ({
  wallet,
  setQuantity,
  quantity,
  setAmount,
  amount,
  currentPrice,
  buyStocks,

  setShowPortfolio,
  setBuySellTrigger,
  buySellTrigger,
  maxQuantityToBuy,
  makeMarker,
  profitLoss,
}) => {
  const [percentageGainOrLoss, setPercentageGainOrLoss] = useState(0);
  const [pl, setPl] = useState(0);
  const [openBalanceTab, setOpenBalanceTab] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (quantity > maxQuantityToBuy) {
      setQuantity(maxQuantityToBuy);
    }
    const newAmount = quantity * currentPrice;
    setAmount(newAmount);
  }, [currentPrice, quantity]);

  const handleSubmit = () => {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_USER_BASE_URL}AddBalanceToWallet`,
        {
          price: parseFloat(value),
          userId: 8,
          coin: "string",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log("API call successful");
        setValue("");
        setOpenBalanceTab(false);
        setBuySellTrigger(!buySellTrigger);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="w-full h-full flex flex-col cursor-pointer text-[#333333] ">
      <div>
        <h1 className="text-[14px]">Wallet</h1>
        <div
          className={`bg-[#dddddd] p-2 rounded-lg  transition-all duration-700 transform  ${
            openBalanceTab
              ? "h-auto transition-all duration-700 transform  opacity-100"
              : " h-auto transition-all duration-700 transform  "
          }`}
        >
          <div className="flex flex-row items-start justify-between">
            <div className="flex flex-col items-start justify-start">
              <h2 className="text-[11px] text-[#858585bb]">
                Available Balance
              </h2>
              <span className="font-bold text-[17px]">${wallet}</span>
            </div>
            <div
              className={`select-none w-[16px] h-[16px] bg-[#c5c5c5] flex items-center justify-center rounded-full font-bold text-[25px] p-5 ${
                openBalanceTab
                  ? "transition-all duration-700 transform rotate-45"
                  : "transition-all duration-700 transform rotate-0"
              }`}
              onClick={() => {
                setOpenBalanceTab(!openBalanceTab);
              }}
            >
              +
            </div>
          </div>

          {openBalanceTab && (
            <div className="flex flex-row items-center justify-center gap-x-3 my-3">
              <input
                className="w-[120px] p-1 rounded-lg px-2 font-semibold"
                type="text"
                pattern="[0-9\-]*"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                onKeyPress={(event) => {
                  // Allow digits, decimal point, and minus sign
                  if (!/[0-9\-\.]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              ></input>
              <button
                onClick={handleSubmit}
                disabled={!value}
                className="flex-1 bg-green-500 rounded-lg px-2 py-1"
              >
                Add
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-row justify-between mt-3 gap-x-3">
        <div className="flex-1 px-3">
          <h1 className="text-[14px] ">Quantity</h1>
          <div className="bg-[#dddddd] p-[6px] rounded-xl flex flex-row items-center justify-center relative">
            <h1 className="font-medium text-[15px]">{quantity.toFixed(3)}</h1>
            <button
              disabled={quantity <= 0}
              className={`"select-none w-[18px] h-[18px] bg-[#c5c5c5] flex items-center justify-center rounded-full font-medium text-[19px] p-3 absolute -left-3 ${
                quantity <= 0 ? "cursor-not-allowed" : ""
              }`}
              onClick={async () => {
                if (quantity < 1 && quantity > 0) {
                  const newQuantity = 0;
                  setQuantity(newQuantity);
                  const newAmount = (await newQuantity) * currentPrice;
                  setAmount(newAmount);
                } else {
                  const newQuantity = (await quantity) - 1;
                  setQuantity(newQuantity);
                  const newAmount = (await newQuantity) * currentPrice;
                  setAmount(newAmount);
                }
              }}
            >
              -
            </button>
            <button
              className="select-none w-[18px] h-[18px] bg-[#c5c5c5] flex items-center justify-center rounded-full font-medium text-[19px] p-3 absolute -right-3"
              onClick={async () => {
                const newQuantity = (await quantity) + 1;
                if (newQuantity <= maxQuantityToBuy) {
                  setQuantity(newQuantity);
                  const newAmount = newQuantity * currentPrice;
                  setAmount(newAmount);
                }
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className="flex-1 px-3">
          <h1 className="text-[14px]">Amount</h1>
          <div className="bg-[#dddddd] p-[6px] rounded-xl flex flex-row items-center justify-center relative">
            <h1 className="font-medium text-[15px]">
              {quantity ? amount.toFixed(2) : "0"}
            </h1>
            <button
              disabled={amount <= 0}
              className={`select-none w-[18px] h-[18px] bg-[#c5c5c5] flex items-center justify-center rounded-full font-medium text-[19px] p-3 absolute -left-3 ${
                amount <= 0 ? "cursor-not-allowed" : ""
              }`}
              onClick={async () => {
                const newAmount = (await amount) - 10;
                setAmount(newAmount);
                const newQuantity = (await newAmount) / currentPrice;
                setQuantity(newQuantity);
              }}
            >
              -
            </button>
            <button
              disabled={wallet <= amount}
              className={`select-none w-[18px] h-[18px] bg-[#c5c5c5] flex items-center justify-center rounded-full font-medium text-[19px] p-3 absolute -right-3 ${
                amount < 0 ? "cursor-not-allowed" : ""
              }`}
              onClick={async () => {
                const newAmount = (await amount) + 10;
                setAmount(newAmount);
                const newQuantity = (await newAmount) / currentPrice;
                setQuantity(newQuantity);
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-4 mt-2">
        <button
          className="w-full bg-green-500 p-2 rounded-lg my-2"
          onClick={() => {
            buyStocks();
            setAmount(0);
            setQuantity(0);
          }}
        >
          Buy
        </button>

        <button
          className="w-full bg-red-500 p-2 rounded-lg my-2"
          onClick={() => setShowPortfolio(true)}
        >
          Sell
        </button>
      </div>
    </div>
  );
};

export default Options;
