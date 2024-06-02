import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const options = [
  { label: "Default", value: "default" },
  { label: "Price: low to high", value: "price_asc" },
  { label: "Price: high to low", value: "price_desc" },
  { label: "Name: A-Z", value: "name_asc" },
  { label: "Name: Z-A", value: "name_desc" },
  { label: "Rating: low to high", value: "rating_asc" },
  { label: "Rating: high to low", value: "rating_desc" },
];

const Select = ({ selectedOption, onChange }) => {
  return (
    <div className="relative">
      <select
        className="block text-sm appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded focus:outline-none focus:border-gray-500"
        value={selectedOption}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <IoIosArrowDown />
      </div>
    </div>
  );
};

export default Select;
