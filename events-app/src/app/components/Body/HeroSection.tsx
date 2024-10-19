import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[500px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-black bg-opacity-50"
        style={{
          backgroundImage: "url('/assets/images/con2.jpeg')",
        }}
      ></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">
        <h1 className="text-4xl font-semibold">Don’t miss out!</h1>
        <p className="text-2xl mt-4">
          Explore the{" "}
          <span className="text-yellow-400 font-bold">vibrant events</span>{" "}
          happening locally and globally.
        </p>

        {/* Search Bar */}
        <div className="mt-8 flex w-full max-w-2xl bg-white rounded-xl p-2 shadow-lg">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search Events, Categories, Location,..."
            className="flex-grow py-3 px-4 text-gray-700 bg-white rounded-l-full focus:outline-none"
          />

          {/* Location Dropdown */}
          <div className="flex items-center bg-white rounded-full px-4 border-l border-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7C16 4.239 13.761 2 11 2S6 4.239 6 7c0 3.314 3 6.994 5 8.995C13 13.994 16 10.314 16 7z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 21c-4 0-7-1.5-9-4.5"
              />
            </svg>
            <span className="text-gray-700">Ethiopia</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
