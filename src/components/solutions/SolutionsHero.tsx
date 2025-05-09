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

      {/* Content Container */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center portrait:justify-start portrait:pt-16 landscape:items-start">
        <div className="max-w-2xl ml-0 pl-4 sm:pl-8 portrait:ml-6 portrait:mt-0 landscape:mt-8 md:mt-[-150px] portrait:items-start portrait:text-left portrait:pr-8">
          <h1 className="text-2xl sm:text-4xl md:text-6xl landscape:!text-[min(4.5vw,3rem)] font-bold text-white mb-2 sm:mb-4 md:mb-6 landscape:mb-3 drop-shadow-lg landscape:leading-tight max-w-lg landscape:text-left">
            Comprehensive ICT Solutions & Turnkey Integration
          </h1>
          <p className="text-base sm:text-lg md:text-xl landscape:!text-[min(2.2vw,1.2rem)] text-white mb-4 sm:mb-6 md:mb-8 landscape:mb-4 drop-shadow-md landscape:max-w-[90%] max-w-xl landscape:text-left">
            Empowering businesses with end-to-end technology, infrastructure, and automation — from design to deployment.
          </p>
        </div>
      </div>
    </section>
  );
} 