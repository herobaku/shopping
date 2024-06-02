import React from "react";
import Breadcrumbs from "../breadcumbs/Breadcumbs";
import { Link } from "react-router-dom";
import { useRegisterContext } from "../../context/Context";

const crumbs = [
  { href: "/", label: "Home" },
  { href: "/wishlist", label: "Wishlist" },
];

const WishList = () => {
  const { favorites, removeFav, addCart } = useRegisterContext();

  return (
    <>
      <div className="bg-[#f7f8fb]">
        <div className="max-w-screen-xl mx-auto">
          <div className="container mx-auto p-7">
            <div className="flex justify-between sm:items-center flex-col sm:flex-row">
              <h3 className="text-3xl font-bold capitalize">Wishlist</h3>
              <Breadcrumbs crumbs={crumbs} />
            </div>
          </div>
        </div>
      </div>
      {favorites.length ? (
        <section className="py-10 px-7">
          <div className="max-w-screen-xl mx-auto">
            <div className="container mx-auto">
              <table className="text-center table-auto w-full">
                <thead className="">
                  <tr className="border-t border-b">
                    <th className="py-5 ps-16">Image</th>
                    <th className="py-5">Product</th>
                    <th className="py-5">Price</th>
                    <th className="py-5">Add to cart</th>
                    <th className="py-5">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {favorites.map((item) => {
                    return (
                      <tr className="border-t" key={item.id}>
                        <td className="h-[50px] w-[50px] ps-16">
                          <img
                            src={item.images}
                            alt={item.name}
                            className="w-full h-full"
                          />
                        </td>
                        <td className="py-5">
                          <Link to={`/product/${item.id}`}>{item.name}</Link>
                        </td>
                        <td>{item.price}</td>
                        <td className="py-5">
                          <Link
                            to={() => addCart(item.id)}
                            className="capitalize px-5 py-3 bg-redLight rounded-md text-white hover:opacity-0.5"
                          >
                            add to cart
                          </Link>
                        </td>
                        <td className="py-5">
                          <button
                            onClick={() => removeFav(item.id)}
                            className="capitalize px-5 py-3 bg-[#343a40] rounded-md text-white"
                          >
                            remove
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      ) : (
        "s"
      )}
    </>
  );
};

export default WishList;
