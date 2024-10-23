import React from "react";

const ChangeEmail = () => {
  return (
    <div className="w-3/4 space-y-8 mb-10">
      <h1 className="font-extrabold text-[#2D2C2C] text-[22px] border-b mx-6 py-3 mt-4 px-2">
        Change Email
      </h1>
      <div className="grid grid-cols-5 items-center gap-4">
        <p className="col-span-1 text-right">Current Email :</p>

        <div className="col-span-3">
          <p>andreagomes@example.com</p>
        </div>
      </div>
      <div className="grid grid-cols-5 items-center gap-4">
        <label className="col-span-1 text-right">New Email :</label>

        <div className="col-span-3">
          <input
            type="text"
            placeholder="Enter the name of this event"
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
      </div>
      <div className="grid grid-cols-5 items-center gap-4">
        <label className="col-span-1 text-right">Confirm Email :</label>

        <div className="col-span-3">
          <input
            type="text"
            placeholder="Enter the name of this event"
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
      </div>
      <div className="pl-48">
        <button className="bg-[#2D2C2C] text-white font-extrabold  text-[18px] px-8 py-2 rounded-md">
          Save New Email
        </button>
      </div>
    </div>
  );
};

export default ChangeEmail;
