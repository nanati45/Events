import React from "react";
import DateandTime from "../Description/DateandTime";
import Location from "../Description/Location";
import BuyTicket from "../Description/BuyTicket";
import TicketInfo from "../Description/TicketInfo";
import Description from "../Description/Description";
import Tags from "../Description/Tags";

const ReviewEvent = () => {
  return (
    <div className="flex flex-col p-10 border items-center justify-center rounded-2xl w-full">
      <div className="mb-6 ">
        <img src="/assets/images/eventpp.png" alt="banner" />
      </div>
      <div>
        <div className="flex">
          <h1 className="font-extrabold text-[24px] text-[#2D2C2C]">
            Event Title
          </h1>
        </div>
        <div className="border-b mb-6">
          <div className="flex justify-between">
            <div className="">
              <DateandTime />
              <Location />
            </div>
            <div className="">
              <TicketInfo />
            </div>
          </div>
          <Description />
        </div>
      </div>
    </div>
  );
};

export default ReviewEvent;
