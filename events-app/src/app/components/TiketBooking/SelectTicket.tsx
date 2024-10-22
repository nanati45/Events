import React from "react";
import StandardTicket from "./StandardTicket";

const SelectTicket = () => {
  return (
    <div>
      <h1>Select Ticket</h1>
      <div>
        <p>Ticket Types</p>
        <p>Quantity</p>
      </div>
      <StandardTicket />
    </div>
  );
};

export default SelectTicket;
