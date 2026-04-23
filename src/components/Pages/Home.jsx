import React from "react";
import Banner from "./../Banner";
import About from "./../Ourstory";
import Menu from "./../Menu";
import ProductShow from "./../ProductShowcase";
import Testimonials from "../Testimonial";
import Chefs from "../OurArchitectures";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Chefs />
      <Menu />
      <ProductShow />
      <Testimonials />
    </>
  );
};

export default Home;