import React, { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "@components/breadcumbs/Breadcumbs";
import { TiShoppingCart } from "react-icons/ti";
import { useRegisterContext } from "../../context/Context";
import ShoppingCartBasket from "./ShoppingCartBasket";
import axios from "axios";

const crumbs = [
  { href: "/", label: "Home" },
  { href: "/", label: "Shopping Cart" },
];

const ShoppingCart = () => {
  const useTicket = (e) => {
    e.preventDefault();
    axios(`http://localhost:8080/tickets?title=${e.target[0].value}`).then(
      ({ data }) => setTicket(data)
    );
  };
  const { cart, ticket, setTicket } = useRegisterContext();
  return (
    <>
      <div className="bg-[#f7f8fb]">
        <div className="max-w-screen-xl mx-auto">
          <div className="container mx-auto p-7">
            <div className="flex justify-between sm:items-center flex-col sm:flex-row">
              <h3 className="text-3xl font-bold capitalize">Shopping Cart</h3>
              <Breadcrumbs crumbs={crumbs} />
            </div>
          </div>
        </div>
      </div>
      {cart.length ? (
        <section className="py-10 px-7">
          <div className="max-w-screen-xl mx-auto">
            <div className="container mx-auto">
              <div className="overflow-x-auto max-w-screen">
                <table className="text-center table-auto w-full">
                  <thead>
                    <tr className="border-t border-b">
                      <th className="py-5 ps-16">Image</th>
                      <th className="py-5">Product</th>
                      <th className="py-5">Price</th>
                      <th className="py-5">Quantity</th>
                      <th className="py-5">Total</th>
                      <th className="py-5">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item, _indx) => {
                      return <ShoppingCartBasket key={_indx} {...item} />;
                    })}
                  </tbody>
                </table>
              </div>
              <form onSubmit={useTicket} className="flex py-4">
                <input
                  type="text"
                  className="md:w-3/12 w-full h-full py-3 px-3 border outline-none"
                  placeholder="Enter your code..."
                />
                <button className="bg-redLight px-5 border text-white text-base capitalize ">
                  Apply Coupon
                </button>
              </form>
              <div className="w-full h-0.5 mt-8 bg-slate-400 relative z-0">
                <TiShoppingCart className="text-4xl absolute left-2/4 text-[#d9d9d9] bg-white -bottom-1/2 translate-y-1/2 -translate-x-1/2 w-16 h-12 z-10" />
              </div>
              <div className="md:w-2/4 w-full mt-20">
                <div className="border">
                  <div className="p-6">
                    <div className="flex flex-col">
                      <ul className="flex flex-col">
                        <li className="flex justify-between pb-3">
                          <span>Cart Totals</span>
                        </li>
                        <li className="flex border-t py-3 justify-between">
                          <span>Total</span>
                          <span className="font-semibold text-2xl">
                            {ticket.length
                              ? (
                                  cart.reduce(
                                    (acc, rec) => acc + rec.count * rec.price,
                                    0
                                  ) -
                                  (cart.reduce(
                                    (acc, rec) => acc + rec.count * rec.price,
                                    0
                                  ) /
                                    100) *
                                    ticket[0].sum
                                ).toFixed(2)
                              : cart
                                  .reduce(
                                    (acc, rec) => acc + rec.count * rec.price,
                                    0
                                  )
                                  .toFixed(2)}
                          </span>
                        </li>
                      </ul>
                      <Link
                        to="/checkout"
                        className="text-white mt-4 md:w-2/4 w-full text-center bg-redLight px-7 py-4 duration-200 hover:bg-black"
                      >
                        Proceed to Checkout
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="py-10 px-7">
          <div className="max-w-screen-xl mx-auto">
            <div className="container mx-auto">
              <div className="flex justify-center items-center">
                <h3>Your cart is empty!</h3>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ShoppingCart;
