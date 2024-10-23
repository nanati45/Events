import React from "react";

const SetPassword = () => {
  return (
    <div className="w-3/4 space-y-8 mb-10">
      <h1 className="font-extrabold text-[#2D2C2C] text-[22px] border-b mx-6 py-3 mt-4 px-2">
        Change Email
      </h1>
      <p className="pl-10">A password has not been set for your account.</p>
      <div className="pl-10">
        <button className="bg-[#2D2C2C] text-white font-extrabold  text-[18px] px-8 py-2 rounded-md">
          Set Password
        </button>
      </div>
    </div>
  );
};

export default SetPassword;
