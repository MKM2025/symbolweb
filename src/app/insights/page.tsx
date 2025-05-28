'use client';
import InsightsHero from '@/components/insights/InsightsHero';
import { allBlogs } from 'contentlayer/generated';
import Link from 'next/link';
import Image from 'next/image';
import { Blog } from '@/types/blog';
import { motion } from 'framer-motion';
import React from 'react';
import CaseStudyCard from '@/components/insights/CaseStudyCard';

const caseStudies = [
  {
    id: 'advanced_sec',
    title: 'Symbol Tech Fortifies EthSwitch\'s National Payment Gateway with Advanced Security Solutions',
    description: 'A strategic initiative empowering EthSwitch to protect its critical operations and customer data, ensuring the integrity and reliability of the nation\'s burgeoning digital payment ecosystem.',
    thumbnail: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjQwMCIgeT0iMzAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM2YjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5FdGhTd2l0Y2ggQ2FzZSBTdHVkeTwvdGV4dD48L3N2Zz4=',
  },
  // Additional case studies will be added here
];

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
      {/* Case Studies Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Case Studies
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore how we've helped organizations transform their digital infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard
                key={caseStudy.id}
                id={caseStudy.id}
                title={caseStudy.title}
                description={caseStudy.description}
                thumbnail={caseStudy.thumbnail}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Blogs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Latest Insights
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Stay updated with our latest thoughts and perspectives
            </p>
          </div>
          
          {/* Blog cards will be added here */}
        </div>
      </section>
    </main>
  );
} 