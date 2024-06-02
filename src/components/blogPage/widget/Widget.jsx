import React from "react";

const Widget = ({ categories, posts, Link, IoIosSearch }) => {
  return (
    <>
      <div className="widget border-b pb-10">
        <div className="search">
          <form
            action=""
            method="GET"
            className="flex items-center border border-gray-300 rounded-lg p-2"
          >
            <input
              className="form-control w-full border-none outline-none px-2 py-1 text-lg"
              name="q"
              placeholder="Search..."
              type="text"
            />
            <button
              type="submit"
              title="Search"
              className="flex items-center justify-center p-1 text-gray-600 hover:text-gray-800"
            >
              <IoIosSearch className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
      <div className="widget border-b pb-10">
        <div className="mt-5">
          <h2 className="text-xl font-bold mb-4">Categories</h2>
          <ul className="list-none space-y-2">
            {categories.map((category, index) => (
              <li key={index}>
                <Link
                  to="#"
                  className="flex items-center space-x-2 hover:text-redLight duration-150"
                >
                  <span className="text-gray-600">&gt;</span>
                  <span className="text-lg">{category}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="widget border-b pb-10">
        <div>
          <h2 className="text-xl font-bold mb-4">Recent Posts</h2>
          <ul className="space-y-4">
            {posts.map((post, index) => (
              <li key={index} className="flex space-x-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <Link className="text-sm font-semibold hover:text-redLight duration-150">
                    {post.title}
                  </Link>
                  <p className="text-sm text-gray-500">{post.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="widget">
        <h2 className="text-xl font-bold mb-4">Tags</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-1">
          <li>
            <a
              href="#"
              className="block bg-[#f7f7f7] text-[#333] test-sm py-2 px-4 hover:bg-redLight hover:text-white transition-all duration-150"
            >
              General
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block bg-[#f7f7f7] text-[#333] test-sm py-2 px-4 hover:bg-redLight hover:text-white transition-all duration-150"
            >
              General
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block bg-[#f7f7f7] text-[#333] test-sm py-2 px-4 hover:bg-redLight hover:text-white transition-all duration-150"
            >
              General
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block bg-[#f7f7f7] text-[#333] test-sm py-2 px-4 hover:bg-redLight hover:text-white transition-all duration-150"
            >
              General
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block bg-[#f7f7f7] text-[#333] test-sm py-2 px-4 hover:bg-redLight hover:text-white transition-all duration-150"
            >
              General
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Widget;
