import { useState, Fragment, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import slide1 from "../../assets/slider1.jpg";
import { Transition, Menu } from "@headlessui/react";
import userService from "../../services/UserService";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const userNavigation = [
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

export default function Navbar(props) {
  const [id, setId] = useState();
  const [username, setUsername] = useState();
  const location = useLocation();
  // console.log(props);

  const [name, setName] = useState("");
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    // get logged in user
    const user = userService.getCurrentUser();
    if (user) {
      setId(user.id);
      setUsername(user.username);
    }
  }, []);

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-12 py-3 pt-4 mb-0 bg-zinc-800">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="leading-relaxed inline-block mr-4 whitespace-nowrap "
              href="#pablo"
            >
              <img src={logo} alt="logo" className="h-12 px-5" />
            </a>
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
                  className="px-3 py-3 flex items-center text-sm font-semibold  leading-snug text-white hover:text-gray-500 transition duration-200  active:text-gray-800 "
                  to="/user/"
                >
                  <span className="ml-9">Dashboard</span>
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
              <div className="ml-4 flex items-center md:ml-6">
                {/* Profile dropdown */}

                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button
                      type="button"
                      className="relative inline-flex items-center pl-2 pr-3 py-1 border border-gray-400 shadow-sm text-sm rounded-3xl text-black bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                    >
                      <img
                        className="h-10 w-10 rounded-full mr-3"
                        src={slide1}
                        alt=""
                      />
                      <div className="text-left w-22">
                        <p className="font-semibold">{username}</p>
                      </div>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <Link
                              to={item.href}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              {item.name}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
