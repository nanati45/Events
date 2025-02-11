import Image from "next/image";
import React from "react";

const Categories = () => {
  return (
    <div className="flex flex-col items-center  w-3/4 justify-start gap-6 p-4">
      <div className="w-20 h-20 overflow-hidden rounded-full">
        <Image
          src="/assets/images/des.jpg"
          alt="category"
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-center text-base p-2">Entertainment</p>
    </div>
  );
};

export default Categories;
