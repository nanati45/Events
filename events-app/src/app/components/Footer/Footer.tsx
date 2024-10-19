import React from "react";

const Footer = () => {
  return (
    <div className="flex w-full h-full bg-[#2B293D] p-8 text-white ">
      <div className="flex-1">
        <h1 className="font-bold text-lg">Company Info</h1>
        <ul className="mt-2">
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Careers</li>
          <li>FAQs</li>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
        </ul>
      </div>

      <div className="flex-1">
        <h1 className="font-bold text-lg">Help</h1>
        <ul className="mt-2">
          <li>Account Support</li>
          <li>Listing Events</li>
          <li>Event Ticketing</li>
          <li>Ticket Purchase Terms & Conditions</li>
        </ul>
      </div>

      <div className="flex-1">
        <h1 className="font-bold text-lg">Categories</h1>
        <ul className="mt-2">
          <li>Concerts & Gigs</li>
          <li>Festivals & Lifestyle</li>
          <li>Business & Networking</li>
          <li>Food & Drinks</li>
          <li>Performing Arts</li>
          <li>Sports & Outdoors</li>
          <li>Exhibitions</li>
          <li>Workshops, Conferences & Classes</li>
        </ul>
      </div>

      <div className="flex-1">
        <h1 className="font-bold text-lg">Follow Us</h1>
        <ul className="mt-2">
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
          <li>YouTube</li>
        </ul>
      </div>

      <div className="flex-1">
        <h1 className="font-bold text-lg">Download The App</h1>
        <div className="mt-2">
          <div className="flex items-center mb-4 border rounded-lg p-4">
            <img
              src="/assets/images/play.png"
              alt="Google Play"
              className="h-8 w-8"
            />
            <div className="ml-2">
              <p className="text-sm">Get it on</p>
              <p className="font-bold">Google Play</p>
            </div>
          </div>
          <div className="flex items-center border rounded-lg p-4">
            <img
              src="/assets/images/apple.png"
              alt="App Store"
              className="h-8 w-8"
            />
            <div className="ml-2">
              <p className="text-sm">Download on the</p>
              <p className="font-bold">App Store</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
