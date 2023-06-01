import React, { useState, useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import userService from "../../services/UserService";
import reviewsService from "../../services/ReviewService";
import "react-circular-progressbar/dist/styles.css";
import Rewards from "./Rewards";
import Reviews from "./Reviews";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Dashboard() {
  const [userId, setUserId] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Get logged in user
    const userToken = userService.getCurrentUser();
    console.log(userToken);
    if (userToken) {
      setUserId(userToken.id);
    }
  }, []);

  useEffect(() => {
    // get logged in user
    reviewsService
      .getReviews(userId)
      .then((reviews) => {
        setReviews(reviews);
        console.log(reviews);
        notify();
      })
      .catch((err) => {
        console.error(err);
      });
  }, [userId]);

  const reviewLength = reviews.length; // Assuming 'reviews' is an array of reviews
  // console.log(reviewLength);

  let percentage;

  if (reviewLength <= 4) {
    // Calculate percentage based on review length
    percentage = (reviewLength - 1) * 25 + 25;
    // console.log(percentage);
  } else {
    // Calculate percentage with repeating pattern
    const reviewsModulo = (reviewLength - 1) % 4;
    percentage = reviewsModulo === 0 ? 25 : 100;
  }

  // console.log("Percentage:", percentage + "%");

  const notify = () => {
    toast("Welcome Back!", { position: toast.POSITION.BOTTOM_LEFT });
  };

  return (
    <div className="dasboard w-full p-10">
      <div className="grid grid-cols-2 mt-10 gap-4">
        <div className="p-4 bg-gray-100 rounded-3xl">
          <h2 className="text-xl font-semibold px-12 mt-4">Your Progress</h2>
          <div className="w-full ">
            <div className="flex justify-center">
              <div className=" px-12 py-8 w-64 px-auto">
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                />
              </div>
            </div>
            <div className="p-4 bg-gray-200 mt-3 w-full rounded-lg">
              <p className="text-sm">
                <span className="text-green-700 font-semibold pr-1 text-md">
                  Note:
                </span>
                You will get free reward on 100%
              </p>
            </div>
          </div>
        </div>
        <div className="w-full p-10 bg-gray-100  rounded-3xl">
          <Rewards reviews={reviews} />
        </div>
      </div>
      <div className="mt-5">
        <div className="w-full p-10 bg-gray-100  rounded-3xl">
          <Reviews reviews={reviews} />
        </div>
      </div>
      <ToastContainer />{" "}
      {/* Move ToastContainer outside of Reviews component */}
    </div>
  );
}
