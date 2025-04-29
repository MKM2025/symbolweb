'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ServicesHero({ fitMode = 'cover' }: { fitMode?: 'cover' | 'contain' }) {
  return (
    <section className="relative w-full min-h-[400px] aspect-[3/4] sm:aspect-[3/2] md:aspect-[32/15] max-h-screen md:max-h-[900px] landscape:aspect-[32/15] landscape:min-h-[300px] -mt-[1px]">
      <div className="absolute inset-0">
        <picture>
          {/* Mobile Portrait */}
          <source
            media="(max-width: 640px) and (orientation: portrait)"
            srcSet="/images/hero/hero_bpo_mobile.webp"
            type="image/webp"
          />
          <source
            media="(max-width: 640px) and (orientation: portrait)"
            srcSet="/images/hero/hero_bpo_mobile.jpg"
            type="image/jpeg"
          />
          {/* Desktop and Landscape */}
          <source
            srcSet="/images/hero/hero_bpo_desktop.webp"
            type="image/webp"
          />
          <Image
            src="/images/hero/hero_bpo_desktop.jpg"
            alt="IT Services"
            fill
            className={`object-${fitMode} object-[50%_35%]`}
            priority
            sizes="100vw"
          />
        </picture>
      </div>
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Enterprise IT Solutions & Services
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8">
            Comprehensive technology solutions tailored to transform your business with enhanced security, scalability, and efficiency.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/services/cybersecurity"
              className="bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-[#1a1a1a] px-6 md:px-8 py-2.5 md:py-3 rounded-lg hover:from-[#FCF6BA] hover:via-[#B38728] hover:to-[#BF953F] transition-all duration-300 font-semibold shadow-md text-sm md:text-base"
            >
              Explore Services
            </Link>
            <Link 
              href="/contact"
              className="bg-[#4a75a8] text-[#FFD700] px-6 md:px-8 py-2.5 md:py-3 rounded-lg hover:bg-[#5885bd] transition-colors font-semibold shadow-md text-sm md:text-base"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 