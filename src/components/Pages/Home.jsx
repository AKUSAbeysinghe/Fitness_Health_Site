import React from "react";
import Banner from "./../Banner";
import About from "./../Ourstory";
import Suppliments from "./../SupplimentsSection";
import Parmacy from "./../ParmacySection";
import Fitness from "./../FitnessSection";
import PartnerCTA from "../Partnership";

import Hero from "../Hero";

const Home = () => {
  return (
    <>
      <Hero/>
      <Banner />
      <About />
      <Parmacy/>
      <Suppliments/>
      <Fitness/>
      <PartnerCTA/>
      
      
    </>
  );
};

export default Home;