import React from "react";
import AnInterest from "./AnInterest"; // Import your AnInterest component

interface InterestSection {
  title: string;
  interests: string[];
}

// Define the sections array
const sections: InterestSection[] = [
  {
    title: "Music",
    interests: ["JavaScript", "TypeScript", "Python"],
  },
  { title: "Hobbies", interests: ["Photography", "Gardening", "Cooking"] },
  { title: "Sports", interests: ["Soccer", "Basketball", "Tennis"] },
];

const Interests = () => {
  return (
    <div className="flex flex-col w-full items-start px-14 py-8 space-y-4">
      <h1 className="font-extrabold text-[20px] text-[#2D2C2C]">
        Share your interests with us
      </h1>
      <p className="font-medium text-[16px] text-[#2D2C2C]">
        Choose your interests below to get personalized event suggestions.
      </p>
      <AnInterest sections={sections} />
      <button className="bg-[#2D2C2C]  rounded-lg px-6 py-3 text-white font-extrabold text-[16px]">
        Save My Interest
      </button>
    </div>
  );
};

export default Interests;
