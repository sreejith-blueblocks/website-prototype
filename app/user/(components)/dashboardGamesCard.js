"use client";
import React, { useEffect, useState } from "react";
import logo7 from "@/public/assets/games/game7.png";
import logo8 from "@/public/assets/games/game8.png";
import logo9 from "@/public/assets/games/game9.png";
import logo10 from "@/public/assets/games/game10.png";
import logo11 from "@/public/assets/games/game11.png";
import logo12 from "@/public/assets/games/game12.png";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

const DashboardGamesCard = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
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
        setLoading(true);
        console.error("Error fetching games:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="my-10 w-full">
        <header className="flex flex-row justify-between items-center">
          <h1 className="text-[20px] font-bold">Currently Added Games</h1>
          <Link href={"/"} className="text-[#5067EB]">
            View all
          </Link>
        </header>

        {loading ? (
          <div className="py-2 w-full grid  grid-cols-4 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-5 animate-pulse">
            <div className="w-[130px] h-[160px]  rounded-lg bg-gray-300 p-6"></div>
            <div className="w-[130px] h-[160px]  rounded-lg bg-gray-300 p-6"></div>
            <div className="w-[130px] h-[160px]  rounded-lg bg-gray-300 p-6"></div>
            <div className="w-[130px] h-[160px]  rounded-lg bg-gray-300 p-6"></div>
            <div className="w-[130px] h-[160px]  rounded-lg bg-gray-300 p-6"></div>
          </div>
        ) : (
          <div className="py-2 w-full grid  grid-cols-4 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-6 gap-5">
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
      <div className="py-4">
        <header className="flex flex-row justify-between items-center">
          <h1 className="text-[20px] font-bold">Popular Games</h1>
          <Link href={"/admin"} className="text-[#5067EB]">
            View all
          </Link>
        </header>
        <div
          className={`py-2 grid grid-cols-4 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-6 gap-5`}
        >
          {gamesArray.map((game, index) => (
            <div
              key={index}
              className="w-[120px] h-[150px]  cursor-pointer drop-shadow-xl"
            >
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
    </>
  );
};

export default DashboardGamesCard;