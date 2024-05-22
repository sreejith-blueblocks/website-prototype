"use client";
import React, { useEffect, useRef, useState } from "react";
import { createChart, ColorType } from "lightweight-charts";
import axios from "axios";

const Chart = ({ markers, responseData, setResponseData, setMarkers }) => {
  const chartContainerRef = useRef();
  const chartInstanceRef = useRef(null);
  const seriesRef = useRef(null);
  const [tooltipPrice, settooltipPrice] = useState(0);

  const tooltipRef = useRef(null);

  useEffect(() => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.subscribeCrosshairMove((param) => {
        const tooltip = tooltipRef.current;
        if (param.time && param.seriesData.size > 0) {
          const dateStr = param.time;
          const data = param.seriesData.get(seriesRef.current);
          const price = data.value !== undefined ? data.value : data.close;
          settooltipPrice(price);

          const x = param.point.x;
          const y = param.point.y;

          // tooltip.style.display = "block";
          // tooltip.style.left = x + "px";
          // tooltip.style.top = y + "px";
          // tooltip.innerHTML = `
          //   <div style="color: rgba(38, 166, 154, 1)">ABC Inc.</div>
          //   <div style="font-size: 24px; margin: 4px 0px; color: black">
          //     ${Math.round(100 * price) / 100}
          //   </div>
          //   <div style="color: black">${dateStr}</div>
          // `;
        } else {
          tooltip.style.display = "none";
          settooltipPrice();
        }
      });
    }
  }, [tooltipRef, responseData]);

  useEffect(() => {
    const makeMarker = async (option) => {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_USER_BASE_URL}Marker?userid=8`,
          { userid: 8 },
          {
            headers: {},
          }
        );

        let responseData = response.data;
        responseData = responseData.map((marker) => ({
          ...marker,
          position: marker?.action == "BUY" ? "belowBar" : "aboveBar",
          color: marker?.action == "BUY" ? "#00FF00" : "#FF0000",
          shape: marker?.action == "BUY" ? "arrowUp" : "arrowDown",
          text:
            marker?.action == "BUY"
              ? `Buy@${marker.price}`
              : `Sell@${marker.price}`,
        }));

        setMarkers(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    makeMarker();
  }, [responseData]);

  useEffect(() => {
    const fetchData = async () => {
      const authToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyMSIsImp0aSI6IjU4MGQwZTMzLTFlMzEtNDU5NS04ZGZlLTVmYWZmNjQyY2RhNyIsImV4cCI6MTcxNDA0Mjk1OCwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo2MTk1NSIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJ9.GkhsY-3961S-ceWSJTgrGGaeOKsTTsMJ7E-HdTy1334";
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_USER_BASE_URL}ViewMarketData`,
          {},
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );

        const responseData = response.data.sort((a, b) => a.time - b.time);
        setResponseData(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const intervalId = setInterval(fetchData, 1000);
    fetchData();
    const seriesOptions = {
      topColor: "rgba(33, 150, 243, 0.56)",
      bottomColor: "rgba(33, 150, 243, 0.04)",
      lineColor: "rgba(33, 150, 243, 1)",
      lineWidth: 2,
    };

    const chartOptions = {
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
        timeVisible: true,
        secondsVisible: false,
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
    };

    if (chartContainerRef.current && !chartInstanceRef.current) {
      chartInstanceRef.current = createChart(
        chartContainerRef.current,
        chartOptions
      );
      seriesRef.current = chartInstanceRef.current.addAreaSeries(seriesOptions);
    }

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    seriesRef.current.setData(responseData);
    seriesRef.current.setMarkers(markers);
  }, [responseData]);

  return (
    <>
      <div
        style={{ width: "100%", height: "100%" }}
        className="rounded-lg max-h-[550px] relative"
        ref={chartContainerRef}
      >
        {/* Tooltip */}
        <div
          ref={tooltipRef}
          style={{
            display: "none",
            position: "absolute",
            padding: "8px",
            boxSizing: "border-box",
            fontSize: "12px",
            textAlign: "left",
            zIndex: "1000",
            border: "1px solid",
            borderRadius: "2px",
            background: "white",
            color: "black",
          }}
        />{" "}
        {responseData && (
          <div className="absolute top-0 left-0 z-[990]">
            <p className="text-[15px] ">NeoChain</p>
            <span className="text-[20px] font-bold">
              ${" "}
              {tooltipPrice ||
                responseData[responseData.length - 1]?.value ||
                0}
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default Chart;
