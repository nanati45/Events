import React from "react";
import EditDateandTime from "./EditDateandTime";

const Edit = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center py-6 relative">
      <img
        src="/assets/images/arrow.png"
        alt="arrow"
        className="absolute left-6 top-6 w-8 h-8"
      />
      <div className="w-5/6 space-y-6">
        <h1 className="font-extrabold text-[#2D2C2C] text-[22px]">
          Create New Event
        </h1>
        <div className="text-center">
          <img src="/assets/images/progress.png" alt="progress" />
        </div>
        <div className="space-y-3">
          <h1 className=" text-[#2d2c2c] text-[20px] pl-52">Event Details</h1>
          <div className="grid grid-cols-5 items-center gap-4">
            <label className="col-span-1 text-right">
              Event Title <span className="text-red-500">*</span>
            </label>

            <div className="col-span-3">
              <input
                type="text"
                placeholder="Enter the name of this event"
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
          </div>

          <div className="grid grid-cols-5 items-center gap-4">
            <label className="col-span-1 text-right">
              Event Category <span className="text-red-500">*</span>
            </label>

            <div className="col-span-3">
              <select
                name="event-category"
                id="event-category"
                className="w-full border border-gray-300 p-2 rounded-md"
              >
                <option value="" disabled selected>
                  Please select one
                </option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                <option value="category3">Category 3</option>
              </select>
            </div>
          </div>
        </div>
        <EditDateandTime />
        <div className="space-y-3">
          <h1 className=" text-[#2d2c2c] text-[20px] pl-52">Location</h1>
          <div className="grid grid-cols-5 items-center gap-4">
            <label className="col-span-1 text-right">
              Where will your event take place?{" "}
              <span className="text-red-500">*</span>
            </label>

            <div className="col-span-3">
              <select
                name="event-category"
                id="event-category"
                className="w-full border border-gray-300 p-2 rounded-md"
              >
                <option value="" disabled selected>
                  Please select one
                </option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                <option value="category3">Category 3</option>
              </select>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <h1 className=" text-[#2d2c2c] text-[20px] pl-52 ">
            Additional Information
          </h1>
          <div className="grid grid-cols-5 items-center gap-4">
            <label className="col-span-1 text-right ">
              Event Description
              <span className="text-red-500">*</span>
            </label>

            <div className="col-span-3">
              <textarea
                placeholder="Describe what's special about your event & other important details."
                className="w-full h-32 border border-gray-300 p-2 rounded-md"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="bg-[#2D2C2C] text-white font-extrabold  text-[18px] px-8 py-2 rounded-md">
            Save and Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Edit;
