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
          console.log(data.rewards);
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
      <div class=" text-black font-serif font-light bg-white border-2 rounded-lg mt-5 overflow-hidden p-2">
        <div class=" scrollbar-thin h-60 scrollbar-track-grey-300 overflow-y-scroll scrollbar-thumb-grey-400 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
          <div class="relative overflow-x-auto">
            {rewards?.length !== 0 ? (
              rewards?.map((reward) => {
                return (
                  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" class="px-6 py-3">
                          Voucher#
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Issue Date
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Valid Till
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-6 py-4 text-green-600">
                          {reward.voucherNo}
                        </td>
                        <td class="px-6 py-4">
                          {new Date(reward.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </td>

                        <td class="px-6 py-4 text-red-600">
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
