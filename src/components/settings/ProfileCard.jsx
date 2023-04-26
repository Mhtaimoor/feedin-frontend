import React, { useState, useEffect } from "react";
import user from "../../assets/user.png";
import userService from "../../services/UserService";

export default function ProfileCard() {
  

  return (
    <>
      <div className="w-96 px-6 py-6  text-center bg-gray-100 rounded-lg lg:mt-0 xl:px-10 h-full">
        <div className="space-y-4 xl:space-y-6">
          <img
            className="mx-auto rounded-full h-36 w-36"
            src={user}
            alt={user}
          />
          {/* <form>
            <input
             className="relative m-0 block w-full min-w-0 flex-auto rounded-lg border border-solid border-neutral-300 bg-clip-padding py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none "
              type="file"
              id="formFile"
            />
            <button className="px-5 py-2 rounded-lg mt-2 text-sm bg-purple-700 hover:bg-purple-800 text-white ">
              Upload
            </button>
          </form> */}
          <div className="space-y-2">
            <div className="flex justify-center items-center flex-col space-y-3 text-lg font-medium leading-6">
              <h3 className="text-black">John Doe</h3>
              <p className="text-purple-800">username</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
