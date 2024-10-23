import React from "react";

const ContactDetail = () => {
  return (
    <div className="space-y-5">
      <p className="text-[18px] text-[#2D2C2C] pl-48">Contact Detail</p>
      <p className="text-[16px] text-[#2D2C2C] pl-48">
        These details are private and only used to contact you for ticketing or
        prizes.
      </p>
      <div className="grid grid-cols-5 items-center gap-4">
        <label className="col-span-1 text-right">Phone Number:</label>

        <div className="col-span-3">
          <input
            type="text"
            placeholder="Enter the name of this event"
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
      </div>
      <div className="grid grid-cols-5 items-center gap-4">
        <label className="col-span-1 text-right">Address :</label>

        <div className="col-span-3">
          <input
            type="text"
            placeholder="Enter the name of this event"
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
      </div>
      <div className="grid grid-cols-5 items-center gap-4">
        <label className="col-span-1 text-right">City/Town :</label>

        <div className="col-span-3">
          <input
            type="text"
            placeholder="Enter the name of this event"
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
      </div>
      <div className="grid grid-cols-5 items-center gap-4">
        <label className="col-span-1 text-right">Country :</label>

        <div className="col-span-3">
          <input
            type="text"
            placeholder="Enter the name of this event"
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
      </div>
      <div className="grid grid-cols-5 items-center gap-4">
        <label className="col-span-1 text-right">PinCode :</label>

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

export default ContactDetail;
