import React from "react";
import slide1 from "../../assets/slider1.jpg";
import slide2 from "../../assets/slider2.jpg";
import slide3 from "../../assets/slider3.jpg";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Carousal() {
  return (
    <div className="sliders overflow-hidden">
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
  );
}
