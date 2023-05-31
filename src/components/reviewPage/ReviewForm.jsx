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

  // console.log(brandName);
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

  const handleRatingChange = (value) => {
    setRating(value);
    console.log(value);
  };
  return (
    <>
      <div className="bg-gray-100 ">
        <LogNavbar />
        <div className="py-10">
          <h1 className="text-3xl py-2 shineWhite text-center font-bold text-black capitalize ">
            Write a Review and Get Rewards!
          </h1>
          {/* <!-- component --> */}
          <section className="max-w-4xl p-6 mx-auto  rounded-md shadow-2xl bg-transparent reviewShadow">
            <form method="POST" onSubmit={handleSubmit}>
              <div className="">
                <div className="flex flex-col items-center">
                  <h2 className="text-2xl font-semibold mb-4">
                    Rate the Brand
                  </h2>
                  <div className="flex justify-center items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <div
                        key={value}
                        onClick={() => handleRatingChange(value)}
                        style={{
                          color: value <= rating ? "#FFBF00" : "gray",
                          cursor: "pointer",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
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
                  </div>
                </div>
                <div>
                  <label
                    className="text-black dark:text-gray-200 text-lg font-medium"
                    for="username"
                  >
                    Brand Name
                  </label>
                  <div className="py-2.5">
                    <Select
                      value={brandName}
                      isMulti={false}
                      options={transformedBrandNames}
                      closeMenuOnSelect={true}
                      onChange={(option) => {
                        setBrandName(option);
                      }}
                      className="bg-gray-200 rounded-xl shadow-lg"
                      required
                    />
                  </div>
                </div>

                <div className="py-3">
                  <label
                    className="text-black dark:text-gray-200  text-lg font-medium"
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
                    className="block w-full px-4 py-2 mt-2 shadow-lg text-gray-800 bg-gray-100 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-500 focus:outline-none focus:ring"
                  />
                </div>
                <div className="py-3">
                  <label className="text-black dark:text-gray-200 text-lg font-medium">
                    When do you visit the Restaurant?
                  </label>
                  <input
                    type="date"
                    onChange={(e) => {
                      setDateValue(e.target.value);
                    }}
                    required
                    className="block w-full px-4 shadow-lg py-2 mt-2 text-gray-800 bg-gray-100 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-500 focus:outline-none focus:ring"
                  />
                </div>

                <div className="py-3">
                  <h3 class="pb-2 text-black  text-lg font-medium">
                    How was the Restaurant?
                  </h3>
                  <ul class="items-center w-full shadow-lg text-sm font-medium text-gray-900 bg-gray-100 border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-black">
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
                <div className="py-3">
                  <label
                    class="text-black dark:text-gray-200 text-lg font-medium"
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
                    class="block w-full px-4 py-2 my-2 shadow-lg text-gray-800 bg-gray-100 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-500 focus:outline-none focus:ring"
                  />
                </div>
                <div className="py-3">
                  <label
                    class="text-black dark:text-gray-20 text-lg font-medium"
                    for="emailAddress"
                  >
                    What do you have?
                  </label>
                  <select
                    className="w-full rounded-md shadow-lg my-2 bg-gray-100"
                    onChange={(e) => {
                      setSelectedCuisines(e.target.value);
                    }}
                    required
                  >
                    <option>Select One...</option>
                    {cuisines?.map((cuisine, index) => {
                      return (
                        <option key={index} value={cuisine}>
                          {cuisine}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div>
                  <label
                    class="text-black dark:text-gray-200  text-lg font-medium"
                    for="emailAddress"
                  >
                    With whom did you go?
                  </label>
                  <select
                    className="w-full p-2 rounded-md my-2"
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
                <div className="py-3">
                  <label
                    className="text-black dark:text-gray-200  text-lg font-medium"
                    for="passwordConfirmation"
                  >
                    Enter Your Review
                  </label>
                  <textarea
                    id="textarea"
                    placeholder="Share your thoughts here (minimum 50 words)..."
                    rows="8"
                    required
                    onChange={(e) => {
                      setReviewText(e.target.value);
                    }}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 shadow-lg border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-500 focus:outline-none focus:ring"
                    onKeyDown={(e) => {
                      const words = e.target.value.split(/\s+/);
                      if (words.length > 49 && e.keyCode === 32) {
                        e.preventDefault();
                      }
                    }}
                  ></textarea>
                </div>
                <div className="py-3">
                  <label className="block text-black  text-lg font-medium">
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
                      <div className="flex text-sm text-gray-600 ">
                        <label
                          htmlFor="logo"
                          className=" relative cursor-pointer bg-gray-300 rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <span className="px-1 ">Upload a file</span>
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

              <div class="flex justify-end mt-6">
                <button
                  type="submit"
                  class="bg-white hover:bg-gray-200 py-2 px-4 text-sm font-semibold rounded-md"
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
