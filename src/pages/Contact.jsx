import React from "react";

const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <form className="bg-white rounded-lg shadow p-6 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
        {/* Static Info & Map */}
        <div className="flex flex-col gap-6 justify-between">
          <div>
            <h2 className="font-semibold text-lg mb-2">Contact Info</h2>
            <p className="text-gray-700 mb-1">Email: support@mystore.com</p>
            <p className="text-gray-700 mb-1">Phone: (123) 456-7890</p>
            <p className="text-gray-700">123 Main St, City, Country</p>
          </div>
          <div className="w-full h-40 bg-gray-200 rounded flex items-center justify-center text-gray-500">
            Google Maps Placeholder
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 