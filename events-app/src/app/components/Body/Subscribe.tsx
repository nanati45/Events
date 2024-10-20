import React from "react";

const Subscribe = () => {
  return (
    <div className="w-full h-[150px] grid grid-cols-2 items-center justify-center bg-yellow-300 ">
      <div className="flex flex-col pl-16 w-3/4">
        <p className="font-semibold mb-4">Subscribe to our Newsletter</p>
        <p>
          Receive our weekly newsletter & updates with new events from your
          favourite organizers & venues.
        </p>
      </div>
      <div className="flex w-3/4 border-[#2B293D] border-2 rounded-lg  justify-between ">
        <input
          type="email"
          placeholder="Enter your email"
          id="email"
          className=" border-[#2B293D] w-full rounded-l-lg bg-white px-3"
        />
        <button className="bg-[#2B293D] text-[#FFE047] font-semibold px-8 py-4 rounded-r-lg">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
