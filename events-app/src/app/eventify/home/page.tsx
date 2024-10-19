import ExploreCategories from "@/app/components/Explore/ExploreCategories";
import PopularInEthiopia from "@/app/components/Body/PopularInEthiopia";
import React from "react";
import Trending from "@/app/components/Body/Trending";
import OnlineEvents from "@/app/components/Body/OnlineEvents";
import Header from "@/app/components/Header/Header";
import HeroSection from "@/app/components/Body/HeroSection";
import Footer from "@/app/components/Footer/Footer";
import GetStarted from "@/app/components/Body/GetStarted";
import Subscribe from "@/app/components/Body/Subscribe";
import CreateEvent from "@/app/components/Body/CreateEvent";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <Header />
      <HeroSection />
      <ExploreCategories />
      <PopularInEthiopia />
      <GetStarted />
      <OnlineEvents />
      <Trending />
      <CreateEvent />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default page;
