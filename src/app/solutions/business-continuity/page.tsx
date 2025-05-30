'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const allSolutions = [
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and ensure business resilience.',
    image: '/images/solutions/cybersecurity.webp',
    link: '/solutions/cybersecurity',
  },
  {
    id: 'fintech',
    title: 'Financial Technology',
    description: 'Specialized solutions for financial institutions to enhance security, compliance, and operational efficiency.',
    image: '/images/solutions/securefinancial.webp',
    link: '/solutions/fintech',
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud & Infrastructure',
    description: 'Modern cloud and infrastructure solutions to build a resilient and scalable digital foundation.',
    image: '/images/solutions/connectedenterprise.webp',
    link: '/solutions/cloud-infrastructure',
  },
  {
    id: 'business-continuity',
    title: 'Business Continuity',
    description: 'Comprehensive solutions to ensure business continuity and rapid recovery from disruptions.',
    image: '/images/solutions/continuity.webp',
    link: '/solutions/business-continuity',
  },
  {
    id: 'grc',
    title: 'Governance, Risk & Compliance',
    description: 'Integrated solutions for effective governance, risk management, and compliance.',
    image: '/images/solutions/grc.webp',
    link: '/solutions/grc',
  },
  {
    id: 'data-ai',
    title: 'Data, AI & Intelligence',
    description: 'Harness the power of data and AI to drive innovation and informed decision-making.',
    image: '/images/solutions/data-ai.webp',
    link: '/solutions/data-ai',
  },
  {
    id: 'managed-services',
    title: 'Managed IT Services',
    description: 'Comprehensive managed services to optimize operations and focus on innovation.',
    image: '/images/solutions/managed-services.webp',
    link: '/solutions/managed-services',
  },
  {
    id: 'digital-training',
    title: 'Digital Solutions & Training',
    description: 'Empowering your workforce with cutting-edge digital solutions and comprehensive training programs.',
    image: '/images/solutions/digital-training.webp',
    link: '/solutions/digital-training',
  },
];

export default function BusinessContinuityPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[320px] md:h-[400px] w-[750px] md:w-[1920px] max-w-full bg-[#0a192f] flex items-center justify-start mx-auto">
        <div className="container mx-auto px-4 flex flex-col justify-center h-full">
          <div className="relative z-20 flex flex-col items-center md:items-start justify-center w-full h-full text-center md:text-left max-w-2xl mx-auto md:mx-0 md:pl-4 sm:md:pl-8 md:ml-[60px]">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFF9C4] mb-4 mt-[1em] w-full max-w-full md:whitespace-nowrap">
              Business Continuity
            </h1>
            <p className="text-base sm:text-lg md:text-lg text-[#FFF9C4] w-full max-w-full">
              Comprehensive solutions to ensure business continuity and rapid recovery from disruptions.
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Navigation Bar */}
      <nav className="w-full bg-[#0a192f] py-4">
        <div className="max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-7xl mx-auto px-4 flex items-center">
          <div className="flex flex-wrap justify-center w-full gap-x-2 gap-y-2">
            <Link href="/solutions/cybersecurity" className="min-w-max text-white hover:text-[#FFD700] text-xs sm:text-sm md:text-base px-3 py-1 rounded-full bg-white/10 hover:bg-[#FFD700]/10 transition-colors">
              Cybersecurity
            </Link>
            <span className="w-px h-6 bg-[#FFD700] mx-1 inline-block align-middle"></span>
            <Link href="/solutions/fintech" className="min-w-max text-white hover:text-[#FFD700] text-xs sm:text-sm md:text-base px-3 py-1 rounded-full bg-white/10 hover:bg-[#FFD700]/10 transition-colors">
              Financial Technology
            </Link>
            <span className="w-px h-6 bg-[#FFD700] mx-1 inline-block align-middle"></span>
            <Link href="/solutions/cloud-infrastructure" className="min-w-max text-white hover:text-[#FFD700] text-xs sm:text-sm md:text-base px-3 py-1 rounded-full bg-white/10 hover:bg-[#FFD700]/10 transition-colors">
              Cloud & Infrastructure
            </Link>
            <span className="w-px h-6 bg-[#FFD700] mx-1 inline-block align-middle"></span>
            <Link href="/solutions/business-continuity" className="min-w-max text-[#FFD700] font-medium text-xs sm:text-sm md:text-base px-3 py-1 rounded-full bg-[#FFD700]/10">
              Business Continuity
            </Link>
            <span className="w-px h-6 bg-[#FFD700] mx-1 inline-block align-middle"></span>
            <Link href="/solutions/grc" className="min-w-max text-white hover:text-[#FFD700] text-xs sm:text-sm md:text-base px-3 py-1 rounded-full bg-white/10 hover:bg-[#FFD700]/10 transition-colors">
              Governance, Risk & Compliance
            </Link>
            <span className="w-px h-6 bg-[#FFD700] mx-1 inline-block align-middle"></span>
            <Link href="/solutions/data-ai" className="min-w-max text-white hover:text-[#FFD700] text-xs sm:text-sm md:text-base px-3 py-1 rounded-full bg-white/10 hover:bg-[#FFD700]/10 transition-colors">
              Data, AI & Intelligence
            </Link>
            <span className="w-px h-6 bg-[#FFD700] mx-1 inline-block align-middle"></span>
            <Link href="/solutions/managed-services" className="min-w-max text-white hover:text-[#FFD700] text-xs sm:text-sm md:text-base px-3 py-1 rounded-full bg-white/10 hover:bg-[#FFD700]/10 transition-colors">
              Managed IT Services
            </Link>
            <span className="w-px h-6 bg-[#FFD700] mx-1 inline-block align-middle"></span>
            <Link href="/solutions/digital-training" className="min-w-max text-white hover:text-[#FFD700] text-xs sm:text-sm md:text-base px-3 py-1 rounded-full bg-white/10 hover:bg-[#FFD700]/10 transition-colors">
              Digital Solutions & Training
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <section id="solutions" className="py-16 bg-gradient-to-b from-slate-50 to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-md p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-[#002E6D] mb-6">
                Maintain Operations and Recover Quickly from Disruptions
              </h2>
              <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                Unplanned downtime can cripple your business. Symbol Technologies offers comprehensive Business Continuity Management (BCM) and IT Disaster Recovery (ITDR) solutions designed to minimize disruption, protect critical data, and ensure operational resilience. Through partnerships with industry leaders such as Veeam and Acronis, we deliver robust data protection and rapid recovery capabilities to keep your business running, even during crises.

                We address several key challenges, including protecting against data loss caused by hardware failures, cyberattacks, or natural disasters; minimizing downtime for critical business applications; and meeting stringent recovery time objectives (RTO) and recovery point objectives (RPO). We also support the development and testing of effective BCM and disaster recovery plans, ensure resilience across physical, virtual, and cloud environments, and help organizations manage crises effectively when disruptions occur.

                Our Business Continuity Portfolio includes Business Continuity Management Planning and Advisory, IT Disaster Recovery Solutions (including Disaster Recovery as a Service—DRaaS), Data Backup and Recovery Services powered by Veeam and Acronis, and Crisis Management Frameworks.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">Related Solutions</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allSolutions.filter(s => s.id !== 'business-continuity').map(solution => (
              <Link key={solution.id} href={solution.link} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow block group">
                <h3 className="text-xl font-bold text-[#002E6D] mb-2 group-hover:text-blue-600 transition-colors">{solution.title}</h3>
                <p className="text-gray-600 mb-3">{solution.description}</p>
                <span className="text-blue-600 group-hover:text-blue-800 font-semibold inline-flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 