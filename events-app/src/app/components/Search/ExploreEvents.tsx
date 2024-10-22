import React from "react";
import SearchBar from "./Search";

const ExploreEvents = () => {
  return (
    <div className="bg-[#2B293D] opacity-90 h-[300px] py-20 px-6 w-full flex flex-col space-y-10 items-center justify-center">
      <h1 className="text-white font-extrabold text-[28px]">
        Explore a world of events. Find what excites you!
      </h1>
      <SearchBar />
    </div>
  );
};

export default ExploreEvents;
