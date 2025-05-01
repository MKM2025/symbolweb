'use client';

import Image from 'next/image';
import Link from 'next/link';

interface InsightsHeroProps {
  fitMode?: 'cover' | 'contain';
}

export default function InsightsHero({ fitMode = 'cover' }: InsightsHeroProps) {
  return (
    <section className="relative w-full min-h-[400px] aspect-[3/4] sm:aspect-[3/2] md:aspect-[32/15] max-h-screen md:max-h-[900px] landscape:aspect-[32/15] landscape:min-h-[300px] -mt-[1px] mb-0">
      <div className="absolute inset-0">
        <picture>
          {/* Mobile Portrait */}
          <source
            media="(max-width: 640px) and (orientation: portrait)"
            srcSet="/images/hero/hero_insights_mobile.webp"
            type="image/webp"
          />
          <source
            media="(max-width: 640px) and (orientation: portrait)"
            srcSet="/images/hero/hero_insights_mobile.jpg"
            type="image/jpeg"
          />
          {/* Mobile Landscape */}
          <source
            media="(max-width: 1024px) and (orientation: landscape)"
            srcSet="/images/hero/hero_insights_desktop.webp"
            type="image/webp"
          />
          <source
            media="(max-width: 1024px) and (orientation: landscape)"
            srcSet="/images/hero/hero_insights_desktop.jpg"
            type="image/jpeg"
          />
          {/* Desktop */}
          <source
            media="(min-width: 1025px)"
            srcSet="/images/hero/hero_insights_desktop.webp"
            type="image/webp"
          />
          <source
            media="(min-width: 1025px)"
            srcSet="/images/hero/hero_insights_desktop.jpg"
            type="image/jpeg"
          />
          <Image
            src="/images/hero/hero_insights_desktop.jpg"
            alt="Technology Insights"
            fill
            priority
            className={`object-${fitMode} object-center`}
            quality={100}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
          />
        </picture>
      </div>

      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center portrait:justify-start portrait:pt-16 landscape:items-start">
        <div className="max-w-2xl ml-0 pl-4 sm:pl-8 portrait:ml-6 portrait:mt-0 landscape:mt-8 md:mt-[-150px] landscape:max-w-[45%] landscape:ml-4">
          <h1 className="text-2xl sm:text-3xl md:text-6xl landscape:!text-[min(4.5vw,3rem)] font-bold text-[#0a2a4a] mb-2 sm:mb-4 md:mb-6 landscape:mb-3 drop-shadow-lg landscape:leading-tight landscape:text-left">
            AI-Driven ICT Solutions
          </h1>
          <p className="text-base sm:text-lg md:text-xl landscape:!text-[min(2.2vw,1.2rem)] text-[#0a2a4a] mb-4 sm:mb-6 md:mb-8 landscape:mb-4 drop-shadow-md landscape:max-w-[90%] landscape:text-left">
            Stay ahead with our latest technology insights, industry trends, and expert perspectives.
          </p>
          <div className="flex flex-col sm:flex-col portrait:flex-row portrait:gap-3 flex-wrap landscape:flex-row landscape:gap-4">
            <Link 
              href="/contact"
              className="w-auto sm:w-48 landscape:w-auto landscape:px-6 landscape:!text-[min(1.8vw,0.875rem)] bg-[#0a2a4a] text-[#FFD700] px-4 py-2 rounded-lg hover:bg-[#0a2a4a]/90 transition-all duration-300 font-semibold shadow-md text-base text-center"
            >
              Latest Blogs
            </Link>
            <Link 
              href="/insights/blogs"
              className="w-auto sm:w-48 landscape:w-auto landscape:px-6 landscape:!text-[min(1.8vw,0.875rem)] bg-gradient-to-r from-[#E6B94F] via-[#FFF9D4] to-[#DBA23A] text-[#0a2a4a] px-4 py-2 rounded-lg hover:from-[#FFF9D4] hover:via-[#DBA23A] hover:to-[#E6B94F] transition-all duration-300 font-semibold shadow-md text-base text-center"
            >
              Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 