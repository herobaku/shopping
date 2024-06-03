import React, { useEffect, useState } from "react";
// Icons
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
// React Router
import { Link } from "react-router-dom";
// Context
import { useRegisterContext } from "../../../context/Context";
// Style
import "./style.css";
import { useTranslation } from "react-i18next";

const Bottom = () => {
  const { t } = useTranslation();

  const nav = [
    {
      name: t("navigation.home"),
      path: "/",
    },
    {
      name: t("navigation.shop"),
      path: "/shop",
    },
    {
      name: t("navigation.blog"),
      path: "/blog",
    },
    {
      name: t("navigation.faq"),
      path: "/faq",
    },
    {
      name: t("navigation.contact"),
      path: "/contact",
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Fav
  const { cart, favorites } = useRegisterContext();
  const totalFavorites = favorites.length;
  // Shop
  const totalProducts = cart.reduce(
    (total, product) => total + product.count,
    0
  );

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isMenuOpen]);

  return (
    <>
      {isMenuOpen && <div className="modal" onClick={handleCloseMenu}></div>}
      <div className="bg-[#1D2224]">
        <div className="max-w-screen-xl mx-auto">
          <div className="px-5">
            <div className="flex items-center justify-between">
              <div className="md:w-6/12">
                <div className="lg:ms-3 ms-1">
                  <div className="flex items-center gap-x-4 menu">
                    <RxHamburgerMenu
                      className="text-white text-3xl cursor-pointer"
                      onClick={handleMenuToggle}
                    />
                    <div className={`content ${isMenuOpen ? "open" : ""}`}>
                      <div className="header">
                        <IoClose
                          className="text-black text-3xl"
                          onClick={handleCloseMenu}
                        />
                      </div>
                      <div className="body">
                        <ul className="flex list-none space-x-5">
                          {nav.map((item, index) => {
                            return (
                              <li key={index}>
                                <Link
                                  to={item.path}
                                  className="text-white font-semibold uppercase transition-all duration-200 font-poppins text-sm hover:text-red-800"
                                  onClick={handleCloseMenu}
                                >
                                  {item.name}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
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
    </>
  );
};

export default Bottom;
