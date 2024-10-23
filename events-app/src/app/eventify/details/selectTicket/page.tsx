import AttendeeDetail from "@/app/components/TiketBooking/AttendeeDetail";
import OrderSummary from "@/app/components/TiketBooking/OrderSummary";
import SelectTicket from "@/app/components/TiketBooking/SelectTicket";
import Share from "@/app/components/TiketBooking/Share";
import React from "react";

const pages = () => {
  return (
    <div>
      <SelectTicket />
      <Share />
      <OrderSummary />
      <AttendeeDetail />
    </div>
  );
};

export default pages;
