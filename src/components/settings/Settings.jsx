import React, { useState, useEffect } from "react";
import LogNavbar from "../logged/LogNavbar";
import ProfileCard from "./ProfileCard";
import Info from "./Info";
import userService from "../../services/UserService";
import { Base_URL } from "../../config";

export default function Settings() {
  const [user, setUser] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    const user = userService.getCurrentUser();
    if (user) {
      userService
        .getProfile(user.id)
        .then((userData) => {
          setImagePreview(`${Base_URL}/uploads/users/${userData.image}`);

          setUser(userData);
          console.log(userData.image);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return (
    <div className="Profile">
      <LogNavbar />
      <h2 className="text-3xl pt-5 font-bold text-center">Your Profile</h2>

      <div className="p-12 flex">
        <div className="">
          <ProfileCard user={user} imagePreview={imagePreview} />
        </div>
        <div className="md:ml-5 w-full">
          <Info user={user} />
        </div>
      </div>
      <div className="p-12 w-1/2"></div>
    </div>
  );
}
