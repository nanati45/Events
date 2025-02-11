import React from "react";
import DateandTime from "./DateandTime";
import Location from "./Location";
import BuyTicket from "./BuyTicket";
import TicketInfo from "./TicketInfo";
import Description from "./Description";
import Tags from "./Tags";
import EventCard from "../EventCard/EventCard";
import Image from "next/image";

const Details = () => {
  return (
    <div className="flex flex-col px-20 gap-8 w-full relative">
      <div className="absolute top-4 left-3">
        <Image
          src="/assets/images/arrow.png"
          alt="leftarrow"
          className="w-10 h-10"
          width={10}
          height={10}
        />
      </div>
      <div className="my-6 w-full">
        <Image src="/assets/images/banner.png" alt="banner" />
      </div>
      <div>
        <div className=" flex justify-between">
          <h1 className="font-extrabold text-[24px] text-[#2D2C2C]">
            The Sound of Chirstmas 2025
          </h1>
          <div className="flex">
            <Image src="/assets/images/like.png" alt="like" className="w-8 h-8" width={8} height={8}/>
            <Image
              src="/assets/images/share.png"
              alt="share"
              className="w-8 h-8"
              width={8} height={8}
            />
          </div>
        </div>
        <div className="border-b mb-6">
          <div className="flex justify-between">
            <div className="">
              <DateandTime />
              <Location />
            </div>
            <div className="">
              <BuyTicket />
              <TicketInfo />
            </div>
          </div>
          <Description />
          <Tags />
        </div>
      </div>
      <div className="space-y-4 relative">
        <Image
          src="/assets/images/leftarrow.png"
          alt="leftarrow"
          className="w-10 h-10 absolute bottom-4 left-3"
        />

        <Image
          src="/assets/images/rightarrow.png"
          alt="leftarrow"
          className="w-10 h-10 absolute bottom-4 right-3"
        />
        <h1 className="font-extrabold text-[24px] text-[#2D2C2C]">
          Other Events you may like
        </h1>
        <div className="flex gap-4">
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
    </div>
  );
};

export default Details;
