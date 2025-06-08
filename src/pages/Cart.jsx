import React, { useState } from "react";
import productsData from "../data/products.json";

// Dummy initial cart for demo
const initialCart = [
  { id: 1, quantity: 1 },
  { id: 3, quantity: 2 },
];

const Cart = () => {
  const [cart, setCart] = useState(initialCart);

  const getProduct = (id) => productsData.find((p) => p.id === id);

  const handleQuantity = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + delta) }
            : item
        )
    );
  };

  const handleRemove = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => {
    const product = getProduct(item.id);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Your Cart</h1>
      {cart.length === 0 ? (
        <div className="text-center text-gray-500 py-20">Your cart is empty.</div>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => {
            const product = getProduct(item.id);
            if (!product) return null;
            return (
              <div
                key={item.id}
                className="flex items-center gap-6 bg-white rounded-lg shadow p-4"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h2 className="font-semibold text-lg mb-1">{product.title}</h2>
                  <div className="text-gray-600 mb-2">${product.price.toFixed(2)}</div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleQuantity(item.id, -1)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="px-3">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantity(item.id, 1)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500 hover:text-red-700 font-bold"
                >
                  Remove
                </button>
              </div>
            );
          })}
          <div className="flex justify-between items-center mt-8">
            <div className="text-xl font-bold">Total: ${total.toFixed(2)}</div>
            <button className="bg-blue-600 text-white px-8 py-2 rounded hover:bg-blue-700 transition-colors">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart; 