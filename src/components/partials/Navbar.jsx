import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Navbar({ fixed }) {
  const location = useLocation();
  // console.log(location);
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-10 py-2 mb-0 bg-zinc-900">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="leading-relaxed inline-block mr-4 whitespace-nowrap uppercase text-white hover:w-50"
              to="/"
            >
              <img src={logo} alt="logo" className="h-12" />
            </Link>
            <button
              className="text-white cursor-pointer text-3xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fa fa-bars"></i>
            </button>
          </div>

          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-sm font-semibold  leading-snug text-white hover:text-gray-500 transition duration-200  "
                  to="/"
                >
                  <span className="ml-9">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-sm font-semibold  leading-snug text-white hover:text-gray-500 transition duration-200 "
                  to="/privacyPolicy"
                >
                  <span className="ml-9 mr-12">Privacy Policy</span>
                </Link>
              </li>

              <li>
                <Link to="/login">
                  <button className="bg-white py-2 px-4 text-sm font-semibold rounded-md hover:bg-gray-300">
                    Login
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
