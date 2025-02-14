import FilteredEvents from "@/app/components/Filters/FilteredEvents";
import Filters from "@/app/components/Filters/Filters";
import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";
import ExploreEvents from "@/app/components/Search/ExploreEvents";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <ExploreEvents />
      <div className="flex w-full">
        <Filters />
        <FilteredEvents />
      </div>
      <Footer />
    </div>
  );
};

export default page;
