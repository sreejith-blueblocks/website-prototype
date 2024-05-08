"use client";
import React, { useState } from "react";
import WhiteChart from "../testChart/whiteChart";
import LightActions from "../actions/lightActions";
import MoreAssets from "../moreAssets/MoreAssets";

const MainContainerTwo = () => {
  const [wallet, setWallet] = useState(10000);
  const [buyAt, setBuyAt] = useState(0);
  const [sellAt, setSellAt] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const [currentPrice, setCurrentPrice] = useState(null);
  const [profitOrLoss, setProfitOrLoss] = useState(0);
  const [percentageGainOrLoss, setPercentageGainOrLoss] = useState(0);
  const [roi, setRoi] = useState(0);
  //   console.log(currentPrice);
  const [markers, setMarkers] = useState([]);

  //   console.log(markers);

  const handleBuy = () => {
    if (
      currentPrice?.value &&
      currentPrice?.value * quantity <= wallet &&
      quantity > 0
    ) {
      const newWalletAmount = wallet - currentPrice?.value * quantity;
      setWallet(newWalletAmount);
      setBuyAt(currentPrice?.value * quantity);
      markers.push({
        time: currentPrice?.time,
        position: "belowBar",
        color: "#00FF00",
        shape: "arrowUp",
        text: `Buy @ ${currentPrice.value.toFixed()}`,
      });
      setQuantity(0);
      console.log(currentPrice?.value, wallet, buyAt, sellAt);
    } else {
      alert(
        "Insufficient funds or current price not available or invalid quantity"
      );
    }
  };

  const handleSell = () => {
    if (currentPrice?.value && buyAt && quantity > 0) {
      const revenue = currentPrice?.value * quantity; // Calculate revenue from selling
      const cost = buyAt; // Calculate the cost of buying
      const profit = revenue - cost; // Calculate profit
      const newWalletAmount = wallet + revenue; // Update wallet with revenue
      setWallet(newWalletAmount);
      setSellAt(currentPrice?.value);
      setQuantity(0);
      markers.push({
        time: currentPrice?.time,
        position: "aboveBar",
        color: "#ff0000",
        shape: "arrowDown",
        text: `Sell @ ${currentPrice.value.toFixed()}`,
      });
      setProfitOrLoss(profit); // Set profit
      const PLPercentage = (profit / cost) * 100; // Calculate percentage gain/loss
      setPercentageGainOrLoss(PLPercentage); // Set percentage gain/loss
      const roiValue = (profit / cost) * 100;
      setRoi(roiValue); // Set ROI
      setBuyAt(0);
      setSellAt(0);
      console.log(currentPrice?.value, wallet, buyAt, sellAt, profit);
    } else {
      alert(
        "Cannot sell without buying first or current price not available or invalid quantity"
      );
    }
  };

  return (
    <div className="h-full flex flex-row max-w-full ">
      <div className="flex-1">
        <WhiteChart setCurrentPrice={setCurrentPrice} markers={markers} />
      </div>
      <div className="w-[300px] flex flex-col overflow-y-scroll no-scroll-bar">
        <LightActions
          buy={handleBuy}
          sell={handleSell}
          wallet={wallet}
          buyAt={buyAt}
          sellAt={sellAt}
          pl={profitOrLoss}
          percentageGainOrLoss={percentageGainOrLoss}
          roi={roi}
          setQuantity={setQuantity}
          quantity={quantity}
          amount={currentPrice?.value * quantity}
        />
        <MoreAssets />
      </div>
    </div>
  );
};

export default MainContainerTwo;
