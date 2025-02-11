import React from "react";
import Attendee from "./Attendee";
import Image from "next/image";

const AttendeeDetail = () => {
  return (
    <div className="w-1/3 space-y-3 h-500 bg-[#F1F3F6] shadow-md">
      <div className="flex space-x-3 pl-2 bg-white p-2 items-center rounded-sm shadow-md mb-6">
        <Image src="/assets/images/arrow.png" alt="arrow" className="w-8 h-8"  width={8} height={8} />
        <h1 className="font-extrabold bg-white p-2 text-[#2D2C2C] text-[20px] ">
          Attendee Detail
        </h1>
      </div>
      <div className="flex justify-between items-center px-2">
        <p>Sound Of Christmas 2023</p>
        <div className="flex space-x-3 items-center">
          <Image src="/assets/images/date.png" alt="date" className="w-5 h-5"  width={5} height={5}/>
          <p>Saturday, 2 December 2023</p>
        </div>
      </div>
      <p className="px-2">Standard Ticket: Ticket #1</p>
      <Attendee />
      <p className="px-2 items-center justify-center">
        I accept the <a href="">Terms of Service</a> and have the the{" "}
        <a href="">Privacy Policy</a>
      </p>
      <div className="bg-white p-4 space-y-3">
        <div className="flex justify-center text-[16px] items-center gap-8">
          <p>Qty : 1</p>
          <p>Total : 200 birr</p>
        </div>
        <div>
          <button className="flex text-[20px] w-full rounded-md text-white bg-[#2D2C2C] px-10 py-2 items-center justify-center">
            Continue to Checkout
            <Image src="/assets/images/next.png" alt="next" className="w-6 h-6"  width={6} height={6}/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AttendeeDetail;
