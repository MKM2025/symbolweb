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
    <section className="relative w-full min-h-[400px] aspect-[3/4] sm:aspect-[3/2] md:aspect-[32/15] max-h-screen md:max-h-[900px] landscape:aspect-[32/15] landscape:min-h-[300px] -mt-[1px] mb-0">
      {/* Background Image Container */}
      <div className="absolute inset-0 bg-[#0a192f]">
        <Image
          src="/images/hero/hero_insights_desktop.webp"
          alt="Insights Hero"
          fill
          priority
          className="object-cover object-center"
          quality={90}
          sizes="100vw"
        />
        {/* Mobile Image - Only loads on small screens */}
        <Image
          src="/images/hero/hero_insights_mobile.webp"
          alt="Insights Hero Mobile"
          fill
          priority
          className="object-cover object-center sm:hidden"
          quality={90}
          sizes="100vw"
        />
        {/* Optimized gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f]/60 via-[#1a365d]/40 to-[#2d3748]/30" />
      </div>

      {/* Content Container */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center portrait:justify-start portrait:pt-16 landscape:items-start">
        <div className="max-w-2xl ml-0 pl-4 sm:pl-8 portrait:ml-6 portrait:mt-0 landscape:mt-8 lg:mt-[-180px] portrait:items-start portrait:text-left portrait:pr-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-2xl sm:text-4xl md:text-6xl landscape:!text-[min(4.5vw,3rem)] font-bold text-[#0a2a4a] mb-2 sm:mb-4 md:mb-6 landscape:mb-3 drop-shadow-lg landscape:leading-tight max-w-lg landscape:text-left"
          >
            Latest Insights
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-base sm:text-lg md:text-xl landscape:!text-[min(2.2vw,1.2rem)] text-[#0a2a4a] mb-4 sm:mb-6 md:mb-8 landscape:mb-4 drop-shadow-md landscape:max-w-[90%] max-w-xl landscape:text-left"
          >
            Discover Case Studies, Our Latest Projects, and key AI Trends Shaping the Future
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col portrait:flex-row portrait:justify-start portrait:gap-3 flex-wrap landscape:flex-row landscape:gap-4 mt-6"
          >
            <Link 
              href="/insights/blogs"
              className="inline-block bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-[#1a1a1a] px-6 py-3 rounded-lg text-base font-semibold shadow-lg hover:from-[#FFF9D4] hover:via-[#DBA23A] hover:to-[#E6B94F] hover:scale-105 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#E6B94F] active:scale-95 portrait:px-4 portrait:py-2 portrait:text-sm portrait:max-w-xs portrait:w-fit portrait:mx-0"
            >
              Our Blogs
            </Link>
            <Link 
              href="/insights/case-studies"
              className="inline-block bg-[#0a2a4a] text-[#FFD700] px-6 py-3 rounded-lg text-base font-semibold shadow-md hover:bg-[#0a2a4a]/90 hover:text-[#FFF9D4] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FFD700] active:scale-95 portrait:px-4 portrait:py-2 portrait:text-sm portrait:max-w-xs portrait:w-fit portrait:mx-0"
            >
              Case Studies
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 