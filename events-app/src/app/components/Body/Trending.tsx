import React from "react";
import TrendingCard from "../EventCard/TrendingCard";

const Trending = () => {
  return (
    <div className="flex flex-col  w-3/4 space-y-6 mt-6">
      <div className="justify-start ">
        <p className="font-bold text-[20px]">
          Trending Events around the world
        </p>
      </div>
      <div className="items-center">
        <div className="flex justify-center items-center  gap-6">
          <TrendingCard />
          <TrendingCard />
          <TrendingCard />
        </div>
        <div className="flex justify-center items-center  gap-6">
          <TrendingCard />
          <TrendingCard />
          <TrendingCard />
        </div>
        <div className="flex justify-center">
          <button className=" w-2/5 h-12 border-[#2B293D] border-2 mb-4 rounded-md">
            See More
          </button>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Trending;
