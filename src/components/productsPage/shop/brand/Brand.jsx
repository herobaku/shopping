import React from "react";

const Brand = ({ filteredBrands, onBrandSelect, selectedBrands }) => {
  return (
    <aside className="border-t border-gray-300 pt-7 mt-10">
      <h3 className="widget_title text-xl font-bold mb-4">Brand</h3>
      <div className="">
        <ul>
          {filteredBrands.map((brand, index) => (
            <li key={index} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={`brand-${index}`}
                className="custom-checkbox h-5 w-5"
                checked={selectedBrands.includes(brand)}
                onChange={() => onBrandSelect(brand)}
              />
              <label htmlFor={`brand-${index}`} className="ml-2 text-gray-700">
                {brand}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Brand;
