import React from "react";
import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "Blogs",
    description: "Explore the latest trends in interior design for 2025.",
    image: "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/blog1.webp",
    link: "/blog/modern-interior-design-trends",
  },
  {
    id: 2,
    title: "Choosing the Right Property",
    description: "A guide to selecting the perfect property for your needs.",
    image: "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/choosing%20the%20right%20property.webp",
    link: "/blog/choosing-the-right-property",
  },
  {
    id: 3,
    title: "Maximizing Small Spaces",
    description: "Tips and tricks to make the most out of limited space in your home.",
    image: "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Maximizing%20Small%20Spaces.webp",
    link: "/blog/maximizing-small-spaces",
  },
  {
    id: 4,
    title: "Real Estate Investment Tips",
    description: "Expert advice for making smart real estate investments.",
    image: "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/real%20estate.webp",
    link: "/blog/real-estate-investment-tips",
  },
  {
    id: 5,
    title: "Sustainable Living in Modern Homes",
    description: "Learn how to create an eco-friendly home in 2025.",
    image: "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Sustainable%20living.webp",
    link: "/blog/sustainable-living",
  },
];

export default function Blog() {
  return (
    <div className="mx-auto">
      {/* Featured Post */}
      <section className="relative h-[270px] md:h-[95vh] flex items-center justify-center mt-10 pt-6 mb-5">
        {/* Lazy Loaded Hero Image */}
        <img 
          src="https://raw.githubusercontent.com/potterzwhealrealty/photos/main/blog1.webp"
          alt="Blogs"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        
        {/* Title */}
        <h1 className="relative text-3xl md:text-6xl text-white font-bold px-6 py-4 rounded-md">
          Blogs
        </h1>
      </section>

      {/* Recent Posts */}
      <div className="grid md:grid-cols-3 gap-6">
        {posts.slice(1).map((post) => (
          <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-40 md:h-50 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-gray-600 text-sm">{post.description}</p>
              <button            
                className="text-blue-950 hover:underline font-semibold"
              >
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
