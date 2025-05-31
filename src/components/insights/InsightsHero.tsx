'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface InsightsHeroProps {
  fitMode?: 'cover' | 'contain';
  isActive?: boolean;
}

export default function InsightsHero({ fitMode = 'cover', isActive }: InsightsHeroProps) {
  return (
    <section className="relative w-full h-screen min-h-screen max-h-screen overflow-hidden -mt-[1px] mb-0">
      {/* Background Image Container */}
      <div className="absolute inset-0 bg-[#0a192f]">
        <Image
          src="/images/hero/hero-insights-desktop.webp"
          alt="Insights Hero"
          fill
          priority
          className="object-cover object-center sm:block hidden"
          quality={90}
          sizes="(max-width: 768px) 100vw, 100vw"
        />
        {/* Mobile Image - Only loads on small screens */}
        <Image
          src="/images/hero/hero-insights-desktop.webp"
          alt="Insights Hero Mobile"
          fill
          priority
          className="object-cover object-center sm:hidden"
          quality={90}
          sizes="(max-width: 768px) 100vw, 100vw"
        />
      </div>

      {/* Responsive Flex/Grid Layout */}
      <div className="relative h-full w-full grid grid-rows-[90%_10%] md:flex md:flex-col md:justify-center md:absolute md:top-[25%] md:px-4 md:justify-start md:pt-0">
        {/* Upper row: CTA content */}
        <div className="flex flex-col items-center px-4 row-span-1 md:block h-full pt-2 md:pt-0">
          <div className="max-w-2xl ml-0 md:ml-12 pl-4 sm:pl-8 portrait:ml-6 portrait:mt-16 landscape:mt-8 lg:mt-[-180px] portrait:items-start portrait:text-left portrait:pr-8 w-full">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-[clamp(2rem,8vw,2.8rem)] sm:text-4xl md:text-6xl font-bold text-[#FFF9C4] mb-2 sm:mb-4 md:mb-6 drop-shadow-lg leading-tight w-full text-center md:text-left"
            >
              Latest Insights
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="text-[clamp(1.2rem,5vw,2rem)] sm:text-2xl md:text-xl text-[#FFF9C4] mb-2 sm:mb-3 md:mb-4 drop-shadow-md font-semibold w-full text-center md:text-left"
            >
              Explore in-depth case studies, transformative AI trends, and real-world implementations shaping the digital future.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 flex flex-row gap-4 justify-center md:justify-start w-full"
            >
              <Link
                href="/insights#blogs"
                className="inline-block bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-[#1a1a1a] px-6 py-3 rounded-lg text-base font-semibold font-sans shadow-lg hover:from-[#FFF9D4] hover:via-[#DBA23A] hover:to-[#E6B94F] hover:scale-105 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#E6B94F] active:scale-95 portrait:px-4 portrait:py-2 portrait:text-sm portrait:max-w-xs portrait:w-fit"
              >
                Read Our Blogs
              </Link>
              <Link
                href="/insights#case-studies"
                className="inline-block bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 text-[#FFF9C4] px-6 py-3 rounded-lg text-base font-semibold font-sans shadow-lg hover:from-blue-600 hover:via-blue-400 hover:to-blue-300 hover:scale-105 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 active:scale-95 portrait:px-4 portrait:py-2 portrait:text-sm portrait:max-w-xs portrait:w-fit"
              >
                Case Studies
              </Link>
            </motion.div>
          </div>
        </div>
        {/* Bottom row: sliding bar and down arrow (mobile only) */}
        <div className="flex flex-col items-center justify-end row-span-1 w-full h-full md:hidden">
          {/* These will be slotted in by RotatingHero, but you can add placeholders or ensure space is reserved here if needed */}
        </div>
      </div>
    </section>
  );
} 