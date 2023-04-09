import React from "react";
import Brands from "./partials/About";
import Cards from "./partials/Cards";
import Carousel from "./partials/Carousel";
import Footer from "./partials/Footer";

import Navbar from "./partials/Navbar";

export default function Home() {
  return (
    <div className="home">
      <div>
        <Navbar />

        <Carousel />
      </div>
      <div className="">
        <Brands />
      </div>
      <div className="bg-zinc-800">
        <Cards />
        <Footer />
      </div>
    </div>
  );
}
