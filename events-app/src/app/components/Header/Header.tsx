import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full text-white font-montserrat bg-[#2B293D] ">
      <div className=" pl-10 py-2 flex items-center justify-center ">
        <img src="/assets/images/logo.png" alt="logo" className="w-7/8 h-10" />
      </div>
      <div className="flex items-center justify-center space-x-12">
        <p>Home</p>
        <p>Events</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <div className=" flex items-center justify-center space-x-10 pr-10">
        <p>Create Events</p>
        <p>Login</p>
        <button className="px-2 py-1 bg-[#FFE047] text-[#2B293D] rounded-lg">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Header;
