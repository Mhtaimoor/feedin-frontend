import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import userService from "../../src/services/UserService";
import AuthText from "./partials/AuthText";
import { failure, loginSuccess } from "../../src/utils/notification";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    userService
      .login({ email, password })
      .then((res) => {
        loginSuccess();
        navigate("/user");
      })
      .catch((err) => failure(err.response.data.message));
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-2 bg-gradient-to-l from-blue-700 via-blue-800 to-gray-900 h-full">
          <AuthText />
        </div>
        <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black">
          <div className="flex flex-col items-center justify-center px-6 py-2 mx-auto md:h-screen lg:py-0">
            <Link
              to="/"
              className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <img className="mr-2 h-24" src={logo} alt="logo" />
            </Link>
            <div className="w-full bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                  Sign in to your account
                </h1>
                <form
                  className="space-y-4 md:space-y-6"
                  method="POST"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={handleEmailChange}
                      className="bg-gray-50 border border-gray-600 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="password"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={password}
                      onChange={handlePasswordChange}
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-600 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
                      required
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-600 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "
                          required=""
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label for="remember" className="text-gray-600 ">
                          Remember me
                        </label>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="text-sm font-medium text-blue-700 hover:underline "
                    >
                      Forgot password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-gradient-to-r from-cyan-500 to-blue-500 transition delay-150 duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-orange-500  font-semibold rounded-lg text-sm px-5 py-2.5 text-center "
                  >
                    Sign in
                  </button>
                  <p className="text-sm text-gray-700">
                    Don’t have an account yet?{" "}
                    <Link
                      to="/signup"
                      className="font-medium text-blue-600 hover:underline "
                    >
                      Sign up
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
