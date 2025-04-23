'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-[500px] md:h-[600px]">
      <div className="absolute inset-0">
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet="/images/hero/hero_desktop.webp"
          />
          <source
            media="(max-width: 767px)"
            srcSet="/images/hero/hero_mobile.webp"
          />
          <Image
            src="/images/hero/hero_desktop.jpg"
            alt="Hero Background"
            fill
            priority
            className="object-cover"
            quality={100}
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>

      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Empowering Digital Transformation
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8">
            Leading ICT solutions provider in Ethiopia, delivering innovative technology solutions for business success.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 