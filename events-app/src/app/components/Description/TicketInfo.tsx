import Image from "next/image";
import React from "react";

const TicketInfo = () => {
  return (
    <div className="w-1/2 py-6 space-y-6">
      <h1 className="font-semibold text-[#2D2C2C] text-[20px]">
        Ticket Information
      </h1>
      <div className="flex space-x-2">
        <Image src="/assets/images/money.png" alt="money" className="w-6 h-6"  width={6} height={6}/>
        <p>Standard Ticket: 200 birr each</p>
      </div>
    </div>
  );
};

export default TicketInfo;
