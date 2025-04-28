'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ServicesHero({ fitMode = 'cover' }: { fitMode?: 'cover' | 'contain' }) {
  return (
    <section className="relative h-[500px] md:h-[600px] flex items-center">
      <Image
        src="/images/hero/hero_desktop.webp"
        alt="IT Services"
        fill
        className={`object-${fitMode}`}
        priority
      />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Enterprise IT Solutions & Services
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8">
            Comprehensive technology solutions tailored to transform your business with enhanced security, scalability, and efficiency.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/services/cybersecurity"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Explore Services
            </Link>
            <Link 
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 