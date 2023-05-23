import React, { useEffect } from "react";

import critic from "../../assets/critic.jpg";
import critic2 from "../../assets/critic 2.jpg";
import userService from "../../services/UserService";
import { useNavigate } from "react-router-dom";

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

export default function About() {
  window.addEventListener("scroll", reveal);

  // To check the scroll position on page load
  reveal();

  const navigate = useNavigate();

  const handleLogin = (e) => {
    const user = userService.getCurrentUser();

    if (user) {
      navigate(`/user`);
    } else {
      navigate("/login");
    }
  };
  return (
    <>
      <h1 className="text-4xl text-center font-bold mb-16 pt-10">About Us</h1>
      <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
        <div className="w-full lg:w-6/12 md:py-20 px-10 bg-gray-100 ">
          <h2 className="w-full font-bold lg:text-4xl text-3xl lg:leading-10 leading-9">
            Are you a foodie who loves exploring new restaurants and sharing
            your dining experiences with others?
          </h2>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6">
            Then FeedINN is the perfect website for you! We offer a unique
            platform where you can earn free vouchers for your favorite
            restaurants simply by writing honest and detailed reviews.
          </p>
        </div>
        <div className="w-full lg:w-6/12 reveal">
          <img
            className="lg:block hidden w-full"
            src={critic}
            alt="people discussing on board"
          />
          <img
            className="lg:hidden sm:block hidden w-full"
            src={critic}
            alt="people discussing on board"
          />
          <img
            className="sm:hidden block w-full"
            src={critic}
            alt="people discussing on board"
          />
        </div>
      </div>
      <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12 bg-gray-100">
        <div className="w-full lg:w-6/12 reveal">
          <img
            className="lg:block hidden w-full"
            src={critic2}
            alt="people discussing on board"
          />
          <img
            className="lg:hidden sm:block hidden w-full"
            src={critic2}
            alt="people discussing on board"
          />
          <img
            className="sm:hidden block w-full"
            src={critic2}
            alt="people discussing on board"
          />
        </div>
        <div className="w-full lg:w-6/12 md:py-20 px-10">
          <h2 className="w-full font-bold lg:text-4xl text-3xl lg:leading-10 leading-9">
            Do you love exploring new restaurants and trying out different
            cuisines? Then you've come to the right place!
          </h2>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6 revealUp">
            At FeedINN, we're all about celebrating the joy of food and dining.
            Our community of foodies is passionate about sharing their
            experiences and discovering new culinary adventures. Whether you're
            a seasoned food critic or just starting out, we welcome you to join
            us and become a part of the FeedINN family. As a member of FeedINN,
            you'll have access to a wealth of information about restaurants and
            dining experiences in your area. You can read reviews from other
            foodies, share your own opinions, and earn rewards for your
            contributions. Best of all, you'll be part of a community that
            shares your love of food and adventure.
          </p>
          <p className="pt-10 text-gray-600">
            So what are you waiting for? Sign up today and start exploring the
            world of dining with FeedINN.{" "}
            <span className="font-semibold text-black">Happy eating!</span>
          </p>
          <button
            class="text-white bg-purple-700 mt-4 hover:bg-purple-800 font-semibold focus:ring-4 focus:outline-none focus:ring-purple-300 rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center "
            onClick={handleLogin}
          >
            Login
            <svg
              aria-hidden="true"
              class="w-4 h-4 ml-1 -mr-1"
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

      <div className="sm:hidden block relative mt-8">
        <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
          <svg
            className="z-20"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="24" cy="24" r="24" fill="#1F2937" />
            <path
              d="M21 23C23.2091 23 25 21.2091 25 19C25 16.7909 23.2091 15 21 15C18.7909 15 17 16.7909 17 19C17 21.2091 18.7909 23 21 23Z"
              stroke="white"
              strokeWidth="2.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 33V31C15 29.9391 15.4214 28.9217 16.1716 28.1716C16.9217 27.4214 17.9391 27 19 27H23C24.0609 27 25.0783 27.4214 25.8284 28.1716C26.5786 28.9217 27 29.9391 27 31V33"
              stroke="white"
              strokeWidth="2.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M28 15.1301C28.8604 15.3504 29.623 15.8508 30.1676 16.5524C30.7122 17.254 31.0078 18.117 31.0078 19.0051C31.0078 19.8933 30.7122 20.7562 30.1676 21.4578C29.623 22.1594 28.8604 22.6598 28 22.8801"
              stroke="white"
              strokeWidth="2.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M33 33.0001V31.0001C32.9949 30.1173 32.6979 29.2609 32.1553 28.5645C31.6126 27.8682 30.8548 27.3708 30 27.1501"
              stroke="white"
              strokeWidth="2.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
      </div>
      {/* Our Mission Section */}
      <div className="flex lg:flex-row flex-col justify-between gap-10  px-10 pb-20">
        <div className="w-full lg:w-6/12 reveal text-justify border-r-5 border-black bg-gray-100  py-10 px-10">
          <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">
            Our Mission
          </h2>
          <p className="font-normal text-gray-600 mt-6 w-full ">
            At FeedINN, our mission is to help foodies like you discover new and
            exciting dining experiences while supporting local restaurants. We
            believe that every restaurant has a story to tell, and every dining
            experience should be unique and memorable. Our goal is to provide a
            platform where foodies can share their honest opinions and feedback
            about restaurants, and in return, earn rewards for their
            contributions. By creating a community of passionate food lovers, we
            hope to encourage people to explore new cuisines, try new
            restaurants, and support local businesses.
          </p>
          <p className="font-normal text-base leading-6 text-gray-600 w-full  mt-10">
            We're also committed to promoting transparency and fairness in our
            reviews. We have strict criteria for what makes a good review, and
            we don't allow any fake or misleading content. Our goal is to
            provide accurate and helpful information to our users, so they can
            make informed decisions about where to dine. Overall, our mission is
            to create a fun, supportive, and engaging community where foodies
            can come together to celebrate their love of food. We hope you'll
            join us on this exciting journey!
          </p>
        </div>
        <div className="w-full lg:w-6/12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10 reveal text-justify py-10">
            {/* <!-- Team Card --> */}
            <div className="flex p-4 shadow-md">
              <div className="mr-6">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 15C20.4853 15 22.5 12.9853 22.5 10.5C22.5 8.01472 20.4853 6 18 6C15.5147 6 13.5 8.01472 13.5 10.5C13.5 12.9853 15.5147 15 18 15Z"
                    stroke="#1F2937"
                    strokeWidth="2.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M25.5 28.5C27.9853 28.5 30 26.4853 30 24C30 21.5147 27.9853 19.5 25.5 19.5C23.0147 19.5 21 21.5147 21 24C21 26.4853 23.0147 28.5 25.5 28.5Z"
                    stroke="#1F2937"
                    strokeWidth="2.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.5 28.5C12.9853 28.5 15 26.4853 15 24C15 21.5147 12.9853 19.5 10.5 19.5C8.01472 19.5 6 21.5147 6 24C6 26.4853 8.01472 28.5 10.5 28.5Z"
                    stroke="#1F2937"
                    strokeWidth="2.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="">
                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">
                  Team
                </p>
                <p className="mt-2 font-normal text-base leading-6 text-gray-600">
                  At FeedINN, our team is made up of passionate foodies, tech
                  enthusiasts, and business experts. Together, we're dedicated
                  to creating a platform that helps people discover new
                  restaurants and share their dining experiences with others.
                </p>
              </div>
            </div>

            {/* <!-- Board Card --> */}
            <div className="flex p-4 shadow-md">
              <div className="mr-6">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5 10.5C12.1569 10.5 13.5 9.15685 13.5 7.5C13.5 5.84315 12.1569 4.5 10.5 4.5C8.84315 4.5 7.5 5.84315 7.5 7.5C7.5 9.15685 8.84315 10.5 10.5 10.5Z"
                    stroke="#1F2937"
                    strokeWidth="2.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.5 33V25.5L6 24V18C6 17.6022 6.15804 17.2206 6.43934 16.9393C6.72064 16.658 7.10218 16.5 7.5 16.5H13.5C13.8978 16.5 14.2794 16.658 14.5607 16.9393C14.842 17.2206 15 17.6022 15 18V24L13.5 25.5V33"
                    stroke="#1F2937"
                    strokeWidth="2.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M25.5 10.5C27.1569 10.5 28.5 9.15685 28.5 7.5C28.5 5.84315 27.1569 4.5 25.5 4.5C23.8431 4.5 22.5 5.84315 22.5 7.5C22.5 9.15685 23.8431 10.5 25.5 10.5Z"
                    stroke="#1F2937"
                    strokeWidth="2.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22.5 33V27H19.5L22.5 18C22.5 17.6022 22.658 17.2206 22.9393 16.9393C23.2206 16.658 23.6022 16.5 24 16.5H27C27.3978 16.5 27.7794 16.658 28.0607 16.9393C28.342 17.2206 28.5 17.6022 28.5 18L31.5 27H28.5V33"
                    stroke="#1F2937"
                    strokeWidth="2.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="">
                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">
                  Board
                </p>
                <p className="mt-2 font-normal text-base leading-6 text-gray-600">
                  Our board of directors is made up of experienced leaders from
                  the food, technology, and business worlds. They provide
                  guidance and support to our team, helping us stay focused on
                  our mission and achieve our goals.
                </p>
              </div>
            </div>

            {/* <!-- Press Card --> */}
            <div className="flex p-4 shadow-md">
              <div className="mr-6">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.5 7.5H7.5C5.84315 7.5 4.5 8.84315 4.5 10.5V25.5C4.5 27.1569 5.84315 28.5 7.5 28.5H28.5C30.1569 28.5 31.5 27.1569 31.5 25.5V10.5C31.5 8.84315 30.1569 7.5 28.5 7.5Z"
                    stroke="#1F2937"
                    strokeWidth="2.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.5 10.5L18 19.5L31.5 10.5"
                    stroke="#1F2937"
                    strokeWidth="2.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="">
                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">
                  Press
                </p>
                <p className="mt-2 font-normal text-base leading-6 text-gray-600">
                  FeedINN has been featured in numerous publications. Our
                  platform has been praised for its user-friendly design, its
                  innovative approach to restaurant reviews, and its commitment
                  to supporting local businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
