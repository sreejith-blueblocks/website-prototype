"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdModeEditOutline } from "react-icons/md";
import Link from "next/link";

const BetTimeRangeTable = ({ submitTrigger }) => {
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BETGAME_BASE_URL}adminUpcomingSlots`
        );
        setSlots(response.data?.slots);
       
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [submitTrigger]); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Upcoming Slots</h2>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="align-middle inline-block min-w-full">
            <div className="overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Admin ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Game Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Start Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      End Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Duration (minutes)
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Options
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {slots.map((slot) => (
                    <tr key={slot.slotAdminId}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {slot.slotAdminId}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {slot.gameName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {slot.adminStartTime}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {slot.adminEndTime}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {slot.slotDurationInMinutes}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap cursor-pointer">
                        <Link href={`betgame/edit/${slot.slotAdminId}`}>
                          Edit
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetTimeRangeTable;
