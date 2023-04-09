import React from "react";
import slide1 from "../../assets/slider1.jpg";
import slide2 from "../../assets/slider2.jpg";
import slide3 from "../../assets/slider3.jpg";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Carousal() {
  return (
    <div className="px-16 grid grid-col-1 md:grid-cols-2 gap-4 bg-zinc-800 rounded-bl-full">
      <div className="p-12 py-22">
        <h1 className="py-5 text-4xl text-white font-bold">
          Make Your Favorites{" "}
        </h1>
        <h2 className=" text-4xl text-purple-700 font-bold">Your Beloved!</h2>
      </div>
      <div className="sliders py-8 overflow-hidden ">
        <Carousel autoPlay infiniteLoop>
          <div>
            <img src={slide1} id="image" />
          </div>
          <div>
            <img src={slide2} id="image" />
          </div>
          <div>
            <img src={slide3} id="image" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
