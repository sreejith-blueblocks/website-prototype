// page.js
"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import horseBetting from "@/public/assets/games/HorseBetting.png";
import logo2 from "@/public/assets/games/game2.png";
import logo3 from "@/public/assets/games/game3.png";
import logo4 from "@/public/assets/games/game4.png";
import logo5 from "@/public/assets/games/game5.png";
import logo6 from "@/public/assets/games/game6.png";
import logo7 from "@/public/assets/games/game7.png";
import Image from "next/image";

const Page = () => {
  const [games, setGames] = useState([]);

  const [loading, setLoading] = useState(false);

  const [refreshGames, setRefreshGames] = useState(false);

  const gamesArray = [
    { id: 1, imageUrl: horseBetting, name: "Object 1", link: "betgame" },
    { id: 2, imageUrl: logo2, name: "Object 2", link: "sdf" },
    { id: 3, imageUrl: logo3, name: "Object 3", link: "dsf" },
    { id: 4, imageUrl: logo4, name: "Object 4", link: "dsf" },
    { id: 5, imageUrl: logo5, name: "Object 5", link: "dsf" },
    { id: 6, imageUrl: logo6, name: "Object 6", link: "dsf" },
    { id: 7, imageUrl: logo5, name: "Object 5", link: "dsf" },
    { id: 8, imageUrl: logo4, name: "Object 4", link: "dsf" },
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
        setLoading(false);
        console.error("Error fetching games:", error);
      }
    };

    fetchData();
  }, [refreshGames]);

  const deleteGame = async (gameId) => {
    try {
      setLoading(true);
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_BETGAME_BASE_URL}disable/${gameId}`
      );

      if (response.status === 200) {
        setRefreshGames(!refreshGames);
      }
    } catch (error) {
      setLoading(false);
      console.error("Error fetching games:", error);
    }
  };

  return (
    <div className="w-full px-8">
      <div className="my-10 w-full">
        <header className="flex flex-row justify-between items-center">
          <h1 className="text-[20px] font-bold">Currently Added Games</h1>
          <Link href={"/admin"} className="text-[#5067EB]">
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
          <div className="py-2 w-full grid grid-cols-6 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-7 gap-3">
            {games.map((game, index) => (
              <div
                key={index}
                className="cursor-pointer drop-shadow-xl p-2 relative hover:scale-105 transition-transform duration-300 group"
              >
                <Image
                  src={`data:image/png;base64,${game.picture}`}
                  width={500}
                  height={660}
                  className="w-full h-full"
                  alt="Picture of the author"
                />
                <div className="absolute w-full h-full top-0 left-0 p-2 flex flex-col justify-center items-center gap-y-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <Link
                    href={`/admin/games/${game?.gameId}`}
                    className="text-center w-[80%] bg-[#ffffffd2] p-2 rounded-lg font-bold"
                  >
                    Open
                  </Link>
                  <button
                    className="w-[80%] bg-[#ffffffd2] p-2 rounded-lg font-bold"
                    onClick={() => {
                      deleteGame(game?.gameId);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
