// import React from 'react'
import { useState } from "react";
// Icons
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { ImDisplay } from "react-icons/im";
// import { IoMenu } from "react-icons/io5";
import { TfiTablet } from "react-icons/tfi";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { LuWatch } from "react-icons/lu";
import { IoLogoGameControllerB } from "react-icons/io";
import { MdOutlineCameraAlt } from "react-icons/md";
import { BsMusicPlayer } from "react-icons/bs";
import { ImMobile } from "react-icons/im";
// import { BsPlugin } from "react-icons/bs";
// import { LuMonitor } from "react-icons/lu";
// import { FiPrinter } from "react-icons/fi";
// import { FaComputer } from "react-icons/fa6";
// import { FaFax } from "react-icons/fa";
// import { PiMouseMiddleClickDuotone } from "react-icons/pi";
// import { BsPlus } from "react-icons/bs";
// import { HiMinus } from "react-icons/hi2";

import { Link, useLocation } from "react-router-dom";
import { useRegisterContext } from "../../../context/Context";

import "./style.css";

const link__Category = [
  {
    icon: <ImDisplay />,
    name: "Television",
    arrow: <IoIosArrowForward />,
  },
  {
    icon: <TfiTablet />,
    name: "Mobile",
    arrow: <IoIosArrowForward />,
  },
  {
    icon: <FaHeadphonesSimple />,
    name: "HeadPhone",
    arrow: <IoIosArrowForward />,
  },
  {
    icon: <LuWatch />,
    name: "Watches",
    arrow: <IoIosArrowForward />,
  },
  {
    icon: <IoLogoGameControllerB />,
    name: "Game",
    arrow: null,
  },
  {
    icon: <MdOutlineCameraAlt />,
    name: "Camera",
    arrow: null,
  },
  {
    icon: <BsMusicPlayer />,
    name: "Audio",
    arrow: null,
  },
  {
    icon: <ImMobile />,
    name: "Mobile & Tablet",
    arrow: null,
  },
];

const nav = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Shop",
    path: "/shop",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "FAQ",
    path: "/faq",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Bottom = () => {
  const { cart, favorites } = useRegisterContext();
  const totalFavorites = favorites.length;
  const totalProducts = cart.reduce(
    (total, product) => total + product.count,
    0
  );

  const [showAllCategories, setShowAllCategories] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const location = useLocation();

  const handleShowMoreCategories = () => {
    setShowAllCategories((state) => !state);
  };

  const handleToggleMenu = () => {
    setMenuVisible((state) => !state);
  };

  const isHomePage = location.pathname === "/";

  return (
    <div className="bg-[#1D2224]">
      <div className="max-w-screen-xl mx-auto">
        <div className="px-5">
          <div className="flex items-center justify-between">
            {/* <div className="lg:w-3/12 w-6/12">
              <div className="relative">
                <button
                  className="block-burger flex items-center py-5 px-3 lg:w-full text-white bg-red-700"
                  onClick={isHomePage ? undefined : handleToggleMenu}
                >
                  <IoMenu className="text-3xl" />
                  <span className="uppercase font-semibold sm:block hidden">
                    All Categories
                  </span>
                </button>
                {(isHomePage || menuVisible) && (
                  <div className="block-burger hidden lg:block bg-white absolute shadow-md z-50 botto-0 left-0 w-full">
                    <ul className="flex flex-col gap-y-1.5 py-2">
                      {link__Category
                        .slice(0, showAllCategories ? link__Category.length : 9)
                        .map((item, index) => {
                          return (
                            <li
                              className="flex items-center space-x-2"
                              key={index}
                            >
                              <Link
                                to="#"
                                className="flex items-center justify-between py-3 ps-6 pe-4 space-x-3 w-full"
                              >
                                <span className="text-xl">{item.icon}</span>
                                <span className="grow text-sm font-poppins font-normal">
                                  {item.name}
                                </span>
                                <span className="text-gray-500">
                                  {item.arrow}
                                </span>
                              </Link>
                            </li>
                          );
                        })}
                    </ul>
                    <div
                      className="flex border-t py-2"
                      onClick={handleShowMoreCategories}
                    >
                      <Link
                        to="#"
                        className="flex items-center justify-between py-3 ps-6 pe-4 space-x-3 w-full"
                      >
                        <span className="grow font-poppins font-normal text-base text-redLight">
                          More Categories
                        </span>
                        <span className="text-gray-500">
                          {showAllCategories ? (
                            <HiMinus className="text-2xl" />
                          ) : (
                            <BsPlus className="text-2xl" />
                          )}
                        </span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div> */}
            <div className="w-6/12">
              <div className="menu ms-3">
                <ul className="flex list-none space-x-5">
                  {nav.map((item, index) => {
                    return (
                      <li key={index}>
                        <Link
                          to={item.path}
                          className="text-white font-semibold uppercase transition-all duration-200 font-poppins text-sm hover:text-red-800"
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="lg:w-3/12 w-6/12">
              <div className="block-icon flex items-center justify-end">
                <Link
                  to="/wishlist"
                  className="relative block py-5 px-3 text-2xl"
                >
                  <AiOutlineHeart className="text-white" />
                  <span className="inline-flex items-center absolute top-4 right-0 rounded-full bg-red-600 px-1.5 py-0.5 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10">
                    {totalFavorites}
                  </span>
                </Link>
                <div className="relative">
                  <Link
                    to="/cart"
                    className="relative block py-5 px-3 text-2xl cursor-pointer"
                  >
                    <MdOutlineLocalGroceryStore className="text-white" />
                    <span className="inline-flex items-center absolute top-4 right-0 rounded-full bg-red-600 px-1.5 py-0.5 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10">
                      {totalProducts}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
