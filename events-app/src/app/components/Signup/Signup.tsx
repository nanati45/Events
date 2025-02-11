import Image from "next/image";
import React from "react";

const Signup = () => {
  return (
    <div className="flex w-full  bg-[#2D2C3C]">
      <div className="w-1/3">
        <Image
          src="/assets/images/logo.png"
          alt="logo"
          width={200}
          className="pl-5 pt-4"
        />
        <div className="flex flex-col items-center text-white h-full font-extrabold  text-[32px] px-6 py-28">
          <p>Discover tailored events.</p>
          <p>Sign up for personalized recommendations today!</p>
        </div>
      </div>
      <div className="w-2/3 flex flex-col justify-start  bg-white rounded-l-3xl px-24 py-10 space-y-6">
        <h1 className="font-extrabold text-[32px] text-[#2D2C3C]">
          Create Account
        </h1>
        <div className="mt-2 flex space-x-6 ">
          <div className="flex items-center w-1/2  border rounded-xl px-12 py-4">
            <Image
              src="/assets/images/google.png"
              alt="Google "
              className="h-8 w-8"
              width={8} height={8}
            />
            <p className="text-sm pl-2">Signin with Google </p>
          </div>
          <div className="flex items-center border  w-1/2 rounded-xl px-12 py-4">
            <Image src="/assets/images/fb.png" alt="fb" className="h-8 w-8"  width={8} height={8}/>
            <p className="text-sm pl-2">Signin with Facebook </p>
          </div>
        </div>
        <div className="mt-4 flex justify-between items-center my-6">
          <p className="border-b-2 border-gray-400 w-1/2"></p>
          <p className="text-[16px] px-4">OR</p>
          <p className="border-b-2 border-gray-400 w-1/2"></p>
        </div>
        <div className="space-y-4">
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
            <p>Password</p>
            <input
              type="text"
              placeholder="Enter your password"
              className="w-full border px-4 py-2 border-gray-400 rounded-lg"
            />
          </div>
        </div>
        <button className="bg-[#2D2C3C] text-[16px] text-white w-full rounded-lg py-2">
          Create Account
        </button>
        <p>
          Already have an account? <a href="">Signin</a>{" "}
        </p>
      </div>
    </div>
  );
};

export default Signup;
