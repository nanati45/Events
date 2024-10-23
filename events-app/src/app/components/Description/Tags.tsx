import React from "react";

const Tags = () => {
  return (
    <div className="py-6 w-full space-y-4">
      <h1 className="font-bold text-[#2D2C2C] text-[18px]">Tags</h1>
      <div>
        <div>
          <ul className="flex gap-3">
            <li className="py-1 px-2  rounded-2xl bg-[#efedf0] bg-opacity-100">
              Holiday Concert
            </li>
            <li className="py-1 px-2  rounded-2xl bg-[#efedf0]">
              Live Performance
            </li>
            <li className="py-1 px-2  rounded-2xl bg-[#efedf0]">
              Seasonal Event
            </li>
            <li className="py-1 px-2  rounded-2xl bg-[#efedf0]">
              Family-Friendly
            </li>
            <li className="py-1 px-2  rounded-2xl bg-[#efedf0]">
              #Christmas_Spirit
            </li>
            <li className="py-1 px-2  rounded-2xl bg-[#efedf0]">
              #Christmas_Carlos
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tags;
