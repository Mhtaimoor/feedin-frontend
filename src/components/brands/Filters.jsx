import React, { useState } from "react";
import Select from "react-select";
import BrandCard from "../brands/BrandCard";

import ReactPaginate from "react-paginate";

const Filter = (props) => {
  const brandNames = props.transformedBrandNames;
  // console.log(brandNames);
  const [brands, setBrands] = useState([]);

  const [totals, setTotals] = useState();
  const [perPage] = useState(15);
  const [page, setPage] = useState(1);
  const [ratingValue, setRatingValue] = useState("");
  const [brandName, setBrandName] = useState("");
  // console.log(brandName);
  const [selectedCuisines, setSelectedCuisines] = useState([]);
  // console.log(selectedCuisines);

  const [location, setLocation] = useState("");

  const handleCuisineSelect = (cuisine) => {
    if (!selectedCuisines) {
      setSelectedCuisines([cuisine]);
    } else if (selectedCuisines.includes(cuisine)) {
      setSelectedCuisines(selectedCuisines.filter((c) => c !== cuisine));
    } else {
      setSelectedCuisines([...selectedCuisines, cuisine]);
    }
  };

  const filteredRestaurants = props.brands?.filter(
    (restaurant) =>
      selectedCuisines.every(
        (cuisine) =>
          restaurant.cuisines &&
          restaurant.cuisines.split(", ").includes(cuisine)
      ) &&
      (brandName
        ? restaurant.name && restaurant.name.includes(brandName.value)
        : true) &&
      (location
        ? restaurant.address && restaurant.address.includes(location)
        : true) &&
      (ratingValue
        ? restaurant.rating && restaurant.rating.includes(ratingValue)
        : true)
  );

  // console.log(filteredRestaurants);

  const [showFilters, setShowfilters] = useState(true);
  // console.log(showFilters);
  const [checked, setChecked] = useState([]);
  // console.log(checked);
  const [check, setCheck] = useState({
    Italian: false,
    French: false,
    Chinese: false,
    Thai: false,

    FastFood: false,

    Cafe: false,
  });
  // console.log(check);

  const {
    Italian,
    French,
    Chinese,
    Thai,

    FastFood,

    Cafe,
  } = check;

  const handleRadioChange = (event) => {
    setRatingValue(event.target.value);
    console.log(event.target.value); // will print the selected value to the console
  };

  const changeHandler = (e) => {
    setCheck({
      ...check,
      [e.target.name]: e.target.checked,
    });
    setChecked({ ...checked, [e.target.name]: e.target.name });
  };
  const handlePageClick = (brands) => {
    setPage(brands.selected + 1);
  };

  const clearFilters = (e) => {
    setCheck({
      ...check,
      Italian: false,
      French: false,
      Chinese: false,
      Thai: false,

      FastFood: false,

      Cafe: false,
    });
    setChecked([]);
  };

  return (
    <>
      <div className="2xl:container 2xl:mx-auto">
        <div className=" md:py-12 lg:px-20 md:px-6 py-9 px-4">
          <p className=" text-sm leading-3 text-gray-600 font-normal mb-2">
            Brands - Filters
          </p>
          <div className=" flex justify-between items-center mb-4">
            <h2 className=" lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">
              Restaurants
            </h2>

            {/*  filters Button (md and plus Screen) */}
            <button
              onClick={() => setShowfilters(!showFilters)}
              className=" cursor-pointer sm:flex rounded-full hidden hover:bg-gray-700 focus:ring focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-4 px-6 bg-gray-800 flex text-base leading-4 font-normal text-white justify-center items-center "
            >
              <svg
                className=" mr-2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12C7.10457 12 8 11.1046 8 10C8 8.89543 7.10457 8 6 8C4.89543 8 4 8.89543 4 10C4 11.1046 4.89543 12 6 12Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 4V8"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 12V20"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 4V14"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 18V20"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 9C19.1046 9 20 8.10457 20 7C20 5.89543 19.1046 5 18 5C16.8954 5 16 5.89543 16 7C16 8.10457 16.8954 9 18 9Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 4V5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 9V20"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Filters
            </button>
          </div>

          {/* Filters Button (Small Screen)  */}

          <button
            onClick={() => setShowfilters(!showFilters)}
            className="cursor-pointer mt-6 block sm:hidden rounded-full hover:bg-gray-700 focus:ring focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-2 w-full bg-gray-800 flex text-base leading-4 font-normal text-white justify-center items-center"
          >
            <svg
              className=" mr-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12C7.10457 12 8 11.1046 8 10C8 8.89543 7.10457 8 6 8C4.89543 8 4 8.89543 4 10C4 11.1046 4.89543 12 6 12Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 4V8"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 12V20"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 4V14"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 18V20"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 9C19.1046 9 20 8.10457 20 7C20 5.89543 19.1046 5 18 5C16.8954 5 16 5.89543 16 7C16 8.10457 16.8954 9 18 9Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 4V5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 9V20"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Filters
          </button>
        </div>

        <div
          id="filterSection"
          className={
            "relative md:py-10 lg:px-20 md:px-6 py-9 px-4 bg-gray-50 w-full rounded-3xl " +
            (showFilters ? "block" : "hidden")
          }
        >
          {/* Cross button Code  */}

          <div
            onClick={() => setShowfilters(false)}
            className=" cursor-pointer absolute right-0 top-0 md:py-10 lg:px-20 md:px-6 py-9 px-4"
          >
            <svg
              className=" lg:w-6 lg:h-6 w-4 h-4"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25 1L1 25"
                stroke="#1F2937"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 1L25 25"
                stroke="#27272A"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="form-group mr-16">
            <div className=" flex space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>

              <p className=" lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 ">
                Search By Location
              </p>
            </div>
            <div className="py-4">
              <select
                className="w-full p-2 rounded-md my-2"
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
                required
              >
                <option>Select One...</option>
                <option>Johar Town</option>
                <option>Wapda Town</option>
                <option>Emporium Mall</option>
              </select>
            </div>
          </div>

          <hr className=" bg-gray-200 lg:w-6/12 w-full my-3" />

          <div className="form-group mr-16">
            <div className=" flex space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                />
              </svg>

              <p className=" lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 ">
                Search By Name
              </p>
            </div>
            <div className="py-4">
              <Select
                value={brandName}
                isMulti={false}
                options={brandNames}
                closeMenuOnSelect={true}
                onChange={(option) => {
                  setBrandName(option);
                }}
              />
            </div>
          </div>

          <hr className=" bg-gray-200 lg:w-6/12 w-full my-3" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {/* Cuisines Section */}
            <div>
              <div className=" flex space-x-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 3H15C14.4696 3 13.9609 3.21071 13.5858 3.58579C13.2107 3.96086 13 4.46957 13 5V17C13 18.0609 13.4214 19.0783 14.1716 19.8284C14.9217 20.5786 15.9391 21 17 21C18.0609 21 19.0783 20.5786 19.8284 19.8284C20.5786 19.0783 21 18.0609 21 17V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3Z"
                    stroke="#1F2937"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.9994 7.35022L10.9994 5.35022C10.6243 4.97528 10.1157 4.76465 9.58539 4.76465C9.05506 4.76465 8.54644 4.97528 8.17139 5.35022L5.34339 8.17822C4.96844 8.55328 4.75781 9.06189 4.75781 9.59222C4.75781 10.1225 4.96844 10.6312 5.34339 11.0062L14.3434 20.0062"
                    stroke="#1F2937"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.3 13H5C4.46957 13 3.96086 13.2107 3.58579 13.5858C3.21071 13.9609 3 14.4696 3 15V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H17"
                    stroke="#1F2937"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 17V17.01"
                    stroke="#1F2937"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className=" lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 ">
                  Search By Cuisines
                </p>
              </div>

              <div className=" md:flex md:space-x-2 mt-8 grid grid-cols-2 gap-y-2 flex-wrap">
                <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-start rounded-full border-2 p-3 border-gray-400 ">
                  <input
                    className="w-4 h-4 rounded-full mr-2"
                    type="checkbox"
                    value="Italian"
                    checked={selectedCuisines.includes("Italian")}
                    onChange={() => handleCuisineSelect("Italian")}
                  />
                  <div className=" inline-block">
                    <div className=" flex space-x-6 justify-center items-center">
                      <label
                        className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                        htmlFor="Italian"
                      >
                        Italian
                      </label>
                    </div>
                  </div>
                </div>
                <div className=" flex justify-center items-center border-2 p-3 rounded-full border-gray-400">
                  <input
                    className="w-4 h-4 mr-2 rounded-full"
                    type="checkbox"
                    value="French"
                    checked={selectedCuisines.includes("French")}
                    onChange={() => handleCuisineSelect("French")}
                  />
                  <div className=" inline-block">
                    <div className=" flex space-x-6 justify-center items-center">
                      <label
                        className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                        htmlFor="French"
                      >
                        French
                      </label>
                    </div>
                  </div>
                </div>
                <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-end border-2 p-3 rounded-full border-gray-400">
                  <input
                    className="w-4 h-4 mr-2 rounded-full"
                    type="checkbox"
                    value="Chinese"
                    checked={selectedCuisines.includes("Chinese")}
                    onChange={() => handleCuisineSelect("Chinese")}
                  />
                  <div className=" inline-block">
                    <div className=" flex space-x-6 justify-center items-center">
                      <label
                        className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                        htmlFor="Chinese"
                      >
                        Chinese
                      </label>
                    </div>
                  </div>
                </div>
                <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-start border-2 p-3 rounded-full border-gray-400">
                  <input
                    className="w-4 h-4 mr-2 rounded-full"
                    type="checkbox"
                    value="Thai"
                    checked={selectedCuisines.includes("Thai")}
                    onChange={() => handleCuisineSelect("Thai")}
                  />
                  <div className=" inline-block">
                    <div className=" flex space-x-6 justify-center items-center">
                      <label
                        className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                        htmlFor="Thai"
                      >
                        Thai
                      </label>
                    </div>
                  </div>
                </div>

                <div className=" flex justify-center items-center border-2 p-3 rounded-full border-gray-400">
                  <input
                    className="w-4 h-4 mr-2 rounded-full"
                    type="checkbox"
                    value="fastFood"
                    checked={selectedCuisines.includes("fastFood")}
                    onChange={() => handleCuisineSelect("fastFood")}
                  />
                  <div className=" inline-block">
                    <div className=" flex space-x-6 justify-center items-center">
                      <label
                        className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                        htmlFor="FastFood"
                      >
                        Fast Food
                      </label>
                    </div>
                  </div>
                </div>

                <div className=" flex justify-center items-center border-2 p-3 rounded-full border-gray-400">
                  <input
                    className="w-4 h-4 mr-2 rounded-full"
                    type="checkbox"
                    value="Cafe"
                    checked={selectedCuisines.includes("Cafe")}
                    onChange={() => handleCuisineSelect("Cafe")}
                  />
                  <div className=" inline-block">
                    <div className=" flex space-x-6 justify-center items-center">
                      <label
                        className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                        htmlFor="Cafe"
                      >
                        Cafe
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className=" flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>

                <p className=" lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 ">
                  Search By Ratings
                </p>
              </div>
              <div className="px-10 py-5">
                <ul className="decoration-none">
                  <li className="flex">
                    <input
                      type="radio"
                      value="1 "
                      className="m-1"
                      name="list-radio"
                      onChange={handleRadioChange}
                    />
                    <label>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 "
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </label>
                  </li>
                  <li className="flex">
                    <input
                      type="radio"
                      value="2 "
                      className="m-1"
                      name="list-radio"
                      onChange={handleRadioChange}
                    />
                    <label className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 "
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 "
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </label>
                  </li>
                  <li className="flex">
                    <input
                      type="radio"
                      value="3 "
                      className="m-1"
                      name="list-radio"
                      onChange={handleRadioChange}
                    />
                    <label className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 "
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 "
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 "
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </label>
                  </li>
                  <li className="flex">
                    <input
                      type="radio"
                      value="4 "
                      className="m-1"
                      name="list-radio"
                      onChange={handleRadioChange}
                    />
                    <label className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 "
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 "
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 "
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 "
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </label>
                  </li>
                  <li className="flex">
                    <input
                      type="radio"
                      value="5 "
                      className="m-1"
                      name="list-radio"
                      onChange={handleRadioChange}
                    />
                    <label className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 "
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 "
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 "
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 "
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 "
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className=" bg-gray-200 lg:w-6/12 w-full md:my-10 my-8" />

          <div className="flex px-0 mt-10 w-full md:w-auto md:mt-0 md:absolute md:right-0 md:bottom-0 md:py-10 lg:px-10 md:px-6">
            <button
              onClick={() => setShowfilters(false)}
              className=" hover:bg-gray-700 focus:ring focus:ring-offset-2 rounded-full focus:ring-gray-800 text-base leading-4 font-medium py-4 px-8 text-white bg-gray-800"
            >
              Apply Filter
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="px-30 py-10">
          {filteredRestaurants
            ?.slice((page - 1) * perPage, page * perPage)
            .map((brand, index, { length }) => {
              return (
                <>
                  <BrandCard brand={brand} />
                </>
              );
            })}
        </div>

        <ReactPaginate
          previousLabel="<"
          nextLabel=">"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          pageCount={Math.ceil(filteredRestaurants?.length / perPage)}
          pageRangeDisplayed={4}
          marginPagesDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName="pagination text-center"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          activeClassName="active"
        />
        <div className="row text-center mx-auto py-4">
          <div className="col-12 ">
            <h5>
              Total: {filteredRestaurants?.length} Showing{" "}
              {(page - 1) * perPage + 1} to {page * perPage}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
