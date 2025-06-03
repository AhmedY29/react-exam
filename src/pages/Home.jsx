import React from "react";
import Hero from "../components/HomeComponents/Hero";

function Home() {
  return (
    <section className="home-section flex justify-center w-full">
      <div className="home-content w-[98%]">
        <Hero />
      </div>
    </section>
  );
}

export default Home;
