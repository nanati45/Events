import FilteredEvents from "@/app/components/Filters/FilteredEvents";
import Filters from "@/app/components/Filters/Filters";
import Header from "@/app/components/Header/Header";
import ExploreEvents from "@/app/components/Search/ExploreEvents";
import SearchBar from "@/app/components/Search/Search";
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
    </div>
  );
};

export default page;
