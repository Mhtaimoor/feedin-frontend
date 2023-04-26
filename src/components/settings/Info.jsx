import React from "react";

export default function Info() {
  return (
    <>
      <div class="bg-gray-100 w-full sm:rounded-lg">
        <div class="px-4 py-5 sm:px-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            User Information
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">
            Details and Informations about user.
          </p>
        </div>
        <div class="border-t border-gray-200">
          <dl>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Full name</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Mickael Poulaz
              </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Username</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Username
              </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Email address</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                m.poul@example.com
              </dd>
            </div>
            <div className="mt-2 p-5">
              <h3 className="font-medium text-gray-600">
                Want to change the Information?
              </h3>
              <button className="px-5 py-2 rounded-lg mt-2 text-md bg-purple-700 hover:bg-purple-800 text-white ">
                Edit
              </button>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
}
