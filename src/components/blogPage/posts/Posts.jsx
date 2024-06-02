import React from 'react'
import { Link } from "react-router-dom";

const Posts = ({ item }) => {
  return (
    <div className="border-b pb-8 mb-10 mx-3 md:mx-0">
      <div className="flex md:flex-row flex-col">
        <div className="md:w-1/2 w-full">
          <img src={item.poster} alt="logo" className="w-full h-full" />
        </div>
        <div className="md:w-1/2 w-full mt-5 md:mt-0 ps-5 flex flex-col justify-between">
          <h3 className="text-xl font-bold">{item.title}</h3>
          <ul className="flex my-3 text-[#687188] gap-4">
            <li>
              <span>{item.date}</span>
            </li>
            <li>
              <span>{item.views} Views</span>
            </li>
          </ul>
          <p className="text-[#687188]">{item.description}</p>
          <Link
            to={`/blog/${item.id}`}
            className="inline-block mt-4 max-w-36 text-center bg-[#333] text-white text-sm p-1"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Posts;
