'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const clientCategories = {
  Financial: [
    'NIB International Bank',
    'Awash International Bank',
    'Abay Bank',
    'Commercial Bank of Ethiopia',
    'Ethiopian Insurance Corporation',
    'Ethswitch',
    'Premier Switching Solutions (PSS)'
  ],
  Government: [
    'Ethiotelecom',
    'Ethiopian Agricultural Transformation',
    'Ministry of Revenue'
  ],
  Education: [
    'Addis Ababa University',
    'University of Gondar',
    'Jimma University',
    'Dilla University'
  ],
  Others: []
};

export default function ClientsPage() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px]">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/clients-hero.jpg"
            alt="Our Clients"
            fill
            priority
            className="object-cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        
        <div className="relative h-full container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
              Our Clients
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-100 mb-6 md:mb-8">
              Trusted by leading organizations across Ethiopia, delivering innovative solutions that drive success.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg hover:bg-blue-700 transition-colors text-sm md:text-base"
              >
                Get Started
              </Link>
              <Link
                href="#clients"
                className="bg-white text-blue-600 px-6 md:px-8 py-2 md:py-3 rounded-lg hover:bg-gray-100 transition-colors text-sm md:text-base"
              >
                View Clients
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {Object.entries(clientCategories).map(([category, clients]) => (
              clients.length > 0 && (
                <div key={category} className="space-y-8">
                  <h2 className="text-3xl font-semibold text-blue-900 border-b-2 border-blue-100 pb-4">
                    {category} Sector
                  </h2>
                  <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {clients.map((client) => (
                      <div 
                        key={client}
                        className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                      >
                        {/* Logo placeholder */}
                        <div className="h-32 bg-gray-50 rounded-lg mb-4 flex items-center justify-center">
                          <span className="text-gray-400">Logo Coming Soon</span>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 text-center">{client}</h3>
                      </div>
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 