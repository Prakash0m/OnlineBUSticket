import React from "react";
import Hero from "./Hero";
import Services from "./services/Services";

const Home = () => {
  return (
    <div className=" space-y-16 w-full min-h-screen pb-16 ">
      {/* hero section */}
      <Hero />

      <Services />
    </div>
  );
};

export default Home;
