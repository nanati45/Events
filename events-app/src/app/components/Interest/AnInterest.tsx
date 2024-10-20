import React from "react";

interface InterestSection {
  title: string;
  interests: string[];
}

interface AnInterestProps {
  sections: InterestSection[];
}

const AnInterest: React.FC<AnInterestProps> = ({ sections }) => {
  return (
    <div className="w-full gap-12">
      {sections.map((section, index) => (
        <div key={index} className="w-full border-b space-y-3">
          <h1>{section.title}</h1>
          <ul className="flex ">
            {section.interests.map((interest, i) => (
              <li
                key={i}
                className="px-4 py text-[15px] border-black rounded-xl bg-gray-200 mx-4 mb-2 "
              >
                {interest}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AnInterest;
