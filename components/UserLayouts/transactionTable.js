"use client";
import { UserContext } from "@/contexts/UserContext";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

const TransactionTable = () => {
  const [historyList, setHistoryList] = useState([]);
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  console.log(historyList);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BETGAME_BASE_URL}transactions/user/${user.userid}`
        );

        console.log(response.data);
        if (response.status === 200) {
          setHistoryList(response.data.reverse());
          setLoading(true);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user.userid]);

  return (
    <div className="py-4">
      <div>
        <h1 className="text-[20px] font-bold mb-3">Betting Transaction</h1>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto small-scrollbar">
          <div className="align-middle inline-block min-w-full ">
            <div className=" border-b border-gray-200 sm:rounded-lg max-h-[570px] max-w-full overflow-x-hidden">
              {loading ? (
                <p>Loading...</p>
              ) : (
                <table className="min-w-full divide-y divide-gray-200 text-[14px]">
                  <thead className="bg-gray-50 font-extrabold sticky top-0">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                        #
                      </th>
                      <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                        Game Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                        Bet Time
                      </th>

                      <th className="px-6 py-3 text-center text-xs text-gray-500 uppercase tracking-wider">
                        Bet Amount
                      </th>
                      <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                        Slot ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                        Bet Item
                      </th>

                      <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                        Slot Number
                      </th>
                      <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                        Winning Price
                      </th>
                      <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                        Wallet Balance
                      </th>
                      <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                        Result
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {historyList.map((history, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {history?.gameName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          {`${new Date(history?.betTime).getDate()}/${new Date(
                            history?.betTime
                          ).getMonth()}/${new Date(
                            history?.betTime
                          ).getFullYear()}`}{" "}
                          <br />
                          <p>
                            {`${new Date(
                              history?.betTime
                            ).getHours()}:${new Date(
                              history?.betTime
                            ).getMinutes()}:${new Date(
                              history?.betTime
                            ).getSeconds()}`}
                          </p>
                        </td>
                        <td
                          className={`${
                            history?.profitorLoss === "Loss"
                              ? "text-red-500"
                              : "text-green-500"
                          } px-6 py-4 whitespace-nowrap text-center font-bold`}
                        >
                          {`${history?.profitorLoss === "Loss" ? "-" : "+"}${
                            history?.betAmount
                          }`}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {history?.slotId}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {history?.betItemName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {history?.slotNumber}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {history?.winningPrice}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {history?.walletBalance}
                        </td>

                        <td
                          className={`px-6 py-4 whitespace-nowrap font-bold  `}
                        >
                          <p
                            className={`text-center rounded-lg text-[13px] p-[1px] px-4 ${
                              history?.profitorLoss === "Loss"
                                ? "text-red-500 bg-red-200"
                                : "text-green-500 bg-green-200"
                            }`}
                          >
                            {history?.profitorLoss === "Loss" ? "Lost" : "Win"}
                          </p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionTable;
