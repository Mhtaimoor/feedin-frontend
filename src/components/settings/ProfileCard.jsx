import React, { useState, useEffect } from "react";
import userImage from "../../assets/user.png";
import userService from "../../services/UserService";

export default function ProfileCard({ user, imagePreview }) {
  console.log(imagePreview);
  return (
    <>
      <div className="w-96 px-6 py-6  text-center bg-gray-100 rounded-lg lg:mt-0 xl:px-10 h-full">
        <div className="space-y-4 xl:space-y-6">
          {imagePreview ? (
            <img
              className="mx-auto rounded-full h-36 w-36"
              src={imagePreview}
              alt="UserImage"
            />
          ) : (
            <img
              className="mx-auto rounded-full h-36 w-36"
              src={userImage}
              alt="UserImage"
            />
          )}

          <div className="space-y-2">
            <div className="flex justify-center items-center flex-col space-y-3 text-lg font-medium leading-6">
              <h3 className="text-black">{user.name}</h3>
              <p className="text-purple-800">{user.username}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
