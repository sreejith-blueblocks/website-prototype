"use client";
import TestimonialCards from "@/components/custom/testimonialCards";
import React, { useState } from "react";

const Testimonials = () => {
  const [selectedCard, setSelectedCard] = useState(1);
  return (
    <div className="hidden lg:block">
      <div className="w-full  py-[50px] px-20 ">
        <div className="flex flex-row justify-center items-center gap-x-[10px]">
          <h1 className="text-[48px] font-bold text-[#081F61]">Testimonials</h1>
          <div className="flex-1 h-[3px] bg-gradient-to-r from-[#243E86] to-[#FFFFFF]"></div>
          <div className="text-[#5E89FF] font-medium text-[20px] underline">
            View All
          </div>
        </div>
        <div className="flex flex-row items-center justify-between  py-10 h-[434px] p-5 gap-x-2">
          <TestimonialCards
            index={1}
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
          <TestimonialCards
            index={2}
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
          <TestimonialCards
            index={3}
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
          <TestimonialCards
            index={4}
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
          <TestimonialCards
            index={5}
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
