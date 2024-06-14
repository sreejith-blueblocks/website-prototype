import React from "react";
import Rating from "./Rating";

const MostRatedGame = () => {
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
        <p className="text-[18px] font-bold">Most Rated Games</p>
      </div>
      <div className="w-full bg-[#EDEFFC] p-[15px] rounded-xl my-4">
        {datas.map((data, index) => (
          <div
            key={index}
            className="flex flex-row justify-between  items-center my-4"
          >
            <div
              key={index}
              className="flex flex-row  items-center justify-center"
            >
              <div className="inline-block w-[35px] h-[35px] rounded-md bg-slate-400"></div>
              <div className="inline-block ml-2 text-[11px]">
                <p className="font-semibold text-[13px]">{data.name}</p>
              </div>
            </div>
            <Rating ratingValue={3.5} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostRatedGame;
