import React from "react";
import EventCard from "../EventCard/EventCard";

const PopularInEthiopia = () => {
  return (
    <div className="flex flex-col  w-3/4 space-y-6 mt-6">
      <div className="justify-start ">
        <p className="font-bold text-[20px]">Popular Events in Ethiopia</p>
        <div>
          <ul className="flex gap-3">
            <li className="py-1 px-2 border rounded-2xl">All</li>
            <li className="py-1 px-2 border rounded-2xl">Today</li>
            <li className="py-1 px-2 border rounded-2xl">Tomorrow</li>
            <li className="py-1 px-2 border rounded-2xl">This Weekend</li>
            <li className="py-1 px-2 border rounded-2xl">Free</li>
          </ul>
        </div>
      </div>
      <div className="items-center">
        <div className="flex justify-center items-center  gap-6">
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
        <div className="flex justify-center items-center  gap-6">
          <EventCard />
          <EventCard />
          <EventCard />
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

export default PopularInEthiopia;
