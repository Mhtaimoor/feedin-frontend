import React from "react";
import Footer from "../partials/Footer";
import Navbar from "../partials/Navbar";

export default function ReviewForm() {
  return (
    <>
      <div className=" bg-gradient-to-r from-gray-500 via-gray-900 to-gray-700 reviewShadow">
        <Navbar />
        <div className="py-20">
          {/* <!-- component --> */}
          <section class="max-w-4xl p-6 mx-auto bg-gradient-to-tl from-gray-700 via-gray-900 to-black rounded-md shadow-md dark:bg-gray-800">
            <h1 class="text-3xl py-2 shineWhite text-center font-bold text-white capitalize dark:text-white">
              Write a Review and Get Rewards!
            </h1>
            <form>
              <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                  <label class="text-white dark:text-gray-200" for="username">
                    Location
                  </label>
                  <select
                    id="countries"
                    class="bg-gray-50 border border-3 py-2 px-4 mt-2 border-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-gray-400 text-gray-700"
                  >
                    <option selected>Choose Your Area</option>
                    <option value="JT">Johar Town</option>
                    <option value="WT">Wapda Town</option>
                  </select>
                </div>
                <div>
                  <label class="text-white dark:text-gray-200" for="username">
                    Restaurant
                  </label>
                  <select
                    id="countries"
                    class="bg-gray-50 border border-3 py-2 px-4 mt-2 border-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-gray-400 text-gray-700"
                  >
                    <option selected>Choose Restaurant</option>
                    <option value="JT">Dominos</option>
                    <option value="WT">Cheezious</option>
                  </select>
                </div>

                <div>
                  <label
                    class="text-white dark:text-gray-200"
                    for="emailAddress"
                  >
                    Email Address
                  </label>
                  <input
                    id="emailAddress"
                    type="email"
                    placeholder="Enter email address"
                    class="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <h3 class="mb-4 font-medium text-white">
                    How was the Restaurant?
                  </h3>
                  <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                      <div class="flex items-center pl-3">
                        <input
                          id="horizontal-list-radio-license"
                          type="radio"
                          value=""
                          name="list-radio"
                          class="w-4 h-4 text-blue-600 bg-gray-300 border-gray-700 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
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
                          value=""
                          name="list-radio"
                          class="w-4 h-4 text-blue-600 bg-gray-300 border-gray-700 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
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
                          value=""
                          name="list-radio"
                          class="w-4 h-4 text-blue-600 bg-gray-300 border-gray-700 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
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
                          value=""
                          name="list-radio"
                          class="w-4 h-4 text-blue-600 bg-gray-300 border-gray-700 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
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

                <div>
                  <label
                    class="text-white dark:text-gray-200"
                    for="passwordConfirmation"
                  >
                    Enter Your Review
                  </label>
                  <textarea
                    id="textarea"
                    type="textarea"
                    placeholder="Enter your review here..."
                    rows="5"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  ></textarea>
                </div>
                <div>
                  <label class="block text-sm font-medium text-white">
                    Upload Image
                  </label>
                  <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div class="space-y-1 text-center">
                      <svg
                        class="mx-auto h-12 w-12 text-white"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div class="flex text-sm text-gray-600">
                        <label
                          for="file-upload"
                          class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <span class="px-1">Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            class="sr-only"
                          />
                        </label>
                        <p class="pl-1 text-white">or drag and drop</p>
                      </div>
                      <p class="text-xs text-white">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex justify-end mt-6">
                <button class="hover:bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] hover:from-gray-900 hover:via-gray-300 hover:to-gray-900 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 py-2 px-4 text-sm font-semibold rounded-md">
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
