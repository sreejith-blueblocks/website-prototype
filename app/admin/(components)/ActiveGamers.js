import React from "react";

const ActiveGamers = () => {
  const datas = [
    { id: 1, name: "Cal Bowman", mostPlayed: "Axie Infinity" },
    { id: 2, name: "Ola", mostPlayed: "Star Atlas" },
    { id: 3, name: "Peter Groff", mostPlayed: "Roulette" },
    { id: 4, name: "Steave Morley", mostPlayed: "Star Atlas" },
    { id: 5, name: "Vivienne", mostPlayed: "Axie Infinity" },
    { id: 6, name: "Jakob Nyman", mostPlayed: "Hash Rush" },
  ];
  return (
    <div>
      <div className="">
        <p className="text-[18px] font-bold">Active Gamers</p>
      </div>
      <div className="w-full bg-[#EDEFFC] p-[15px] rounded-xl my-4">
        {datas.map((data, index) => (
          <div
            key={index}
            className="flex flex-row justify-between  items-center my-4"
          >
            <div key={index}>
              <div className="inline-block w-[30px] h-[30px] rounded-full bg-slate-400"></div>
              <div className="inline-block ml-2 text-[11px]">
                <p className="font-semibold text-[13px]">{data.name}</p>
                <p className="font-semibold">
                  <span className="text-[#999999]">Most Played</span> :{" "}
                  {data.mostPlayed}
                </p>
              </div>
            </div>
            <button className="bg-[#5067EB] p-2 py-1 rounded-xl text-white font-medium text-[14px]">
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveGamers;
