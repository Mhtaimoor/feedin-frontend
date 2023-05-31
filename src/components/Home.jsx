import React from "react";
import About from "./partials/About";
import Cards from "./partials/Cards";
import Carousel from "./partials/Carousel";
import Footer from "./partials/Footer";

import Navbar from "./partials/Navbar";
import Trending from "./partials/Trending";
import Headline from "./partials/Headline";

export default function Home() {
  return (
    <div className="home">
      {/* <Headline /> */}
      <div>
        <Navbar />

        <Carousel />
      </div>
      <div className="">
        <Trending />
        <About />
      </div>
      <div className="bg-zinc-800">
        <Cards />
        <Footer />
      </div>
    </div>
  );
}
