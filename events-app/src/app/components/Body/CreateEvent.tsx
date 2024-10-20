import React from "react";

const CreateEvent = () => {
  return (
    <div className="relative w-full h-[250px] mb-6 text-yellow-300">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-black bg-opacity-50"
        style={{
          backgroundImage: "url('/assets/images/bluebg.png')",
        }}
      ></div>

      {/* Text Content */}
      <div className="relative z-10 flex justify-center items-center h-full text-center  px-6">
        <div>
          <h1 className="text-4xl font-semibold">
            Create an event with Eventify{" "}
          </h1>
          <p className="text-2xl mt-4">
            Got a show, event, activity or a great experience? Partner with us &
            get listed on Eventify
          </p>
        </div>
        <button className="text-[#2D2C3C] flex items-center ml-4 bg-yellow-300 font-semibold px-8 py-4 mt-4 rounded-md ">
          <img src="/assets/images/create.png" alt="create" width={20} />
          Create Event
        </button>
      </div>
    </div>
  );
};

export default CreateEvent;
