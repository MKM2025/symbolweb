'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
      <section className="relative w-screen h-[300px] flex items-center justify-start mb-8">
        <Image
          src="/images/clients/hero_clients_desktop.webp"
          alt="Our Clients"
          fill
          priority
          className="object-cover object-center z-0 hidden md:block"
          quality={100}
          sizes="100vw"
          unoptimized
        />
        <Image
          src="/images/clients/hero_clients_mobile.webp"
          alt="Our Clients"
          fill
          priority
          className="object-cover object-center z-0 md:hidden"
          quality={100}
          sizes="100vw"
          unoptimized
        />
        <div className="relative z-20 flex flex-col items-start justify-center w-full h-full text-left px-4 max-w-2xl mx-auto md:ml-48">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-3xl sm:text-4xl md:text-4xl font-bold text-[#FFF9C4] mb-4"
          >
            Our Valued Clients
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-base sm:text-lg md:text-lg text-[#FFF9C4] max-w-2xl"
          >
            Empowering businesses across industries with innovative technology and trusted solutions.
          </motion.p>
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