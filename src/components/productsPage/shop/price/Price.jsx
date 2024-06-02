import React, { useState } from "react";

const Price = ({ onPriceChange }) => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleMinChange = (e) => {
    setMinPrice(e.target.value);
    onPriceChange(e.target.value, maxPrice);
  };

  const handleMaxChange = (e) => {
    setMaxPrice(e.target.value);
    onPriceChange(minPrice, e.target.value);
  };

  return (
    <aside className="border-t border-gray-300 pt-7 mt-10">
      <h3 className="widget_title text-xl font-bold mb-4">Price</h3>
      <div className="flex space-x-4">
        <div className="w-1/2">
          <input
            type="text"
            value={minPrice}
            onChange={handleMinChange}
            className="w-full px-2 py-1 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Min"
          />
        </div>
        <div className="w-1/2">
          <input
            type="text"
            value={maxPrice}
            onChange={handleMaxChange}
            className="w-full px-2 py-1 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Max"
          />
        </div>
      </div>
    </aside>
  );
};

export default Price;
