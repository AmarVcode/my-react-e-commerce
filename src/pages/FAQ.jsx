import React from "react";

const FAQ = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h1>
      <div className="space-y-6">
        <div>
          <h2 className="font-semibold text-lg mb-2">How do I place an order?</h2>
          <p className="text-gray-700">Browse our products, add items to your cart, and proceed to checkout. It's that simple!</p>
        </div>
        <div>
          <h2 className="font-semibold text-lg mb-2">What payment methods do you accept?</h2>
          <p className="text-gray-700">We accept all major credit cards and PayPal.</p>
        </div>
        <div>
          <h2 className="font-semibold text-lg mb-2">How can I contact support?</h2>
          <p className="text-gray-700">You can reach us via the contact form or email us at support@mystore.com.</p>
        </div>
        <div>
          <h2 className="font-semibold text-lg mb-2">Can I track my order?</h2>
          <p className="text-gray-700">Order tracking is coming soon! Stay tuned for updates.</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ; 