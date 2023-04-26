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
            <div class=" scrollbar-thin h-96 scrollbar-track-grey-300 overflow-y-scroll scrollbar-thumb-grey-400 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
              <div class="p-5 text-lg text-center">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus nesciunt quis fugit ratione accusantium architecto
                  magnam in eum reprehenderit sequi, doloremque, esse provident
                  iure quaerat dicta. Explicabo expedita voluptas magni! Lorem,
                  ipsum dolor sit amet consectetur adipisicing elit. Corrupti
                  sapiente libero, nihil commodi neque enim vitae consequuntur
                  voluptatibus, nobis illo amet quis dignissimos molestias
                  laborum assumenda exercitationem possimus esse repellendus.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  fugiat ipsa eveniet molestiae repellendus temporibus eius
                  voluptate? Adipisci saepe modi ex, accusamus quis soluta et
                  libero quos quisquam deleniti iusto!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus nesciunt quis fugit ratione accusantium architecto
                  magnam in eum reprehenderit sequi, doloremque, esse provident
                  iure quaerat dicta. Explicabo expedita voluptas magni! Lorem,
                  ipsum dolor sit amet consectetur adipisicing elit. Corrupti
                  sapiente libero, nihil commodi neque enim vitae consequuntur
                  voluptatibus, nobis illo amet quis dignissimos molestias
                  laborum assumenda exercitationem possimus esse repellendus.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  fugiat ipsa eveniet molestiae repellendus temporibus eius
                  voluptate? Adipisci saepe modi ex, accusamus quis soluta et
                  libero quos quisquam deleniti iusto!
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Exercitationem a nobis ducimus ad optio autem id modi.
                  Sapiente earum adipisci veritatis, numquam ut voluptates
                  laudantium voluptatem architecto? Perferendis, autem
                  magni?Lorem, ipsum dolor sit amet consectetur adipisicing
                  elit. Corrupti sapiente libero, nihil commodi neque enim vitae
                  consequuntur voluptatibus, nobis illo amet quis dignissimos
                  molestias laborum assumenda exercitationem possimus esse
                  repellendus. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Harum fugiat ipsa eveniet molestiae
                  repellendus temporibus eius voluptate? Adipisci saepe modi ex,
                  accusamus quis soluta et libero quos quisquam deleniti iusto!
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Exercitationem a nobis ducimus ad optio autem id modi.
                  Sapiente earum adipisci veritatis, numquam ut voluptates
                  laudantium voluptatem architecto? Perferendis, autem
                  magni?Lorem, ipsum dolor sit amet consectetur adipisicing
                  elit. Corrupti sapiente libero, nihil commodi neque enim vitae
                  consequuntur voluptatibus, nobis illo amet quis dignissimos
                  molestias laborum assumenda exercitationem possimus esse
                  repellendus. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Harum fugiat ipsa eveniet molestiae
                  repellendus temporibus eius voluptate? Adipisci saepe modi ex,
                  accusamus quis soluta et libero quos quisquam deleniti iusto!
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Exercitationem a nobis ducimus ad optio autem id modi.
                  Sapiente earum adipisci veritatis, numquam ut voluptates
                  laudantium voluptatem architecto? Perferendis, autem magni?
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
