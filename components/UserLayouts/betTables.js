"use client";
import React, { useState } from "react";

const BetTables = () => {
  const bets = [
    {
      game: "Star Quest",
      user: "user***32",
      location: "United States",
      timeDate: "09:45, 02 Nov 2023",
      betAmount: "$345.2K",
      multiplier: "3.5x",
      payout: "$1208.2K",
    },
    {
      game: "Treasure Island",
      user: "user***88",
      location: "France",
      timeDate: "16:30, 03 Nov 2023",
      betAmount: "$920K",
      multiplier: "2.2x",
      payout: "$2024K",
    },
    {
      game: "Dragon's Lair",
      user: "user***13",
      location: "Japan",
      timeDate: "10:15, 04 Nov 2023",
      betAmount: "$220.5K",
      multiplier: "7.1x",
      payout: "$1563.55K",
    },
    {
      game: "Lucky Leprechaun",
      user: "user***55",
      location: "Ireland",
      timeDate: "14:20, 05 Nov 2023",
      betAmount: "$600K",
      multiplier: "4.5x",
      payout: "$2700K",
    },
    {
      game: "Pharaoh's Fortune",
      user: "user***77",
      location: "Egypt",
      timeDate: "11:55, 06 Nov 2023",
      betAmount: "$1500K",
      multiplier: "6.2x",
      payout: "$9300K",
    },
  ];

  const [selectedTable, setSelectedTable] = useState(null);
  return (
    <div className="my-10">
      <div className="flex flex-row gap-x-5">
        <p className="font-bold tex-[20px] cursor-pointer ">All Bets</p>
        <p className="font-bold tex-[20px] cursor-pointer text-[#5a5a5a] ">
          High Rollers
        </p>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-5">
        <table className="w-full text-sm text-left rtl:text-right ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-300 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Game
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                User
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Location
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Betting Time&Date
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Bet Amount
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Multiplier
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Payout
              </th>
            </tr>
          </thead>
          <tbody>
            {bets.map((product, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0
                    ? "even:bg-gray-50 even:dark:bg-gray-800"
                    : "odd:bg-white odd:dark:bg-gray-900"
                } border-b border-gray-300`}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {product.game}
                </th>
                <td className="px-6 py-4 text-center">{product.user}</td>
                <td className="px-6 py-4 text-center">{product.location}</td>
                <td className="px-6 py-4 text-center">{product.timeDate}</td>
                <td className="px-6 py-4 text-center">{product.betAmount}</td>
                <td className="px-6 py-4 text-center">{product.multiplier}</td>
                <td className="px-6 py-4 text-center">{product.payout}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BetTables;
