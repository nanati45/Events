import React from "react";

const FilteredEventsCard = () => {
  return (
    <div className="w-full pb-6 h-[200px] flex space-x-6 overflow-hidden">
      {/* Image div */}
      <div className="w-[40%] relative">
        <img
          src="/assets/images/des.jpg"
          alt="picture"
          className="absolute rounded-lg inset-0 w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 bg-[#e7cc53] text-black px-4 py-1 rounded-sm text-[12px]">
          Travel & Adventure
        </div>
        <div className="absolute right-3 top-3 shadow-lg px-4 py-1 rounded-sm">
          <img
            src="/assets/images/fav1.png"
            alt="favorite"
            className="w-10 h-10"
          />
        </div>
      </div>

      {/* Description div */}
      <div className="w-[60%] flex flex-col justify-between px-1 space-y-2">
        <p className="font-semibold text-[16px]">Lakeside Camping at Pawna</p>
        <p className="font-medium text-[14px]">Nov 26 - 27 | Adama</p>
        <p className="font-medium text-[12px]">8:30 AM - 7:30 PM</p>
        <div className="flex items-center font-medium text-[13px] space-x-2">
          <img
            src="/assets/images/image.png"
            alt=""
            className="w-[16px] h-[14px]"
          />
          <p>INR 1,400</p>
        </div>
      </div>
    </div>
  );
};

export default FilteredEventsCard;
