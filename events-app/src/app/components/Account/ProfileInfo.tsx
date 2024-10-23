import React from "react";

const ProfileInfo = () => {
  return (
    <div className="space-y-5">
      <p className="text-[18px] text-[#2D2C2C] pl-48">Profile Information</p>

      <div className="grid grid-cols-5 items-center gap-4">
        <label className="col-span-1 text-right">Full Name :</label>

        <div className="col-span-3">
          <input
            type="text"
            placeholder="Enter the name of this event"
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
      </div>
      <div className="grid grid-cols-5 items-center gap-4">
        <label className="col-span-1 text-right">Website :</label>

        <div className="col-span-3">
          <input
            type="text"
            placeholder="Enter the name of this event"
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
      </div>
      <div className="grid grid-cols-5 items-center gap-4">
        <label className="col-span-1 text-right">Company :</label>

        <div className="col-span-3">
          <input
            type="text"
            placeholder="Enter the name of this event"
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
