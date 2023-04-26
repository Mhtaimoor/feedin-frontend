import { React, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import userService from "../../services/UserService";

export default function Navbar({ fixed }) {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const [id, setId] = useState();
  const [user, setUser] = useState();
  const handleLogin = (e) => {
    if (id) {
      navigate("/user");
    } else navigate("/login");
  };
  useEffect(() => {
    // get logged in user
    const user = userService.getCurrentUser();
    // console.log(user);
    if (user) {
      setId(user.id);
    }
  }, []);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-12 py-3 pt-4 mb-0 bg-zinc-800">
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
                  className="px-3 py-2 flex items-center text-sm font-semibold  leading-snug text-white hover:text-purple-700 transition duration-200  "
                  to="/"
                >
                  <span className="ml-9">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-sm font-semibold  leading-snug text-white hover:text-purple-700 transition duration-200 "
                  to="/privacyPolicy"
                >
                  <span className="ml-9 mr-12">Privacy Policy</span>
                </Link>
              </li>

              <li>
                <button
                  className="bg-white py-2 px-4 text-sm font-semibold rounded-md hover:bg-gray-300"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
