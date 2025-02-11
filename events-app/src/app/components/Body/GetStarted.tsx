import React from "react";

const GetStarted = () => {
  return (
    <div className="relative w-3/4 h-[250px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-black bg-opacity-50"
        style={{
          backgroundImage: "url('/assets/images/yellowbg.png')",
        }}
      ></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-[#2D2C3C] px-6">
        <h1 className="text-4xl font-semibold">
          Events specially curated for you!
        </h1>
        <p className="text-2xl mt-4">
          Get event suggestions tailored to your interests! Don&apos;t let your
          favorite events slip away.
        </p>

        <div>
          <button className="bg-[#2D2C3C] text-yellow-500 font-semibold px-8 py-4 mt-4 rounded-md ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
