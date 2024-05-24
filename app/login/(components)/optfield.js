"use client";
import React, { useState, useRef, useEffect } from "react";

const OtpField = ({
  otp,
  setOtp,
  activeOTPIndex,
  setActiveOTPIndex,
  handleOtpVerification,
}) => {
  const inputRefs = useRef(new Array(4).fill(null)); // Update to 4

  const handleOnChange = (e, index) => {
    const { value } = e.target;
    if (/^[0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value !== "") {
        setActiveOTPIndex((prev) => (prev < 3 ? prev + 1 : prev)); // Update to 3
      }
    }
  };

  const handleOnKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "") {
      setActiveOTPIndex((prev) => (prev > 0 ? prev - 1 : prev));
    }
  };

  useEffect(() => {
    if (inputRefs.current[activeOTPIndex]) {
      inputRefs.current[activeOTPIndex].focus();
    }
  }, [activeOTPIndex]);

  return (
    <div className=" flex flex-col justify-center items-center space-y-4 ">
      <div className="flex space-x-2">
        {otp.map((value, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            inputMode="numeric"
            maxLength={1}
            className="w-12 h-12 border-2 rounded bg-transparent outline-none text-center font-semibold text-xl border-gray-400 focus:border-gray-700 focus:text-gray-700 text-gray-400 transition"
            value={value}
            onChange={(e) => handleOnChange(e, index)}
            onKeyDown={(e) => handleOnKeyDown(e, index)}
          />
        ))}
      </div>
      <button
        onClick={handleOtpVerification}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
      >
        Verify OTP
      </button>
    </div>
  );
};

export default OtpField;
