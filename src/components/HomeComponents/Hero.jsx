import React from "react";

// React Icon
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Products from "./Products";

function Hero() {
  return (
    <section className="hero-section bg-[url(https://m.media-amazon.com/images/I/61q5Pg3hO8L._SX3000_.jpg)] bg-contain h-full">
      <div className="w-full flex justify-between items-center text-7xl h-50">
        <div className="right py-4 hover:outline-1 ">
          <IoIosArrowBack />
        </div>
        <div className="left py-4 hover:outline-1">
          <IoIosArrowForward />
        </div>
      </div>
      <Products />
    </section>
  );
}

export default Hero;
