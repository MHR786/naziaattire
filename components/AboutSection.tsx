'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Heart, Award, Users } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Celebrating Pakistani
              <span className="text-rose-600"> Heritage</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Nazia's Attire, we believe in honoring the rich tradition of Pakistani 
              fashion while embracing contemporary style. Our collection features 
              carefully crafted pieces that celebrate the beauty and elegance of 
              Pakistani women.
            </p>
            <p className="text-gray-600">
              From traditional lawn suits perfect for everyday wear to stunning 
              formal pieces for special occasions, each garment is designed with 
              attention to detail and quality craftsmanship.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="h-6 w-6 text-rose-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Handcrafted</h3>
                <p className="text-sm text-gray-600">Made with love and care</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="h-6 w-6 text-rose-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Premium Quality</h3>
                <p className="text-sm text-gray-600">Finest fabrics and materials</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-rose-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Community</h3>
                <p className="text-sm text-gray-600">Supporting local artisans</p>
              </div>
            </div>

            <Link href="/about">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-rose-600 text-rose-600 hover:bg-rose-50 px-8 py-3 rounded-full"
              >
                Learn More About Us
              </Button>
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/about.jpg"
                alt="Pakistani traditional craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 bg-rose-600 text-white rounded-2xl p-6 shadow-lg">
              <div className="text-center">
                <p className="text-2xl font-bold">5+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}