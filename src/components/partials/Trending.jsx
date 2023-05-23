import React from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Trending() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Enable auto-play
    autoplaySpeed: 2000,
  };

  const slides = [
    {
      image:
        "https://visitlahore.com/wp-content/uploads/2019/12/Arcadian-Cafe-Logo-1.png",
      title: "Arcadian Cafe Signature",
    },
    {
      image:
        "https://www.feedthelion.co.uk/wp-content/uploads/2014/05/bigmoes-logo.png",
      title: "Big Moe's Diner Emporium",
    },
    {
      image:
        "https://i0.wp.com/menuprices.pk/wp-content/uploads/2020/10/Blackstone-Restaurant-Photos-scaled.jpg?ssl=1",
      title: "Blackstone - The Elite",
    },
    {
      image:
        "https://seeklogo.com/images/P/pizza-hut-logo-DBFE2E48AF-seeklogo.com.png",
      title: "Pizza Hut",
    },

    {
      image:
        "https://lahore.themonal.com/wp-content/uploads/2022/06/ambiance-4.jpg",
      title: "Monal Restaurant",
    },
    {
      image:
        "https://play-lh.googleusercontent.com/pUxTDmmLfylCenSd0Awj5KICs8so5YiIEw_8FfpOoqLR55g3DIm4N-1EObynHsTeXGo",
      title: "Pizza Max",
    },
    {
      image: "https://em-cdn.eatmubarak.pk/54946/logo/1649325481.png",
      title: "Cheezious Lahore",
    },
  ];

  return (
    <>
      <div className=" p-4">
        <h1 className="text-4xl text-center font-bold">Top Trending</h1>
        <div className="p-10 md:mx-32 shadow-xl">
          <Slider {...sliderSettings}>
            {slides.map((slide, index) => (
              <div
                key={index}
                className="md:w-56 sm:32 p-2 shadow-xl flex justify-center"
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="md:w-60 md:h-60 sm:w-32 sm:h-32 md:ml-5"
                />
                <h3 className="text-md font-semibold text-center">
                  {slide.title}
                </h3>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
