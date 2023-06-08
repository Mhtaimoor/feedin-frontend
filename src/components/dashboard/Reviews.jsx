import React, { useState, useEffect } from "react";
import userService from "../../services/UserService";
import reviewsService from "../../services/ReviewService";
import { useNavigate } from "react-router-dom";

export default function Reviews({ reviews }) {
  const navigate = useNavigate();
  const handleWriteReview = (e) => {
    const user = userService.getCurrentUser();

    if (user) {
      navigate("/user/writeReview");
    }
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold px-6">Your Reviews</h2>
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleWriteReview}
            class="text-white bg-purple-700 hover:bg-purple-800  focus:ring-4 focus:outline-none focus:ring-purple-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
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
      <div class=" text-black font-serif font-light bg-white border-2 rounded-lg mt-5 overflow-hidden p-2">
        <div class=" scrollbar-thin h-60 scrollbar-track-grey-300 overflow-y-scroll scrollbar-thumb-grey-400 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
          <div class="relative overflow-x-auto">
            {reviews.length > 0 ? (
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Restaurant Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Your Cuisine
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Your Review
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Went With
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {reviews?.map((review) => {
                    return (
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-6 py-4">{review.restaurantName}</td>

                        <td class="px-6 py-4">{review.reviewerEat}</td>
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {review.reviewText.substring(0, 29)}
                        </th>
                        <td class="px-6 py-4">{review.goesWith}</td>
                        <td class="px-6 py-4">
                          {review.ratingDate.split("T")[0]}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              "No Reviews Yet"
            )}
          </div>
        </div>
      </div>
    </>
  );
}
