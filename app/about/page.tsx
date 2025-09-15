'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart, Award, Users, Sparkles } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                About
                <span className="text-rose-600"> Nazia's Attire</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Founded with a passion for celebrating Pakistani women's elegance, Nazia Attire 
                brings you the finest collection of traditional and contemporary fashion pieces.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our journey began in Karachi with a simple vision: to make every Pakistani woman 
                feel confident and beautiful in clothes that honor our rich cultural heritage 
                while embracing modern style sensibilities.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Nazia Attire founder"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">What drives us every day</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Passion</h3>
              <p className="text-gray-600">
                Every piece is crafted with love and attention to detail, 
                reflecting our passion for Pakistani fashion.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Quality</h3>
              <p className="text-gray-600">
                We source the finest fabrics and work with skilled artisans 
                to ensure exceptional quality in every garment.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Community</h3>
              <p className="text-gray-600">
                Supporting local artisans and celebrating the rich 
                tradition of Pakistani craftsmanship.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Elegance</h3>
              <p className="text-gray-600">
                Creating timeless pieces that make every woman 
                feel elegant and confident.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
          </div>
          
          <div className="prose prose-lg mx-auto text-gray-600">
            <p>
              Nazia's Attire was born from a dream to bridge the gap between traditional Pakistani 
              fashion and contemporary style. Founded by Nazia in 2020, our brand started 
              as a small boutique in Rawalpind's bustling fashion district.
            </p>
            
            <p>
              Growing up surrounded by the vibrant colors and intricate patterns of Pakistani 
              textiles, Nazia developed a deep appreciation for our cultural heritage. After 
              studying fashion design and working with renowned designers across Pakistan, 
              she decided to create a brand that would honor traditional craftsmanship while 
              appealing to modern sensibilities.
            </p>
            
            <p>
              Today, Nazia's Attire has grown into a beloved brand known for its exquisite 
              collection of lawn suits, formal wear, casual outfits, and accessories. We work 
              directly with skilled artisans from across Pakistan, ensuring that each piece 
              tells a story of our rich cultural heritage.
            </p>
            
            <p>
              Our commitment extends beyond fashion. We believe in empowering women through 
              beautiful clothing that makes them feel confident and proud of their Pakistani 
              identity. Every purchase supports local artisans and contributes to preserving 
              traditional crafts for future generations.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}