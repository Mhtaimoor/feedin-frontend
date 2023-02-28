import React from "react";
import Brands from "./partials/About";
import Cards from "./partials/Cards";
import Carousel from "./partials/Carousel";
import Footer from "./partials/Footer";

import Navbar from "./partials/Navbar";

export default function Home() {
  return (
    <div className="home">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="bg-gradient-to-r from-gray-500 via-gray-900 to-gray-700">
        <Carousel />
      </div>
      <div className=" bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 py-2">
        <Brands />
      </div>
      <div className="bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r">
        <Cards />
        <Footer />
      </div>
    </div>
  );
}
