'use client';

import Image from 'next/image';
import Link from 'next/link';
import NetworkAnimation from './NetworkAnimation';

interface HeroSectionProps {
  fitMode?: 'cover' | 'contain';
}

export default function HeroSection({ fitMode = 'cover' }: HeroSectionProps) {
  return (
    <section className="relative w-full min-h-[400px] aspect-[3/4] sm:aspect-[3/2] md:aspect-[32/15] max-h-screen md:max-h-[900px] landscape:aspect-[32/15] landscape:min-h-[300px] -mt-[1px] mb-0">
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
          {/* Mobile Landscape */}
          <source
            media="(max-width: 1024px) and (orientation: landscape)"
            srcSet="/images/hero/hero_bpo_desktop.webp"
            type="image/webp"
          />
          <source
            media="(max-width: 1024px) and (orientation: landscape)"
            srcSet="/images/hero/hero_bpo_desktop.jpg"
            type="image/jpeg"
          />
          {/* Desktop */}
          <source
            media="(min-width: 1025px)"
            srcSet="/images/hero/hero_bpo_desktop.webp"
            type="image/webp"
          />
          <source
            media="(min-width: 1025px)"
            srcSet="/images/hero/hero_bpo_desktop.jpg"
            type="image/jpeg"
          />
          <Image
            src="/images/hero/hero_bpo_desktop.jpg"
            alt="Hero Background"
            fill
            priority
            className={`object-${fitMode} object-center landscape:object-top`}
            quality={100}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
          />
        </picture>
      </div>

      <NetworkAnimation />

      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center portrait:justify-start portrait:pt-16">
        <div className="max-w-2xl ml-0 pl-4 sm:pl-8 portrait:ml-6 landscape:mt-[-100px] md:mt-[-150px]">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-2 sm:mb-4 md:mb-6 drop-shadow-lg max-w-lg">
            BPO Across the Globe
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white mb-4 sm:mb-6 md:mb-8 drop-shadow-md max-w-xl">
            Empowering businesses worldwide with scalable, efficient, and cost-effective BPO solutions. From customer support to back-office operations, we provide 24/7 services that drive growth and innovation.
          </p>
          <div className="flex flex-col portrait:gap-3 flex-wrap landscape:flex-row landscape:gap-4">
            <Link
              href="/bpo"
              className="w-48 bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-[#1a1a1a] px-4 py-2 rounded-lg hover:from-[#FCF6BA] hover:via-[#B38728] hover:to-[#BF953F] transition-all duration-300 font-semibold shadow-md text-sm text-center"
            >
              Our BPO Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 