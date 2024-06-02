import React from "react";
import { useRegisterContext } from "../../context/Context";

const Orders = () => {
  const { user } = useRegisterContext();

  if (!user || !user.orders || user.orders.length === 0) {
    return <div>No orders available.</div>;
  }

  const orders = user.orders;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Orders</h2>
      <div className="max-w-screen-xl">
        <table className="w-full text-left bg-white border rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Image</th>
              <th className="py-2 px-4 border-b">Product Name</th>
              <th className="py-2 px-4 border-b">Product ID</th>
              <th className="py-2 px-4 border-b">Count</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">Total Price</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) =>
              order.product.map((product, idx) => (
                <tr key={`${index}-${idx}`}>
                  <td className="py-2 px-4 border-b">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-sm p-1 border"
                    />
                  </td>
                  <td className="py-2 px-4 border-b">{product.name}</td>
                  <td className="py-2 px-4 border-b">{product.id}</td>
                  <td className="py-2 px-4 border-b">{product.count}</td>
                  <td className="py-2 px-4 border-b">{product.price}</td>
                  <td className="py-2 px-4 border-b">{order.price}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
