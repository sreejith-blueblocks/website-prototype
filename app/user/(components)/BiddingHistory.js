import React from "react";

import { FiArrowUpRight, FiArrowDownRight } from "react-icons/fi";

const BiddingHistory = () => {
  const datas = [
    {
      id: 1,
      name: "Bob Johnson",
      message:
        "Buy @ $954.56 and Sold @ $985.27 Quantity - 03.00 , Amount - $103",
      value: 12,
    },
    {
      id: 2,
      name: "John Doe",
      message:
        "Buy @ $954.56 and Sold @ $985.27 Quantity - 03.00 , Amount - $103",
      value: 20,
    },
    {
      id: 3,
      name: "Jane Smith",
      message:
        "Buy @ $954.56 and Sold @ $985.27 Quantity - 03.00 , Amount - $103",
      value: -5,
    },
  ];
  return (
    <div className="my-6">
      <div className="">
        <p className="text-[18px] font-bold">Bidding History</p>
      </div>
      <div className="my-[10px] bg-[#EDEFFC] p-[15px] rounded-xl">
        {datas.map((data) => (
          <div
            key={data.id}
            className="flex flex-row justify-between items-center gap-3 my-5"
          >
            <div className="w-[35px] h-[35px] rounded-full bg-slate-500 "></div>
            <div className="flex-1">
              <p className="text-[14px] font-bold">{data.name}</p>
              <p className="text-[11px] text-[#999999] leading-3 text-balance">
                {data.message}
              </p>
            </div>
            <div>
              {data.value < 0 ? (
                <FiArrowDownRight
                  className={`text-[13px] inline-block text-[#ff2c2c] }`}
                />
              ) : (
                <FiArrowUpRight
                  className={`text-[13px] inline-block text-[#42ff29] }`}
                />
              )}
              <p className="text-[13px] inline-block">{data.value || 0}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BiddingHistory;
