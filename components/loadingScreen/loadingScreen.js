import React from "react";

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 w-full">
      <div className="flex space-x-2">
        <div
          className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"
          style={{ animationDelay: "0.15s" }}
        ></div>
        <div
          className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"
          style={{ animationDelay: "0.3s" }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
