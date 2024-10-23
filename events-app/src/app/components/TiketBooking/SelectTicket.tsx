import React from "react";
import StandardTicket from "./StandardTicket";

const SelectTicket = () => {
  return (
    <div className="w-1/3 space-y-3 h-500 bg-[#F1F3F6] shadow-md">
      <h1 className="font-extrabold bg-white p-2 text-[#2D2C2C] text-[20px] rounded-sm shadow-md mb-6">
        Select Ticket
      </h1>
      <div className="flex justify-between items-center px-8">
        <p>Ticket Types</p>
        <p>Quantity</p>
      </div>
      <StandardTicket />
      <div className="bg-white p-4 space-y-3">
        <div className="flex justify-center text-[16px] items-center gap-8">
          <p>Qty : 1</p>
          <p>Total : 200 birr</p>
        </div>
        <div>
          <button className="flex text-[20px] w-full rounded-md text-white bg-[#2D2C2C] px-10 py-2 items-center justify-center">
            Proceed
            <img src="/assets/images/next.png" alt="next" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectTicket;
