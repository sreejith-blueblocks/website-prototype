"use client";
import { UserContext } from "@/contexts/UserContext";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

const TradeTransactionTable = () => {
  const [historyList, setHistoryList] = useState([]);
  const { user, token } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(7);
  const [totalRecords, setTotalRecords] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_USER_BASE_URL}User/ViewTransactionHistory`,
          {
            userId: user.userid,
            pageNumber,
            pageSize,
            coin: "string",
            email: "string",
            name: "string",
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          setHistoryList(response.data.results);
          //   console.log(response.data.totalRecords);
          setTotalRecords(response.data.totalRecords);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user.userid, pageNumber, pageSize]);

  const handlePageChange = (newPageNumber) => {
    if (
      newPageNumber > 0 &&
      newPageNumber <= Math.ceil(totalRecords / pageSize)
    ) {
      setPageNumber(newPageNumber);
    }
  };
  return (
    <div className="py-4">
      <div>
        <h1 className="text-[20px] font-bold mb-3">Trading Transaction</h1>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto small-scrollbar">
          <div className="align-middle inline-block min-w-full ">
            <div className="border-b border-gray-200 sm:rounded-lg max-h-[500px] max-w-full overflow-x-hidden">
              {loading ? (
                <p>Loading...</p>
              ) : (
                <>
                  <table className="min-w-full divide-y divide-gray-200 text-[14px]">
                    <thead className="bg-gray-50 font-extrabold sticky top-0">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                          #
                        </th>
                        <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                          Transaction ID
                        </th>
                        <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                          Action
                        </th>
                        <th className="px-6 py-3 text-center text-xs text-gray-500 uppercase tracking-wider">
                          Quantity
                        </th>
                        <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                          Price
                        </th>
                        <th className="px-6 py-3 text-center text-xs text-gray-500 uppercase tracking-wider">
                          Cost
                        </th>
                        <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                          User Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                          Coin
                        </th>
                        <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                          Date & Time
                        </th>
                        <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                          P&L
                        </th>
                        <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                          Wallet Balance
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {historyList.map((history, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {index + 1 + (pageNumber - 1) * pageSize}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {history.transactionId}
                          </td>
                          <td
                            className={`px-6 py-4 whitespace-nowrap font-bold ${
                              history.action === "SELL"
                                ? "text-red-500"
                                : "text-green-500"
                            }`}
                          >
                            {history.action}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {history.quantity}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {history.price}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {history.totalCost}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {history.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {history.coin}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            {`${new Date(
                              history.transactionDateTime
                            ).getDate()}/${
                              new Date(history.transactionDateTime).getMonth() +
                              1
                            }/${new Date(
                              history.transactionDateTime
                            ).getFullYear()}`}
                            <br />
                            <p>{`${new Date(
                              history.transactionDateTime
                            ).getHours()}:${new Date(
                              history.transactionDateTime
                            ).getMinutes()}:${new Date(
                              history.transactionDateTime
                            ).getSeconds()}`}</p>
                          </td>
                          <td
                            className={`px-6 py-4 whitespace-nowrap text-center font-bold ${
                              history.profitLossValue < 0
                                ? "text-red-500"
                                : "text-green-500"
                            }`}
                          >
                            {history.profitLossValue}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {history.userBalance}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </>
              )}
            </div>
          </div>
        </div>
        {loading ? (
          ""
        ) : (
          <div className="flex justify-center gap-x-7 items-center mt-4">
            <button
              onClick={() => handlePageChange(pageNumber - 1)}
              disabled={pageNumber === 1}
              className="px-4 py-2 bg-gray-400 text-gray-700 rounded disabled:opacity-50 font-bold"
            >
              Previous
            </button>
            <span>
              Page {pageNumber} of {Math.ceil(totalRecords / pageSize)}
            </span>
            <button
              onClick={() => handlePageChange(pageNumber + 1)}
              disabled={pageNumber === Math.ceil(totalRecords / pageSize)}
              className="px-4 py-2 bg-gray-400 text-gray-700 rounded disabled:opacity-50 font-bold"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TradeTransactionTable;
