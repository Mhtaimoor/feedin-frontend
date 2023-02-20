import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function AuthText() {
  const location = useLocation();

  if (location.pathname == "/login") {
    return (
      <>
        <div className="textDiv">
          <div className="heading">
            <h1 className="heading1 font-medium text-6xl p-32">Welcome Back</h1>
            <p id="para">You Have much more to catchup!!! </p>
            <p id="para">Places you like need your</p>
            <p id="para">Help to get better.</p>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="textDiv">
          <div className="heading">
            <h1 className="heading1 font-medium text-6xl p-32">
              Welcome to FeedINN
            </h1>
            <p id="para">The Place where you get</p>
            <p id="para">access to your nearby places</p>
            <p id="para">having your interests.</p>
          </div>
        </div>
      </>
    );
  }
}
