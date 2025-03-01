import React from "react";
import { Link } from "react-router-dom";

const BlogPost = ({ title, image, content }) => {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      {/* Hero Section */}
      <div className="relative w-full mb-8">
        <img
          src={image}
          alt={title}
          className="h-[50vh] md:h-[70vh] w-full object-cover rounded-xl"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white p-4 rounded-xl">
          <h1 className="text-3xl md:text-6xl font-bold">{title}</h1>
        </div>
      </div>

      {/* Blog Content */}
      <div className="prose prose-lg text-gray-800 mb-8">{content}</div>

      {/* Share Options */}
      <div className="flex flex-wrap gap-4 mb-8 text-lg">
        <a href="#" className="text-blue-600 hover:underline">📤 Facebook</a>
        <a href="#" className="text-blue-600 hover:underline">📤 Twitter</a>
        <a href="#" className="text-blue-600 hover:underline">📤 LinkedIn</a>
        <a href="#" className="text-blue-600 hover:underline">📤 WhatsApp</a>
      </div>

      {/* Related Blogs */}
      <h2 className="text-2xl md:text-3xl font-bold mb-4">📖 Related Blogs</h2>
      <ul className="list-disc pl-5 text-lg">
        <li><Link to="/blog/maximizing-small-spaces" className="text-blue-600 hover:underline">Maximizing Small Spaces</Link></li>
        <li><Link to="/blog/real-estate-investment-tips" className="text-blue-600 hover:underline">Real Estate Investment Tips</Link></li>
        <li><Link to="/blog/sustainable-living" className="text-blue-600 hover:underline">Sustainable Living in Modern Homes</Link></li>
      </ul>
    </div>
  );
};

export default BlogPost;
