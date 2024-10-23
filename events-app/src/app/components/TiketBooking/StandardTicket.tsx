import React from "react";

const StandardTicket = () => {
  return (
    <div className=" bg-[#287921] h-100">
      <div className=" ml-2 bg-white flex justify-between px-4 py-2 items-center">
        <div className="space-y-2 pl-2">
          <p className="font-bold text-[16px] text-[#2D2C2C] ">
            Standard Ticket
          </p>
          <p>200 birr</p>
        </div>
        <div className="flex gap-4 items-center">
          <button>
            <img
              src="/assets/images/substract.png"
              alt="minus"
              className="w-8 h-8"
            />
          </button>
          <p className="text-[20px] font-extrabold"> 1 </p>
          <button>
            <img src="/assets/images/add.png" alt="plus" className="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StandardTicket;
