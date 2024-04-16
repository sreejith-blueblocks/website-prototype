"use client";
import React, { useEffect, useRef, useState } from "react";
import { createChart, ColorType } from "lightweight-charts";
import axios from "axios";

const CandlestickChart = () => {
  const [data, setData] = useState([]);

  const chartContainerRef = useRef();

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: "white" },
        textColor: "black",
      },

      width: chartContainerRef.current.clientWidth,
      height: 500,
    });
    chart.timeScale().fitContent();

    const newSeries = chart.addCandlestickSeries({
      upColor: "#26a69a",
      downColor: "#ef5350",
      borderVisible: false,
      wickUpColor: "#26a69a",
      wickDownColor: "#ef5350",
    });

    const fetchData = async () => {
      try {
        // Fetch data from Alpha Vantage API
        const apiKey = "KRDHMKKA5NPWBJG0"; // Replace with your actual API key
        const symbol = "IBM"; // Symbol for which you want to fetch data
        const interval = "5min"; // Interval for data (e.g., 5min, 15min, 30min, 1hour)

        const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=${interval}&apikey=${apiKey}`;

        const response = await axios.get(url);

        // Extract relevant data from the response
        const timeSeriesData = response.data["Time Series (5min)"];
        let newData = [];

        // Convert data to the required format for the chart
        for (let key in timeSeriesData) {
          const time = new Date(key).getTime();
          const {
            "1. open": open,
            "2. high": high,
            "3. low": low,
            "4. close": close,
          } = timeSeriesData[key];
          newData.push({
            time,
            open: parseFloat(open),
            high: parseFloat(high),
            low: parseFloat(low),
            close: parseFloat(close),
          });
        }

        // Sort data by time in ascending order
        newData.sort((a, b) => a.time - b.time);

        // Update state and chart with new data
        setData(newData);
        newSeries.setData(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Fetch data initially

    const intervalId = setInterval(fetchData, 300000); // Update data every 5 minutes

    return () => {
      clearInterval(intervalId);
      chart.remove();
    };
  }, []);

  return (
    <div className="">
      <div className="" ref={chartContainerRef} />
    </div>
  );
};

export default CandlestickChart;
