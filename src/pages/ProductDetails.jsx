import React from "react";
import { useParams, Link } from "react-router-dom";
import productsData from "../data/products.json";
import ProductCard from "../components/ProductCard";

const ProductDetails = () => {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="text-center py-20 text-gray-500">Product not found.</div>;
  }

  // Related products (same category, exclude self)
  const related = productsData.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row gap-10">
        <img
          src={product.image}
          alt={product.title}
          className="w-full md:w-1/2 h-80 object-cover rounded-lg shadow"
        />
        <div className="flex-1 flex flex-col">
          <h1 className="text-3xl font-bold mb-2 text-gray-800">{product.title}</h1>
          <div className="flex items-center mb-2">
            <span className="text-yellow-400 mr-1">★</span>
            <span className="text-gray-700 font-medium">{product.rating}</span>
            <span className="ml-4 text-sm text-gray-500">Category: {product.category}</span>
          </div>
          <div className="text-2xl font-bold text-blue-600 mb-4">${product.price.toFixed(2)}</div>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <div className="flex gap-4 mb-6">
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
              Add to Cart
            </button>
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      {/* Related Products */}
      {related.length > 0 && (
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`}>
                <ProductCard
                  image={p.image}
                  title={p.title}
                  price={p.price}
                  rating={p.rating}
                  onAddToCart={() => {}}
                />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails; 