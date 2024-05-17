import React from "react";
import logo7 from "@/public/assets/games/game7.png";
import logo8 from "@/public/assets/games/game8.png";
import logo9 from "@/public/assets/games/game9.png";
import logo10 from "@/public/assets/games/game10.png";
import logo11 from "@/public/assets/games/game11.png";
import logo12 from "@/public/assets/games/game12.png";
import Image from "next/image";
import Link from "next/link";

const PopularGamesCard = () => {
  const gamesArray = [
    { id: 1, imageUrl: logo12, name: "Object 1" },
    { id: 2, imageUrl: logo7, name: "Object 2" },
    { id: 3, imageUrl: logo8, name: "Object 3" },
    { id: 4, imageUrl: logo9, name: "Object 4" },
    { id: 5, imageUrl: logo10, name: "Object 5" },
    { id: 6, imageUrl: logo11, name: "Object 6" },
    { id: 7, imageUrl: logo8, name: "Object 7" },
    { id: 8, imageUrl: logo10, name: "Object 8" },
  ];
  return (
    <div className="py-4">
      <header className="flex flex-row justify-between items-center">
        <h1 className="text-[20px] font-bold">Popular Games</h1>
        <Link href={"/admin"} className="text-[#5067EB]">
          View all
        </Link>
      </header>
      <div className=" py-2 flex flex-row justify-between">
        {gamesArray.map((game) => (
          <div className="w-[120px] h-[150px]  cursor-pointer drop-shadow-xl">
            <Image
              src={game.imageUrl}
              width={500}
              height={660}
              className="w-full h-full hover:scale-105 transition-transform duration-300"
              alt="Picture of the author"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularGamesCard;
