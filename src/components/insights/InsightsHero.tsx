'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function InsightsHero({ fitMode = 'cover' }: { fitMode?: 'cover' | 'contain' }) {
  return (
    <section className="relative w-full min-h-[400px] aspect-[3/4] sm:aspect-[3/2] md:aspect-[32/15] max-h-screen md:max-h-[900px] landscape:aspect-[32/15] landscape:min-h-[300px] -mt-[1px]">
      <div className="absolute inset-0">
        <picture>
          {/* Mobile Portrait */}
          <source
            media="(max-width: 640px) and (orientation: portrait)"
            srcSet="/images/hero/hero_ai_desktop.webp"
            type="image/webp"
          />
          <source
            media="(max-width: 640px) and (orientation: portrait)"
            srcSet="/images/hero/hero_ai_desktop.jpg"
            type="image/jpeg"
          />
          {/* Desktop and Landscape */}
          <source
            srcSet="/images/hero/hero_ai_desktop.webp"
            type="image/webp"
          />
          <Image
            src="/images/hero/hero_ai_desktop.jpg"
            alt="Technology Insights"
            fill
            className={`object-${fitMode} object-[50%_35%]`}
            priority
            sizes="100vw"
          />
        </picture>
      </div>
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center portrait:justify-start portrait:pt-16">
        <div className="max-w-2xl ml-[10%] sm:ml-[10%] portrait:ml-6">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-2 sm:mb-4 md:mb-6 drop-shadow-lg">
            Technology Insights & Resources
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-4 sm:mb-6 md:mb-8 drop-shadow-md">
            Stay ahead with our latest technology insights, industry trends, and expert perspectives.
          </p>
          <div className="flex flex-col portrait:gap-3 flex-wrap landscape:flex-row landscape:gap-4">
            <Link 
              href="/insights/blogs"
              className="w-40 bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-[#1a1a1a] px-4 py-2 rounded-lg hover:from-[#FCF6BA] hover:via-[#B38728] hover:to-[#BF953F] transition-all duration-300 font-semibold shadow-md text-sm text-center"
            >
              Latest Insights
            </Link>
            <Link 
              href="/insights/case-studies"
              className="w-40 bg-[#4a75a8] text-[#FFD700] px-4 py-2 rounded-lg hover:bg-[#5885bd] transition-colors font-semibold shadow-md text-sm text-center"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 