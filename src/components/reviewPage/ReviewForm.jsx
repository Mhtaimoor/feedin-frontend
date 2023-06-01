import { React, useState, useEffect } from "react";

import Footer from "../partials/Footer";
import LogNavbar from "../logged/LogNavbar";
import userService from "../../services/UserService";
import { useLocation, useNavigate } from "react-router-dom";
import Select from "react-select";
import brandsService from "../../services/BrandService";
import { failure } from "../../utils/notification";
import reviewsService from "../../services/ReviewService";

export default function ReviewForm(props) {
  const location = useLocation();
  const navigate = useNavigate();

  const [reviewerName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  // console.log(email);
  const [userId, setId] = useState(null);

  const [brands, setBrands] = useState([]);
  const [brandNames, setBrandNames] = useState([]);

  const [brandName, setBrandName] = useState(
    location.state
      ? {
          value: location.state.brand?.name,
          label: location.state.brand?.name,
        }
      : ""
  );

  const [ratingDate, setDateValue] = useState("");
  const [reviewHeading, setHeading] = useState("");
  const [goesWith, setSelectedValue] = useState("");

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
    console.log(event.target.value); // will print the selected value to the console
  };
  const [reviewText, setReviewText] = useState("");
  const [reviewerEat, setSelectedCuisines] = useState("");

  const [editLogo, setEditLogo] = useState("");
  const [logo, setLogo] = useState("");

  // const [editImage, setEditImage] = useState("");
  const [logoImagePreview, setLogoImagePreview] = useState(null);

  const [transformedBrandNames, setTransformedBrandNames] = useState([]);
  const [cuisines, setCuisines] = useState([]);
  const [restaurantName, setRestaurantName] = useState("");

  useEffect(() => {
    brandsService
      .getBrands()
      .then((res) => {
        setBrands(res);
        setBrandNames(res?.map((brand) => brand.name));
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setTransformedBrandNames(
      brandNames?.map((name) => ({
        value: name,
        label: name,
      }))
    );
  }, [brandNames]);

  useEffect(() => {
    brandsService.getSingleBrand(brandName?.value).then((res) => {
      setCuisines(res.cuisines.split(", "));
    });
  }, [brandName]);

  useEffect(() => {
    setRestaurantName(brandName?.value);
    console.log(restaurantName);
  }, [brandName]);

  useEffect(() => {
    // get logged in user
    const user = userService.getCurrentUser();

    if (user) {
      setId(user.id);
      setUsername(user.username);
    }
  }, []);

  const handleChange = (e) => {
    if (e.target.name === "logo") {
      const selectedFile = e.target.files[0];
      setEditLogo(selectedFile);
      setLogo(selectedFile);
      const objectUrl = URL.createObjectURL(selectedFile);
      setLogoImagePreview(objectUrl);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userId);
    reviewsService
      .createReview(
        restaurantName,
        userId,
        reviewerName,
        ratingDate,
        reviewHeading,
        reviewText,
        reviewerEat,
        goesWith,
        rating
      )
      .then((res) => {
        navigate("/user/congrats/");
      })
      .catch((err) => failure(err.response.data.message));
  };

  // Star Ratings

  const [rating, setRating] = useState(0);
  const [selectedRating, setSelectedRating] = useState(null);
  // console.log(selectedRating);

  const handleRatingChange = (value) => {
    setRating(value);
    setSelectedRating(value);
    console.log(value);
  };
  return (
    <>
      <div className="bg-gray-100 ">
        <LogNavbar />
        <div className="py-10">
          <h1 className="text-3xl py-2 pb-10 shineWhite text-center font-bold text-black capitalize ">
            Write a Review and Get Rewards!
          </h1>
          {/* <!-- component --> */}
          <section className="max-w-4xl p-6 mx-auto  rounded-md shadow-2xl bg-transparent reviewShadow">
            <form method="POST" onSubmit={handleSubmit}>
              <div className="">
                <div>
                  <label
                    className="text-black dark:text-gray-200 text-2xl font-semibold"
                    for="username"
                  >
                    Brand Name
                  </label>
                  <div className="py-5 pb-10">
                    <Select
                      value={brandName}
                      isMulti={false}
                      options={transformedBrandNames}
                      closeMenuOnSelect={true}
                      onChange={(option) => {
                        setBrandName(option);
                      }}
                      className="bg-gray-200 shadow-lg"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl font-semibold mb-4">
                    Rate the Brand
                  </h2>
                  <div className="flex pb-10 space-x-1">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <div
                        key={value}
                        onClick={() => handleRatingChange(value)}
                        onMouseEnter={() => handleRatingChange(value)}
                        style={{
                          color: value <= rating ? "green" : "gray",
                          cursor: "pointer",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-12 w-12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 2 L15.09 8.74 L22 9.82 L17 14.15 L18.18 21 L12 17 L5.82 21 L7 14.15 L2 9.82 L8.91 8.74 L12 2 Z" />
                        </svg>
                      </div>
                    ))}
                    {selectedRating === rating && (
                      // Show label if selectedRating matches the current value
                      <span className="p-3 text-lg font-semibold text-green-800">
                        {rating === 1 && "Poor"}
                        {rating === 2 && "Good"}
                        {rating === 3 && "Very Good"}
                        {rating === 4 && "Excellent"}
                        {rating === 5 && "Marvellous"}
                      </span>
                    )}
                  </div>
                </div>

                <div className="py-3">
                  <label
                    className="text-black dark:text-gray-200  text-2xl font-semibold"
                    for="emailAddress"
                  >
                    Your Email Address
                  </label>
                  <input
                    id="emailAddress"
                    type="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    required
                    placeholder="someone@gmail.com"
                    className="block w-full py-2 px-3 mt-5 shadow-lg text-gray-800 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-500 focus:outline-none focus:ring"
                  />
                </div>
                <div className="py-10">
                  <label className="text-black dark:text-gray-200 text-2xl font-semibold">
                    When do you visit the Restaurant?
                  </label>
                  <input
                    type="date"
                    onChange={(e) => {
                      const selectedDate = e.target.value;
                      const currentDate = new Date()
                        .toISOString()
                        .split("T")[0];
                      if (selectedDate > currentDate) {
                        setDateValue(currentDate);
                      } else {
                        setDateValue(selectedDate);
                      }
                    }}
                    required
                    max={new Date().toISOString().split("T")[0]} // Set the max attribute to the current date
                    className="block w-96 px-4 shadow-lg py-2 mt-6 text-gray-800  border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-500 focus:outline-none focus:ring"
                  />
                </div>

                <div className="py-5">
                  <h3 class="pb-5 text-black text-2xl font-semibold">
                    How was the Restaurant?
                  </h3>
                  <ul class="items-center w-full shadow-lg text-sm font-medium bg-white text-gray-900 border border-gray-200 rounded-xl sm:flex ">
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                      <div class="flex items-center pl-3">
                        <input
                          id="horizontal-list-radio-license"
                          type="radio"
                          value="Poor"
                          name="list-radio"
                          onChange={handleRadioChange}
                          className="w-4 h-4 text-purple-600 bg-gray-300 border-gray-700 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for="horizontal-list-radio-license"
                          class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Poor{" "}
                        </label>
                      </div>
                    </li>
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                      <div class="flex items-center pl-3">
                        <input
                          id="horizontal-list-radio-id"
                          type="radio"
                          value="Good"
                          name="list-radio"
                          onChange={handleRadioChange}
                          class="w-4 h-4 text-purple-600 bg-gray-300 border-gray-700 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for="horizontal-list-radio-id"
                          class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Good
                        </label>
                      </div>
                    </li>
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                      <div class="flex items-center pl-3">
                        <input
                          id="horizontal-list-radio-millitary"
                          type="radio"
                          value="V.Good"
                          name="list-radio"
                          onChange={handleRadioChange}
                          class="w-4 h-4 text-purple-600 bg-gray-300 border-gray-700 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for="horizontal-list-radio-millitary"
                          class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          V.Good
                        </label>
                      </div>
                    </li>
                    <li class="w-full dark:border-gray-600">
                      <div class="flex items-center pl-3">
                        <input
                          id="horizontal-list-radio-passport"
                          type="radio"
                          value="Excellent"
                          name="list-radio"
                          onChange={handleRadioChange}
                          class="w-4 h-4 text-purple-600 bg-gray-300 border-gray-700 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for="horizontal-list-radio-passport"
                          class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Excellent
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="py-5">
                  <label
                    class="text-black dark:text-gray-200 text-2xl font-semibold"
                    for="emailAddress"
                  >
                    Heading for Review
                  </label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setHeading(e.target.value);
                    }}
                    required
                    placeholder="Good, Excellent, Bad, etc..."
                    class="block w-full px-4 py-2 my-2 shadow-lg text-gray-800 mt-6 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-500 focus:outline-none focus:ring"
                  />
                </div>
                <div className="py-5">
                  <label
                    class="text-black dark:text-gray-20 text-2xl font-semibold block"
                    for="emailAddress"
                  >
                    What do you have?
                  </label>
                  <select
                    className="w-96 rounded-md shadow-lg my-5"
                    onChange={(e) => {
                      setSelectedCuisines(e.target.value);
                    }}
                    required
                  >
                    <option>Select One...</option>
                    {cuisines?.map((cuisine, index) => {
                      return (
                        <option
                          key={index}
                          value={cuisine}
                          className="text-black"
                        >
                          {cuisine}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="py-5">
                  <label
                    class="text-black dark:text-gray-200  text-2xl font-semibold block"
                    for="emailAddress"
                  >
                    With whom did you go?
                  </label>
                  <select
                    className="w-96 p-2 rounded-lg my-5 text-black "
                    onChange={(e) => {
                      setSelectedValue(e.target.value);
                    }}
                    required
                  >
                    <option>Select One...</option>
                    <option>Family</option>
                    <option>Friends</option>
                    <option>Couple</option>
                    <option>Alone</option>
                  </select>
                </div>
                <div className="py-5">
                  <label
                    className="text-black dark:text-gray-200 text-2xl font-semibold"
                    htmlFor="passwordConfirmation"
                  >
                    Enter Your Review
                  </label>
                  <div className="relative md:h-56">
                    <textarea
                      id="textarea"
                      placeholder="Share your thoughts here (minimum 50 words)..."
                      rows="8"
                      required
                      onChange={(e) => {
                        setReviewText(e.target.value);
                      }}
                      className="block w-full px-4 py-2 mt-6 text-gray-700 shadow-lg border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-500 focus:outline-none focus:ring"
                      onKeyDown={(e) => {
                        if (e.target.value.length > 49 && e.keyCode === 32) {
                          e.preventDefault();
                        }
                      }}
                    ></textarea>

                    <span className="text-gray-500 text-sm absolute right-2 bottom-4">
                      {reviewText.trim().length}/50
                    </span>
                    {reviewText.trim().length <= 50 &&
                      reviewText.trim().length > 0 && (
                        <span className="text-red-500 text-sm font-semibold">
                          Minimum 50 characters required
                        </span>
                      )}
                  </div>
                </div>
                <div className="py-5">
                  <label className="block text-black py-6 text-2xl font-semibold">
                    Upload Image
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      {logoImagePreview ? (
                        <img
                          src={logoImagePreview}
                          className="w-48 h-48 object-contain"
                          alt="Logo Preview"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-32 rounded-md">
                          <svg
                            className="h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      )}
                      <div className="flex text-sm text-gray-600 py-5 ">
                        <label
                          htmlFor="logo"
                          className=" relative cursor-pointer bg-gray-300 rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <span className="px-1">Upload a file</span>
                          <input
                            id="logo"
                            name="logo"
                            type="file"
                            className="sr-only"
                            onChange={handleChange}
                          />
                        </label>
                        <p className="pl-1 text-black">or drag and drop</p>
                      </div>
                      <p className="text-xs text-black">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex w-full mt-6">
                <button
                  type="submit"
                  class="bg-zinc-900 w-full py-2.5 px-4 text-white text-md hover:font-semibold rounded-2xl"
                >
                  Submit
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </>
  );
}
