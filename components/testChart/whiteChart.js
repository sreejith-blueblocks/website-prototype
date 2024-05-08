"use client";
import React, { useEffect, useRef, useState } from "react";
import { createChart, ColorType } from "lightweight-charts";
import { FaCoins } from "react-icons/fa6";

const WhiteChart = ({ setCurrentPrice, markers }) => {
  const chartContainerRef = useRef();
  const chartInstanceRef = useRef(null);
  const seriesRef = useRef(null);
  const [chartData, setChartData] = useState([]);

  // Function to generate dummy data
  const generateData = () => {
    const currentTime = Date.now();
    const prevDataPoint = chartData[chartData.length - 1] || {
      time: currentTime,
      value: 1000,
    };

    const volatility = Math.random() * 2;
    const drift = Math.random() < 0.1 ? 1 : -1;
    const driftAmount = Math.random() * 0.5;
    const volume = Math.random() * 1000;
    const change = (Math.random() * volatility * drift * volume) / 100;
    let newValue = prevDataPoint.value + change;
    const clampedValue = Math.max(Math.min(newValue, 1500), 100);

    const newDataPoint = {
      time: currentTime,
      value: clampedValue,
    };

    setChartData((prevData) => [...prevData, newDataPoint]);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      generateData();
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (chartContainerRef.current && chartData.length > 0) {
      if (!chartInstanceRef.current) {
        chartInstanceRef.current = createChart(chartContainerRef.current, {
          layout: {
            background: { type: ColorType.Solid, color: "#ffffff" },
            textColor: "black",
          },
          crosshair: {
            horzLine: {
              visible: false,
              labelVisible: false,
            },
            vertLine: {
              visible: true,
              style: 0,
              width: 2,
              color: "rgba(32, 38, 46, 0.1)",
              labelVisible: false,
            },
          },
          rightPriceScale: {
            scaleMargins: {
              top: 0.35,
              bottom: 0.2,
            },
            borderVisible: false,
          },
          timeScale: {
            borderVisible: false,
          },
          grid: {
            horzLines: {
              color: "#ffffff",
            },
            vertLines: {
              color: "#ffffff",
            },
          },
          width: chartContainerRef.current.clientWidth,
          height: chartContainerRef.current.clientHeight,
        });

        chartInstanceRef.current.timeScale().getVisibleLogicalRange();

        seriesRef.current = chartInstanceRef.current.addAreaSeries({
          topColor: "#4356fa",
          bottomColor: "#a6afff",
          lineColor: "#1c32fc",
          lineWidth: 2,
        });
      }

      // Sort chart data by time
      const sortedData = [...chartData].sort((a, b) => a.time - b.time);

      // Ensure unique timestamps
      const uniqueData = [];
      let prevTime = null;
      sortedData.forEach((dataPoint) => {
        if (dataPoint.time !== prevTime) {
          uniqueData.push(dataPoint);
          setCurrentPrice(dataPoint);
          prevTime = dataPoint.time;
        }
      });

      seriesRef.current.setData(uniqueData);
      seriesRef.current.setMarkers(markers);
    }
  }, [chartData]);

  return (
    <>
      <div className=" py-3  flex flex-row items-center justify-start gap-x-3">
        <FaCoins className="text-[28px] text-[#ecd134]" />
        <p className="text-[25px] font-bold">
          NeoChain <span className="font-normal">(NEC)</span>
        </p>
      </div>
      <div
        style={{ width: "100%", height: "100%" }}
        className="rounded-lg max-h-[550px]"
        ref={chartContainerRef}
      />
    </>
  );
};

export default WhiteChart;
