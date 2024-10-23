import React from "react";

const Ticketing = () => {
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
          <img src="/assets/images/progress3.png" alt="progress" />
        </div>
        <div className="space-y-3 mt-5">
          <h1 className=" text-[#2d2c2c] text-[20px]">
            What type of event are you running?
          </h1>
          <div className="flex space-x-4">
            <div className="px-20 py-5 flex flex-col items-center justify-center border rounded-md">
              <img
                src="/assets/images/ticket.png"
                alt="ticket"
                className="w-20 h-20"
              />
              <p>Ticketed Event</p>
              <p>My event requires ticket for entry</p>
            </div>
            <div className="px-20 py-5 flex flex-col items-center justify-center border rounded-md">
              <img
                src="/assets/images/free.png"
                alt="free"
                className="w-20 h-20"
              />
              <p>Free Event</p>
              <p>I'm running a free event</p>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <h1 className=" text-[#2d2c2c] text-[20px]">
            What ticket are you selling?
          </h1>
          <div className="flex space-x-4">
            <div className="w-1/3 space-y-2">
              <label className=" text-right">Ticket Name</label>
              <div className="flex space-x-2 border rounded-md px-2">
                <input
                  type="text"
                  placeholder="Ticket Name "
                  className="w-44 h-10"
                />
              </div>
            </div>
            <div className="w-1/3 space-y-2">
              <label className=" text-right">Ticket Price</label>
              <div className="flex space-x-2 border rounded-md">
                <div className="bg-gray-300 p-1 rounded-sm">
                  <img
                    src="/assets/images/ticket.png"
                    alt="date"
                    className="w-6 h-6"
                  />
                </div>
                <input type="text" placeholder="0.00" />
              </div>
            </div>
          </div>
        </div>
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
  );
};

export default Ticketing;
