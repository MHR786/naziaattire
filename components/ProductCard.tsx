'use client';

import { useState } from 'react';
import { Heart, Star, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleViewDetails = () => {
    // In a real app, this would navigate to product detail page
    alert(`Viewing details for: ${product.name}\n\nPrice: PKR ${product.price.toLocaleString()}\n\nDescription: ${product.description}`);
  };

  return (
    <div 
      className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Discount Badge */}
        {discount > 0 && (
          <div className="absolute top-3 left-3 bg-rose-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            -{discount}%
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-all duration-200 transform hover:scale-110"
        >
          <Heart 
            className={`h-4 w-4 transition-colors duration-200 ${
              isWishlisted ? 'text-rose-500 fill-rose-500' : 'text-gray-600'
            }`} 
          />
        </button>

        {/* View Details Button */}
        <div className={`absolute bottom-3 left-3 right-3 transform transition-all duration-300 ${
          isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <Button 
            onClick={handleViewDetails}
            className="w-full bg-rose-600 hover:bg-rose-700 text-white rounded-full py-2 text-sm font-medium transition-all duration-200 transform hover:scale-105"
          >
            <Eye className="h-4 w-4 mr-2" />
            View Details
          </Button>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4 space-y-2">
        {/* Rating */}
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className={`h-3 w-3 ${
                index < Math.floor(product.rating)
                  ? 'text-yellow-400 fill-yellow-400'
                  : 'text-gray-300'
              }`}
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">
            ({product.reviews})
          </span>
        </div>

        {/* Product Name */}
        <h3 className="font-medium text-gray-900 line-clamp-2 group-hover:text-rose-600 transition-colors duration-200">
          {product.name}
        </h3>

        {/* Price */}
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold text-rose-600">
            PKR {product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              PKR {product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Category */}
        <p className="text-xs text-gray-500 capitalize">
          {product.category.replace('-', ' ')}
        </p>
      </div>
    </div>
  );
}