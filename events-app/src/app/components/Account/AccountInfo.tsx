import React from "react";
import ProfileInfo from "./ProfileInfo";
import ContactDetail from "./ContactDetail";

const AccountInfo = () => {
  return (
    <div className="w-3/4 space-y-8 mb-10">
      <h1 className="font-extrabold text-[#2D2C2C] text-[22px] border-b mx-6 py-3 mt-4 px-2">
        Account Info
      </h1>
      <div className="space-y-5">
        <p className="text-[18px] text-[#2D2C2C] pl-48">Profile Photo</p>
        <div className="relative w-1/4 ml-36">
          <img
            src="/assets/images/pp.png"
            alt="pp"
            className="w-15 h-15 px-8"
          />
          <img
            src="/assets/images/camera.png"
            alt="camera"
            className="w-10 h-10 bottom-3 right-8 absolute"
          />
        </div>
      </div>

      <ProfileInfo />
      <ContactDetail />
      <div className="pl-32">
        <button className="bg-[#2D2C2C] text-white font-extrabold  text-[18px] px-8 py-2 rounded-md">
          Save My Profile
        </button>
      </div>
    </div>
  );
};

export default AccountInfo;
