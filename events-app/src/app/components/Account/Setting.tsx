import React from "react";

const Setting = () => {
  return (
    <div className="flex flex-col space-y-5 w-1/4 bg-[#EEEEEE] min-h-[300px]">
      <h1 className="font-extrabold text-[#2D2C2C] text-center text-[22px] px-2">
        Account Setting
      </h1>
      <ul>
        <li className="w-full p-2 pl-4 bg-white text-[#2D2C2C] font-bold">
          Account Info
        </li>
        <li className="w-full p-2 pl-4 text-[#2D2C2C] font-bold">
          Change Email
        </li>
        <li className="w-full p-2 pl-4 text-[#2D2C2C] font-bold">Password</li>
      </ul>
    </div>
  );
};

export default Setting;
