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

      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center portrait:justify-start portrait:pt-16 landscape:items-start">
        <div className="max-w-xl ml-0 pl-4 sm:pl-8 portrait:ml-6 portrait:mt-0 landscape:mt-8 md:mt-[-150px] landscape:max-w-[45%] landscape:ml-4 portrait:items-start portrait:text-left portrait:pr-8">
          <h1 className="text-2xl sm:text-3xl md:text-6xl landscape:!text-[min(4.5vw,3rem)] font-bold text-[#FFF9C4] mb-2 sm:mb-4 md:mb-6 landscape:mb-3 drop-shadow-lg landscape:leading-tight landscape:text-left">
            Comprehensive Solutions
          </h1>
          <p className="text-base sm:text-lg md:text-xl landscape:!text-[min(2.2vw,1.2rem)] text-[#FFF9C4] mb-4 sm:mb-6 md:mb-8 landscape:mb-4 drop-shadow-md landscape:max-w-[90%] landscape:text-left">
            Discover our range of innovative solutions designed to transform your business operations and drive growth.
          </p>
          <div className="flex flex-col portrait:gap-3 flex-wrap landscape:flex-row landscape:gap-4">
            <Link
              href="/services#scroll-target"
              className="w-48 landscape:w-auto landscape:px-6 landscape:!text-[min(1.8vw,0.875rem)] bg-gradient-to-r from-[#E6B94F] via-[#FFF9D4] to-[#DBA23A] text-[#1a1a1a] px-4 py-2 rounded-lg font-semibold shadow-md text-sm text-center cursor-pointer transition-all duration-300 hover:from-[#FFF9D4] hover:via-[#DBA23A] hover:to-[#E6B94F] hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#E6B94F] active:scale-95 z-10"
            >
              Explore Our Solutions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 