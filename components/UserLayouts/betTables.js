"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const BetTables = () => {
  const [bets, setBets] = useState([]);
  useEffect(() => {
    const fetchWallet = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BETGAME_BASE_URL}winningHorseView`,

          {
            headers: {
              Authorization: `Bearer ${"token"}`,
            },
          }
        );

        setBets(response?.data?.raceResults);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchWallet();
  }, []);


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
                #
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Game
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Player
              </th>

              <th scope="col" className="px-6 py-3 text-center">
                Betting Time&Date
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Winning Item
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Slot Number
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Payout
              </th>
            </tr>
          </thead>
          <tbody>
            {bets.map((product, index) => {
              return (
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
                    {index + 1}
                  </th>
                  <td className="px-6 py-4 text-center">{product.gameName}</td>
                  <td className="px-6 py-4 text-center">{product.username}</td>
                  <td className="px-6 py-4 text-center">{`${
                    new Date(product.betTime).toISOString().split("T")[0]
                  }`}</td>
                  <td className="px-6 py-4 text-center">
                    {product.winningItemName}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {product.slotNumber}
                  </td>
                  <td className="px-6 py-4 text-center">{index + 300}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BetTables;
