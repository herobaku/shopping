import { Link, useParams } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import {
  useProductsContext,
  useRegisterContext,
} from "../../../context/Context";
import Breadcrumbs from "../../breadcumbs/Breadcumbs";

const ShopDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [features, setFeatures] = useState({});
  const [image, setImage] = useState({});
  const { products } = useProductsContext();
  const { addCart, addToFavorites, user } = useRegisterContext();
  const [count, setCount] = useState(1);

  const countMinus = () => {
    setCount(count > 1 ? count - 1 : count);
  };

  const countPlus = () => {
    setCount(count + 1);
  };

  const countChange = (e) => {
    setCount(e.target.value);
  };

  useEffect(() => {
    axios(`http://localhost:8080/products/${params.id}`).then((response) => {
      const data = response.data;
      setProduct(data);
      setFeatures(data.features);
      setImage(data.images.main);
    });
  }, [params]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const crumbs = [
    { href: "/", label: "Home" },
    { href: "/", label: "ProductDetails" },
  ];

  return (
    <>
      <div className="bg-[#f7f8fb]">
        <div className="max-w-screen-xl mx-auto">
          <div className="container mx-auto p-7">
            <div className="flex justify-between sm:items-center flex-col sm:flex-row">
              <h3 className="text-3xl font-bold capitalize">Product Details</h3>
              <Breadcrumbs crumbs={crumbs} />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <div className="py-10 px-7">
          <div className="container mx-auto">
            <div className="flex md:flex-nowrap flex-wrap">
              <div className="lg:w-5/12 w-full">
                <div className="p-7 border me-7">
                  <img
                    src={`${image}`}
                    className="w-full h-full"
                    alt={product.name}
                  />
                </div>
              </div>
              <div className="lg:w-7/12 w-full">
                <div className="detail">
                  <h4 className="font-semibold text-2xl text-[#343a40] hover:text-redLight duration-200">
                    {product.name}
                  </h4>
                  <div className="flex justify-between items-end">
                    <div className="text-2xl my-3 text-redLight font-semibold">
                      <span className="">{product.price}$</span>
                    </div>
                  </div>
                  <div className="w-full">
                    <p>{product.description}</p>
                    <p className="my-3 text-redLight font-semibold">Features</p>
                    <ul>
                      {Object.entries(features).map((item, index) => (
                        <li
                          className="capitalize flex justify-between"
                          key={index}
                        >
                          <span>
                            {item[0]
                              .replace(/_/g, " ")
                              .charAt(0)
                              .toUpperCase() +
                              item[0].replace(/_/g, " ").slice(1)}
                          </span>
                          <span>{item[1]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex gap-x-5 items-center  my-5">
                    <div className="flex gap-x-5 items-center">
                      <button
                        disabled={!product.stock}
                        className="w-8 h-8 bg-slate-300 text-white border rounded-full"
                        onClick={countMinus}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        className="p-1 w-12 h-10 border text-center"
                        max={product.stock}
                        value={count}
                        onChange={countChange}
                        disabled={!product.stock}
                      />
                      <button
                        disabled={!product.stock}
                        onClick={countPlus}
                        className="w-8 h-8 bg-slate-300 text-white border rounded-full"
                      >
                        +
                      </button>
                      <p className="text-lg">
                        {product.stock
                          ? `Stock left: ${product.stock}`
                          : "There is no product lefts"}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-x-4 items-center">
                    <Link
                      className={`bg-redLight flex items-center gap-x-3 text-white py-3.5 px-7 rounded-md ${
                        !product.stock ? "opacity-50 pointer-events-none" : ""
                      }`}
                      to={user ? "#" : "/register"}
                      onClick={() =>
                        user &&
                        addCart({
                          id: product.id,
                          name: product.name,
                          image: product.images.main,
                          count,
                          price: product.price,
                          currency: product.currency,
                        })
                      }
                      disabled={!product.stock}
                    >
                      <span>
                        <MdOutlineLocalGroceryStore />
                      </span>
                      <span>Add to cart</span>
                    </Link>
                    <button
                      className=""
                      onClick={() =>
                        addToFavorites({
                          id: product.id,
                          name: product.name,
                          image: image,
                          price: product.price,
                          currency: product.currency,
                        })
                      }
                    >
                      <AiOutlineHeart className="text-4xl text-[#343a40] hover:text-redLight duration-200" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <div className="my-7 mx-7">
          <div className="container mx-auto"></div>
          <div className="border-t">
            <h1 className="text-2xl font-semibold py-5">Related Products</h1>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {products
              .filter((item) => item.category === product.category)
              .slice(0, 4)
              .map((item) => (
                <div className="group" key={item.id}>
                  <div className="w-full relative overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 h-80">
                    <img
                      src={`${item.images.main}`}
                      alt={item.name}
                      className="h-full w-full object-cover lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700 hover:text-redLight duration-200">
                        <Link to={`/product/${item.id}`} onClick={scrollToTop}>
                          {item.name.slice(0, 18) + "..."}
                        </Link>
                      </h3>
                      <p className="text-sm font-bold">{item.brand}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {item.price} $
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopDetails;
