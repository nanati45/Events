import React from "react";
import Categories from "./Categories";

const ExploreCategories = () => {
  return (
    <div className="flex flex-col justify-start w-3/4 mt-6">
      <h1 className="font-bold text-[20px]">Explore Categories</h1>
      <div className="flex flex-row justify-start overflow-hidden max-w-full ">
        <Categories />
        <Categories />
        <Categories />
        <Categories />
        <Categories />
        <Categories />
        <Categories />
        <Categories />
      </div>
    </div>
  );
};

export default ExploreCategories;
