'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-rose-600 mb-4">
              <Star className="h-5 w-5 fill-current" />
              <span className="text-sm font-medium">Premium Pakistani Fashion</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Elegant
              <span className="text-rose-600"> Pakistani</span>
              <br />
              Fashion for Women
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover our exquisite collection of traditional and contemporary Pakistani 
              women's clothing. From beautiful lawn suits to elegant formal wear, 
              celebrate your heritage with style.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <Button 
                  size="lg" 
                  className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Explore Collection
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-rose-600 text-rose-600 hover:bg-rose-50 px-8 py-3 rounded-full transition-all duration-300"
                >
                  Our Story
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">500+</p>
                <p className="text-sm text-gray-600">Products</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">10K+</p>
                <p className="text-sm text-gray-600">Happy Customers</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">5+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/hero-up.webp"
                alt="Elegant Pakistani woman in traditional outfit"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 bg-white rounded-full p-4 shadow-lg">
              <div className="text-center">
                <p className="text-2xl font-bold text-rose-600">PKR</p>
                <p className="text-sm text-gray-600">Best Prices</p>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-rose-600 text-white rounded-full p-4 shadow-lg">
              <div className="text-center">
                <p className="text-2xl font-bold">24/7</p>
                <p className="text-sm">Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}