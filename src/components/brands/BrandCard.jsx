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
            class="object-cover w-full rounded-t-lg md:h-auto md:w-80 md:rounded-none md:rounded-l-lg"
            src={slider1}
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight  text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p class="mb-3 font-normal text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </a>
      </div>
    </>
  );
}
