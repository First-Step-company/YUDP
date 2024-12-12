'use client';
import Navbar from './components/Navbar';
import { Services } from '@/data/data';
import { CardDefault } from './components/card';
import Link from 'next/link';
import { Footer } from './components/footer';
import { useState } from 'react';

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Extract unique categories and include "Popular" in the filter
  const categories = ['All', 'Popular', ...new Set(Services.map((service) => service.categorie))];

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredServices =
    selectedCategory === 'All'
      ? Services
      : selectedCategory === 'Popular'
      ? Services.filter((service) => service.popular)
      : Services.filter((service) => service.categorie === selectedCategory);

  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:py-12 lg:py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filter Panel */}
            <div className="col-span-1">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Filter by</h3>
              <div className="space-y-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleFilterChange(category)}
                    className={`text-black block w-full text-left px-4 py-2 rounded-lg ${
                      selectedCategory === category ? 'bg-gray-200' : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Services Section */}
            <div className="col-span-3">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Our Services</h2>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredServices.map((service) => (
                  <Link key={service.id} href={`/services/${service.id - 1}`}>
                    <CardDefault
                      service={service}
                      className="h-full w-full p-4 rounded-lg border shadow-sm"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
