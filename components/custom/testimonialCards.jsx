"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { FaPlayCircle } from "react-icons/fa";
import React, { useState } from "react";

const TestimonialCards = ({ index, selectedCard, setSelectedCard }) => {
  const isOpen = selectedCard === index;
  const toggleCard = () => {
    setSelectedCard(isOpen ? null : index);
  };

  return (
    <>
      <motion.div
        layout
        transition={{ layout: { duration: 1, type: "spring" } }}
        className=" bg-slate-400 rounded-lg p-5 h-[434px] flex-1 border-[4px] relative"
        onClick={toggleCard}
      >
        {/* <motion.h2 layout="position">Hey Heading</motion.h2> */}
        {isOpen && (
          <motion.div className="w-[380.12px] h-full  flex items-center justify-center">
            <motion.div
              animate={{
                x: [-118, 0],
              }}
            >
              <FaPlayCircle className="text-[50px]" />
            </motion.div>
            <div className="absolute w-full bg-[#181818] left-0 bottom-0 h-[73.46px] rounded-b-lg p-2 text-white">
              <h3 className="text-[23px] font-bold">Thomas Shelby</h3>

              <p className="text-[18px] font-medium">
                CEO of Peaky Blinders LLC
              </p>
            </div>
          </motion.div>
        )}
      </motion.div>
    </>
  );
};

export default TestimonialCards;
