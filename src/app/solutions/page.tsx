'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';

const solutions = [
  {
    id: "security-solutions",
    section: "Security Solutions",
    description: "Comprehensive security solutions to protect your digital assets and ensure business resilience.",
    subsections: [
      {
        title: "Comprehensive Cybersecurity for a Resilient Digital Future",
        description: "The threat landscape is constantly evolving, demanding a proactive, intelligent, and integrated approach to security. Symbol Technologies provides end-to-end cybersecurity solutions and services designed to protect your critical assets, detect threats early, respond decisively, and ensure compliance.",
        image: "/images/solutions/cybersecurity.webp",
        link: "/solutions/cybersecurity"
      },
      {
        title: "Intelligent Security Operations & 24/7 Managed Detection and Response",
        description: "Gain continuous visibility and expert oversight of your security posture with our comprehensive Security Operations and Managed Security Services, delivered through ST-CyberSOC Team.",
        image: "/images/solutions/cybersoc.webp",
        link: "/solutions/secops"
      },
      {
        title: "Proactively Reduce Your Attack Surface",
        description: "Understand and minimize your cyber risk by continuously identifying, prioritizing, and remediating vulnerabilities across your entire digital footprint. Our services leverage leading platforms like Tenable and Rapid7.",
        image: "/images/solutions/proactive.webp",
        link: "/solutions/vulnerability"
      }
    ]
  },
  {
    id: "financial-technology",
    section: "Financial Technology Solutions",
    description: "Specialized solutions for financial institutions to manage risk, ensure compliance, and prevent financial crime.",
    subsections: [
      {
        title: "Secure and Compliant Solutions for the Modern Financial Services Industry",
        description: "The financial sector faces unique challenges. Symbol Technologies provides specialized FinTech solutions and advisory services to help institutions manage risk, ensure compliance, and prevent financial crime.",
        image: "/images/solutions/securefinancial.webp",
        link: "/solutions/fintech"
      },
      {
        title: "Comprehensive Risk Management for Financial Institutions",
        description: "Proactively identify, measure, and mitigate financial, operational, and enterprise-wide risks with our integrated solutions and expert advisory services, powered by MDS-AFS and Wolters Kluwer.",
        image: "https://via.placeholder.com/500x300/37474F/FFD700?text=Risk+Mgmt",
        link: "/solutions/risk-management"
      },
      {
        title: "Advanced Protection Against Fraud and Financial Crime",
        description: "Combat increasingly sophisticated financial crime with our multi-layered detection and prevention solutions from Fiserv and Paygilant.",
        image: "https://via.placeholder.com/500x300/AD1457/FFD700?text=Crime+Prevention",
        link: "/solutions/financial-crime"
      }
    ]
  },
  {
    id: "cloud-infrastructure",
    section: "Cloud & Infrastructure",
    description: "Modern cloud and infrastructure solutions to build a resilient and scalable digital foundation.",
    subsections: [
      {
        title: "Build Your Resilient and Scalable Digital Foundation",
        description: "Modernize your IT environment with flexible, secure, and efficient cloud and infrastructure solutions from Symbol Technologies. We provide the expertise and partnerships to build a foundation that supports your business goals.",
        image: "https://via.placeholder.com/500x300/1976D2/FFF9C4?text=Cloud+%26+Infra",
        link: "/solutions/cloud"
      },
      {
        title: "Secure, High-Performance Networking for the Connected Enterprise",
        description: "Reliable and secure connectivity is the backbone of your digital operations. Symbol Technologies designs and manages intelligent networking and communication solutions connecting users, applications, and data.",
        image: "https://via.placeholder.com/500x300/00897B/FFD700?text=Networking",
        link: "/solutions/networking"
      },
      {
        title: "Maintain Operations and Recover Quickly from Disruptions",
        description: "Unplanned downtime can cripple your business. Symbol Technologies provides comprehensive Business Continuity and Disaster Recovery solutions to minimize disruption and ensure resilience.",
        image: "https://via.placeholder.com/500x300/455A64/FFD700?text=Continuity",
        link: "/solutions/business-continuity"
      }
    ]
  },
  {
    id: "data-ai",
    section: "Data, AI & Intelligence",
    description: "Harness the power of data and artificial intelligence to drive innovation and make informed decisions.",
    subsections: [
      {
        title: "Unlock Insights and Drive Innovation with Data and AI",
        description: "Symbol Technologies helps you harness the power of your data through business intelligence, advanced analytics, and Artificial Intelligence applications to drive smart decisions and create value.",
        image: "https://via.placeholder.com/500x300/512DA8/FFD700?text=Data+%26+AI",
        link: "/solutions/data-ai"
      },
      {
        title: "Practical AI Solutions for Real-World Impact",
        description: "Move beyond the hype and integrate Artificial Intelligence into practical applications that deliver measurable results, enhancing efficiency and security across industries.",
        image: "https://via.placeholder.com/500x300/388E3C/FFD700?text=AI+Solutions",
        link: "/solutions/ai-solutions"
      }
    ]
  },
  {
    id: "managed-it",
    section: "Managed IT Services",
    description: "Comprehensive managed services to optimize operations and focus on innovation.",
    subsections: [
      {
        title: "Optimize Operations and Focus on Innovation with Expert Managed Services",
        description: "Free up your internal IT resources to focus on strategic initiatives by outsourcing day-to-day management to Symbol Technologies. Our portfolio ensures reliable performance, enhanced security, and predictable costs.",
        image: "https://via.placeholder.com/500x300/6D4C41/FFD700?text=Managed+Services",
        link: "/solutions/managed-services"
      },
      {
        title: "Enhance Digital Experiences and Empower Your Workforce",
        description: "Drive engagement and productivity with Symbol Technologies' digital development and training services — from web development and e-learning to cybersecurity awareness programs.",
        image: "https://via.placeholder.com/500x300/FF8F00/0A0F2C?text=Digital+Training",
        link: "/solutions/digital-solutions"
      }
    ]
  }
];

export default function ServicesPage() {
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
          <div className="container mx-auto px-4 text-white pt-16 md:pt-0 md:max-w-2xl md:ml-16 md:mt-40" >
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
                href="#security-solutions"
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
              href="#security-solutions"
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

      {/* Solutions Sections */}
      {solutions.map((section, sectionIndex) => (
        <section
          key={section.id}
          id={section.id}
          className={`py-3 sm:py-3.5 px-4 sm:px-6 md:px-10 bg-white even:bg-slate-50 scroll-mt-[110px]`}
        >
          <div className="max-w-7xl mx-auto rounded-2xl shadow-md p-6 sm:p-8 md:p-12">
            <motion.div
              className="w-full"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-[#002E6D] mb-4">
                {section.section}
              </h2>
              <motion.p
                className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 w-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
              >
                {section.description}
              </motion.p>
              <div className="w-full h-[2px] bg-yellow-400 mb-10"></div>
            </motion.div>
            {section.subsections.map((subsection, index) => (
              <div
                key={subsection.title}
                className={`flex flex-col md:flex-row gap-8 md:gap-10 items-start mb-12 ${sectionIndex % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Left Side (Image) */}
                <div className="w-full md:w-1/2">
                  <img
                    src={subsection.image}
                    alt="Solution"
                    className="rounded-lg w-full h-auto object-cover"
                  />
                </div>
                {/* Right Side (Content) */}
                <div className="w-full md:w-1/2">
                  <h3 className="text-xl font-semibold text-[#002E6D] mb-2">
                    {subsection.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {subsection.description}
                  </p>
                  <a
                    href={subsection.link}
                    className="bg-[#002E6D] text-yellow-300 text-sm font-semibold px-4 py-2 rounded shadow hover:bg-blue-900"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
} 