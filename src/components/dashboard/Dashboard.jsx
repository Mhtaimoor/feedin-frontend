import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Rewards from "./Rewards";
import Reviews from "./Reviews";
import Favorites from "./Favorites";

export default function Dashboard() {
  const percentage = 66;

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
          <Rewards />
        </div>
      </div>
      <div className="grid grid-cols-2 mt-10 gap-4">
        <div className="w-full p-10 bg-gray-100  rounded-3xl">
          <Reviews />
        </div>
        <div className="w-full p-10 bg-gray-100  rounded-3xl">
          <Favorites />
        </div>
      </div>
    </div>
  );
}
