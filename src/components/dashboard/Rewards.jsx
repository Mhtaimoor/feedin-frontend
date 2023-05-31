import React, { useEffect, useState } from "react";
import userService from "../../services/UserService";

export default function Rewards({ reviews }) {
  const [rewards, setRewards] = useState([]);
  const [user, setUser] = useState("");
  useEffect(() => {
    const user = userService.getCurrentUser();

    if (reviews.length === 4 || reviews.length % 4 === 0) {
      userService.createReward(user.id).then((data) => {
        setRewards(data.rewards);
      });
    }

    if (user) {
      userService
        .getRewards(user.id)
        .then((data) => {
          setRewards(data.rewards);

          setUser(user);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return (
    <>
      <h2 className="text-xl font-semibold px-6">Your Rewards</h2>
      <div className=" text-black font-serif font-light bg-white border-2 rounded-lg mt-5 overflow-hidden p-2">
        <div className=" scrollbar-thin h-60 scrollbar-track-grey-300 overflow-y-scroll scrollbar-thumb-grey-400 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
          <div className="relative overflow-x-auto">
            {rewards?.length !== 0 ? (
              rewards?.map((reward) => {
                return (
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Voucher#
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Issue Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Valid Till
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Info
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="px-6 py-4 text-green-600">
                          {reward.voucherNo}
                        </td>
                        <td className="px-6 py-4">
                          {new Date(reward.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </td>

                        <td className="px-6 py-4 text-red-600">
                          {(() => {
                            const rewardDate = new Date(reward.date);
                            rewardDate.setMonth(rewardDate.getMonth() + 3);

                            return rewardDate.toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            });
                          })()}
                        </td>
                        <td className="px-6 py-4 text-zinc-600 hover:text-zinc-900">
                          <button>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-6 h-6"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                              />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                );
              })
            ) : (
              <div>
                <h3>Write a review to get Rewards! </h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
