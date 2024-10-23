import React from "react";
import ReviewEvent from "./ReviewEvent";

const Review = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center py-6 relative">
      <div className="w-5/6 space-y-6">
        <div className="space-y-2 ">
          <img
            src="/assets/images/arrow.png"
            alt="arrow"
            className="absolute left-6 top-7 w-8 h-8"
          />
          <h1 className="font-extrabold text-[#2D2C2C] text-[22px]">
            Event Title
          </h1>
          <p className="font-semibold">Location</p>
          <p className="font-semibold">Time</p>
        </div>
        <div className="text-center">
          <img src="/assets/images/progress4.png" alt="progress" />
        </div>
        <p>Nearly there! Check everything’s correct.</p>
        <ReviewEvent />
        <div className="flex justify-end space-x-2">
          <button className="bg-[#FFE047] text-[#2D2C2C] shadow-lg font-extrabold  text-[18px] px-8 py-2 rounded-md">
            Save for Later
          </button>
          <button className="bg-[#2D2C2C] text-white font-extrabold  text-[18px] px-8 py-2 rounded-md">
            Publish Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
