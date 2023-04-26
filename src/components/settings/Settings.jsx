import React, { useState, useEffect } from "react";
import LogNavbar from "../logged/LogNavbar";
import ProfileCard from "./ProfileCard";
import Info from "./Info";
import userService from "../../services/UserService";

export default function Settings() {
  const [id, setId] = useState("");
  const [fullName, setFullName] = useState("");

  const [email, setEmail] = useState("");

  useEffect(() => {
    // get logged in user
    // console.log(id);
    const user = userService.getCurrentUser();
    // console.log(user);
    if (user) {
      const userData = userService.getProfile(user.id);
      console.log(userData);
      if (userData) {
        setFullName(userData.name);

        setEmail(userData.email);
      } else {
        console.log("nothing get");
      }
    }
  }, []);
  return (
    <div className="Profile">
      <LogNavbar />
      <h2 className="text-3xl pt-5 font-bold text-center">Your Profile</h2>

      <div className="p-12 flex">
        <div className="">
          <ProfileCard />
        </div>
        <div className="md:ml-5 w-full">
          <Info />
        </div>
      </div>
      <div className="p-12 w-1/2"></div>
    </div>
  );
}
