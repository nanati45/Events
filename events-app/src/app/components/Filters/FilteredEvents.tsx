"use client";
import React, { useState } from "react";
import EventCard from "../EventCard/EventCard";
import FilteredEventsCard from "./FilteredEventsCard";

const FilteredEvents = () => {
  const [sortOption, setSortOption] = useState("Relevance");

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };
  return (
    <div className="flex flex-col items-center  p-8 w-3/4 ">
      <div className=" top-6 right-8 flex   items-center space-x-2 mb-6">
        <p className="text-gray-600">Sort by:</p>
        <select
          value={sortOption}
          onChange={handleSortChange}
          className="border px-2 py-1 rounded"
        >
          <option value="Relevance">Relevance</option>
          <option value="Date">Date</option>
          <option value="Price: Low to High">Price: Low to High</option>
          <option value="Price: High to Low">Price: High to Low</option>
        </select>
      </div>
      <div className="flex">
        <FilteredEventsCard />
      </div>
    </div>
  );
};

export default FilteredEvents;
