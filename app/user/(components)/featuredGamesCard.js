"use client";
import React, { useEffect, useState } from "react";
import horseBetting from "@/public/assets/games/HorseBetting.png";
import logo2 from "@/public/assets/games/game2.png";
import logo3 from "@/public/assets/games/game3.png";
import logo4 from "@/public/assets/games/game4.png";
import logo5 from "@/public/assets/games/game5.png";
import logo6 from "@/public/assets/games/game6.png";
import logo7 from "@/public/assets/games/game7.png";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

const FeaturedGamesCard = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BETGAME_BASE_URL}list/games`
        );

        if (response) {
          setLoading(false);
        }
        setGames(response.data);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching games:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="my-10 w-full">
      <header className="flex flex-row justify-between items-center">
        <h1 className="text-[20px] font-bold">Currently Added Games</h1>
        <Link href={"/"} className="text-[#5067EB]">
          View all
        </Link>
      </header>

      {loading ? (
        <div className="py-2 w-full grid grid-cols-6 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-7 gap-2 animate-pulse">
          <div className="w-[130px] h-[160px]  rounded-lg bg-gray-300 p-6"></div>
          <div className="w-[130px] h-[160px]  rounded-lg bg-gray-300 p-6"></div>
          <div className="w-[130px] h-[160px]  rounded-lg bg-gray-300 p-6"></div>
          <div className="w-[130px] h-[160px]  rounded-lg bg-gray-300 p-6"></div>
          <div className="w-[130px] h-[160px]  rounded-lg bg-gray-300 p-6"></div>
          <div className="w-[130px] h-[160px]  rounded-lg bg-gray-300 p-6"></div>
          <div className="w-[130px] h-[160px]  rounded-lg bg-gray-300 p-6"></div>
        </div>
      ) : (
        <div className="py-2 w-full grid grid-cols-6 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-7 gap-2">
          {games.map((game, index) => (
            <Link
              key={index}
              href={`games/${game?.gameId}`}
              className=" cursor-pointer drop-shadow-xl p-2"
            >
              <Image
                src={`data:image/png;base64,${game.picture}`}
                width={500}
                height={660}
                className="w-full h-full   hover:scale-105 transition-transform duration-300"
                alt="Picture of the author"
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default FeaturedGamesCard;
