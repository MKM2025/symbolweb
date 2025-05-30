'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';

const solutions = [
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and ensure business resilience.',
    image: '/images/solutions/cybersecurity.webp',
    link: '/solutions/cybersecurity'
  },
  {
    id: 'fintech',
    title: 'Financial Technology',
    description: 'Specialized solutions for financial institutions to enhance security, compliance, and operational efficiency.',
    image: '/images/solutions/securefinancial.webp',
    link: '/solutions/fintech'
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud & Infrastructure',
    description: 'Modern cloud and infrastructure solutions to build a resilient and scalable digital foundation.',
    image: '/images/solutions/connectedenterprise.webp',
    link: '/solutions/cloud-infrastructure'
  },
  {
    id: 'business-continuity',
    title: 'Business Continuity',
    description: 'Comprehensive solutions to ensure business continuity and rapid recovery from disruptions.',
    image: '/images/solutions/continuity.webp',
    link: '/solutions/business-continuity'
  },
  {
    id: 'grc',
    title: 'Governance, Risk & Compliance',
    description: 'Integrated solutions for effective governance, risk management, and compliance.',
    image: '/images/solutions/grc.webp',
    link: '/solutions/grc'
  },
  {
    id: 'data-ai',
    title: 'Data, AI & Intelligence',
    description: 'Harness the power of data and AI to drive innovation and informed decision-making.',
    image: '/images/solutions/data-ai.webp',
    link: '/solutions/data-ai'
  },
  {
    id: 'managed-services',
    title: 'Managed IT Services',
    description: 'Comprehensive managed services to optimize operations and focus on innovation.',
    image: '/images/solutions/managed-services.webp',
    link: '/solutions/managed-services'
  },
  {
    id: 'digital-training',
    title: 'Digital Solutions & Training',
    description: 'Empowering your workforce with cutting-edge digital solutions and comprehensive training programs.',
    image: '/images/solutions/digital-training.webp',
    link: '/solutions/digital-training'
  }
];

export default function SolutionsPage() {
  const { scrollY } = useScroll();
  const [showArrows, setShowArrows] = useState(true);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setShowArrows(latest < 100);
    });
  }, [scrollY]);

  return (
    <main className="min-h-screen mt-0 pt-0 !mt-0 !pt-0">
      {/* Hero Section */}
      <section className="relative h-screen w-full mb-0 md:mb-0 mt-0 pt-0 !mt-0 !pt-0">
        <div className="absolute inset-0 bg-[#0a192f]">
          <Image
            src="/images/solutions/hero_solutions_desktop.webp"
            alt="Solutions Hero"
            fill
            priority
            className="object-cover object-center hidden md:block"
            quality={90}
            sizes="(max-width: 768px) 100vw, 100vw"
          />
          <Image
            src="/images/solutions/hero_solutions_mobile.webp"
            alt="Solutions Hero Mobile"
            fill
            priority
            className="object-cover object-center md:hidden"
            quality={90}
            sizes="(max-width: 768px) 100vw, 100vw"
          />
        </div>
        <div className="absolute inset-0 flex items-start justify-start pt-2 md:justify-start md:pt-0">
          <div className="container mx-auto px-4 text-white pt-16 md:pt-0 md:max-w-2xl md:ml-16 md:mt-40">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#FFF9C4] mb-2 sm:mb-4 md:mb-6 drop-shadow-lg max-w-full text-center md:text-left w-full"
            >
              Comprehensive IT Solutions for a Smarter Future
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="text-lg sm:text-lg md:text-xl text-[#FFF9C4] mb-4 sm:mb-6 md:mb-8 drop-shadow-md max-w-full text-center md:text-left w-full"
            >
              Symbol Technologies delivers AI-driven, end-to-end digital solutions—from cybersecurity and cloud infrastructure to automation—empowering modern enterprises with agility, resilience, and innovation.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="mt-6 flex justify-center md:justify-start w-full"
            >
              <a
                href="#solutions-grid"
                className="inline-block bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 text-[#1a1a1a] px-6 py-3 rounded-lg text-base font-semibold shadow-lg hover:from-yellow-200 hover:via-yellow-400 hover:to-yellow-600 hover:scale-105 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 active:scale-95"
              >
                Learn More
              </a>
            </motion.div>
          </div>
        </div>
        
        {/* Bouncing Arrows */}
        {showArrows && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50">
            <motion.a
              href="#solutions-grid"
              className="cursor-pointer group block"
              initial={{ y: 0 }}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <span className="block">
                <svg
                  width="64" height="72" viewBox="0 0 64 72" fill="none"
                  className="drop-shadow-lg animate-pulse"
                  style={{ filter: 'drop-shadow(0 0 8px #FFD70088)' }}
                >
                  <defs>
                    <linearGradient id="hex-gold" x1="0" y1="0" x2="64" y2="72" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#fde68a" />
                      <stop offset="1" stopColor="#f59e42" />
                    </linearGradient>
                  </defs>
                  <polygon
                    points="32,4 60,20 60,52 32,68 4,52 4,20"
                    stroke="url(#hex-gold)"
                    strokeWidth="3"
                    fill="rgba(255, 215, 0, 0.08)"
                    className="transition-all duration-300"
                  />
                  <g>
                    <polyline points="22,32 32,44 42,32" fill="none" stroke="#FFD700" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="22,42 32,54 42,42" fill="none" stroke="#FFD700" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>
              </span>
            </motion.a>
          </div>
        )}
      </section>

      {/* Solutions Grid */}
      <section id="solutions-grid" className="py-16 bg-gradient-to-b from-slate-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {solutions.map((solution) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Link href={solution.link} className="block group h-full">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full min-h-[420px]">
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={solution.image}
                        alt={solution.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1 justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-[#002E6D] mb-2 group-hover:text-blue-600 transition-colors">
                          {solution.title}
                        </h3>
                        <p className="text-slate-600 mb-4">
                          {solution.description}
                        </p>
                      </div>
                      <span className="text-blue-600 group-hover:text-blue-800 font-semibold inline-flex items-center mt-auto">
                        Learn More
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 