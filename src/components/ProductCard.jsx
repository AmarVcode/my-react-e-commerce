import React from 'react';
import { FiStar } from 'react-icons/fi';

export default function ProductCard({ image, title, price, rating, onAddToCart }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded mb-4"
        loading="lazy"
      />
      <h3 className="font-semibold text-lg text-gray-800 mb-1 line-clamp-1">{title}</h3>
      <div className="flex items-center mb-2">
        <span className="text-blue-600 font-bold text-xl mr-2">${price.toFixed(2)}</span>
        <span className="flex items-center text-yellow-500 text-sm ml-auto">
          <FiStar className="mr-1" />
          {rating}
        </span>
      </div>
      <button
        onClick={onAddToCart}
        className="mt-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded transition"
      >
        Add to Cart
      </button>
    </div>
  );
} 