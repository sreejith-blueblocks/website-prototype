"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const TestTimeSorting = () => {
  const [slots, setSlots] = useState([]);
  const [currentSlot, setCurrentSlot] = useState(null);
  const [upcomingSlots, setUpcomingSlots] = useState([]);

  useEffect(() => {
    const fetchSlots = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BETGAME_BASE_URL}Bet`
        ); // Replace with your actual API endpoint
        setSlots(response.data.slots);
      
      } catch (error) {
        console.error("Error fetching slot data:", error);
      }
    };

    fetchSlots();

    // Set up an interval to refresh the slots data every 5 minutes
    const fetchIntervalId = setInterval(fetchSlots, 300000); // 300000 ms = 5 minutes

    // Cleanup intervals on component unmount
    return () => {
      clearInterval(fetchIntervalId);
    };
  }, []);

  useEffect(() => {
    const checkSlots = () => {
      determineCurrentAndUpcomingSlots(slots);
    };

    // Set up a more frequent interval to check and update the current and upcoming slots every 10 seconds
    const checkIntervalId = setInterval(checkSlots, 1000); // 10000 ms = 10 seconds

    // Perform an initial check
    checkSlots();

    // Cleanup interval on component unmount
    return () => {
      clearInterval(checkIntervalId);
    };
  }, [slots]);

  const determineCurrentAndUpcomingSlots = (slots) => {
    const now = new Date();
    const currentTime = `${String(now.getHours()).padStart(2, "0")}:${String(
      now.getMinutes()
    ).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;

    const current = slots.find(
      (slot) => currentTime >= slot.startTime && currentTime <= slot.endTime
    );
    const upcoming = slots
      .filter((slot) => slot.startTime > currentTime)
      .slice(0, 4);

    setCurrentSlot(current);
    setUpcomingSlots(upcoming);
  };

  return <div></div>;
};

export default TestTimeSorting;
