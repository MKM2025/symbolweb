'use client';

import Image from 'next/image';
import Link from 'next/link';
import NetworkAnimation from './NetworkAnimation';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  fitMode?: 'cover' | 'contain';
  isActive?: boolean;
}

export default function HeroSection({ fitMode = 'cover', isActive }: HeroSectionProps) {
  return (
    <section className="relative w-full h-[100svh] min-h-[100svh] max-h-[100svh] md:h-screen md:min-h-screen md:max-h-screen overflow-hidden -mt-[1px] mb-0">
      <div className="absolute inset-0 bg-[#0a192f]">
        <Image
          src="/images/hero/hero_bpo_desktop.webp"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center hidden md:block"
          quality={90}
          sizes="(max-width: 768px) 100vw, 100vw"
        />
        <Image
          src="/images/hero/hero_bpo_mobile.webp"
          alt="Hero Background Mobile"
          fill
          priority
          className="object-cover object-center md:hidden"
          quality={90}
          sizes="(max-width: 768px) 100vw, 100vw"
        />
      </div>

      <NetworkAnimation />

      {/* Mobile portrait: grid with two rows */}
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
              BPO Across the Globe
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="text-[clamp(1.2rem,5vw,2rem)] sm:text-2xl md:text-xl text-[#FFF9C4] mb-2 sm:mb-3 md:mb-4 drop-shadow-md font-semibold w-full text-center md:text-left"
            >
              Empowering businesses with scalable, efficient BPO solutions. We provide 24/7 solutions that drive growth and innovation.
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
                href="/bpo#scroll-target"
                className="inline-block bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-[#1a1a1a] px-6 py-3 rounded-lg text-base font-semibold font-sans shadow-lg hover:from-[#FFF9D4] hover:via-[#DBA23A] hover:to-[#E6B94F] hover:scale-105 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#E6B94F] active:scale-95 portrait:px-4 portrait:py-2 portrait:text-sm portrait:max-w-xs portrait:w-fit"
              >
                Our BPO Services
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-[#0a2a4a] text-[#FFD700] px-6 py-3 rounded-lg text-base font-semibold font-sans shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FFD700] active:scale-95 hover:bg-[#0a2a4a]/90 hover:text-[#FFF9D4] portrait:px-4 portrait:py-2 portrait:text-sm portrait:max-w-xs portrait:w-fit"
              >
                Talk to Us!
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