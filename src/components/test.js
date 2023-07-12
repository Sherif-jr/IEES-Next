import React from "react";

const Test = () => {
  return (
    <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div>
        {/* <!-- Card Item --> */}
        <div
          className="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1"
          x-for="(post, index) in posts"
        >
          {/* <!-- Clickable Area --> */}
          <a _href="link" className="cursor-pointer">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1459257868276-5e65389e2722"
                className="rounded-t h-72 w-full object-cover"
              />

              <figcaption className="p-4">
                <p
                  className="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300"
                  x-text="post.title"
                ></p>

                <small
                  className="leading-5 text-gray-500 dark:text-gray-400"
                  x-text="post.description"
                ></small>
              </figcaption>
            </figure>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Test;
