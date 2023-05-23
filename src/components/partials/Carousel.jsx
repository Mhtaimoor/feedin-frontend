import React, { useEffect, useState } from "react";

import slide3 from "../../assets/slider/slide3.jpg";
import slide5 from "../../assets/slider/slide5.jpg";
import slide7 from "../../assets/slider/slide7.jpg";
import slide8 from "../../assets/slider/slide8.jpg";
import slide9 from "../../assets/slider/slide9.jpg";
import slide10 from "../../assets/slider/slide10.jpg";
import slide11 from "../../assets/slider/slide11.jpg";
import slide12 from "../../assets/slider/slide12.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import userService from "../../services/UserService";
import { useNavigate } from "react-router-dom";

export default function Carousal() {
  const [words] = useState([
    "Beloved!",
    "Inspiration!",
    "Motivation!",
    "Happiness!",
    "Memories!",
  ]);
  const [part, setPart] = useState("");
  const [i, setI] = useState(0);
  const [offset, setOffset] = useState(0);
  const [len] = useState(words.length);
  const [forwards, setForwards] = useState(true);
  const [skipCount, setSkipCount] = useState(0);
  const [skipDelay] = useState(15);
  const [speed] = useState(40);

  useEffect(() => {
    const wordFlickInterval = setInterval(wordFlick, speed);
    return () => clearInterval(wordFlickInterval);
  }, [i, offset, forwards, skipCount]); // Add the dependencies here

  const wordFlick = () => {
    if (forwards) {
      if (offset >= words[i].length) {
        setSkipCount((prevCount) => prevCount + 1);

        if (skipCount === skipDelay) {
          setForwards(false);
          setSkipCount(0);
        }
      }
    } else {
      if (offset === 0) {
        setForwards(true);
        setI((prevI) => (prevI + 1 >= len ? 0 : prevI + 1));
        setOffset(0);
      }
    }

    const part = words[i].substr(0, offset);

    if (skipCount === 0) {
      if (forwards) {
        setOffset((prevOffset) => prevOffset + 1);
      } else {
        setOffset((prevOffset) => prevOffset - 1);
      }
    }

    setPart(part);
  };
  const outlineStyle = {
    textShadow:
      "-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white",
  };
  const navigate = useNavigate();

  const handleBrands = (e) => {
    const user = userService.getCurrentUser();

    if (user) {
      navigate("/user/brands");
    } else {
      navigate("/login");
    }
  };

  const handleWriteReview = (e) => {
    const user = userService.getCurrentUser();

    if (user) {
      navigate("/user/writeReview");
    } else {
      navigate("/login");
    }
  };
  return (
    <div className=" p-8 pt-3 md:px-16 grid grid-col-1 md:grid-cols-2 gap-4 bg-zinc-800 rounded-bl-3xl md:rounded-bl-full">
      <div className="p-12 py-22">
        <h1 className="py-5 text-4xl text-white font-bold">
          Make Your Favorites{" "}
        </h1>
        <div className="h-16">
          <h2 className=" text-4xl text-purple-700 font-bold">Your {part}</h2>
        </div>

        <div className="md:mt-24 mt-20">
          <button
            type="button"
            onClick={handleBrands}
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
            onClick={handleWriteReview}
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
      <div className="sliders overflow-hidden">
        <div className="flex justify-center w-full p-3 blink">
          <span className="text-yellow-400 text-3xl font-bold">* </span>
          <h2
            className="text-3xl text-red-600 font-bold border-spacing-1 border-white px-2"
            style={outlineStyle}
          >
            {" "}
            Hot Deals{" "}
          </h2>
          <span className="text-yellow-400 text-3xl font-bold"> *</span>
        </div>
        <div className="rounded-2xl overflow-hidden carouselHeight">
          <Carousel autoPlay infiniteLoop showThumbs={false}>
            <div>
              <img src={slide3} id="sliderImage" alt="" />
            </div>

            <div>
              <img src={slide5} id="sliderImage" alt="" />
            </div>

            <div>
              <img src={slide7} id="sliderImage" alt="" />
            </div>
            <div>
              <img src={slide8} id="sliderImage" alt="" />
            </div>
            <div>
              <img src={slide9} id="sliderImage" alt="" />
            </div>
            <div>
              <img src={slide10} id="sliderImage" alt="" />
            </div>
            <div>
              <img src={slide11} id="sliderImage" alt="" />
            </div>
            <div>
              <img src={slide12} id="sliderImage" alt="" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
