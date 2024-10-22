"use client";
import React, { useState } from "react";

interface filtersType {
  title: string;
  filter: string[];
}

const filters: filtersType[] = [
  {
    title: "Price",
    filter: ["Free", "Paid"],
  },
  {
    title: "Date",
    filter: ["Today", "Tomorrow", "This Week", "This Weekend"],
  },
  {
    title: "Category",
    filter: [
      "Adventure Travel",
      "Art Exhibitions",
      "Auctions & Fundraisers",
      "Beer Festivals",
      "Benefit Concerts",
    ],
  },
];

const Filters = () => {
  const [showMore, setShowMore] = useState<{
    [key: string]: boolean | undefined;
  }>({}); // State to track the showMore status for each section

  // Toggle showing more or less options for a specific section
  const toggleShowMore = (title: string) => {
    setShowMore((prev) => ({
      ...prev,
      [title]: !prev[title], // Toggle the value for the specific section
    }));
  };

  return (
    <div className="border-r p-4 w-1/4 px-8 py-4 mt-6">
      <h1 className="text-[20px] text-[#2D2C2C] font-semibold">Filters</h1>

      {filters.map((filterSection, index) => (
        <div className="mt-4 border-b pb-4" key={index}>
          <p className="text-[18px] text-[#2D2C2C] font-medium pb-3">
            {filterSection.title}
          </p>
          <ul>
            {filterSection.filter
              .slice(
                0,
                showMore[filterSection.title] ? filterSection.filter.length : 5
              )
              .map((filterOption, idx) => (
                <li key={idx} className="flex items-center mb-4">
                  <input type="checkbox" className="mr-2" />
                  {filterOption}
                </li>
              ))}
          </ul>

          {/* Show More / Less Toggle */}
          {filterSection.filter.length > 4 && (
            <a
              className="text-blue-500 cursor-pointer"
              onClick={() => toggleShowMore(filterSection.title)}
            >
              {showMore[filterSection.title] ? "Less" : "More"}
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default Filters;
