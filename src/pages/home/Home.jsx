import React from "react";
import Blog from "@components/homePage/blog/Blog";
import Brand from "@components/homePage/brand/Brand";
import Category from "@components/homePage/category/Category";
import Client from "@components/homePage/client/Client";
// import Deals from "@components/homePage/deals/Deals";
import Slide from "@components/homePage/slide/Slide";
import Join from "@components/homePage/join/Join";
import Services from "@components/homePage/services/Services";
import Trending from "@components/homePage/trending/Trending";

const Home = () => {
  return (
    <>
      <Slide />
      <Category />
      {/* <Deals /> */}
      <Brand />
      <Trending />
      <Blog />
      <Client />
      <Join />
      <Services />
    </>
  );
};

export default Home;
