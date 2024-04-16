"use client";
import React, { useEffect, useRef, useState } from "react";
import { createChart, ColorType } from "lightweight-charts";

const TestChartTwo = ({ setCurrentPrice, markers }) => {
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

        chartInstanceRef.current.timeScale().getVisibleLogicalRange();

        seriesRef.current = chartInstanceRef.current.addAreaSeries({
          topColor: "rgba(38, 166, 154, 0.4)",
          bottomColor: "rgba(38, 166, 154, 0.1)",
          lineColor: "#26a69a",
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
    <div
      style={{ width: "100%", height: "100%" }}
      className="rounded-lg"
      ref={chartContainerRef}
    />
  );
};

export default TestChartTwo;
