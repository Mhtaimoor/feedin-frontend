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
      <div className="bg-gray-200">
        <Brands />
      </div>
      <div className="bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r">
        <Cards />
        <Footer />
      </div>
    </div>
  );
}
