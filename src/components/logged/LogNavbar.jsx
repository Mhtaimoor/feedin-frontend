import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import slide1 from "../../assets/slider1.jpg";

export default function Navbar(props) {
  const location = useLocation();
  // console.log(props);

  const [name, setName] = useState("");
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-10 py-2 mb-0 bg-black">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="leading-relaxed inline-block mr-4 whitespace-nowrap uppercase text-black "
              href="#pablo"
            >
              <img src={logo} alt="logo" className="h-12" />
            </a>
            <button
              className="text-black cursor-pointer text-3xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fa fa-bars"></i>
            </button>
          </div>
          <div className="flex justify-center sm:px-2 lg:px-44">
            <div className="xl:w-96">
              <div className="relative flex w-full flex-wrap items-stretch">
                <input
                  type="search"
                  className="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon3"
                />
                <button
                  className="relative z-[2] rounded-r border-2 border-primary px-6 py-2 text-sm font-semibold bg-white uppercase text-black hover:bg-gray-300 transition duration-150 ease-in-out "
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
                  className="px-3 py-3 flex items-center text-sm font-semibold  leading-snug text-white hover:text-gray-500 transition duration-200  active:text-gray-800 "
                  to="/user/"
                >
                  <span className="ml-9">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-3 flex items-center text-sm font-semibold  leading-snug text-white hover:text-gray-500 transition duration-200 active:text-gray-800 "
                  to="/user/brands"
                >
                  <span className="ml-9">Brands</span>
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-3 flex items-center text-sm font-semibold leading-snug text-white hover:text-gray-500 transition duration-200 active:text-gray-800 "
                  href="/user/writeReview"
                >
                  <span className="ml-9 ">Write a Review</span>
                </a>
              </li>
              <li className=" rounded-lg border border-solid border-white pr-6 ml-9">
                <div className="relative w-12 h-12 flex mr-16 p-2">
                  <img
                    className="rounded-full shadow-sm w-8 h-8"
                    src={slide1}
                    alt="user image"
                  />
                  <h3 className="text-white font-semibold p-1">
                    {props.username}
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
