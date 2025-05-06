'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface SolutionsHeroProps {
  fitMode?: 'cover' | 'contain';
}

export default function SolutionsHero({ fitMode = 'cover' }: SolutionsHeroProps) {
  return (
    <section className="relative h-[500px] md:h-[600px] w-full max-w-[1920px] mx-auto overflow-hidden">
      {/* Background Image with responsive handling */}
      <div className="absolute inset-0">
        <picture>
          {/* Mobile Portrait */}
          <source
            media="(max-width: 640px) and (orientation: portrait)"
            srcSet="/images/solutions/hero_solutions_mobile.webp"
            type="image/webp"
          />
          <source
            media="(max-width: 640px) and (orientation: portrait)"
            srcSet="/images/solutions/hero_solutions_mobile.jpg"
            type="image/jpeg"
          />
          {/* Tablet and Desktop */}
          <source
            media="(min-width: 641px)"
            srcSet="/images/solutions/hero_solutions_desktop.webp"
            type="image/webp"
          />
          <source
            media="(min-width: 641px)"
            srcSet="/images/solutions/hero_solutions_desktop.jpg"
            type="image/jpeg"
          />
          <Image
            src="/images/solutions/hero_solutions_desktop.webp"
            alt="BPO Solutions Hero"
            fill
            priority
            className="object-cover object-center"
            quality={100}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1920px"
          />
        </picture>
        {/* Lighter overlay gradient for better image visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f]/40 via-[#1a365d]/30 to-[#2d3748]/40" />
      </div>

      {/* Content Container with responsive padding */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center portrait:justify-start portrait:pt-16 landscape:items-start">
        <div className="max-w-2xl ml-0 pl-4 sm:pl-8 portrait:ml-6 portrait:mt-0 landscape:mt-8 md:mt-[-150px] portrait:items-start portrait:text-left portrait:pr-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-2xl sm:text-4xl md:text-6xl landscape:!text-[min(4.5vw,3rem)] font-bold text-white mb-2 sm:mb-4 md:mb-6 landscape:mb-3 drop-shadow-lg landscape:leading-tight max-w-lg landscape:text-left"
          >
            Comprehensive ICT Solutions & Turnkey Integration
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-base sm:text-lg md:text-xl landscape:!text-[min(2.2vw,1.2rem)] text-white mb-4 sm:mb-6 md:mb-8 landscape:mb-4 drop-shadow-md landscape:max-w-[90%] max-w-xl landscape:text-left"
          >
            Empowering businesses with end-to-end technology, infrastructure, and automation — from design to deployment.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="w-48 landscape:w-auto landscape:px-6 landscape:!text-[min(1.8vw,0.875rem)] bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md text-sm text-center cursor-pointer transition-all duration-300 hover:from-blue-400 hover:to-indigo-500 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 active:scale-95 z-10"
            >
              Explore Our Solutions
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 