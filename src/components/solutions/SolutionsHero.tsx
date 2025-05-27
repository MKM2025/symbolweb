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
      {/* Background Image Container */}
      <div className="absolute inset-0 bg-[#0a192f]">
        <Image
          src="/images/solutions/hero_solutions_desktop.webp"
          alt="BPO Solutions Hero"
          fill
          priority
          className="object-cover object-center"
          quality={90}
          sizes="(max-width: 768px) 100vw, 100vw"
        />
        {/* Mobile Image - Only loads on small screens */}
        <Image
          src="/images/solutions/hero_solutions_mobile.webp"
          alt="BPO Solutions Hero Mobile"
          fill
          priority
          className="object-cover object-center sm:hidden"
          quality={90}
          sizes="(max-width: 768px) 100vw, 100vw"
        />
      </div>

      {/* Mobile portrait: grid with two rows */}
      <div className="relative h-full w-full grid grid-rows-[90%_10%] md:flex md:flex-col md:justify-center">
        {/* Upper row: CTA content */}
        <div className="flex flex-col items-center px-4 row-span-1 md:block h-full pt-2 md:pt-0">
          <div className="max-w-2xl ml-0 md:ml-12 pl-4 sm:pl-8 portrait:ml-6 portrait:mt-0 landscape:mt-8 md:mt-[-150px] portrait:pr-8 w-full flex flex-col justify-center items-center h-full text-center md:items-start md:text-left md:justify-center">
            <h1 className="text-[clamp(2rem,8vw,2.8rem)] sm:text-4xl md:text-6xl font-bold text-[#FFF9C4] mb-2 sm:mb-4 md:mb-6 drop-shadow-lg leading-tight w-full text-center md:text-left">
              Comprehensive ICT Solutions & Turnkey Integration
            </h1>
            <p className="text-[clamp(1.2rem,5vw,2rem)] sm:text-2xl md:text-xl text-[#FFF9C4] mb-2 sm:mb-3 md:mb-4 drop-shadow-md font-semibold w-full text-center md:text-left">
              Empowering businesses with end-to-end technology, infrastructure, and automation — from design to deployment.
            </p>
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