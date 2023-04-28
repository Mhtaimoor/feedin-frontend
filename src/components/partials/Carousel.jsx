import React from "react";
import slide1 from "../../assets/slider1.jpg";
import slide2 from "../../assets/slider2.jpg";
import slide3 from "../../assets/slider3.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Carousal() {
  return (
    <div className=" p-8 md:px-16 grid grid-col-1 md:grid-cols-2 gap-4 bg-zinc-800 rounded-bl-3xl md:rounded-bl-full">
      <div className="p-12 py-22">
        <h1 className="py-5 text-4xl text-white font-bold">
          Make Your Favorites{" "}
        </h1>
        <h2 className=" text-4xl text-purple-700 font-bold">Your Beloved!</h2>
        <div className="md:mt-24 mt-20">
          <button
            type="button"
            class="text-white bg-purple-700 hover:bg-purple-800 md:mx-3 font-semibold focus:ring-4 focus:outline-none focus:ring-purple-300 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
          >
            View Brands
            <svg
              aria-hidden="true"
              class="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <button
            type="button"
            class="text-purple-700 bg-white hover:bg-gray-300 mt-2 md:mt-0 focus:ring-4 focus:outline-none focus:ring-purple-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
          >
            Write a Review
            <svg
              aria-hidden="true"
              class="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="sliders py-8 overflow-hidden ">
        <Carousel autoPlay infiniteLoop>
          <div>
            <img src={slide1} id="image" alt="" />
          </div>
          <div>
            <img src={slide2} id="image" alt="" />
          </div>
          <div>
            <img src={slide3} id="image" alt="" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
