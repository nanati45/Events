import Image from "next/image";
import React from "react";

const Share = () => {
  return (
    <div className="w-1/3 bg-white shadow-md space-y-6 p-5">
      <h1 className="font-extrabold text-[20px] text-[#2D2C2C] flex justify-center items-center">
        Share with Friends
      </h1>
      <div className="flex justify-center items-center space-x-3">
        <Image src="/assets/images/fb.png" alt="fb" className="w-8 h-8"  width={8} height={8}/>
        <Image
          src="/assets/images/twitter.png"
          alt="twitter"
          className="w-6 h-6"
          width={6} height={6}
        />
        <Image
          src="/assets/images/whatsapp.png"
          alt="whatsapp"
          className="w-8 h-8"
          width={8} height={8}
        />
        <Image
          src="/assets/images/linkedin.png"
          alt="linkedin"
          className="w-7 h-7"
          width={7} height={7}
        />
      </div>
      <div className="border p-2 m-2 flex items-center justify-center">
        <div className="overflow-clip h-15">
          <p>Event Url</p>
          <p>
            https://www.eventify.com/s/sound-of-christmas-2023-tickets-cmsincshvu
          </p>
        </div>
        <Image src="/assets/images/copy.png" alt="copy" className="w-8 h-8"   width={8} height={8}/>
      </div>
    </div>
  );
};

export default Share;
