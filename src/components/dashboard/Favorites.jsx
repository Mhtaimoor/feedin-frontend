import React from "react";

export default function Favorites() {
  return (
    <>
      <h2 className="text-xl font-semibold px-6">Your Favorites</h2>
      <div class=" text-black font-serif font-light bg-white border-2 rounded-lg mt-5 overflow-hidden p-2">
        <div class=" scrollbar-thin h-60 scrollbar-track-grey-300 overflow-y-scroll scrollbar-thumb-grey-400 scrollbar-thumb-rounded-full scrollbar-track-rounded-full"></div>
      </div>
    </>
  );
}
