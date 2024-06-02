import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Widget from "../../widget/Widget";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

import Breadcrumbs from "../../../breadcumbs/Breadcumbs";

const categories = ["Ecommerce", "Fashion", "Electronic", "Commercial"];
const posts = [
  {
    title: "4 Expert Tips On How To Choose The Right Men’s Wallet",
    date: "May 09, 2024",
    image: "https://shopwise.botble.com/storage/news/1-150x150.jpg",
  },
  {
    title: "Sexy Clutches: How to Buy & Wear a Designer Clutch Bag",
    date: "May 09, 2024",
    image: "https://shopwise.botble.com/storage/news/1-150x150.jpg",
  },
  {
    title: "The Top 2020 Handbag Trends to Know",
    date: "May 09, 2024",
    image: "https://shopwise.botble.com/storage/news/1-150x150.jpg",
  },
  {
    title: "How to Match the Color of Your Handbag With an Outfit",
    date: "May 09, 2024",
    image: "https://shopwise.botble.com/storage/news/1-150x150.jpg",
  },
  {
    title: "How to Care for Leather Bags",
    date: "May 09, 2024",
    image: "https://shopwise.botble.com/storage/news/1-150x150.jpg",
  },
];

const crumbs = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
];

const Post = () => {
  let { id } = useParams();

  const [detail, setDetails] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8080/blog/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  return (
    <>
      <div className="bg-[#f7f8fb]">
        <div className="max-w-screen-xl mx-auto">
          <div className="container mx-auto">
            <div className="py-7 px-6">
              <div className="flex justify-between">
                <h1 className="text-3xl font-bold text-[#292b2c]">Blog</h1>
                <Breadcrumbs crumbs={crumbs} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12">
        <div className="max-w-screen-xl mx-auto">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-9/12 md:pe-10">
                <div className="">
                  <h1 className="text-3xl font-bold">{detail.title}</h1>
                  <div className="flex">
                    <p className="text-sm py-5 text-[#292b2c]">{detail.date}</p>
                  </div>
                  <div className="pb-5"></div>
                  <p>{detail.description}</p>
                  <img src={detail.poster} alt="" />
                </div>
              </div>
              <div className="w-full lg:w-3/12 mx-2 md:mx-0">
                <Widget
                  categories={categories}
                  posts={posts}
                  Link={Link}
                  IoIosSearch={IoIosSearch}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
