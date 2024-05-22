"use client";
import Assests from "@/app/user/(components)/Assests";
import Chart from "@/app/user/(components)/Chart";
import Options from "@/app/user/(components)/Options";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaBitcoin } from "react-icons/fa6";
import { IoIosArrowDropleft, IoIosArrowDroprightCircle } from "react-icons/io";
import PortfolioTabs from "./portfolioTabs";

const TradingChart = () => {
  const [wallet, setWallet] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [amount, setAmount] = useState(0);
  const [profitLoss, setProfitLoss] = useState(0);
  const [token, setToken] = useState("");
  const [buySellTrigger, setBuySellTrigger] = useState(true);
  //   console.log(currentPrice);
  const [markers, setMarkers] = useState([]);
  const [responseData, setResponseData] = useState([]);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [portfolio, setPortfolio] = useState([]);

  const currentPrice = responseData[responseData.length - 1]?.value;
  const maxQuantityToBuy = wallet / currentPrice;
  // console.log(maxQuantityToBuy);

  // console.log(tempMarkers, markers);

  useEffect(() => {
    function getTokenFromCookies() {
      const cookies = document.cookie.split(";");
      for (let cookie of cookies) {
        const [name, value] = cookie.trim().split("=");
        if (name === "token") {
          return value;
        }
      }
      return null;
    }

    const token = getTokenFromCookies();
    setToken(token);
  }, []);

  useEffect(() => {
    const fetchWallet = async () => {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_USER_BASE_URL}ViewBalance?userid=8`,
          { userId: 8, coin: "" },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const responseData = response.data;
        setWallet(responseData);
        console.log(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchWallet();

    const fetchPandL = async () => {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_USER_BASE_URL}ViewTotalProfit`,
          { userId: 8, stockId: 35, coin: "" },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const responseData = response.data;
        setProfitLoss(responseData);
        console.log(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchPandL();

    const fetchPortfolio = async () => {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_USER_BASE_URL}UserAssets`,
          { userId: 8, coin: "" },
          {
            headers: {
              // Authorization: `Bearer ${token}`,
            },
          }
        );

        const responseData = response.data;
        setPortfolio(responseData?.coins);
        console.log(responseData?.coins);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchPortfolio();
  }, [buySellTrigger]);

  const buyStocks = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_USER_BASE_URL}TradeShare/Buy`,
        { userId: 8, quantity: quantity, coin: "", coin: "Bitcoin" },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const responseData = response.data;

      console.log(responseData);
      setBuySellTrigger(!buySellTrigger);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const sellStocks = async (id) => {
    console.log("hello");
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_USER_BASE_URL}TradeShare/Sell`,
        { userId: 8, quantity: sellQuantity, stockID: id, coin: "" },
        {
          headers: {
            Authorization: `Bearer ${token}`,
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

  return (
    <div className="py-5 relative">
      <header className="flex flex-row items-center gap-2 justify-between ">
        <div>
          <FaBitcoin className="text-[28px] text-[#ecd134] inline-block m-auto" />
          <p className="text-[25px] font-bold inline-block ml-2">
            NeoChain <span className="font-normal">(NEC)</span>
          </p>
        </div>
        <div className="h-[1px] flex-1 bg-[#c2c2c2a8]"></div>
        <div>
          <IoIosArrowDropleft className="inline-block text-[30px] text-[#5067EB]" />
          <IoIosArrowDroprightCircle className="inline-block text-[30px] text-[#5067EB] ml-1" />
        </div>
      </header>

      <div className="w-full h-[360px] flex flex-row my-4">
        <div className="h-full  flex-1 border-[1px] border-[#C2C2C2] rounded-l-2xl p-2 pb-3">
          <Chart
            markers={markers}
            responseData={responseData}
            setResponseData={setResponseData}
            setMarkers={setMarkers}
          />
        </div>
        <div className="h-full  w-[30%] border-y-[1px] border-r-[1px] border-[#C2C2C2] rounded-r-2xl p-2 flex flex-col overflow-y-scroll no-scroll-bar">
          <Options
            wallet={wallet}
            setQuantity={setQuantity}
            quantity={quantity}
            setAmount={setAmount}
            currentPrice={currentPrice}
            amount={amount}
            buyStocks={buyStocks}
            setShowPortfolio={setShowPortfolio}
            setBuySellTrigger={setBuySellTrigger}
            buySellTrigger={buySellTrigger}
            maxQuantityToBuy={maxQuantityToBuy}
            profitLoss={profitLoss}
            // makeMarker={makeMarker}
          />
          <Assests />
        </div>
      </div>
      {showPortfolio && (
        <div className="absolute shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[999] w-[60%] h-[60%] bg-[#fafafa] flex flex-col items-center p-2 rounded-xl">
          <div className="relative w-full text-center">
            <h1 className="text-[20px] font-semibold ">Portfolio</h1>
            <button
              onClick={() => {
                setShowPortfolio(false);
              }}
              className="text-[14px] font-semibold absolute right-0 top-0 z-[1000] bg-[#eeeeee] p-2 py-1 rounded-lg"
            >
              Cancel
            </button>
          </div>
          <div>
            <p>
              P&L<span className="text-green-500">{profitLoss}%</span>
            </p>
          </div>
          <p className="text-start w-full text-[13px] text-[#8d8d8d]">
            Purchased
          </p>
          <div className=" flex-1 w-full overflow-y-scroll ">
            {portfolio.map((data, index) => (
              <PortfolioTabs
                key={index}
                maxQuantity={data?.totalQuantity}
                assetName={data?.coinType}
                assetId={data?.coinId}
                setShowPortfolio={setShowPortfolio}
                setBuySellTrigger={setBuySellTrigger}
                buySellTrigger={buySellTrigger}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TradingChart;
