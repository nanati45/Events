import Image from "next/image";
import React from "react";

const BuyTicket = () => {
  return (
    <div className="py-6 ">
      <button className="font-extrabold px-8 py-3 flex text-[20px] rounded-md bg-[#FFE047] text-[#2D2C2C] gap-4 items-center justify-center">
        <Image src="/assets/images/money.png" alt="money" className="w-8 h-8" width={8} height={8} />
        Buy Tickets
      </button>
    </div>
  );
};

export default BuyTicket;
