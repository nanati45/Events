import Image from "next/image";
import React from "react";

const Location = () => {
  return (
    <div className="flex flex-col w-1/2 space-y-5 py-6">
      <p className="font-bold text-[#2D2C2C] text-[18px]">Location</p>
      <div className="flex space-x-3 items-start">
        <Image
          src="/assets/images/location.png"
          alt="location"
          className="w-6 h-6"
          width={6} height={6}
        />
        <p>
          Bal Gandharva Rang Mandir, Near Junction Of 24th & 32nd Road &
          Patwardhan Park,Off Linking Road, Bandra West., Mumbai, India
        </p>
      </div>
      <div>
        <Image src="/assets/images/Map.png" alt="map" />
      </div>
    </div>
  );
};

export default Location;
