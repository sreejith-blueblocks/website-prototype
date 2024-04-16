"use client";
import React, { useEffect, useRef, useState } from "react";
import { createChart, ColorType } from "lightweight-charts";
import dummyData from "./data";

const TestChart = () => {
  const chartContainerRef = useRef();
  const [chartData, setChartData] = useState([
    {
      time: 1712659529545,
      value: 70468.81,
    },
    {
      time: 1712659530005,
      value: 70468.8,
    },
    {
      time: 1712659530192,
      value: 70468.8,
    },
    {
      time: 1712659530531,
      value: 70468.81,
    },
    {
      time: 1712659531062,
      value: 70468.81,
    },
    {
      time: 1712659531192,
      value: 70468.8,
    },
    {
      time: 1712659531295,
      value: 70468.81,
    },
    {
      time: 1712659531298,
      value: 70470.61,
    },
    {
      time: 1712659532477,
      value: 70472,
    },
    {
      time: 1712659533212,
      value: 70472.01,
    },
    {
      time: 1712659534033,
      value: 70475.87,
    },
    {
      time: 1712659534205,
      value: 70475.86,
    },
    {
      time: 1712659535560,
      value: 70475.86,
    },
    {
      time: 1712659536308,
      value: 70475.86,
    },
    {
      time: 1712659537359,
      value: 70475.87,
    },
    {
      time: 1712659538094,
      value: 70475.87,
    },
    {
      time: 1712659538253,
      value: 70475.86,
    },
    {
      time: 1712659539671,
      value: 70475.87,
    },
    {
      time: 1712659540780,
      value: 70475.87,
    },
    {
      time: 1712659541384,
      value: 70475.86,
    },
    {
      time: 1712659542620,
      value: 70475.86,
    },
    {
      time: 1712659543517,
      value: 70475.86,
    },
    {
      time: 1712659560693,
      value: 70475.87,
    },
    {
      time: 1712659561603,
      value: 70475.86,
    },
    {
      time: 1712659563172,
      value: 70475.86,
    },
    {
      time: 1712659563802,
      value: 70475.87,
    },
    {
      time: 1712659564643,
      value: 70475.86,
    },
    {
      time: 1712659565761,
      value: 70475.87,
    },
    {
      time: 1712659566131,
      value: 70475.87,
    },
    {
      time: 1712659566155,
      value: 70478.77,
    },
    {
      time: 1712659566199,
      value: 70481.89,
    },
    {
      time: 1712659566453,
      value: 70488,
    },
    {
      time: 1712659566678,
      value: 70488,
    },
    {
      time: 1712659566842,
      value: 70488,
    },
    {
      time: 1712659567404,
      value: 70487.99,
    },
    {
      time: 1712659567621,
      value: 70488,
    },
    {
      time: 1712659567630,
      value: 70490,
    },
    {
      time: 1712659567895,
      value: 70493.62,
    },
    {
      time: 1712659568287,
      value: 70493.62,
    },
    {
      time: 1712659568460,
      value: 70497.85,
    },
    {
      time: 1712659568732,
      value: 70497.84,
    },
    {
      time: 1712659569377,
      value: 70497.85,
    },
    {
      time: 1712659569713,
      value: 70497.84,
    },
    {
      time: 1712659570308,
      value: 70497.85,
    },
    {
      time: 1712659570396,
      value: 70497.85,
    },
    {
      time: 1712659570405,
      value: 70500,
    },
    {
      time: 1712659570786,
      value: 70500,
    },
    {
      time: 1712659571210,
      value: 70500,
    },
  ]);
  const [tooltipContent, setTooltipContent] = useState("");
  const [tooltipStyle, setTooltipStyle] = useState({ display: "none" });
  const [symbol1, setSymbol1] = useState("AAPL");
  const [symbol2, setSymbol2] = useState("BINANCE:BTCUSDT");
  const [symbol3, setSymbol3] = useState("ICMARKETS:2");
  const [legendContent, setLegendContent] = useState(`${symbol1} BTCUSDT 1D`);
  const [buyAt, setBuyAt] = useState("1712659529545");
  const [sellAt, setsellAt] = useState("1712659570786");

  const handleSell = () => {
    setsellAt("sell");
    console.log(chartData);
  };
  const handleBuy = () => {
    setBuyAt("buy");
    console.log(chartData[chartData.length - 1]);
  };

  const addMarkers = (data) => {
    if (data.length >= 49) {
      const buyIndex = data.findIndex((item) => item.time === buyAt);
      const datesForMarkers = [data[data.length - 20], data[data.length - 19]];
      console.log(buyIndex, data[data.buyIndex]);
      let indexOfMinPrice = 0;
      for (let i = 1; i < datesForMarkers.length; i++) {
        if (datesForMarkers[i].high < datesForMarkers[indexOfMinPrice].high) {
          indexOfMinPrice = i;
        }
      }

      const markers = [
        {
          time: data[data.length - 48].time,
          position: "aboveBar",
          color: "#f68410",
          shape: "circle",
          text: "D",
        },
      ];

      for (let i = 0; i < datesForMarkers.length; i++) {
        if (i !== indexOfMinPrice) {
          markers.push({
            time: datesForMarkers[i].time,
            position: "aboveBar",
            color: "#e91e63",
            shape: "arrowDown",
            text: "Sell @ " + Math.floor(datesForMarkers[i].high + 2),
          });
        } else {
          markers.push({
            time: datesForMarkers[i].time,
            position: "belowBar",
            color: "#2196F3",
            shape: "arrowUp",
            text: "Buy @ " + Math.floor(datesForMarkers[i].low - 2),
          });
        }
      }

      return markers;
    }
    return [];
  };

  useEffect(() => {
    const socket = new WebSocket(
      "wss://ws.finnhub.io?token=co9olfpr01qgj7bnb34gco9olfpr01qgj7bnb350"
    );

    const subscribeSymbols = [symbol1, symbol2, symbol3];

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
        // console.log(newData);
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
            color: "#282828",
          },
          vertLines: {
            color: "#282828",
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

      // Add markers
      const markers = addMarkers(uniqueData);
      series.setMarkers(markers);

      // Subscribe to crosshair move event
      chart.subscribeCrosshairMove((param) => {
        if (
          param.point === undefined ||
          !param.time ||
          param.point.x < 0 ||
          param.point.x > chartContainerRef.current.clientWidth ||
          param.point.y < 0 ||
          param.point.y > chartContainerRef.current.clientHeight
        ) {
          setTooltipStyle({ display: "none" });
        } else {
          let timestamp = 1712641013697;
          let date = new Date(timestamp);
          let time = date.toLocaleTimeString();
          const dateStr = time;

          const data = param.seriesData.get(series);
          const price = data.value !== undefined ? data.value : data.close;

          setTooltipContent(
            `<div style="color: rgba(38, 166, 154, 1)">ABC Inc.</div><div style="font-size: 24px; margin: 4px 0px; color: black">
            ${Math.round(100 * price) / 100}
            </div><div style="color: black">
            ${dateStr}
            </div>`
          );

          let left = param.point.x + 15;
          if (left > chartContainerRef.current.clientWidth - 80) {
            left = param.point.x - 95;
          }

          let top = param.point.y + 15;
          if (top > chartContainerRef.current.clientHeight - 80) {
            top = param.point.y - 95;
          }

          setTooltipStyle({
            display: "block",
            left: left + "px",
            top: top + "px",
          });
        }

        if (param.time) {
          const data = param.seriesData.get(series);
          const price = data.value !== undefined ? data.value : data.close;
          setLegendContent(`${symbol1} BTCUSDT 1D  ${price.toFixed(2)}`);
        } else {
          setLegendContent(`${symbol1} BTCUSDT 1D`);
        }
      });

      return () => {
        chart.remove();
      };
    }
  }, [chartData]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <div
        style={{ width: "100%", height: "100%" }}
        className="rounded-lg relative"
        ref={chartContainerRef}
      />
      <div
        className="legend absolute top-0 z-50 left-0"
        style={{ color: "white" }}
      >
        {legendContent}
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: tooltipContent }}
        style={{ ...tooltipStyle, position: "absolute", zIndex: 1000 }}
        className="bg-white px-4 py-3 rounded-lg border-2 border-red-600]"
      />
      <div>
        <button
          className="w-[100px] bg-green-500 p-2 rounded-lg mx-2"
          onClick={() => {
            handleBuy("buy");
          }}
        >
          Buy
        </button>
        <button
          className="w-[100px] bg-red-500 p-2 rounded-lg mx-2"
          onClick={() => {
            handleSell();
          }}
        >
          Sell
        </button>
      </div>
    </div>
  );
};

export default TestChart;
