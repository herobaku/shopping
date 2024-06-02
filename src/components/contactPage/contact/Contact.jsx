// import React from "react";
import Breadcrumbs from "@components/breadcumbs/Breadcumbs";
import { PiMapTrifoldThin } from "react-icons/pi";
import { CiMail } from "react-icons/ci";
import { FaTabletAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm/ContactForm";

const crumbs = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact Us" },
];

const address = [
  {
    icon: <PiMapTrifoldThin />,
    title: "Address",
    address: "959 Homestead Street Eastlake, NYC",
  },
  {
    icon: <CiMail />,
    title: "Email Address",
    address: (
      <Link
        className="hover:text-redLight transition-all duration-150"
        to="mailto:info@sitename.com"
      >
        info@sitename.com
      </Link>
    ),
  },
  {
    icon: <FaTabletAlt />,
    title: "Phone",
    address: "123-456-7890",
  },
];

const ContactComponents = () => {
  return (
    <>
      <div className="bg-[#f7f8fb]">
        <div className="max-w-screen-xl mx-auto">
          <div className="container mx-auto p-7">
            <div className="flex justify-between sm:items-center flex-col sm:flex-row">
              <h3 className="text-3xl font-bold capitalize">Contact Us</h3>
              <Breadcrumbs crumbs={crumbs} />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <div className="container mx-auto p-7">
          <div className="flex flex-wrap -mx-4">
            {address.map((item, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
                <div className="bg-white shadow-md rounded-md p-6 text-center relative group">
                  <div className="mb-4 text-red-500 border border-red-500 rounded-full flex justify-center items-center p-2 w-24 h-24 mx-auto relative overflow-hidden">
                    <div className="absolute inset-0 bg-red-500 rounded-full transform scale-0 transition-transform duration-300 group-hover:scale-100"></div>
                    <div className="relative z-10 text-5xl group-hover:text-white">
                      {item.icon}
                    </div>
                  </div>
                  <h4 className="font-bold">{item.title}</h4>
                  <p>{item.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <div className="container mx-auto px-7 py-8">
          <ContactForm />
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <div className="container mx-auto px-7 pb-24">
          <iframe
            src="https://maps.google.com/maps?q=959 Homestead Street Eastlake, NYC&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
            className="page_speed_1315899330 w-full h-96 max-h-1/2"
            title="Google Maps for 959 Homestead Street Eastlake, NYC"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactComponents;
