import React from "react";
import { Link } from "react-router-dom";

export default function Policy() {
  return (
    <>
      <div className="col-span-2 bg-zinc-800">
        <div className="heading text-center">
          <h1 className="heading1 font-medium text-6xl py-10">
            Privacy Policy
          </h1>
        </div>
        <div className="px-20 pb-10">
          <div class=" text-black font-serif font-light bg-gray-100 border-2 rounded-lg mt-5 overflow-hidden p-2">
            <div class=" scrollbar-thin h-full scrollbar-track-grey-300 overflow-y-scroll scrollbar-thumb-grey-400 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
              <div class="p-5 text-lg text-justify">
                <p>
                  At FeedINN, we take your privacy seriously and are committed
                  to protecting your personal information. This Privacy Policy
                  outlines the types of personal data we collect, how we use it,
                  and your rights regarding your data.
                </p>
                <ul>
                  <li>
                    <span className="font-semibold">
                      Information we collect:
                    </span>{" "}
                    We collect personal data such as your name, email address,
                    and location when you create an account with FeedINN. We
                    also collect information about your restaurant reviews,
                    including the restaurants you visit and your ratings.
                  </li>
                  <li>
                    <span className="font-semibold">
                      How we use your information:
                    </span>{" "}
                    We use your personal data to create and manage your account,
                    to communicate with you about your reviews and rewards, and
                    to analyze user behavior on our website. We may also use
                    your data to send you promotional emails about FeedINN or
                    third-party restaurants, but you can opt-out of these emails
                    at any time.
                  </li>
                  <li>
                    <span className="font-semibold">
                      How we share your information:
                    </span>{" "}
                    We do not share your personal information with third parties
                    for their marketing purposes. However, we may share your
                    data with our service providers who help us operate our
                    website, such as hosting providers and payment processors.
                    We may also disclose your information if required by law or
                    in response to a court order.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Data retention and security:
                    </span>{" "}
                    We retain your personal data as long as necessary to provide
                    our services to you and to comply with legal obligations. We
                    take reasonable steps to protect your information from
                    unauthorized access or disclosure.
                  </li>
                  <li>
                    <span className="font-semibold">Your rights: </span>You have
                    the right to access, correct, and delete your personal data,
                    as well as the right to object to or restrict our processing
                    of your data. You can also request a copy of your data or
                    ask us to transfer it to another service provider. If you
                    have any questions or concerns about your privacy, please
                    contact us at{" "}
                    <span className="underline text-blue-600">
                      feedinn@gmail.com
                    </span>
                  </li>
                </ul>
                <p>
                  By using FeedINN, you consent to our collection, use, and
                  sharing of your personal data as described in this Privacy
                  Policy. We may update this policy from time to time, so please
                  review it periodically.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="p-2 justify-center flex pb-16">
          <Link to="/">
            <button class="bg-white hover:bg-gray-300  py-2 px-10 sm:px-32 hover:shadow-lg text-lg rounded-md text-black font-semibold">
              I agree
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
