import React from "react";

const Category = ({ products, onCategorySelect }) => {
  const uniqueCategories = new Set(products.map((product) => product.category));
  const uniqueCategoriesArray = ["All", ...uniqueCategories];

  return (
    <div className="mt-4 border-t border-gray-200">
      <h3 className="sr-only">Categories</h3>
      <ul className="py-3 px-1 font-medium text-gray-900">
        {uniqueCategoriesArray.map((category, index) => (
          <li
            key={index}
            className="block py-3 cursor-pointer"
            onClick={() => onCategorySelect(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
