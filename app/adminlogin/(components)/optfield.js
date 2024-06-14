"use client";
import React, { useState, useRef, useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";

const OtpField = ({
  otp,
  setOtp,
  activeOTPIndex,
  setActiveOTPIndex,
  handleOtpVerification,
  setShowOtpModal,
  error,
}) => {
  const inputRefs = useRef(new Array(4).fill(null)); // Update to 4

  const handleOnChange = (e, index) => {
    const { value } = e.target;
    if (/^[0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value === "" ? "" : Number(value);
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
    <div className="flex flex-col justify-center items-center space-y-4 px-20">
      <div className="flex flex-row items-center justify-center w-full">
        <BsArrowLeft
          className=""
          onClick={() => {
            setShowOtpModal(false);
            setOtp(new Array(4).fill(""));
          }}
        />
        <p className="w-full text-center font-semibold ">Enter OTP</p>
      </div>

      <div className="flex space-x-8">
        {otp.map((value, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            inputMode="numeric"
            maxLength={1}
            className="w-full h-12 border-[2px] rounded bg-transparent outline-none text-center font-semibold text-[25px] border-[#FFFFFF] focus:border-blue-500 focus:text-white text-gray-400 transition "
            value={value === "" ? "" : Number(value)}
            onChange={(e) => handleOnChange(e, index)}
            onKeyDown={(e) => handleOnKeyDown(e, index)}
          />
        ))}
      </div>
      <div className="w-full flex items-end justify-end">
        <p className="text-[12px] text-[#B3B3B3]">
          Didn’t yet received?{" "}
          <span className="text-white font-medium cursor-pointer">
            Resend OTP
          </span>
        </p>
      </div>
      <button
        onClick={handleOtpVerification}
        className="mt-4 px-2 py-2 bg-[#5067EB] text-white rounded hover:bg-[#3c59fa] transition w-full"
      >
        Verify OTP
      </button>
      {error && (
        <p className="text-red-500 text-center font-bold mb-2">{error}</p>
      )}
    </div>
  );
};

export default OtpField;
