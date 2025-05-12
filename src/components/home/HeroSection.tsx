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
    <section className="relative w-full h-screen min-h-screen max-h-screen overflow-hidden -mt-[1px] mb-0">
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

      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center portrait:justify-start portrait:pt-16 landscape:items-start md:absolute md:top-[25%] md:px-4 md:justify-start md:pt-0">
        <div className="max-w-2xl ml-0 md:ml-12 pl-4 sm:pl-8 portrait:ml-6 portrait:mt-0 landscape:mt-8 lg:mt-[-180px] portrait:items-start portrait:text-left portrait:pr-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-2xl sm:text-4xl md:text-6xl landscape:!text-[min(4.5vw,3rem)] font-bold text-[#FFF9C4] mb-2 sm:mb-4 md:mb-6 landscape:mb-3 drop-shadow-lg landscape:leading-tight max-w-lg landscape:text-left"
          >
            BPO Across the Globe
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-base sm:text-lg md:text-xl landscape:!text-[min(2.2vw,1.2rem)] text-[#FFF9C4] mb-4 sm:mb-6 md:mb-8 landscape:mb-4 drop-shadow-md landscape:max-w-[90%] max-w-xl landscape:text-left"
          >
            Empowering businesses with scalable, efficient BPO solutions. We provide 24/7 solutions that drive growth and innovation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 flex flex-row gap-4 portrait:flex-row portrait:gap-4"
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
    </section>
  );
} 