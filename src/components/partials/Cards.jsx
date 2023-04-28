import React from "react";
import user1 from "../../assets/user1.jpg";
import user2 from "../../assets/user2.jpg";
import user3 from "../../assets/user3.jpg";
import user4 from "../../assets/user4.jpg";
import user5 from "../../assets/user5.jpg";
import user6 from "../../assets/user6.jpg";

export default function Cards() {
  return (
    <div>
      <div className="text-4xl font-bold text-center text-white py-8 ">
        <h2 className="shineWhite">Recent Activities</h2>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-2 justify-center px-6 md:px-16 py-2">
        <div className="flex flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700 md:max-w-lg md:flex-row shadowInner">
          <img
            className="w-28 h-28 rounded-full object-cover ml-8 mt-8"
            src={user1}
            alt=""
          />
          <div className="flex flex-col justify-start p-6">
            <h5 className="mb-2 text-xl text-neutral-800 dark:text-neutral-50 font-semibold">
              Excellent food and good service
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Excellent food,order their sweet n sour fish with fried rice and
              chicken chowmein, they were all very good and deferent in good
              way.
            </p>
            <div className="flex items-center ">
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
              <p className="ml-1 text-xs text-neutral-500 dark:text-neutral-300">
                Reviewed December 6, 2020
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700 md:max-w-xl md:flex-row shadowInner">
          <img
            className="w-28 h-28 rounded-full object-cover ml-8 mt-8"
            src={user4}
            alt=""
          />
          <div className="flex flex-col justify-start p-6">
            <h5 className="mb-2 text-xl font-semibold text-neutral-800 dark:text-neutral-50">
              Best Chinese Food
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              The best chinese food in Lahore in most feasible price.
              Unprecedentent hospitality and service 10/10.
            </p>
            <div className="flex items-center ">
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
              <p className=" ml-1 text-xs text-neutral-500 dark:text-neutral-300">
                Reviewed August 20, 2020
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700 md:max-w-xl md:flex-row shadowInner">
          <img
            className="w-28 h-28 rounded-full object-cover ml-8 mt-8"
            src={user2}
            alt=""
          />
          <div className="flex flex-col justify-start p-6">
            <h5 className="mb-2 text-xl font-semibold text-neutral-800 dark:text-neutral-50">
              Good food
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Very good food and nice service. Very good environment. If will
              have live music that will be very good.
            </p>
            <div className="flex items-center ">
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
              <p className="ml-1 text-xs text-neutral-500 dark:text-neutral-300">
                Reviewed January 3, 2018
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-2 justify-center px-16 py-8 pb-16">
        <div className="flex flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700 md:max-w-lg md:flex-row shadowInner">
          <img
            className="w-28 h-28 rounded-full object-cover ml-8 mt-8"
            src={user3}
            alt=""
          />
          <div className="flex flex-col justify-start p-6">
            <h5 className="mb-2 text-xl font-semibold text-neutral-800 dark:text-neutral-50">
              Very delicious and amazing Food
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              I have recently visited this restaurant and found the food
              amazingly high quality and very tasty. The ambiance was also very
              good, I must appreciate the management for having such nice chef
              and staff to take care of the customers.
            </p>
            <div className="flex items-center ">
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
              <p className="ml-1 text-xs text-neutral-500 dark:text-neutral-300">
                Reviewed April 5, 2019
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700 md:max-w-xl md:flex-row shadowInner">
          <img
            className="w-28 h-28 rounded-full object-cover ml-8 mt-8"
            src={user5}
            alt=""
          />
          <div className="flex flex-col justify-start p-6">
            <h5 className="mb-2 text-xl font-semibold text-neutral-800 dark:text-neutral-50">
              Best in Pakistan
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Without any doubt, this restaurant is away ahead of every other
              franchise restaurant in Pakistan providing state-of-the-art
              service.
            </p>
            <div className="flex items-center ">
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
              <p className="ml-1 text-xs text-neutral-500 dark:text-neutral-300">
                Reviewed December 21, 2020
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700 md:max-w-xl md:flex-row shadowInner">
          <img
            className="w-28 h-28 rounded-full object-cover ml-8 mt-8"
            src={user6}
            alt=""
          />
          <div className="flex flex-col justify-start p-6">
            <h5 className="mb-2 text-xl font-semibold text-neutral-800 dark:text-neutral-50">
              Nothing beats this place
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Nothing beats this place, every single dish is worth to try. Best
              in lahore. I always prefer to go there without second thought.
            </p>
            <div className="flex items-center ">
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
              <p className="ml-1 text-xs text-neutral-500 dark:text-neutral-300">
                Reviewed November 29, 2019
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
