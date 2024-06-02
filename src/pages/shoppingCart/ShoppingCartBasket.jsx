import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRegisterContext } from "../../context/Context";

const ShoppingCartBasket = ({ count, id, image, name, currency, price }) => {
  const { updateCart, removeCart } = useRegisterContext();
  const [counts, setCounts] = useState(count);

  const countMinus = () => {
    if (counts > 1) {
      const newCount = counts - 1;
      setCounts(newCount);
      updateCart(id, newCount);
    }
  };

  const countPlus = () => {
    const newCount = counts + 1;
    setCounts(newCount);
    updateCart(id, newCount);
  };

  const handleRemove = () => {
    removeCart(id);
  };

  return (
    <tr className="border-b">
      <td className="w-[120px] ps-16">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </td>
      <td className="py-5">
        <Link
          to={`/product/${id}`}
          className="hover:text-redLight duration-200"
        >
          {name}
        </Link>
      </td>
      <td>
        {price}
        <span>{currency}</span>
      </td>
      <td className="py-5">
        <div className="flex gap-x-5 items-center justify-center my-5">
          <div className="flex gap-x-5 items-center">
            <button
              onClick={countMinus}
              className="w-8 h-8 bg-slate-300 text-white border rounded-full"
            >
              -
            </button>
            <input
              value={counts}
              type="number"
              className="p-1 w-12 h-10 border text-center"
              readOnly
            />
            <button
              onClick={countPlus}
              className="w-8 h-8 bg-slate-300 text-white border rounded-full"
            >
              +
            </button>
          </div>
        </div>
      </td>
      <td className="py-5 font-semibold text-base">
        {(price * counts).toFixed(2)}
        {currency}
      </td>
      <td className="py-5">
        <button
          onClick={handleRemove}
          className="capitalize px-5 py-3 bg-[#343a40] rounded-md text-white"
        >
          remove
        </button>
      </td>
    </tr>
  );
};

export default ShoppingCartBasket;
