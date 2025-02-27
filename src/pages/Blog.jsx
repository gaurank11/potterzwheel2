import React from "react";
import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "Modern Interior Design Trends",
    description: "Explore the latest trends in interior design for 2025.",
    image: "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/blog1.webp",
    link: "/blog/modern-interior-design-trends",
  },
  {
    id: 2,
    title: "Choosing the Right Property",
    description: "A guide to selecting the perfect property for your needs.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjn7mbWlHkzGfpy2lawCw1ugkHUo364wFJNg&s",
    link: "/blog/choosing-the-right-property",
  },
  {
    id: 3,
    title: "Maximizing Small Spaces",
    description: "Tips and tricks to make the most out of limited space in your home.",
    image: "https://assets.architecturaldigest.in/photos/631b0636ac6d3139777df715/16:9/w_2560%2Cc_limit/6%2520design%2520hacks%2520for%2520a%2520small%2520home%2520that%2520you%2520need%2520to%2520know.jpg",
    link: "/blog/maximizing-small-spaces",
  },
  {
    id: 4,
    title: "Real Estate Investment Tips",
    description: "Expert advice for making smart real estate investments.",
    image: "https://example.com/investment.jpg",
    link: "/blog/real-estate-investment-tips",
  },
  {
    id: 5,
    title: "Sustainable Living in Modern Homes",
    description: "Learn how to create an eco-friendly home in 2025.",
    image: "https://example.com/sustainable.jpg",
    link: "/blog/sustainable-living",
  },
];

export default function Blog() {
  return (
    <div className="mx-auto py-8">
      {/* Featured Post */}
      <div className="relative w-full mb-8">
        <img
          src={posts[0].image}
          alt={posts[0].title}
          className="h-[50vh] md:h-[70vh] w-full object-cover bg-center flex items-center justify-center"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 text-white p-4 rounded-xl">
          <h2 className="text-2xl font-bold">{posts[0].title}</h2>
          <p className="text-sm text-gray-200">{posts[0].description}</p>
      
        </div>
      </div>

      {/* Recent Posts */}
      <div className="grid md:grid-cols-3 gap-6">
        {posts.slice(1).map((post) => (
          <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-gray-600 text-sm">{post.description}</p>
              <Link
                to={post.link}
                className="text-blue-500 hover:underline font-semibold"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
