"use client";
import React, { useState } from "react";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa"; // For icons

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Handle clearing the search term
  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <div className="flex items-center w-[600px] bg-white rounded-md shadow-md">
      {/* Search Icon and Input */}
      <div className="flex items-center w-full px-4 py-2">
        <FaSearch className="text-gray-500" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search here..."
          className="flex-grow outline-none px-4"
        />
        {searchTerm && (
          <FaTimes
            className="text-gray-500 cursor-pointer"
            onClick={clearSearch}
          />
        )}
      </div>

      {/* Location Selector */}
      <div className="flex items-center border-l px-4 py-2">
        <FaMapMarkerAlt className="text-gray-500" />
        <span className="px-2">Ethiopia</span>
        <FaChevronDown className="text-gray-500 cursor-pointer" />
      </div>
    </div>
  );
};

export default SearchBar;
