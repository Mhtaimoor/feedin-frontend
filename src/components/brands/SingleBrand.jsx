import React, { useEffect, useState } from "react";
import LogNavbar from "../logged/LogNavbar";
import { useNavigate, useParams } from "react-router-dom";
import restaurant from "../../assets/restaurant.png";
import brandService from "../../services/BrandService";
import Reviews from "./Reviews";
import { Carousel } from "react-responsive-carousel";

export default function SingleBrand() {
  const { id } = useParams();
  // console.log(id);
  const navigate = useNavigate();

  const [brand, setBrand] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchBrand() {
      try {
        const res = await brandService.getSingleBrand(id);
        setBrand(res);
        setReviews(res.reviews);
      } catch (error) {
        console.log(error);
      }
    }
    fetchBrand();
  }, [id]);

  const handleReviewPage = () => {
    navigate("/user/writeReview", { state: { brand } });
  };

  if (!brand) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="Navbar">
        <LogNavbar />
      </div>
      <div className=" pt-10 md:px-16 px-10">
        <div className="bg-gray-100 p-10 rounded-lg grid grid-cols-1 md:grid-cols-3 gap-1">
          <div className="w-3/4">
            <img
              src={brand?.image ? brand.image : restaurant}
              className="rounded-3xl object-fill w-full"
              alt=""
            />
          </div>
          <div className="w-full col-span-2 md:pr-10">
            <h3 className="text-2xl md:text-3xl font-semibold py-3">
              {brand?.name}
            </h3>
            <div className="flex items-center py-1">
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>

              <p className="ml-2 text-sm font-medium text-gray-700">
                {brand?.rating ? brand?.rating : "No Rating"}
              </p>
            </div>
            <div>
              <span className="font-semibold mr-1">Reviews:</span>
              {brand?.reviews?.length}
            </div>
            <div className="py-2">
              <p>
                <span className="font-semibold mr-1">Address:</span>
                {brand?.address}
              </p>
            </div>
            <div className="py-1">
              <p>
                <span className="font-semibold mr-1 text-purple-700">
                  Cuisines:
                </span>
                {brand?.cuisines}
              </p>
            </div>
            <div className="w-full text-center md:text-right md:pt-3 mt-2">
              <h3 className="inline mr-5 font-semibold underline underline-offset-4">
                Get Rewards
              </h3>
              <button
                type="button"
                onClick={handleReviewPage}
                class="text-white bg-purple-700 hover:bg-purple-800 mt-2 md:mt-0 focus:ring-4 focus:ring-offset-2 focus:ring-purple-800 font-semibold rounded-2xl text-sm px-5 py-3 text-center inline-flex items-center "
              >
                Write a Review
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {/* Reviews Section */}
          <div className="bg-gray-100 p-10 mt-2 rounded-lg ">
            <h2 className="text-2xl font-semibold text-center">
              Reviews{" "}
              <span className="font-medium text-xl">
                ({brand?.reviews?.length} reviews)
              </span>
            </h2>
            <div className=" scrollbar-thin h-screen scrollbar-track-grey-300 overflow-y-scroll scrollbar-thumb-grey-400 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
              {reviews?.map((review, index) => {
                return (
                  <div>
                    <Reviews review={review} />
                  </div>
                );
              })}
            </div>

            <div className="w-full text-center md:pt-3">
              <div className="w-full block">
                <h2 className="text-xl font-semibold mt-16">
                  Want to add Something?{" "}
                </h2>
              </div>
              <div>
                <button
                  type="button"
                  onClick={handleReviewPage}
                  className="text-white bg-purple-700 hover:bg-purple-800 mt-2 focus:ring-4 focus:ring-offset-2 focus:ring-purple-800 font-semibold rounded-2xl text-sm px-5 py-3 text-center inline-flex items-center "
                >
                  Write a Review
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 p-10 mt-2 rounded-lg">
            <h2 className="text-2xl font-semibold text-center">Menu </h2>
            <div className="rounded-2xl overflow-hidden mt-1">
              {brand.menu && (
                <Carousel autoPlay infiniteLoop showThumbs={false}>
                  {Object.values(brand.menu)?.map((menuImage, index) => (
                    <div key={index}>
                      <img src={menuImage} alt="" />
                    </div>
                  ))}
                </Carousel>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
