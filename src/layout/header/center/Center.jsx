import React, { useState } from "react";
// Logo
import logoNew from "/logoNew.png";
// Icons
import { FiPhoneCall } from "react-icons/fi";
// import { IoIosArrowDown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";

import { Link } from "react-router-dom";
import { useProductsContext } from "../../../context/Context";

// const categories = [
//   "All",
//   "Television",
//   "Home Audio & Theaters",
//   "TV & Videos",
//   "Camera, Photos & Videos",
//   "Cellphones & Accessories",
//   "Headphones",
//   "Videos games",
//   "Wireless Speakers",
//   "Office Electronic",
//   "Mobile",
//   "Digital Cables",
//   "Audio & Video Cables",
//   "Batteries",
//   "Headphone",
//   "Computer & Tablets",
//   "Laptop",
//   "Monitors",
//   "Computer Components",
//   "Watches",
//   "Drive & Storages",
//   "Gaming Laptop",
//   "Security & Protection",
//   "Accessories",
//   "Game",
//   "Camera",
//   "Audio",
//   "Mobile & Tablet",
//   "Accessories",
//   "Home Audio & Theater",
//   "Tv & Smart Box",
//   "Printer",
//   "Computer",
//   "Fax Machine",
//   "Mouse",
// ];

const Center = () => {
  const { products } = useProductsContext();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const keyword = e.target.value.toLowerCase();
    setSearchTerm(keyword);
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(keyword)
    );
    // Обработка специального случая для "xiaomi"
    if (keyword === "xiaomi") {
      window.location.href = "http://localhost:5173/product/22";
      setProducts(filteredProducts);
    } else if (keyword === "mac") {
      window.location.href = "http://localhost:5173/product/2";
      setProducts(filteredProducts);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="py-5 px-5">
        <div className="flex items-center">
          <div className="logo w-1/2 lg:w-3/12">
            <Link to="/" className="logo-link w-[clamp(140px, 5vw, 182px)]">
              <img src={logoNew} alt="logo" />
            </Link>
          </div>
          <div className="w-6/12 hidden lg:block">
            <form className="flex">
              <div className="input-block w-full border flex space-x-5">
                {/* <div className="input-field flex border justify-between w-3/12 items-center">
                  <select
                    name="category"
                    className="px-2.5 py-3 bg-transparent outline-none w-full appearance-none"
                  >
                    {categories.map((category, index) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div> */}
                <div className="input-field w-full relative border-1">
                  <input
                    type="text"
                    placeholder="Search Product..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="w-full h-full p-3 outline-0 pe-12"
                  />
                  <button
                    type="submit"
                    className="absolute bottom-1/2 right-2 translate-y-1/2 text-2xl"
                  >
                    <IoIosSearch />
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="call w-1/2 lg:w-3/12">
            <div className="call-link flex items-center space-x-1 justify-end">
              <span className="text-red-500 text-xl md:text-4xl ">
                <FiPhoneCall className="stroke-1" />
              </span>
              <span className="lg:text-base text-sm font-poppins">
                123-456-7890
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Center;
