import React from "react";

const Attendee = () => {
  return (
    <div className="bg-[#4872C6]">
      <div className="space-y-4  mt-2 bg-white p-4">
        <div className="space-y-2">
          <p>Full Name</p>
          <input
            type="text"
            placeholder="Enter your Full Name"
            className="w-full border px-4 py-2 border-gray-400 rounded-lg"
          />
        </div>
        <div className="space-y-2">
          <p>Email</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border px-4 py-2 border-gray-400 rounded-lg"
          />
        </div>
        <div className="space-y-2">
          <p>Phone Number</p>
          <input
            type="text"
            placeholder="Enter your password"
            className="w-full border px-4 py-2 border-gray-400 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Attendee;
