'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedCategories from '@/components/FeaturedCategories';
import FeaturedProducts from '@/components/FeaturedProducts';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
      <Header />
      <Hero />
      <FeaturedCategories />
      <FeaturedProducts />
      <AboutSection />
      <Footer />
    </div>
  );
}