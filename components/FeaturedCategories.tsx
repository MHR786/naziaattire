'use client';

import Link from 'next/link';

const categories = [
  {
    id: "lawn-suits",
    name: "Lawn Suits",
    image: "/images/category-lawn-suits.jpg",
    description: "Premium cotton lawn suits perfect for summer",
  },
  {
    id: "formal-wear",
    name: "Formal Wear",
    image: "/images/category-formal-wear.webp",
    description: "Elegant formal dresses for special occasions",
  },
  {
    id: "casual-wear",
    name: "Casual Wear",
    image: "/images/category-casual-wear.jpg",
    description: "Comfortable everyday wear with style",
  },
  {
    id: "party-wear",
    name: "Party Wear",
    image: "/images/category-party-wear.jpg",
    description: "Stunning outfits for celebrations",
  },
  {
    id: "winter-collection",
    name: "Winter Collection",
    image: "/images/category-winter-collection.jpg",
    description: "Warm and stylish winter wear",
  },
  {
    id: "accessories",
    name: "Accessories",
    image: "/images/category-accessories.jpg",
    description: "Complete your look with our accessories",
  },
];

export default function FeaturedCategories() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated collection of Pakistani women's fashion essentials
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href="/products"
              className="group relative aspect-square rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="text-white font-semibold text-sm sm:text-base text-center mb-1">
                  {category.name}
                </h3>
                <p className="text-white/80 text-xs text-center hidden sm:block">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}