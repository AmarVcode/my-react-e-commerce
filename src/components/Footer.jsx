import React from "react";
import { Link } from "react-router-dom";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Quick Links */}
        <div>
          <h3 className="font-bold mb-3 text-lg">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/shop" className="hover:text-white">Shop</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
          </ul>
        </div>
        {/* Newsletter */}
        <div className="md:col-span-2">
          <h3 className="font-bold mb-3 text-lg">Newsletter</h3>
          <p className="mb-3 text-gray-400">Sign up to get updates and special offers.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="px-3 py-2 rounded w-full sm:w-auto text-gray-900 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
        {/* Social Icons */}
        <div>
          <h3 className="font-bold mb-3 text-lg">Follow Us</h3>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:text-blue-400" aria-label="Facebook"><FiFacebook /></a>
            <a href="#" className="hover:text-blue-400" aria-label="Twitter"><FiTwitter /></a>
            <a href="#" className="hover:text-blue-400" aria-label="Instagram"><FiInstagram /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 text-center py-4 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} MyStore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer; 