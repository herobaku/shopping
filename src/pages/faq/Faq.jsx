// import React from "react";
import Accardion from "@components/faqPage/accardeon/Accardeon";
import Breadcrumbs from "@components/breadcumbs/Breadcumbs";

const crumbs = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "FAQ" },
];

const Faq = () => {
  return (
    <>
      <div className="bg-[#f7f8fb]">
        <div className="max-w-screen-xl mx-auto">
          <div className="container mx-auto p-7">
            <div className="flex justify-between sm:items-center flex-col sm:flex-row">
              <h3 className="text-3xl font-bold capitalize">FAQ</h3>
              <Breadcrumbs crumbs={crumbs} />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="max-w-screen-xl mx-auto">
          <div className="container mx-auto p-7">
            <div className="">
              <Accardion />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
