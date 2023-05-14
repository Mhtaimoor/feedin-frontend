import { useState, Fragment, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import slide1 from "../../assets/slider1.jpg";
import { Transition, Menu } from "@headlessui/react";
import userService from "../../services/UserService";
import { Base_URL } from "../../config";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const userNavigation = [
  { name: "Settings", href: "/user/settings" },
  { name: "Sign out", href: "/" },
];

export default function Navbar(props) {
  const navigate = useNavigate();
  const [id, setId] = useState();
  const [username, setUsername] = useState();
  const location = useLocation();
  // console.log(props);

  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleSignout = () => {
    userService.logout();
    navigate("/");
  };

  useEffect(() => {
    // get logged in user
    const user = userService.getCurrentUser();
    // console.log(user);
    if (user) {
      setId(user.id);
      setUsername(user.username);
    }
  }, []);

  const [user, setUser] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    userService
      .getProfile(user.id)
      .then((userData) => {
        setImagePreview(`${Base_URL}users/${userData.image}`);
        setUser(userData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-12 py-3 pt-4 mb-0 bg-zinc-800">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="leading-relaxed inline-block mr-4 whitespace-nowrap "
              to="/"
            >
              <img src={logo} alt="logo" className="h-12 px-5" />
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
                  className="px-3 py-3 flex items-center text-sm font-semibold  leading-snug text-white hover:text-purple-500 transition duration-200  active:text-purple-800 "
                  to="/user/"
                >
                  <span className="ml-9">Dashboard</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-3 flex items-center text-sm font-semibold  leading-snug text-white hover:text-purple-500 transition duration-200 active:text-purple-800 "
                  to="/user/brands"
                >
                  <span className="ml-9">Brands</span>
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-3 flex items-center text-sm font-semibold leading-snug text-white hover:text-purple-500 transition duration-200 active:text-purple-800 "
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
                      {imagePreview ? (
                        <img
                          className="h-10 w-10 rounded-full mr-3"
                          src={imagePreview}
                          alt=""
                        />
                      ) : (
                        <img
                          className="h-10 w-10 rounded-full mr-3"
                          src={slide1}
                          alt=""
                        />
                      )}

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
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-xl shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <Link
                              to={item.href}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-black hover:bg-purple-700 hover:text-white hover:rounded-xl hover:font-medium"
                              )}
                              onClick={
                                item.name === "Sign out"
                                  ? handleSignout
                                  : undefined
                              }
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
