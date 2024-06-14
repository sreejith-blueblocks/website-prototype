"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import { BsSearch } from "react-icons/bs";
import CreateGameSection from "../create/(components)/createGameSection";
import Profiletab from "./(components)/profiletab";
import FeaturedGame from "./(components)/featuredGame";
import Link from "next/link";

const Page = ({ params }) => {
  const [data, setData] = useState({});
  const [betItemName, setBetItemName] = useState();
  const [betItemsList, setBetItemList] = useState([]);
  const [nameTrigger, setNameTrigger] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BETGAME_BASE_URL}single/game/${params?.slug}`
        );
        setData(response.data);
        if (response.status === 200) {
          setNameTrigger(!nameTrigger);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BETGAME_BASE_URL}list/betitems/${params?.slug}`
        );
        setBetItemList(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [nameTrigger]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to submit the form data
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BETGAME_BASE_URL}betitems`,
        { betItemName, gameId: params?.slug }
      );

      setBetItemName("");
      setNameTrigger(!nameTrigger);

      // Optionally, you can handle the response here
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <div className="w-full h-screen  flex flex-row bg-[#E8E8E8]">
        <div className="w-[70%] max-w-[70%] h-full  px-12 py-5 overflow-y-scroll">
          <div className="flex items-center justify-between ">
            <div className="max-w-[300px] w-full">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pr-8 py-1 px-4 border shadow-2xl border-gray-300 rounded-lg focus:outline-none  focus:border-transparent"
                />
                <div className="absolute z-[1000] inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
                  <BsSearch
                    className="text-[15px] text-gray-400 cursor-pointer hover:scale-110"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
            <div>
              <p className="text-[#A2A2A2]">14 Nov 2023, 02:54 PM</p>
            </div>
          </div>
          <h1 className="text-[18px] font-semibold my-5">Add Game Fields</h1>
          <div className=" flex flex-row gap-x-2">
            {data.picture && (
              <>
                <Image
                  src={`data:image/png;base64,${data.picture}`}
                  width={200}
                  height={200}
                  alt={data.gameName}
                />
              </>
            )}
            <div className="w-full">
              <h3 className="text-[20px] font-semibold">{data?.gameName}</h3>

              <form onSubmit={handleSubmit}>
                <div>
                  <p className="text-[13px] font-semibold">
                    Enter new bet Item
                  </p>
                  <input
                    type="text"
                    placeholder="New Item Name"
                    value={betItemName}
                    onChange={(e) => setBetItemName(e.target.value)}
                    required
                    className="p-3 rounded-md w-full my-1  text-[14px] shadow-sm text-black font-semibold"
                  />
                </div>
                <div className="flex flex-row gap-x-3 my-4">
                  <div className="flex-1 font-semibold">
                    <p className="text-[13px] font-semibold">Created By</p>
                    <input
                      type="text"
                      value={"Admin"}
                      onChange={() => {}}
                      required
                      className="p-3 rounded-md w-full my-1  shadow-sm text-[14px] text-black"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className=" text-white p-2 w-full bg-[#5067EB] rounded-md font-semibold text-[14px]"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-[95%] m-auto h-[2px] my-5  bg-[#afaeae] rounded-lg"></div>

          <div className="w-full">
            {betItemsList.length === 0 ? (
              <div className="w-full text-center">
                <p>No items created</p>
              </div>
            ) : (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      #
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Bet Item
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Created By
                    </th>

                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Options
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {betItemsList.map((item, id) => (
                    <tr key={id}>
                      <td className="px-6 py-4 whitespace-nowrap">{id + 1}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {item.betItemName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">Admin</td>
                      <td className="px-6 py-4 whitespace-nowrap cursor-pointer">
                        <Link href={``}>Edit</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
        <div
          className="w-[30%] h-full border-l bg-white
          px-4 py-5 overflow-y-scroll"
        >
          <Profiletab />
          <FeaturedGame />
        </div>
      </div>
    </>
  );
};

export default Page;
