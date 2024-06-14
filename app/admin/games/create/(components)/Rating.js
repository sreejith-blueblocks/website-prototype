"use client";
import React, { useState } from "react";

const Rating = ({ totalStars = 5, ratingValue = 0 }) => {
  const [rating, setRating] = useState(ratingValue);

  const handleClick = (index) => {
    setRating(index + 1);
  };

  const handleHalfClick = (index) => {
    setRating(index + 0.5);
  };

  return (
    <div className="flex space-x-1">
      {[...Array(totalStars)].map((_, index) => (
        <Star
          key={index}
          index={index}
          rating={rating}
          handleClick={handleClick}
          handleHalfClick={handleHalfClick}
        />
      ))}
    </div>
  );
};

const Star = ({ index, rating, handleClick, handleHalfClick }) => {
  const isFilled = index < rating;
  const isHalfFilled = rating > index && rating < index + 1;

  return (
    <div className="relative w-4 h-4 cursor-pointer">
      <svg
        onClick={() => handleClick(index)}
        xmlns="http://www.w3.org/2000/svg"
        fill={isFilled ? "currentColor" : "none"}
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-4 h-4 text-[#5067EB] absolute"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.036 6.261h6.588c.969 0 1.371 1.24.588 1.81l-5.396 3.915 2.036 6.261c.3.921-.755 1.688-1.54 1.14l-5.396-3.915-5.396 3.915c-.784.548-1.839-.219-1.54-1.14l2.036-6.261-5.396-3.915c-.784-.57-.381-1.81.588-1.81h6.588l2.036-6.261z"
        />
      </svg>
      {isHalfFilled && (
        <svg
          onClick={() => handleHalfClick(index)}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-4 h-4 text-[#5067EB]"
          style={{ clipPath: "inset(0 50% 0 0)" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.036 6.261h6.588c.969 0 1.371 1.24.588 1.81l-5.396 3.915 2.036 6.261c.3.921-.755 1.688-1.54 1.14l-5.396-3.915-5.396 3.915c-.784.548-1.839-.219-1.54-1.14l2.036-6.261-5.396-3.915c-.784-.57-.381-1.81.588-1.81h6.588l2.036-6.261z"
          />
        </svg>
      )}
    </div>
  );
};

export default Rating;
