import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";
import Banner from "@/app/components/NewEvent/Banner";
import Edit from "@/app/components/NewEvent/Edit";
import Review from "@/app/components/NewEvent/Review";
import Ticketing from "@/app/components/NewEvent/Ticketing";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <Review />
      <Footer />
    </div>
  );
};

export default page;
