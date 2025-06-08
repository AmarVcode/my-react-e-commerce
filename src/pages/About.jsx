import React from "react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">About Us</h1>
      <p className="mb-8 text-gray-700 text-lg">
        Welcome to MyStore! We are passionate about bringing you the best products at the best prices. Our team is dedicated to providing a seamless shopping experience and top-notch customer service.
      </p>
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
          <div className="w-20 h-20 bg-gray-200 rounded-full mb-3" />
          <div className="font-bold">Alex Smith</div>
          <div className="text-gray-500 text-sm">Founder & CEO</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
          <div className="w-20 h-20 bg-gray-200 rounded-full mb-3" />
          <div className="font-bold">Jamie Lee</div>
          <div className="text-gray-500 text-sm">Lead Designer</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
          <div className="w-20 h-20 bg-gray-200 rounded-full mb-3" />
          <div className="font-bold">Taylor Kim</div>
          <div className="text-gray-500 text-sm">Marketing Head</div>
        </div>
      </div>
    </div>
  );
};

export default About; 