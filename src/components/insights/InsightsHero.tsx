'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function InsightsHero({ fitMode = 'cover' }: { fitMode?: 'cover' | 'contain' }) {
  return (
    <section className="relative w-full h-[500px] md:h-[600px]">
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero_desktop.webp"
          alt="Technology Insights"
          fill
          className={`object-${fitMode} object-[50%_35%]`}
          priority
          sizes="100vw"
        />
      </div>
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Technology Insights & Resources
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8">
            Stay ahead with our latest technology insights, industry trends, and expert perspectives.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/insights/blogs"
              className="bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-[#1a1a1a] px-6 md:px-8 py-2.5 md:py-3 rounded-lg hover:from-[#FCF6BA] hover:via-[#B38728] hover:to-[#BF953F] transition-all duration-300 font-semibold shadow-md text-sm md:text-base"
            >
              Read Latest Insights
            </Link>
            <Link 
              href="/insights/case-studies"
              className="bg-[#4a75a8] text-[#FFD700] px-6 md:px-8 py-2.5 md:py-3 rounded-lg hover:bg-[#5885bd] transition-colors font-semibold shadow-md text-sm md:text-base"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 