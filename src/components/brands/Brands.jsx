import { React, useEffect, useState } from "react";
import LogNavbar from "../logged/LogNavbar";
import BrandCard from "./BrandCard";
import Footer from "../partials/Footer";
import ReactPaginate from "react-paginate";
import brandsService from "../../services/BrandService";
import userService from "../../services/UserService";

export default function Brands(props) {
  const [brands, setBrands] = useState();
  const [totals, setTotals] = useState();
  const [perPage, setPerPage] = useState(15);
  const [page, setPage] = useState(1);
  const [username, setUsername] = useState("");

  const [id, setId] = useState(null);

  useEffect(() => {
    // get logged in user
    const user = userService.getCurrentUser();
    if (user) {
      setId(user.id);
      setUsername(user.username);
    }
  }, []);

  const handlePageClick = (universities) => {
    // console.log(universities.selected);
    setPage(brands.selected + 1);
    // console.log(universities);
  };

  useEffect(() => {
    brandsService
      .getBrands()
      .then((res) => {
        // console.log(res);
        setBrands(res);
        setTotals(res.length);
      })
      .catch((err) => console.log(err));
  });
  return (
    <>
      <div className=" bg-gradient-to-r from-gray-500 via-gray-900 to-gray-700">
        <LogNavbar username={username} id={id} />
        <h1 className="text-white text-center text-3xl font-semibold pt-10">
          Enter Your Location
        </h1>
        <div className="md:px-10 px-10 py-10">
          <select
            id="countries"
            class="bg-gray-50 border border-3 border-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          >
            <option selected>Choose Your Area</option>
            <option value="JT">Johar Town</option>
            <option value="WT">Wapda Town</option>
          </select>
        </div>
        <div className="px-30 py-10">
          {brands
            ?.slice((page - 1) * perPage, page * perPage)
            .map((brand, index) => {
              return (
                <>
                  <div className="BrandCard px-10 lg:px-20 mt-1">
                    <a
                      href="#"
                      className="flex flex-col items-center bg-gray-400 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-full hover:bg-gray-100 border-gray-700 bg-gray-800 hover:bg-gray-700"
                    >
                      <img
                        className="imageCover object-cover w-full rounded-t-lg md:h-auto md:w-80 h-20 md:rounded-none md:rounded-l-lg"
                        src={brand?.image}
                        alt=""
                      />
                      <div class="flex flex-col justify-between p-4 leading-normal ">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight  text-white">
                          {brand?.name}
                        </h5>
                        <p className="mb-3 font-normal text-gray-400">
                          {brand.reviews?.length} Reviews
                        </p>

                        <div class="flex items-center">
                          <svg
                            aria-hidden="true"
                            class="w-5 h-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>First star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                          <svg
                            aria-hidden="true"
                            class="w-5 h-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Second star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                          <svg
                            aria-hidden="true"
                            class="w-5 h-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Third star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                          <svg
                            aria-hidden="true"
                            class="w-5 h-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Fourth star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                          <svg
                            aria-hidden="true"
                            class="w-5 h-5 text-gray-300 dark:text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Fifth star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                          <p class="ml-2 text-sm font-medium text-gray-300">
                            {brand.rating}
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </>
              );
            })}
          <ReactPaginate
            previousLabel="<"
            nextLabel=">"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            pageCount={Math.ceil(brands?.length / perPage)}
            pageRangeDisplayed={4}
            marginPagesDisplayed={2}
            className="text-white text-center"
            onPageChange={handlePageClick}
            containerClassName="pagination justify-content-center"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            activeClassName="active"
          />
          <div className="row text-center mx-auto text-white">
            <div className="col-12">
              <h5>
                Total: {brands?.length} Showing {(page - 1) * perPage + 1} to{" "}
                {page * perPage}
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}
