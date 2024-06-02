import React from "react";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/Context";
// Components
import Breadcrumbs from "@components/breadcumbs/Breadcumbs";
import Posts from "@components/blogPage/posts/Posts";
import Widget from "@components/blogPage/widget/Widget";

const crumbs = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
];
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

const BlogPages = () => {
  const { blog } = useGlobalContext();
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
                <div className="pt-10">
                  {blog.map((item) => {
                    return <Posts item={item} key={item.id} />;
                  })}
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

export default BlogPages;
