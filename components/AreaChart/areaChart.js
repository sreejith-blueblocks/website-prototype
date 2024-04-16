"use client";
import React, { useEffect, useRef, useState } from "react";
import { createChart, ColorType } from "lightweight-charts";

const AreaChart = () => {
  const chartContainerRef = useRef();
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const socket = new WebSocket(
      "wss://ws.finnhub.io?token=co9olfpr01qgj7bnb34gco9olfpr01qgj7bnb350"
    );

    const subscribeSymbols = ["AAPL", "BINANCE:BTCUSDT", "ICMARKETS:2"];

    // Connection opened -> Subscribe
    socket.addEventListener("open", function (event) {
      subscribeSymbols.forEach((symbol) => {
        socket.send(JSON.stringify({ type: "subscribe", symbol: symbol }));
      });
    });

    // Listen for messages
    socket.addEventListener("message", function (event) {
      const message = JSON.parse(event.data);
      if (message.type === "trade") {
        const newData = {
          time: message.data[0].t,
          value: message.data[0].p,
        };
        setChartData((prevData) => [...prevData, newData]);
      }
    });

    return () => {
      socket.close();
    };
  }, []);

  useEffect(() => {
    if (chartContainerRef.current && chartData.length > 0) {
      // Sort chart data by time
      const sortedData = [...chartData].sort((a, b) => a.time - b.time);

      // Ensure unique timestamps
      const uniqueData = [];
      let prevTime = null;
      sortedData.forEach((dataPoint) => {
        if (dataPoint.time !== prevTime) {
          uniqueData.push(dataPoint);
          prevTime = dataPoint.time;
        }
      });

      const chart = createChart(chartContainerRef.current, {
        layout: {
          background: { type: ColorType.Solid, color: "rgb(34,34,34)" },
          textColor: "white",
        },
        grid: {
          horzLines: {
            color: "#383838",
          },
          vertLines: {
            color: "#383838",
          },
        },
        width: chartContainerRef.current.clientWidth,
        height: chartContainerRef.current.clientHeight,
      });
      chart.timeScale().getVisibleLogicalRange();

      const series = chart.addAreaSeries({
        topColor: "rgba(38, 166, 154, 0.4)",
        bottomColor: "rgba(38, 166, 154, 0.1)",
        lineColor: "#26a69a",
        lineWidth: 2,
      });

      series.setData(uniqueData);

      return () => {
        chart.remove();
      };
    }
  }, [chartData]);

  return (
    <div
      style={{ width: "100%", height: "100%" }}
      className="rounded-lg"
      ref={chartContainerRef}
    />
  );
};

export default AreaChart;
