import React from "react";
import StandardTicket from "./StandardTicket";

const OrderSummary = () => {
  return (
    <div className="w-1/3 items-center">
      <div className="flex space-x-3 pl-2 bg-white p-2 items-center rounded-sm shadow-md mb-6">
        <img src="/assets/images/arrow.png" alt="arrow" className="w-8 h-8" />
        <h1 className="font-extrabold bg-white p-2 text-[#2D2C2C] text-[20px] ">
          Order Summarry
        </h1>
      </div>
      <StandardTicket />
      <div className="bg-white p-4 space-y-3">
        <div className="flex flex-col items-center space-y-3">
          <div className="grid grid-cols-2 justify-center text-[16px] items-center gap-8">
            <p>Sub Total : </p>
            <p>200 birr</p>
          </div>
          <div className="grid grid-cols-2  justify-center text-[16px] items-center gap-8">
            <p>Tax : </p>
            <p> 11 birr</p>
          </div>

          <div className="grid grid-cols-2  justify-center text-[16px] items-center gap-8">
            <p>Total :</p>
            <p>211 birr</p>
          </div>
        </div>
        <div>
          <button className="flex text-[20px] w-full rounded-md text-white bg-[#287921] px-10 py-2 items-center justify-center">
            <img src="/assets/images/pay.png" alt="next" className="w-6 h-6" />
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
