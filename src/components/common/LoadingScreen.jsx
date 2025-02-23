import React from "react";

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-gray-100">
      <h1 className="text-[5rem] sm:text-[7rem] md:text-[9rem] font-extrabold uppercase relative">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 absolute inset-0 animate-fill">
          LearnX
        </span>
        <span className="text-gray-300">LearnX</span>
      </h1>
    </div>
  );
};

export default LoadingScreen;
