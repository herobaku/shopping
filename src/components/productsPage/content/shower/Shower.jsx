import { IoIosArrowDown } from "react-icons/io";

const options = [
  { label: "Default", value: 9 },
  { label: "12", value: 12 },
  { label: "24", value: 24 },
  { label: "34", value: 34 },
];

const Shower = ({ onProductsPerPageChange }) => {
  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    onProductsPerPageChange(value);
  };

  return (
    <div className="relative">
      <select
        className="block text-sm appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded focus:outline-none focus:border-gray-500"
        onChange={handleChange}
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

export default Shower;
