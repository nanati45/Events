import Image from "next/image";
import React from "react";

const EditDateandTime = () => {
  return (
    <div className="w-full space-y-3">
      <h1 className=" text-[#2d2c2c] text-[20px] pl-52 ">Date and Time</h1>
      <div className="grid grid-cols-5 items-center gap-4 ">
        <label className="col-span-1 text-right">
          Event Type <span className="text-red-500">*</span>
        </label>

        <div className="flex items-center col-span-4 space-x-6">
          <label className="flex items-center">
            <input
              type="radio"
              name="eventType"
              value="single"
              className="mr-2"
            />
            Single Event
          </label>

          <label className="flex items-center">
            <input
              type="radio"
              name="eventType"
              value="recurring"
              className="mr-2"
            />
            Recurring Event
          </label>
        </div>
      </div>

      <div className="grid grid-cols-5 items-start gap-4">
        <label className="col-span-1 text-right">
          Session(s)<span className="text-red-500">*</span>
        </label>

        <div className="flex space-x-4">
          <div className="">
            <label className=" text-right">
              Start Date<span className="text-red-500">*</span>
            </label>
            <div className="flex space-x-2 border rounded-md">
              <div className="bg-gray-300 p-1 rounded-sm">
                <Image
                  src="/assets/images/date.png"
                  alt="date"
                  className="w-6 h-6"
                  width={6} height={6}
                />
              </div>
              <input type="text" placeholder="DD/MM/YY" />
            </div>
          </div>
          <div className="">
            <label className="text-right">
              Start Time<span className="text-red-500">*</span>
            </label>
            <div className="flex space-x-2 border rounded-md">
              <div className="bg-gray-300 p-1 rounded-sm">
                <Image
                  src="/assets/images/time.png"
                  alt="time"
                  className="w-6 h-6"
                  width={6} height={6}
                />
              </div>
              <input type="text" placeholder="DD/MM/YY" />
            </div>
          </div>
          <div className="">
            <label className="text-right">
              End Date<span className="text-red-500"></span>
            </label>
            <div className="flex space-x-2 border rounded-md">
              <div className="bg-gray-300 p-1 rounded-sm">
                <Image
                  src="/assets/images/date.png"
                  alt="date"
                  className="w-6 h-6"
                  width={6} height={6}
                />
              </div>
              <input type="text" placeholder="DD/MM/YY" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditDateandTime;
