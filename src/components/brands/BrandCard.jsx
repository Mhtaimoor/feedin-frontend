import React from "react";
import slider1 from "../../assets/slider1.jpg";

export default function BrandCard() {
  return (
    <>
      <div className="BrandCard lg:px-20">
        <a
          href="#"
          class="flex flex-col items-center h-60 bg-gray-400 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-full hover:bg-gray-100 border-gray-700 bg-gray-800 hover:bg-gray-700"
        >
          <img
            class="object-cover w-full rounded-t-lg md:h-auto md:w-80 md:rounded-none md:rounded-l-lg ml-1"
            src={slider1}
            alt=""
          />
          <div class="flex flex-col justify-between px-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight  text-white">
              Dominos Pizza Restaurant
            </h5>
            <p class="mb-3 font-normal text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>

            <div class="flex items-center">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Rating star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <p class="ml-2 text-sm font-bold text-white">4.95</p>
              <span class="w-1 h-1 mx-1.5 rounded-full bg-gray-400"></span>
              <a
                href="#"
                class="text-sm font-medium  underline hover:no-underline text-white"
              >
                73 reviews
              </a>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
