import React from "react";

const TrendingGamers = () => {
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
        <p className="text-[18px] font-bold">Trending Gamers</p>
      </div>
      <div className="w-full bg-[#EDEFFC] p-[15px] rounded-xl my-4">
        {datas.map((data, index) => (
          <div
            key={index}
            className="flex flex-row justify-between  items-center my-4"
          >
            <div className=" flex items-center gap-3 flex-row">
              <div className="inline-block w-[30px] h-[30px] rounded-full bg-slate-400"></div>
              <p className="font-semibold text-[14px]">{data.name}</p>
            </div>
            <button className="bg-[#5067EB] p-2 py-1 rounded-xl text-white font-medium text-[12px]">
              Play Game
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingGamers;
