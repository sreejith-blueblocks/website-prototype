import React from "react";
import horseBetting from "@/public/assets/games/HorseBetting.png";
import logo2 from "@/public/assets/games/game2.png";
import logo3 from "@/public/assets/games/game3.png";
import logo4 from "@/public/assets/games/game4.png";
import logo5 from "@/public/assets/games/game5.png";
import logo6 from "@/public/assets/games/game6.png";
import logo7 from "@/public/assets/games/game7.png";
import Image from "next/image";
import Link from "next/link";

const FeaturedGamesCard = () => {
  const gamesArray = [
    { id: 1, imageUrl: horseBetting, name: "Object 1", link: "betgame" },
    { id: 2, imageUrl: logo2, name: "Object 2", link: "newGraphLogic" },
    { id: 3, imageUrl: logo3, name: "Object 3", link: "dsf" },
    { id: 4, imageUrl: logo4, name: "Object 4", link: "dsf" },
    { id: 5, imageUrl: logo5, name: "Object 5", link: "dsf" },
    { id: 6, imageUrl: logo6, name: "Object 6", link: "dsf" },
    { id: 7, imageUrl: logo3, name: "Object 7", link: "dsf" },
    { id: 8, imageUrl: logo4, name: "Object 8", link: "dsf" },
  ];
  return (
    <div className=" pt-6">
      <header className="flex flex-row justify-between items-center">
        <h1 className="text-[20px] font-bold">Featured Games</h1>
        <Link href={"/admin"} className="text-[#5067EB]">
          View all
        </Link>
      </header>
      <div className=" py-2 flex flex-row justify-between">
        {gamesArray.map((game, index) => (
          <Link
            key={index}
            href={`/user/${game.link}`}
            className="w-[120px] h-[150px]  cursor-pointer drop-shadow-xl"
          >
            <Image
              src={game.imageUrl}
              width={500}
              height={660}
              className="w-full h-full hover:scale-105 transition-transform duration-300"
              alt="Picture of the author"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedGamesCard;
