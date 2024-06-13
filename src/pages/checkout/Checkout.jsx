import React from "react";
import { useRegisterContext } from "../../context/Context";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const { cart, ticket, setTicket, user, setCart, setUser } =
    useRegisterContext();
  const navigate = useNavigate();
  const { register, reset, handleSubmit } = useForm();

  const orderProduct = async (data) => {
    // Axios melumati gonderir orderse
    await axios.post("http://localhost:8080/orders", {
      ...data,
      product: cart,
      totalPrice: ticket.length
        ? (
            cart.reduce((acc, rec) => acc + rec.count * rec.price, 0) -
            (cart.reduce((acc, rec) => acc + rec.count * rec.price, 0) / 100) *
              ticket[0].sum
          ).toFixed(2)
        : cart.reduce((acc, rec) => acc + rec.count * rec.price, 0).toFixed(2),
      user: user,
      date: new Date(),
    });

    // Axios melumati gonderir userin daxiline

    await axios.patch(`http://localhost:8080/users/${user.id}`, {
      orders: [
        ...user.orders,
        {
          product: cart,
          price: ticket.length
            ? (
                cart.reduce((acc, rec) => acc + rec.count * rec.price, 0) -
                (cart.reduce((acc, rec) => acc + rec.count * rec.price, 0) /
                  100) *
                  ticket[0].sum
              ).toFixed(2)
            : cart
                .reduce((acc, rec) => acc + rec.count * rec.price, 0)
                .toFixed(2),
        },
      ],
      date: new Date(),
    });

    // Axios melumati gonderden sonra userin orderine yeniliyir
    await axios(`http://localhost:8080/users/${user.id}`).then((res) =>
      setUser(res.data)
    );
    toast.error("Order placed successfully!");

    reset();
    setCart([]);
    setTicket([]);
    navigate("/");
    localStorage.removeItem("pay");
  };

  return (
    <>
      <ToastContainer />
      <div className="max-w-screen-xl mx-auto">
        <div className="container mx-auto">
          <div className="px-6 py-10">
            <div className="flex flex-wrap md:flex-nowrap">
              <div className="md:w-7/12 w-full me-10">
                <form
                  onSubmit={handleSubmit(orderProduct)}
                  className="flex flex-col gap-y-4"
                >
                  <p className="text-3xl font-semibold pb-3">
                    Shipping information
                  </p>
                  <div>
                    <input
                      type="text"
                      className="w-full h-full py-3 px-3 border rounded-lg focus:shadow-md outline-0 duration-150"
                      placeholder="Full Name"
                      {...register("name", { required: true })}
                    />
                  </div>
                  <div className="flex gap-x-3">
                    <input
                      type="text"
                      className="w-2/3 h-full py-3 px-3 border rounded-lg focus:shadow-md outline-0 duration-150"
                      placeholder="Email"
                      {...register("email", { required: true })}
                    />
                    <input
                      type="number"
                      className="w-2/3 h-full py-3 px-3 border rounded-lg focus:shadow-md outline-0 duration-150"
                      placeholder="Phone"
                      {...register("phone", { required: true })}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="w-full h-full py-3 px-3 border rounded-lg focus:shadow-md outline-0 duration-150"
                      placeholder="Country"
                      {...register("country", { required: true })}
                    />
                  </div>
                  <div className="flex gap-x-3">
                    <input
                      type="text"
                      className="w-1/2 h-full py-3 px-3 border rounded-lg focus:shadow-md outline-0 duration-150"
                      placeholder="State"
                      {...register("state", { required: true })}
                    />
                    <input
                      type="text"
                      className="w-1/2 h-full py-3 px-3 border rounded-lg focus:shadow-md outline-0 duration-150"
                      placeholder="City"
                      {...register("city", { required: true })}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="w-full h-full py-3 px-3 border rounded-lg focus:shadow-md outline-0 duration-150"
                      placeholder="Address"
                      {...register("address", { required: true })}
                    />
                  </div>

                  <div className="mt-20">
                    <p className="text-3xl font-semibold pb-3">Pay</p>
                    <div className="flex flex-col gap-y-3">
                      <div className="relative">
                        <input
                          type="number"
                          placeholder="Card Number"
                          className="w-full h-full py-3 px-3 border rounded-lg focus:shadow-md outline-0 duration-150"
                          {...register("card number", { required: true })}
                        />
                      </div>
                      <div className="flex gap-x-3">
                        <div className="flex md:w-3/4 w-full">
                          <input
                            type="number"
                            className="w-full h-full py-3 px-3 border rounded-lg focus:shadow-md outline-0 duration-150"
                            placeholder="CVC"
                            {...register("CVC", { required: true })}
                          />
                        </div>
                        <div className="flex md:w-1/4 gap-x-3">
                          <input
                            type="number"
                            placeholder=""
                            className="w-full h-full py-3 px-3 border rounded-lg focus:shadow-md outline-0 duration-150"
                            {...register("month", { required: true })}
                          />
                          <input
                            type="number"
                            placeholder=""
                            className="w-full h-full py-3 px-3 border rounded-lg focus:shadow-md outline-0 duration-150"
                            {...register("day", { required: true })}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:justify-end">
                    <button
                      type="submit"
                      className="text-white p-3 rounded-lg bg-cyan-500 md:w-1/4 mb-5 md:mb-0 text-base "
                    >
                      Checkout
                    </button>
                  </div>
                </form>
              </div>
              <div className="md:w-5/12 w-full">
                <div>
                  <p>Product(s):</p>
                  <div className="flex flex-col">
                    {cart.map((item) => {
                      return (
                        <div
                          className="flex mt-4 justify-between border-b pb-5"
                          key={item.id}
                        >
                          <div className="flex gap-x-7">
                            <div className="flex w-28 h-28 items-center justify-center border rounded-md p-1">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <p className="text-sm">{item.name}</p>
                          </div>
                          <p className="text-sm">
                            {item.price}
                            {item.currency}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                  <ul className="flex flex-col mt-10">
                    <li className="flex py-3 justify-between">
                      <span>Summary</span>
                      <span className="text-sm font-bold">
                        {cart
                          .reduce((acc, rec) => acc + rec.count * rec.price, 0)
                          .toFixed(2)}
                      </span>
                    </li>
                    <li className="flex py-3 justify-between">
                      <span>Total</span>
                      <span className="font-bold text-2xl">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
