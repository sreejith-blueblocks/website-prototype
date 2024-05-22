"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CoverImage from "@/public/assets/games/BetGameCoverImage.png";
import axios from "axios";
import { IoIosArrowBack } from "react-icons/io";

const GenerateSlotSection = () => {
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const currentDate = new Date();
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  console.log(currentDate.toISOString().substring(0, 10));
  const maxDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate() + 30
  );
  const formattedMaxDate = maxDate.toISOString().split("T")[0]; // Format max date as YYYY-MM-DD

  const currentTime = `${currentDate
    .getHours()
    .toString()
    .padStart(2, "0")}:${currentDate.getMinutes().toString().padStart(2, "0")}`;

  const [formData, setFormData] = useState({
    selectedDate: currentDate.toISOString().substring(0, 10),
    slotDurationInMinutes: "",
    slotInterval: "00:00:00",
    startTime: "",
    endTime: "",
    adminId: 1,
  });

  const slotDuration = [
    {
      name: "slotDurationInMinutes",
      value: "00:00:01",
      displayName: "1min",
      slotDurationInMinutes: 1,
    },
    {
      name: "slotDurationInMinutes",
      value: "00:30:00",
      displayName: "30min",
      slotDurationInMinutes: 30,
    },
    {
      name: "slotDurationInMinutes",
      value: "01:00:00",
      displayName: "1hr",
      slotDurationInMinutes: 60,
    },
  ];

  useEffect(() => {
    if (message) {
      // Hide the message after 5 seconds
      const timer = setTimeout(() => {
        setMessage(null);
        setFormData({
          selectedDate: currentDate.toISOString().substring(0, 10),
          slotDurationInMinutes: "",
          slotInterval: "00:00:00",
          startTime: "",
          endTime: "",
          adminId: 1,
        });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const [showSlotDuration, setShowSlotDuration] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.slotDurationInMinutes === "" ||
      formData.startTime === "" ||
      formData.endTime === ""
    ) {
      setError("All Fields required");
      return; // Exit the function early if any field is empty
    }

    axios
      .post(`${process.env.NEXT_PUBLIC_BETGAME_BASE_URL}slots`, formData)
      .then((response) => {
        console.log("Response", response.data);
        setMessage(response.data);
      })

      .catch((error) => {
        console.log(error);
        setError("Faild to generate Slots");
      });

    // Handle form submission logic here, you can send data to backend or perform any action
    console.log(formData); // For now, just log form data
  };

  return (
    <div className="relative">
      <div className="flex flex-row gap-2 items-center">
        <IoIosArrowBack className="text-[20px] hover:scale-125 cursor-pointer" />
        <h1 className="font-semibold">Front Runner Odds On</h1>
      </div>
      <div onClick={() => router.back()}></div>
      <div className="my-4 flex flex-row items-center justify-between gap-x-3 h-[310px] ">
        <div className="w-[60%] ">
          <Image
            src={CoverImage}
            width={500}
            height={660}
            className="w-full h-auto object-cover"
            alt="Picture of the author"
          />
        </div>

        <div className=" flex-1  flex flex-col">
          <h1 className="text-[20px] font-semibold">Generate Slot</h1>
          <form onSubmit={handleSubmit}>
            <div className="flex-1  p-2 rounded-lg grid gap-y-2 gap-x-2 grid-cols-2 grid-row-4">
              <div className="col-start-1 col-end-3 row-start-1 row-end-2">
                <label className="text-[14px] font-semibold">Select Date</label>
                <input
                  type="date"
                  name="date"
                  value={
                    formData.selectedDate ||
                    currentDate.toISOString().substring(0, 10)
                  }
                  onChange={handleChange}
                  max={formattedMaxDate}
                  min={currentDate.toISOString().split("T")[0]}
                  className="mt-1 select-none block w-full rounded-md border-gray-300 shadow-sm p-2 text-[#2c2c2c] font-semibold"
                  style={{ outline: "none" }} // Add this line to remove the focus ring
                />
              </div>
              <div className="col-start-1 col-end-2 row-start-2 row-end-3 relative">
                <label className="text-[14px] font-semibold">
                  Slot Duration
                </label>
                <input
                  type="button"
                  name="slotDuration"
                  value={`${formData.slotDurationInMinutes || "Select"} ${
                    formData.slotDurationInMinutes > 1
                      ? "mins"
                      : !formData.slotDurationInMinutes
                      ? ""
                      : "min"
                  }`}
                  onClick={() => {
                    setShowSlotDuration(!showSlotDuration);
                  }}
                  className="mt-1 text-start bg-white cursor-pointer   select-none block w-full rounded-md border-gray-300 shadow-sm p-2 text-[#2c2c2c] font-semibold"
                  style={{ outline: "none" }} // Add this line to remove the focus ring
                ></input>
                {showSlotDuration && (
                  <div className="absolute border bg-white w-full p-2 shadow-xl rounded-lg">
                    {slotDuration.map((slot, index) => (
                      <div
                        key={index}
                        className="hover:bg-slate-200 font-semibold px-2 cursor-pointer text-center rounded-lg text-[14px] py-2 "
                        onClick={() => {
                          setFormData({
                            ...formData,
                            [slot.name]: slot.slotDurationInMinutes,
                          });
                          //   console.log(formData);
                          setError("");
                          setShowSlotDuration(false);
                        }}
                      >
                        {slot.displayName}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="col-start-2 col-end-3 row-start-2 row-end-3">
                <label className="text-[14px] font-semibold">
                  Slot Interval
                </label>
                <input
                  type="button"
                  name="slotInterval"
                  value={formData.slotInterval}
                  onChange={handleChange}
                  max={formattedMaxDate}
                  min={currentDate.toISOString().split("T")[0]}
                  className="mt-1 text-start bg-white select-none block w-full rounded-md border-gray-300 shadow-sm p-2 text-[#2c2c2c] font-semibold"
                  style={{ outline: "none" }} // Add this line to remove the focus ring
                ></input>
              </div>
              <div className="col-start-1 col-end-2 row-start-3 row-end-4">
                <label className="text-[14px] font-semibold">
                  Starting Time
                </label>
                <input
                  type="time"
                  name="startTime"
                  step="2"
                  onChange={handleChange}
                  value={formData.startTime || currentTime}
                  max={formattedMaxDate}
                  min={currentDate.toISOString().split("T")[0]}
                  className="mt-1 select-none block w-full rounded-md border-gray-300 shadow-sm p-2 text-[#2c2c2c] font-semibold"
                  style={{ outline: "none" }} // Add this line to remove the focus ring
                />
              </div>
              <div className="col-start-2 col-end-3 row-start-3 row-end-4">
                <label className="text-[14px] font-semibold">Ending Time</label>
                <input
                  type="time"
                  name="endTime"
                  step="2"
                  value={formData.endTime || currentTime}
                  onChange={handleChange}
                  min={currentTime}
                  className="mt-1 select-none block w-full rounded-md border-gray-300 shadow-sm p-2 text-[#2c2c2c] font-semibold"
                  style={{ outline: "none" }} // Add this line to remove the focus ring
                />
              </div>
              <div className="col-start-1 col-end-3 row-start-4 row-end-5">
                <button className="p-2 bg-blue-500 rounded-xl px-4 w-full my-1 font-semibold text-white">
                  Generate
                </button>
                {error && (
                  <div className="text-red-500 text-center font-semibold text-[12px]">
                    {error}
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
      {message && (
        <div
          className={`message rounded-lg px-10 py-2 shadow-xl text-white font-bold bg-blue-300 ${
            message ? "slide-in" : "slide-out"
          }`}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default GenerateSlotSection;
