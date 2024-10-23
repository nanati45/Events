import React from "react";

const Hostedby = () => {
  return (
    <div className="w-1/2 py-6 space-y-4">
      <h1 className="font-bold text-[#2D2C2C] text-[18px]">Hosted By</h1>
      <div className="flex items-center gap-6">
        <div>
          <img
            src="/assets/images/des.jpg"
            alt="logo"
            className="rounded-full w-16 h-16"
          />
        </div>
        <div className="flex flex-col gap-3">
          <p>City Youth Movement</p>
          <div className="flex gap-3">
            <button className="border-2 border-[#2D2C2C] rounded-md text-[#2D2C2C] px-4 py">
              Contact
            </button>
            <button className="border rounded-md  text-white bg-[#2D2C2C] px-4 py">
              +Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hostedby;
