'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function InsightsHero({ fitMode = 'cover' }: { fitMode?: 'cover' | 'contain' }) {
  return (
    <section className="relative h-[500px] md:h-[600px] flex items-center">
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero_desktop.webp"
          alt="Technology Insights"
          fill
          className={`object-${fitMode}`}
          priority
        />
      </div>
      <div className="relative container mx-auto px-4">
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
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Read Latest Insights
            </Link>
            <Link 
              href="/insights/case-studies"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 