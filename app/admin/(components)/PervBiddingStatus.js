import React from "react";

const PervBiddingStatus = () => {
  const tableData = [
    {
      userName: "Adam Groff",
      location: "London",
      assets: "BTC",
      biddingTime: "13:05",
      biddingDate: "01 Nov 2023",
      bidAmount: "$686.8K",
    },
    {
      userName: "Ruby Mathews",
      location: "Canada",
      assets: "ADA",
      biddingTime: "13:05",
      biddingDate: "01 Nov 2023",
      bidAmount: "$686.8K",
    },
    {
      userName: "Eric Effiong",
      location: "India",
      assets: "XRP",
      biddingTime: "13:05",
      biddingDate: "01 Nov 2023",
      bidAmount: "$686.8K",
    },
    {
      userName: "Otis Milburn",
      location: "Korea",
      assets: "BTC",
      biddingTime: "13:05",
      biddingDate: "01 Nov 2023",
      bidAmount: "$686.8K",
    },
    {
      userName: "Hope Haddon",
      location: "Japan",
      assets: "SOL",
      biddingTime: "13:05",
      biddingDate: "01 Nov 2023",
      bidAmount: "$686.8K",
    },
    {
      userName: "Jackson Marchetti",
      location: "Australia",
      assets: "ETH",
      biddingTime: "13:05",
      biddingDate: "01 Nov 2023",
      bidAmount: "$686.8K",
    },
  ];

  return (
    <div className="my-10">
      <header className="flex flex-row justify-between items-center">
        <h1 className="text-[24px] font-bold">Bidding Status</h1>
        <p className="text-[#5067EB]">View all</p>
      </header>
      <div className="relative overflow-x-auto shadow-2xl rounded-lg my-6">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-[#EDEFFC]">
            <tr>
              <th scope="col" className="px-6 py-5">
                User Name
              </th>
              <th scope="col" className="px-6 py-5">
                Location
              </th>
              <th scope="col" className="px-6 py-5">
                Assets
              </th>
              <th scope="col" className="px-6 py-5">
                Bidding Time, Date
              </th>
              <th scope="col" className="px-6 py-5">
                Bid Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index} className="bg-white border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  {data.userName}
                </th>
                <td className="px-6 py-4">{data.location}</td>
                <td className="px-6 py-4">{data.assets}</td>
                <td className="px-6 py-4">
                  {data.biddingTime}, {data.biddingDate}
                </td>
                <td className="px-6 py-4">{data.bidAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PervBiddingStatus;
