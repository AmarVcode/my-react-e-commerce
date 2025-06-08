import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/src/data/products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 6)));
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Welcome to MyStore</h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">Discover the best products at unbeatable prices. Shop the latest trends and essentials for your lifestyle.</p>
        <Link
          to="/shop"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg text-lg transition"
        >
          Shop Now
        </Link>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              rating={product.rating}
              onAddToCart={() => {}}
            />
          ))}
        </div>
      </section>
    </div>
  );
} 