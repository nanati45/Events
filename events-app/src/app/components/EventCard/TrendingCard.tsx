import Image from "next/image";
import React from "react";

const EventCard = () => {
  return (
    <div className="w-1/3 pb-6 relative">
      <div className="w-full h-[200px] relative">
        <Image
          src="/assets/images/des.jpg"
          alt="picture"
          className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
        />
        <div className="absolute top-3 left-2  bg-[#2B293D] text-white px-4 py-1 rounded-2xl  text-[12px]">
          Ethiopia
        </div>
        <div className="absolute bottom-0 left-0   bg-[#e7cc53] text-black px-4 py-1 rounded-sm text-[12px]">
          Travel & Adventure
        </div>
        <div className="absolute right-3 top-3  shadow-lg  px-4 py-1 rounded-sm ">
          <Image
            src="/assets/images/fav1.png"
            alt="picture"
            className="w-10 h-10"
              width={10} height={10}
          />
        </div>
      </div>

      <div className="grid grid-cols-8 w-full py-4">
        <div className="col-span-2 flex flex-col items-center font-semibold text-[18px]">
          <div className="text-[#4539B4]">Dec</div>
          <div className="text-[#2D2C3C]">02</div>
        </div>
        <div className="col-span-6 text-justify space-y-2 px-1">
          <p className="font-semibold text-[20px]">Lakeside Camping at Pawna</p>
          <p className="font-medium text-[16px] text-clip">
            Adventure Geek - Explore the Unexplored, Mumbai
          </p>
          <p className="font-medium text-[13px]">8:30 AM - 7:30 PM</p>
          <div className="flex font-medium text-[13px] space-x-2">
            <Image
              src="/assets/images/image.png"
              alt=""
              className="w-[16px] h-[14px]"
              width={16} height={14}
            />
            <p>INR 1,400</p>
            <Image
              src="/assets/images/fav.png"
              alt=""
              className="w-[16px] h-[14px]"
              width={16} height={14}
            />
            <p>14 Interested</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
