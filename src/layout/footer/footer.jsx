// Image
// import logo from "/logo-light.png";
import logoNew from "/logoNewBlack.png";
import visa from "/card/visa.png";
import paypal from "/card/paypal.png";
import master from "/card/master-card.png";
import discover from "/card/discover.png";
import express from "/card/american-express.png";
// Icons
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { RiMessageLine } from "react-icons/ri";
import { TfiMobile } from "react-icons/tfi";

import { Link } from "react-router-dom";

const useful__link = [
  {
    name: "About Us",
  },
  {
    name: "FAQ",
  },
  {
    name: "Location",
  },
  {
    name: "Affiliates",
  },
  {
    name: "Contact",
  },
];

const categories__link = [
  {
    name: "Television",
  },
  {
    name: "Mobile",
  },
  {
    name: "Headphone",
  },
  {
    name: "Watches",
  },
  {
    name: "Game",
  },
];

const account__link = [
  {
    name: "My profile",
  },
  {
    name: "Wishlist",
  },
  {
    name: "Orders",
  },
  {
    name: "Order tracking",
  },
];

const contact__link = [
  {
    name: "959 Homestead Street Eastlake, NYC",
    icon: <FaMapMarkerAlt />,
  },
  {
    name: "info@sitename.com",
    icon: <RiMessageLine />,
  },
  {
    name: "123-456-7890",
    icon: <TfiMobile />,
  },
];

const payment = [
  {
    img: visa,
  },
  {
    img: paypal,
  },
  {
    img: master,
  },
  {
    img: discover,
  },
  {
    img: express,
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#202325]">
      <div className="max-w-screen-xl mx-auto">
        <div className="top pt-[100px] pb-[70px]">
          <div className="flex items-start flex-wrap gap-y-5">
            <div className="lg:w-3/12 md:w-6/12 w-full">
              <div className="px-[15px]">
                <div className="logo w-full">
                  <Link to="#">
                    <img src={logoNew} alt="logo" className="object-cover" />
                  </Link>
                </div>
                <p className="text-white text-sm font-poppins pt-5">
                  If you are going to use of Lorem Ipsum need to be sure there
                  isn't hidden of text
                </p>
                <div className="mt-5">
                  <ul className="flex space-x-2">
                    <li>
                      <Link
                        to="#"
                        className="bg-[#3b5998] p-2.5 block border-white border"
                      >
                        {" "}
                        <FaFacebookF className="text-white" />{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="bg-[#00acee] p-2.5 block border-white border"
                      >
                        {" "}
                        <FaTwitter className="text-white" />{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="bg-[#c4302b] p-2.5 block border-white border"
                      >
                        {" "}
                        <FaYoutube className="text-white" />{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="bg-[#3f729b] p-2.5 block border-white border"
                      >
                        {" "}
                        <FiInstagram className="text-white" />{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:w-2/12 md:w-6/12 sm:w-6/12 w-full">
              <div className="px-[15px]">
                <h6 className="text-white font-poppins text-lg capitalize font-semibold mb-[25px]">
                  Useful Links
                </h6>
                <ul className="flex flex-col space-y-2">
                  {useful__link.map((item, index) => {
                    return (
                      <li key={index} className="pb-2.5">
                        <Link
                          to="#"
                          className="text-white font-poppins text-sm"
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="lg:w-2/12 md:w-3/12 sm:w-6/12 w-full">
              <div className="px-[15px]">
                <h6 className="text-white font-poppins text-lg capitalize font-semibold mb-[25px]">
                  Categories
                </h6>
                <ul className="flex flex-col space-y-2">
                  {categories__link.map((item, index) => {
                    return (
                      <li key={index} className="pb-2.5">
                        <Link
                          to="#"
                          className="text-white font-poppins text-sm"
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="lg:w-2/12 md:w-3/12 sm:w-6/12 w-full">
              <div className="px-[15px]">
                <h6 className="text-white font-poppins text-lg capitalize font-semibold mb-[25px]">
                  My Account
                </h6>
                <ul className="flex flex-col space-y-2">
                  {account__link.map((item, index) => {
                    return (
                      <li key={index} className="pb-2.5">
                        <Link
                          to="#"
                          className="text-white font-poppins text-sm"
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="lg:w-3/12 md:w-3/12 sm:w-6/12 w-full">
              <div className="px-[15px]">
                <h6 className="text-white font-poppins text-lg capitalize font-semibold mb-[25px]">
                  Contact Info
                </h6>
                <ul className="flex flex-col space-y-2">
                  {contact__link.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="pb-2.5 flex space-x-2 items-start justify-start"
                      >
                        <span className="text-white font-poppins text-lg" >{item.icon}</span>
                        <Link to="#" className="text-white font-poppins text-sm">
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
      <div className="bottom border-t border-[#ffffff1a]">
        <div className="py-[30px] px-2">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-col items-center sm:flex-row gap-y-5">
              <div className="lg:w-1/2 w-full mx-auto">
                <p className="text-white font-poppins text-sm text-center sm:text-left">
                  © 2024 Botble Technologies. All Rights Reserved.
                </p>
              </div>
              <div className="w-1/2 mx-auto">
                <div className="flex justify-end space-x-2.5">
                  {payment.map((item, index) => {
                    return (
                      <img
                        key={index}
                        src={item.img}
                        alt={item.img}
                        className="object-cover"
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
