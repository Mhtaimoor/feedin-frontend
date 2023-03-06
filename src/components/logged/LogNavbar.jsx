import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import slide1 from "../../assets/slider1.jpg";

export default function Navbar({ fixed }) {
  const location = useLocation();
  console.log(location);
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-10 py-2 fixed mb-0">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="leading-relaxed inline-block mr-4 whitespace-nowrap uppercase text-black "
              href="#pablo"
            >
              <img src={logo} alt="logo" class="h-12" />
            </a>
            <button
              className="text-black cursor-pointer text-3xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fa fa-bars"></i>
            </button>
          </div>
          <div class="flex justify-center sm:px-2 lg:px-44">
            <div class="xl:w-96">
              <div class="relative flex w-full flex-wrap items-stretch">
                <input
                  type="search"
                  class="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon3"
                />
                <button
                  class="relative z-[2] rounded-r border-2 border-primary px-6 py-2 text-sm font-semibold uppercase text-primary transition duration-150 ease-in-out hover:bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] hover:from-gray-900 hover:via-gray-300 hover:to-gray-900 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900"
                  type="button"
                  id="button-addon3"
                  data-te-ripple-init
                >
                  Search
                </button>
              </div>
            </div>
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
                  className="px-3 py-3 flex items-center text-sm font-semibold  leading-snug text-white hover:text-orange-500 transition duration-200  active:text-light-green hover:text-light-green"
                  to="/loggedIn"
                >
                  <span className="ml-9">Home</span>
                </Link>
              </li>

              <li className="nav-item">
                <a
                  className="px-3 py-3 flex items-center text-sm font-semibold leading-snug text-white hover:text-orange-500 transition duration-200 active:text-light-green hover:text-light-green"
                  href="/writeReview"
                >
                  <span className="ml-9 mr-9">Write a Review</span>
                </a>
              </li>
              <li className=" rounded-lg border border-solid border-white pr-5">
                <div className="relative w-12 h-12 flex mr-16 p-2">
                  <img
                    className="rounded-full shadow-sm w-8 h-8"
                    src={slide1}
                    alt="user image"
                  />
                  <h3 className="text-white font-semibold px-2 py-1">
                    Taimoor
                  </h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
