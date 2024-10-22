import React from "react";

const StandardTicket = () => {
  return (
    <div className="ml-3 bg-[#287921]">
      <div>
        <p>Standard Ticket</p>
        <p>200 birr</p>
      </div>
      <div className="flex">
        <button>
          <img src="/assets/images/substract.png" alt="minus" />
        </button>
        1
        <button>
          <img src="/assets/images/add.png" alt="plus" />
        </button>
      </div>
    </div>
  );
};

export default StandardTicket;
