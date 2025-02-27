import React from "react";

export default function RealEstateInvestment() {
  return (
    <div className=" mx-auto py-8 px-6">
      <h1 className="text-3xl font-bold mb-4">Real Estate Investment Tips</h1>
      <img
        src="https://www.realestate.com.au/blog/images/800x450-fit,progressive/2017/03/28104903/GettyImages-525548907.jpg"
        alt="Real Estate Investment"
        className="w-full h-64 object-cover mb-4 rounded-lg"
      />
      <p className="text-gray-700 mb-4">
        Investing in real estate is one of the most reliable ways to build wealth, but it requires careful planning and knowledge of the market.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Essential Investment Tips</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Location Matters:</strong> A property in a prime location will appreciate faster and attract better rental income.</li>
        <li><strong>Financial Planning:</strong> Consider financing options, rental yield, and potential risks before investing.</li>
        <li><strong>Long-Term Vision:</strong> Real estate investment is not a short-term game. Plan for future growth and market fluctuations.</li>
      </ul>
      <p className="text-gray-700">
        By following these guidelines, you can make informed decisions and maximize returns on your real estate investments.
      </p>
    </div>
  );
}
