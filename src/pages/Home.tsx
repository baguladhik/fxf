import React from "react";
import Hero from "../components/Hero";
import TokenSale from "../components/TokenSale";
import LatestBuys from "../components/LatestBuys";
import Benefits from "../components/Benefits";
import Team from "../components/Team";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <TokenSale />
      <LatestBuys />
      <Benefits />
      <Team />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
