'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Solution {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

const allSolutions: Solution[] = [
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

export default function CybersecurityPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[320px] md:h-[400px] w-[750px] md:w-[1920px] max-w-full bg-[#0a192f] flex items-center justify-start mx-auto">
        <div className="absolute inset-0">
          <Image
            src="/images/solutions/solution-pages/hero-security-desktop.webp"
            alt="Cybersecurity Hero"
            fill
            priority
            className="object-cover object-center z-0 hidden md:block"
            quality={90}
            sizes="(max-width: 768px) 100vw, 100vw"
          />
          <Image
            src="/images/solutions/solution-pages/hero-security-mobile.webp"
            alt="Cybersecurity Hero Mobile"
            fill
            priority
            className="object-cover object-center z-0 md:hidden"
            quality={90}
            sizes="(max-width: 768px) 100vw, 100vw"
          />
        </div>
        <div className="container mx-auto px-4 flex flex-col justify-center h-full">
          <div className="relative z-20 flex flex-col items-center md:items-start justify-center w-full h-full text-center md:text-left max-w-2xl mx-auto md:mx-0 md:pl-4 sm:md:pl-8 md:ml-[60px]">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFF9C4] mb-4 mt-[1em] w-full max-w-full md:whitespace-nowrap">
              Cybersecurity
            </h1>
            <p className="text-base sm:text-lg md:text-lg text-[#FFF9C4] w-full max-w-full">
              Comprehensive security solutions to protect your digital assets and ensure business resilience.
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Navigation Bar */}
      <nav className="w-full bg-[#0a192f] py-4">
        <div className="max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-7xl mx-auto px-4 flex items-center">
          <div className="flex flex-wrap justify-center w-full gap-x-2 gap-y-2">
            <Link href="/solutions/cybersecurity" className="min-w-max text-[#FFD700] font-medium text-xs sm:text-sm md:text-base px-3 py-1 rounded-full bg-[#FFD700]/10">
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
            <Link href="/solutions/business-continuity" className="min-w-max text-white hover:text-[#FFD700] text-xs sm:text-sm md:text-base px-3 py-1 rounded-full bg-white/10 hover:bg-[#FFD700]/10 transition-colors">
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
      <section id="solutions" className="py-16 bg-gradient-to-b from-slate-50 to-blue-50">
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
                Comprehensive Cybersecurity for a Resilient Digital Future
              </h2>
              <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                The threat landscape is constantly evolving, requiring a proactive, intelligent, and integrated approach to security. Symbol Technologies delivers end-to-end cybersecurity solutions and services tailored to protect your critical assets, detect threats early, respond decisively, and ensure regulatory compliance. We harness AI-driven insights, cutting-edge technologies from leading partners such as Fortinet, Tenable, Imperva, Rapid7, F5, and Cisco, and the deep expertise of our ST-Cyber SOC team to help organizations across Africa build resilient and adaptive security postures.

                We address a wide range of cybersecurity challenges. These include the increasing sophistication and frequency of attacks such as ransomware, phishing, and advanced persistent threats (APTs); the expanding attack surfaces resulting from cloud adoption, IoT, and remote work; and the complexity of compliance with regulatory frameworks. We also tackle the global shortage of skilled cybersecurity professionals, the urgent need for 24/7 monitoring and rapid incident response, and the critical importance of protecting sensitive data across hybrid IT environments.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-[#002E6D] mb-6">
                Intelligent Security Operations & 24/7 Managed Detection and Response
              </h2>
              <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                Gain continuous visibility and expert oversight of your security posture with our comprehensive Security Operations and Managed Security Services, delivered through the ST-CyberSOC Team. We combine advanced technologies such as SIEM and SOAR with human expertise to provide proactive threat hunting, real-time monitoring, and rapid incident response.

                Our Security Operations Center (SOC) Solutions are designed to be fully customizable. We help organizations design, build, operate, and transfer (BOT) Security Operations Centers that are tailored to their unique needs. For clients seeking outsourced security operations, our Managed SOC (SOC-as-a-Service) delivers 24/7 monitoring and alerting, ensuring continuous surveillance of logs and network traffic. We also provide SIEM and SOAR as a service, leveraging powerful platforms for intelligent event correlation, automation, and orchestration. Incident triage and analysis are handled by seasoned experts who investigate and assess potential threats to minimize risks.

                The benefits of our approach include a reduced likelihood of breaches, more efficient remediation processes, improved compliance with standards such as PCI DSS, and enhanced visibility across even the most complex digital environments.
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
            {allSolutions.filter(s => s.id !== 'cybersecurity').map(solution => (
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