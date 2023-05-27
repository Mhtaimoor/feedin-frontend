import React from "react";
import user from "../../assets/user.png";

export default function Reviews(props) {
  const review = props.review;
  //   console.log(review);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 bg-white rounded-xl mt-2">
        <div className="col-span-1 flex justify-center items-center flex-col">
          <img src={user} alt="" className="w-28 bg-gray-300 rounded-full" />
          <h2 className="text-sm font-medium py-2">{review.reviewerName}</h2>
        </div>
        <div className="justify-start p-6 w-full col-span-3 ">
          <h5 className="mb-2 text-xl text-neutral-800 dark:text-neutral-50 font-semibold">
            {review.reviewHeading}
          </h5>
          <p className="mb-4 text-xs text-neutral-800 dark:text-neutral-200">
            <span className="text-black font-semibold">Went with: </span>
            {review.goesWith}
          </p>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {review.reviewText}
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
              Reviewed {review.ratingDate}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
