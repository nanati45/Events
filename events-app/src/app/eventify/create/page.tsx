import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";

import Ticketing from "@/app/components/NewEvent/Ticketing";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <Ticketing />
      <Footer />
    </div>
  );
};

export default page;
