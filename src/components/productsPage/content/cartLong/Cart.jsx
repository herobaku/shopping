import React from "react";
import { Link } from "react-router-dom";
import {
  useProductsContext,
  useRegisterContext,
} from "../../../../context/Context";

const CartShort = ({ id, images, name, price, description }) => {
  const { addCart } = useRegisterContext();
  // const { product } = useProductsContext();

  const AddToCart = () => {
    const product = {
      id,
      images,
      count: 1,
    };
    addCart(product);
  };

  return (
    <div className="border rounded-lg shadow-md p-4 flex items-center">
      <div className="w-1/3">
        <img
          src={images.main}
          alt={name}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      <div className="w-2/3 pl-4">
        <Link to={`/product/${id}`} className="text-xl font-bold mb-2">
          {name}
        </Link>
        <div className="text-red-500 text-lg font-semibold mb-2">
          ${price.toFixed(2)}
        </div>
        <p className="text-gray-700 mb-4">{description}</p>
        <button
          onClick={AddToCart}
          className="bg-red-500 text-white px-4 py-2 rounded-lg mr-2"
        >
          Add To Cart
        </button>
        <button className="text-gray-600 mr-2">
          <i className="fas fa-sync"></i>
        </button>
        <button className="text-gray-600 mr-2">
          <i className="fas fa-search"></i>
        </button>
        <button className="text-gray-600">
          <i className="fas fa-heart"></i>
        </button>
      </div>
    </div>
  );
};

export default CartShort;
