import React from "react";

const DateandTime = () => {
  return (
    <div className="w-1/2 py-6 space-y-3">
      <p className="font-bold text-[18px] text-[#2D2C2C]">Date and Time</p>
      <div className="flex space-x-3 items-center">
        <img src="/assets/images/date.png" alt="date" className="w-5 h-5" />
        <p>Saturday, 2 December 2023</p>
      </div>
      <div className="flex space-x-3 items-center">
        <img src="/assets/images/time.png" alt="time" className="w-5 h-5" />
        <p>6:30 PM - 9:30 PM</p>
      </div>
      <p className="pl-5 text-blue-800 mt-8">+Add to Calender </p>
    </div>
  );
};

export default DateandTime;
