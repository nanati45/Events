import React from "react";

const Banner = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center py-6 relative">
      <img
        src="/assets/images/arrow.png"
        alt="arrow"
        className="absolute left-6 top-6 w-8 h-8"
      />
      <div className="w-5/6 space-y-6">
        <div className="space-y-2">
          <h1 className="font-extrabold text-[#2D2C2C] text-[22px]">
            Event Title
          </h1>
          <p className="font-semibold">Location</p>
          <p className="font-semibold">Time</p>
        </div>
        <div className="text-center">
          <img src="/assets/images/progress2.png" alt="progress" />
        </div>
        <div className="space-y-3 mt-5">
          <h1 className=" text-[#2d2c2c] text-[20px]">Upload Image</h1>

          <div className="w-3/4 border rounded-md p-2 space-x-2">
            <button className="px-2 py-1  bg-gray-300 opacity-65 rounded-md text-[#2D2C2C]">
              Choose File
            </button>
            <input type="text" placeholder="No file choosen" />
          </div>
          <p>
            Feature Image must be at least 1170 pixels wide by 504 pixels high.
          </p>
          <p>Valid file formats: JPG, GIF, PNG.</p>
          <div className="flex justify-end space-x-2">
            <button className="text-[#2D2C2C] bg-white shadow-lg font-extrabold  text-[18px] px-8 py-2 rounded-md">
              Go Back
            </button>
            <button className="bg-[#2D2C2C] text-white font-extrabold  text-[18px] px-8 py-2 rounded-md">
              Save and Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
