import React from "react";
import { Link } from "react-router-dom";
import {
  useProductsContext,
  useRegisterContext,
} from "../../../context/Context";

const Trending = () => {
  const { products } = useProductsContext();
  return (
    <>
      <section className="max-w-screen-xl mx-auto">
        <div className="container mx-auto">
          <div className="px-3">
            <div className="border-b py-4 relative">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Trending Products</h2>
                <Link
                  to="/shop"
                  className="text-redLight text-base hover:text-red-900 duration-150 transition-all"
                >
                  View All
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-screen-xl mx-auto">
        <div className="container mx-auto">
          <div className="px-3 pt-10">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
              {products.slice(0, 4).map((product) => (
                <div
                  className="border p-4 rounded-lg shadow-sm relative"
                  key={product.id}
                >
                  <img
                    src={product.images.main}
                    alt={product.name}
                    className="w-full h-40 object-cover mb-4"
                  />
                  <h3 className="text-lg font-bold mb-2">
                    <Link to={`/product/${product.id}`}>{product.name}</Link>
                  </h3>
                  <div className="text-gray-500 mb-2">
                    ${product.price.toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Trending;
