'use client';

import Image from 'next/image';
import Link from 'next/link';

interface ServicesHeroProps {
  fitMode?: 'cover' | 'contain';
}

export default function ServicesHero({ fitMode = 'cover' }: ServicesHeroProps) {
  return (
    <section className="relative w-full min-h-[400px] aspect-[3/4] sm:aspect-[3/2] md:aspect-[32/15] max-h-screen md:max-h-[900px] landscape:aspect-[32/15] landscape:min-h-[300px] -mt-[1px] mb-0">
      <div className="absolute inset-0">
        <picture>
          {/* Mobile Portrait */}
          <source
            media="(max-width: 640px) and (orientation: portrait)"
            srcSet="/images/hero/hero_solutions_mobile.webp"
            type="image/webp"
          />
          <source
            media="(max-width: 640px) and (orientation: portrait)"
            srcSet="/images/hero/hero_solutions_mobile.jpg"
            type="image/jpeg"
          />
          {/* Mobile Landscape */}
          <source
            media="(max-width: 1024px) and (orientation: landscape)"
            srcSet="/images/hero/hero_solutions_desktop.webp"
            type="image/webp"
          />
          <source
            media="(max-width: 1024px) and (orientation: landscape)"
            srcSet="/images/hero/hero_solutions_desktop.jpg"
            type="image/jpeg"
          />
          {/* Desktop */}
          <source
            media="(min-width: 1025px)"
            srcSet="/images/hero/hero_solutions_desktop.webp"
            type="image/webp"
          />
          <source
            media="(min-width: 1025px)"
            srcSet="/images/hero/hero_solutions_desktop.jpg"
            type="image/jpeg"
          />
          <Image
            src="/images/hero/hero_solutions_desktop.jpg"
            alt="Solutions Hero Background"
            fill
            priority
            className={`object-${fitMode} object-center`}
            quality={100}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
          />
        </picture>
      </div>

      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center portrait:justify-start portrait:pt-16">
        <div className="max-w-xl ml-0 pl-4 sm:pl-8 portrait:ml-6 portrait:mt-0 landscape:mt-8 md:mt-[-150px]">
          <h1 className="text-2xl sm:text-3xl md:text-5xl landscape:!text-[min(4vw,2.5rem)] font-bold text-white mb-2 sm:mb-4 md:mb-6 landscape:mb-3 drop-shadow-lg landscape:leading-tight">
            Comprehensive Solutions
          </h1>
          <p className="text-base sm:text-lg md:text-xl landscape:!text-[min(2vw,1rem)] text-white mb-4 sm:mb-6 md:mb-8 landscape:mb-4 drop-shadow-md landscape:max-w-[90%]">
            Discover our range of innovative solutions designed to transform your business operations and drive growth.
          </p>
          <div className="flex flex-col portrait:gap-3 flex-wrap landscape:flex-row landscape:gap-4">
            <Link
              href="/services"
              className="w-48 landscape:w-auto landscape:px-6 landscape:!text-[min(1.8vw,0.875rem)] bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-[#1a1a1a] px-4 py-2 rounded-lg hover:from-[#FCF6BA] hover:via-[#B38728] hover:to-[#BF953F] transition-all duration-300 font-semibold shadow-md text-sm text-center"
            >
              Explore Our Solutions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 