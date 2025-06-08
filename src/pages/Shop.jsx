import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import productsData from "../data/products.json";

const getCategories = (products) => [
  "All",
  ...Array.from(new Set(products.map((p) => p.category))),
];

const sortOptions = [
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Rating", value: "rating" },
];

const PRODUCTS_PER_PAGE = 6;

const Shop = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");
  const [visible, setVisible] = useState(PRODUCTS_PER_PAGE);

  let filtered = productsData.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );
  if (category !== "All") {
    filtered = filtered.filter((p) => p.category === category);
  }
  if (sort === "price-asc") {
    filtered = filtered.slice().sort((a, b) => a.price - b.price);
  } else if (sort === "price-desc") {
    filtered = filtered.slice().sort((a, b) => b.price - a.price);
  } else if (sort === "rating") {
    filtered = filtered.slice().sort((a, b) => b.rating - a.rating);
  }

  const categories = getCategories(productsData);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Shop</h1>
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/3 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {/* Category Filter */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full md:w-1/4 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        {/* Sort Dropdown */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="w-full md:w-1/4 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Sort By</option>
          {sortOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.slice(0, visible).map((product) => (
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
      {visible < filtered.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setVisible((v) => v + PRODUCTS_PER_PAGE)}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Load More
          </button>
        </div>
      )}
      {filtered.length === 0 && (
        <div className="text-center text-gray-500 mt-12">No products found.</div>
      )}
    </div>
  );
};

export default Shop; 