'use client';
import InsightsHero from '@/components/insights/InsightsHero';
import { allBlogs } from 'contentlayer/generated';
import Link from 'next/link';
import Image from 'next/image';
import { Blog } from '@/types/blog';
import { motion } from 'framer-motion';

export default function InsightsPage() {
  return (
    <main>
      <InsightsHero />
      {/* Insights Navigation - Overlayed at bottom of hero */}
      <div className="relative w-full">
        <nav
          className="absolute left-1/2 -translate-x-1/2 z-30 flex flex-row items-center justify-center bg-[#0a192f]/90 backdrop-blur-md rounded-xl shadow-lg border border-gray-900 px-2 sm:px-4 md:px-8 py-2 sm:py-3 mt-[-5rem] sm:mt-[-6rem]"
          style={{ bottom: '4rem' }}
        >
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.7 }}
            transition={{ duration: 0.7, delay: 0, ease: 'easeOut' }}
            className="h-8 sm:h-10 md:h-12 w-[4px] bg-blue-900 mx-1 sm:mx-2 md:mx-4 rounded-full"
          ></motion.span>
          <motion.a
            href="#blogs"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.7 }}
            transition={{ duration: 0.7, delay: 0.05, ease: 'easeOut' }}
            className="px-2 sm:px-4 md:px-8 py-1 sm:py-2 text-base sm:text-lg md:text-xl font-extrabold text-[#FFF9C4] hover:text-blue-300 transition-colors duration-200 whitespace-nowrap cursor-pointer"
          >
            Blogs
          </motion.a>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.7 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="h-8 sm:h-10 md:h-12 w-[4px] bg-blue-900 mx-1 sm:mx-2 md:mx-4 rounded-full"
          ></motion.span>
          <motion.a
            href="#case-studies"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.7 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="px-2 sm:px-4 md:px-8 py-1 sm:py-2 text-base sm:text-lg md:text-xl font-extrabold text-[#FFF9C4] hover:text-blue-300 transition-colors duration-200 whitespace-nowrap cursor-pointer"
          >
            Case Studies
          </motion.a>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.7 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="h-8 sm:h-10 md:h-12 w-[4px] bg-blue-900 mx-1 sm:mx-2 md:mx-4 rounded-full"
          ></motion.span>
        </nav>
      </div>
      {/* Blogs Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 id="blogs" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-[#0a2a4a] scroll-mt-20 md:scroll-mt-[96px]">Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow p-6 text-center text-gray-500">Coming soon...</div>
          </div>
        </div>
      </section>
      {/* Case Studies Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 id="case-studies" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-[#0a2a4a] scroll-mt-20 md:scroll-mt-[96px]">Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* TODO: Add case studies content here */}
            <div className="bg-white rounded-lg shadow p-6 text-center text-gray-500">Coming soon...</div>
          </div>
        </div>
      </section>
    </main>
  );
} 