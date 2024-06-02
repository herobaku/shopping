// import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ crumbs }) => {
  return (
    <nav className="flex py-3 text-gray-700" aria-label="Breadcrumb">
      <ol className="inline-flex items-center">
        {crumbs.map((crumb, index) => (
          <li key={index} className="inline-flex items-center">
            {index !== crumbs.length - 1 ? (
              <Link
                to={crumb.href}
                className="inline-flex items-center text-sm hover:text-redLight font-medium transition-all duration-200"
              >
                {crumb.icon && (
                  <crumb.icon className="w-4 h-4 mr-2 text-gray-400" />
                )}
                {crumb.label}
                <MdOutlineKeyboardArrowRight className="mx-2 text-base" />
              </Link>
            ) : (
              <span className="inline-flex items-center text-sm font-medium text-gray-500">
                {crumb.icon && (
                  <crumb.icon className="w-4 h-4 mr-2 text-gray-400" />
                )}
                {crumb.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
