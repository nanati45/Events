import React from "react";
import InterestedCard from "./InterestedCard";
import Image from "next/image";

const Interested = () => {
  return (
    <div className="relative flex flex-col w-full justify-center items-center ">
      <div className="w-5/6 space-y-6">
        <Image
          src="/assets/images/arrow.png"
          alt="arrow"
          className="absolute left-6 top-6 w-8 h-8"
          width={8}
          height={8}
        />
        <h1 className="font-extrabold text-[#2D2C2C] text-[22px]">
          Interested Events
        </h1>
        <div className="flex gap-3">
          <InterestedCard />
          <InterestedCard />
          <InterestedCard />
        </div>
        <div className="flex gap-3">
          <InterestedCard />
          <InterestedCard />
          <InterestedCard />
        </div>
        <div className="flex gap-3">
          <InterestedCard />
          <InterestedCard />
          <InterestedCard />
        </div>
      </div>
    </div>
  );
};

export default Interested;
