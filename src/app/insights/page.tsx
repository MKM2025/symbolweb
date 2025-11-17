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
  {
    id: 'nib_computing',
    title: 'NIB Computing Infrastructure Modernization',
    description: 'A comprehensive infrastructure modernization project that transformed NIB\'s computing capabilities, enhancing performance, security, and scalability.',
    thumbnail: '/case-studies/nib-computing-infrastructure.webp',
  },
  {
    id: 'esl',
    title: 'Data Center & Network Transformation for Ethiopian Shipping and Logistics',
    description: 'How Symbol Technologies delivered a robust, scalable, and secure ICT infrastructure for Ethiopian Shipping and Logistics, ensuring operational excellence and future-ready documentation.',
    thumbnail: '', // No image for now
  },
  {
    id: 'ERA',
    title: 'ERA Digital Transformation Case Study',
    description: 'How ERA leveraged Symbol Tech solutions for digital transformation and operational excellence.',
    thumbnail: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjQwMCIgeT0iMzAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM2YjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5FUkEgQ2FzZSBTdHVkeTwvdGV4dD48L3N2Zz4=',
  },
  {
    id: 'abay',
    title: 'Abay Digital Transformation Case Study',
    description: 'How Abay Bank leveraged Symbol Tech solutions for digital transformation and operational excellence.',
    thumbnail: '', // No image for now
  },
  {
    id: 'aau',
    title: 'Compute & Storage Infrastructure Deployment for Addis Ababa University',
    description: "How Symbol Technologies delivered a scalable, high-availability compute and storage infrastructure to support AAU's academic, research, and enterprise IT needs.",
    thumbnail: '', // No image for now
  },
  {
    id: 'adib',
    title: 'Symbol Technologies Empowers Addis International Bank with Advanced SIEM Solution',
    description: 'How Symbol Technologies implemented a centralized FortiSIEM platform for AdIB, providing enhanced security visibility, rapid threat detection, and compliance automation.',
    thumbnail: '', // No image for now
  },
  {
    id: 'moenco',
    title: 'Unified Communications Solution for MOENCO',
    description: 'How MOENCO transformed its enterprise communications with a modern Cisco Unified Communications platform, enabling advanced voice, video, and collaboration features.',
    thumbnail: '', // No image for now
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
            News &amp; Blogs
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
      <section id="blogs" className="py-16 bg-gray-50 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              News &amp; Blogs
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Stay updated with our latest thoughts and perspectives
            </p>
          </div>
          <div className="space-y-6">
            {allBlogs
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
              .map((blog: Blog) => (
                <Link key={blog._id} href={`${blog.url}`} className="group block">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg flex flex-col md:flex-row">
                    <div className="relative w-full md:w-[576px] h-96 md:h-96 flex-shrink-0 bg-gray-100">
                      {blog.image && (
                        <Image
                          src={blog.image}
                          alt={`${blog.title} Thumbnail`}
                          fill
                          priority
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, 576px"
                        />
                      )}
                    </div>
                    <div className="p-6 flex flex-col justify-between flex-grow">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {blog.title}
                        </h3>
                        <p className="text-sm text-gray-500 mb-3">
                          By {blog.author} | {new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                        {blog.summary && (
                          <p className="text-gray-600 line-clamp-2 mb-4">
                            {blog.summary}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center text-blue-600 group-hover:text-blue-800">
                        <span className="text-sm font-medium">Read More</span>
                        <svg
                          className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
      {/* Case Studies Section */}
      <section id="case-studies" className="py-16 bg-white scroll-mt-28">
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
    </main>
  );
} 