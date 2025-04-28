'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection({ fitMode = 'cover' }: { fitMode?: 'cover' | 'contain' }) {
  return (
    <section className="relative w-full aspect-[16/9] md:aspect-[21/9] min-h-[320px] md:min-h-[500px] max-h-[800px]">
      <div className="absolute inset-0">
        <picture>
          {/* Desktop version */}
          <source
            media="(min-width: 768px)"
            srcSet="/images/hero/hero_desktop_5.webp"
            type="image/webp"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/images/hero/hero_desktop_5.jpg"
            type="image/jpeg"
          />
          {/* Mobile version */}
          <source
            media="(max-width: 767px)"
            srcSet="/images/hero/hero_mobile_3.webp"
            type="image/webp"
          />
          <source
            media="(max-width: 767px)"
            srcSet="/images/hero/hero_mobile_3.jpg"
            type="image/jpeg"
          />
          <Image
            src="/images/hero/hero_desktop_5.webp"
            alt="Hero Background"
            fill
            priority
            className={`object-${fitMode} object-[50%_35%]`}
            quality={100}
            sizes="100vw"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />
      </div>

      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
        <div className="max-w-2xl pt-8 md:pt-0">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 drop-shadow-lg">
            Empowering Digital Transformation
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-6 md:mb-8 drop-shadow-md">
            Leading ICT solutions provider in Ethiopia, delivering innovative technology solutions for business success.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-[#1a1a1a] px-6 md:px-8 py-2.5 md:py-3 rounded-lg hover:from-[#FCF6BA] hover:via-[#B38728] hover:to-[#BF953F] transition-all duration-300 font-semibold shadow-md text-sm md:text-base"
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="bg-[#4a75a8] text-[#FFD700] px-6 md:px-8 py-2.5 md:py-3 rounded-lg hover:bg-[#5885bd] transition-colors font-semibold shadow-md text-sm md:text-base"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 