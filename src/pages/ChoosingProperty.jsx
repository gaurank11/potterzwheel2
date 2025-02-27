import React from "react";

export default function ChoosingProperty() {
  return (
    <div className=" mx-auto py-8 px-6">
      <h1 className="text-3xl font-bold mb-4 py-8">Choosing the Right Property</h1>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjn7mbWlHkzGfpy2lawCw1ugkHUo364wFJNg&s"
        alt="Choosing the Right Property"
        className="w-full h-64 object-cover mb-4 rounded-lg"
      />
      <p className="text-gray-700 mb-4">
        Selecting the perfect property requires careful consideration of several factors, including location, budget, and long-term value. Whether you're a first-time homebuyer or a seasoned investor, making an informed decision is crucial.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Key Factors to Consider</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Location:</strong> Choose a property in a desirable neighborhood with good connectivity and amenities.</li>
        <li><strong>Budget:</strong> Ensure the property fits within your financial plan, including additional costs like maintenance and taxes.</li>
        <li><strong>Future Value:</strong> Research the market trends and potential appreciation of the area.</li>
      </ul>
      <p className="text-gray-700">
        Taking time to analyze these factors can help you make a confident decision when investing in a property.
      </p>
    </div>
  );
}
