import React from "react";
import Navbar from "../partials/Navbar";
import BrandCard from "./BrandCard";
import Footer from "../partials/Footer";
import ReactPaginate from "react-paginate";

export default function Brands() {
  return (
    <>
      <div className=" bg-gradient-to-r from-gray-500 via-gray-900 to-gray-700">
        <Navbar />
        <h1 className="text-white text-center text-3xl font-semibold pt-10">
          Enter Your Location
        </h1>
        <div className="md:px-10 px-10 py-10">
          <select
            id="countries"
            class="bg-gray-50 border border-3 border-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          >
            <option selected>Choose Your Area</option>
            <option value="JT">Johar Town</option>
            <option value="WT">Wapda Town</option>
          </select>
        </div>
        <div className="px-30 py-10">
          <BrandCard />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}
