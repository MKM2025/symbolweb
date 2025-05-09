'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const solutions = [
  {
    section: "Cybersecurity",
    title: "Comprehensive Cybersecurity for a Resilient Digital Future",
    description: "The threat landscape is constantly evolving, demanding a proactive, intelligent, and integrated approach to security. Symbol Technologies provides end-to-end cybersecurity solutions and services designed to protect your critical assets, detect threats early, respond decisively, and ensure compliance.",
    cta: "Secure Your Organization",
    image: "https://via.placeholder.com/500x300/0A0F2C/D4AF37?text=Cybersecurity",
    link: "/solutions/cybersecurity"
  },
  {
    section: "Security Operations (SecOps) & Managed Security (MSSP)",
    title: "Intelligent Security Operations & 24/7 Managed Detection and Response",
    description: "Gain continuous visibility and expert oversight of your security posture with our comprehensive Security Operations and Managed Security Services, delivered through ST-CyberSOC Team.",
    cta: "Learn More",
    image: "https://via.placeholder.com/500x300/1A237E/FFD700?text=SecOps+%26+MSSP",
    link: "/solutions/secops"
  },
  {
    section: "Exposure & Vulnerability Management",
    title: "Proactively Reduce Your Attack Surface",
    description: "Understand and minimize your cyber risk by continuously identifying, prioritizing, and remediating vulnerabilities across your entire digital footprint. Our services leverage leading platforms like Tenable and Rapid7.",
    cta: "Explore More",
    image: "https://via.placeholder.com/500x300/263238/FFD700?text=Vulnerability",
    link: "/solutions/vulnerability"
  },
  {
    section: "Cloud & Infrastructure",
    title: "Build Your Resilient and Scalable Digital Foundation",
    description: "Modernize your IT environment with flexible, secure, and efficient cloud and infrastructure solutions from Symbol Technologies. We provide the expertise and partnerships to build a foundation that supports your business goals.",
    cta: "Learn More",
    image: "https://via.placeholder.com/500x300/1976D2/FFF9C4?text=Cloud+%26+Infra",
    link: "/solutions/cloud"
  },
  {
    section: "Networking & Connectivity",
    title: "Secure, High-Performance Networking for the Connected Enterprise",
    description: "Reliable and secure connectivity is the backbone of your digital operations. Symbol Technologies designs and manages intelligent networking and communication solutions connecting users, applications, and data.",
    cta: "Learn More",
    image: "https://via.placeholder.com/500x300/00897B/FFD700?text=Networking",
    link: "/solutions/networking"
  },
  {
    section: "Business Continuity & Resilience",
    title: "Maintain Operations and Recover Quickly from Disruptions",
    description: "Unplanned downtime can cripple your business. Symbol Technologies provides comprehensive Business Continuity and Disaster Recovery solutions to minimize disruption and ensure resilience.",
    cta: "Learn More",
    image: "https://via.placeholder.com/500x300/455A64/FFD700?text=Continuity",
    link: "/solutions/business-continuity"
  },
  {
    section: "Managed Services",
    title: "Optimize Operations and Focus on Innovation with Expert Managed Services",
    description: "Free up your internal IT resources to focus on strategic initiatives by outsourcing day-to-day management to Symbol Technologies. Our portfolio ensures reliable performance, enhanced security, and predictable costs.",
    cta: "Learn More",
    image: "https://via.placeholder.com/500x300/6D4C41/FFD700?text=Managed+Services",
    link: "/solutions/managed-services"
  },
  {
    section: "Financial Technology Solutions",
    title: "Secure and Compliant Solutions for the Modern Financial Services Industry",
    description: "The financial sector faces unique challenges. Symbol Technologies provides specialized FinTech solutions and advisory services to help institutions manage risk, ensure compliance, and prevent financial crime.",
    cta: "Learn More",
    image: "https://via.placeholder.com/500x300/283593/FFD700?text=FinTech",
    link: "/solutions/fintech"
  },
  {
    section: "Risk Management",
    title: "Comprehensive Risk Management for Financial Institutions",
    description: "Proactively identify, measure, and mitigate financial, operational, and enterprise-wide risks with our integrated solutions and expert advisory services, powered by MDS-AFS and Wolters Kluwer.",
    cta: "Learn More",
    image: "https://via.placeholder.com/500x300/37474F/FFD700?text=Risk+Mgmt",
    link: "/solutions/risk-management"
  },
  {
    section: "Financial Crime Prevention",
    title: "Advanced Protection Against Fraud and Financial Crime",
    description: "Combat increasingly sophisticated financial crime with our multi-layered detection and prevention solutions from Fiserv and Paygilant.",
    cta: "Learn More",
    image: "https://via.placeholder.com/500x300/AD1457/FFD700?text=Crime+Prevention",
    link: "/solutions/financial-crime"
  },
  {
    section: "Data, AI & Business Intelligence",
    title: "Unlock Insights and Drive Innovation with Data and AI",
    description: "Symbol Technologies helps you harness the power of your data through business intelligence, advanced analytics, and Artificial Intelligence applications to drive smart decisions and create value.",
    cta: "Learn More",
    image: "https://via.placeholder.com/500x300/512DA8/FFD700?text=Data+%26+AI",
    link: "/solutions/data-ai"
  },
  {
    section: "AI Applied Solutions",
    title: "Practical AI Solutions for Real-World Impact",
    description: "Move beyond the hype and integrate Artificial Intelligence into practical applications that deliver measurable results, enhancing efficiency and security across industries.",
    cta: "Learn More",
    image: "https://via.placeholder.com/500x300/388E3C/FFD700?text=AI+Solutions",
    link: "/solutions/ai-solutions"
  },
  {
    section: "Governance, Risk & Compliance (GRC)",
    title: "Integrate Governance, Manage Risk, and Ensure Compliance",
    description: "Navigate regulations and governance requirements with integrated GRC solutions. We help you manage risks proactively and streamline compliance and audit processes.",
    cta: "Learn More",
    image: "https://via.placeholder.com/500x300/1565C0/FFD700?text=GRC",
    link: "/solutions/grc"
  },
  {
    section: "Digital Solutions & Training",
    title: "Enhance Digital Experiences and Empower Your Workforce",
    description: "Drive engagement and productivity with Symbol Technologies' digital development and training services — from web development and e-learning to cybersecurity awareness programs.",
    cta: "Learn More",
    image: "https://via.placeholder.com/500x300/FF8F00/0A0F2C?text=Digital+Training",
    link: "/solutions/digital-solutions"
  },
  {
    section: "Digital Channel Solutions",
    title: "Engaging Digital Experiences for Your Customers and Employees",
    description: "We help organizations design and manage effective digital channels — whether through portals, mobile apps, or CRM systems — to deliver seamless and intuitive user experiences.",
    cta: "Learn More",
    image: "https://via.placeholder.com/500x300/00ACC1/0A0F2C?text=Digital+Channels",
    link: "/solutions/digital-channels"
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] w-full">
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
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Our Solutions
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-8">
              Discover our comprehensive range of technology solutions designed to drive your business forward.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Sections */}
      {solutions.map((solution, index) => (
        <section
          key={solution.title}
          className={`${index === 0 ? 'pt-12 pb-20' : 'py-20'} ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className={`container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
            {/* Text Content */}
            <div className="flex-1 w-full max-w-2xl">
              <div className="text-lg md:text-xl font-semibold text-[#0A0F2C] tracking-wide uppercase mb-2">{solution.section}</div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#0A0F2C] leading-snug mb-4">{solution.title}</h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mb-6">{solution.description}</p>
              <a
                href={solution.link}
                className="bg-[#0A0F2C] text-yellow-100 px-6 py-2 rounded-xl text-sm md:text-base font-semibold shadow-md transition hover:opacity-90 inline-block"
              >
                {solution.cta}
              </a>
            </div>
            {/* Image */}
            <div className="flex-1 flex justify-center items-center w-full">
              <img
                src={solution.image}
                alt={solution.title}
                className="w-full max-w-md rounded-xl shadow-lg"
              />
            </div>
          </div>
        </section>
      ))}
    </main>
  );
} 