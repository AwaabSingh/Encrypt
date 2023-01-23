import React from "react";
import Hero from "./Hero";
import About from "./About";
import Benefit from "./Benefit";
import Pricing from "./Pricing";
import PricingGrid from "./PricingGrid";

const Home = () => {
  return (
    <section>
      <Hero />
      <About />
      <Benefit />
      <PricingGrid />
    </section>
  );
};

export default Home;
