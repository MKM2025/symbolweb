'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ServicesHero() {
  return (
    <section className="relative h-[400px] sm:h-[500px] md:h-[600px] flex items-center">
      <Image
        src="/images/hero/services-hero.jpg"
        alt="IT Services"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Enterprise IT Solutions & Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-100 mb-6 sm:mb-8">
            Comprehensive technology solutions tailored to transform your business with enhanced security, scalability, and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link 
              href="/services/cybersecurity"
              className="bg-blue-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors text-center"
            >
              Explore Services
            </Link>
            <Link 
              href="/contact"
              className="bg-white text-blue-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-gray-100 transition-colors text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 