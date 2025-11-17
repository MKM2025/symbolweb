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

type CloudServiceDetail = {
  slug: string;
  title: string;
  eyebrow?: string;
  headline?: string;
  summary?: string;
  description?: string[];
  image?: string;
  imageAlt?: string;
  highlightsTitle?: string;
  highlights?: string[];
  closing?: string;
};

const cloudServiceDetails: CloudServiceDetail[] = [
  {
    slug: 'cloud-migration-strategy',
    title: 'Cloud Migration & Strategy (VMware to OpenStack)',
    image: '/images/solutions/solution-pages/cloud-migration-strategy.webp',
    imageAlt: 'Illustration representing cloud migration and strategic planning',
    eyebrow: 'Migrate from VMware to an ultra-reliable cloud management platform, powered by OpenStack, Kubernetes, and Ceph.',
    headline: 'Seamless Migration from VMware to Open Cloud Infrastructure',
    summary:
      'Empower your business with Symbol Technologies’ next-generation cloud transformation services.',
    description: [
      'As organizations evolve, agility, reliability, and cost efficiency have become essential. Symbol Technologies now offers a seamless migration service from VMware to an ultra-reliable, open-source cloud management platform—powered by OpenStack, Kubernetes, and Ceph.',
    ],
    highlightsTitle: 'Our solution enables enterprises to:',
    highlights: [
      'Reduce licensing costs while maintaining enterprise-grade performance.',
      'Gain full control and flexibility with open cloud technologies.',
      'Achieve scalability and resilience through containerized and software-defined infrastructure.',
      'Ensure business continuity with expert-led migration and managed support.',
    ],
    closing: 'Whether you are modernizing your data center or building a future-ready private cloud, Symbol Technologies ensures a smooth, secure, and optimized transition tailored to your business.',
  },
  {
    slug: 'infrastructure-modernization',
    title: 'Infrastructure Modernization',
    image: '/images/solutions/solution-pages/infrastructure-modernization.webp',
    imageAlt: 'Infrastructure modernization illustration',
    summary:
      'Refresh legacy infrastructure with cloud-native architectures and automated provisioning.',
    description: [
      'Standardize compute, storage, and networking foundations for elasticity and resilience.',
      'Implement observability practices that keep modern platforms tuned for performance.',
    ],
  },
  {
    slug: 'hybrid-cloud-solutions',
    title: 'Hybrid Cloud Solutions',
    image: '/images/solutions/solution-pages/hybrid-cloud-solutions.webp',
    imageAlt: 'Hybrid cloud solutions illustration',
    summary:
      'Blend on-premises and cloud resources with consistent management and policy controls.',
    description: [
      'Enable workload portability through container platforms and unified networking fabrics.',
      'Optimize placement of sensitive workloads while scaling innovation in the public cloud.',
    ],
  },
  {
    slug: 'cloud-security-compliance',
    title: 'Cloud Security & Compliance',
    image: '/images/solutions/solution-pages/cloud-security-compliance.webp',
    imageAlt: 'Cloud security and compliance illustration',
    summary:
      'Embed zero-trust principles, identity controls, and continuous compliance monitoring.',
    description: [
      'Automate guardrails, policy enforcement, and remediation across multi-cloud estates.',
      'Protect data, workloads, and users with defense-in-depth strategies tailored to your sector.',
    ],
  },
  {
    slug: 'performance-optimization',
    title: 'Performance Optimization',
    image: '/images/solutions/solution-pages/performance-optimization.webp',
    imageAlt: 'Performance optimization illustration',
    summary:
      'Continuously tune workloads to meet cost, latency, and availability objectives.',
    description: [
      'Use analytics, APM tooling, and capacity insights to remediate bottlenecks proactively.',
      'Establish performance baselines that keep digital experiences responsive and reliable.',
    ],
  },
  {
    slug: 'disaster-recovery-backup',
    title: 'Disaster Recovery & Backup',
    image: '/images/solutions/solution-pages/disaster-recovery-playbook.webp',
    imageAlt: 'Disaster recovery and backup illustration',
    summary:
      'Architect resilient failover strategies leveraging geo-redundant cloud capabilities.',
    description: [
      'Automate backup scheduling, testing, and data lifecycle management across workloads.',
      'Reduce recovery time objectives with orchestrated playbooks and continuous validation.',
    ],
  },
  {
    slug: 'infrastructure-as-code',
    title: 'Infrastructure as Code',
    image: '/images/solutions/solution-pages/infrastructure-as-code.webp',
    imageAlt: 'Infrastructure as Code illustration',
    summary:
      'Adopt declarative templates to provision environments consistently and repeatably.',
    description: [
      'Integrate CI/CD pipelines that enforce compliance and accelerate infrastructure delivery.',
      'Version, test, and promote infrastructure changes with modern DevOps workflows.',
    ],
  },
  {
    slug: 'cloud-cost-management',
    title: 'Cloud Cost Management',
    image: '/images/solutions/solution-pages/cloud-cost-management.webp',
    imageAlt: 'Cloud cost management illustration',
    summary:
      'Gain financial visibility into cloud consumption with granular tagging and reporting.',
    description: [
      'Rightsize resources, reserve capacity, and automate policies that curb wasteful spend.',
      'Align usage with budgets by embedding FinOps practices across engineering teams.',
    ],
  },
];

export default function CloudInfrastructurePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[320px] md:h-[400px] w-[750px] md:w-[1920px] max-w-full bg-[#0a192f] flex items-center justify-start mx-auto">
        <Image
          src="/images/solutions/solution-pages/hero-cloud-desktop.webp"
          alt="Cloud & Infrastructure Hero"
          fill
          className="object-cover hidden md:block"
          priority
        />
        <Image
          src="/images/solutions/solution-pages/hero-cloud-mobile.webp"
          alt="Cloud & Infrastructure Hero"
          fill
          className="object-cover md:hidden"
          priority
        />
        <div className="container mx-auto px-4 flex flex-col justify-center h-full">
          <div className="relative z-20 flex flex-col items-center md:items-start justify-center w-full h-full text-center md:text-left max-w-2xl mx-auto md:mx-0 md:pl-4 sm:md:pl-8 md:ml-[60px]">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFF9C4] mb-4 mt-[1em] w-full max-w-full md:whitespace-nowrap">
              Cloud & Infrastructure
            </h1>
            <p className="text-base sm:text-lg md:text-lg text-[#FFF9C4] w-full max-w-full">
              Modern cloud and infrastructure solutions to build a resilient and scalable digital foundation.
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
            <Link href="/solutions/cloud-infrastructure" className="min-w-max text-[#FFD700] font-medium text-xs sm:text-sm md:text-base px-3 py-1 rounded-full bg-[#FFD700]/10">
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
              className="space-y-10"
            >
              <div>
                <h2 className="text-3xl font-bold text-[#002E6D] mb-6">
                  Modern Cloud & Infrastructure Solutions
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Symbol Technologies delivers comprehensive cloud and infrastructure solutions designed to modernize your IT environment, enhance performance, and drive business growth. Our expert team helps organizations navigate the complexities of cloud adoption, infrastructure optimization, and digital transformation.
                </p>
              </div>

              <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] items-start">
                <div>
                  <p className="text-slate-600 font-semibold">
                    Our cloud and infrastructure services include:
                  </p>
                  <ul className="mt-4 space-y-3 text-slate-600 pl-2 sm:pl-4">
                    {cloudServiceDetails.map(service => (
                      <li key={service.slug} className="flex items-start gap-4">
                        <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#A97810] via-[#F7E6A3] to-[#C6921C] shadow-[0_8px_18px_rgba(201,146,28,0.35)] ring-2 ring-[#F7E6A3]/30">
                          <svg
                            className="h-3.5 w-3.5 text-white"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <a
                          href={`#${service.slug}`}
                          className="text-blue-700 font-semibold underline decoration-2 underline-offset-4 hover:text-[#002E6D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#002E6D] transition-colors"
                        >
                          {service.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative w-full max-w-lg mx-auto lg:mx-0 lg:max-w-none">
                  <div className="relative rounded-2xl overflow-hidden shadow-md">
                    <Image
                      src="/images/solutions/solution-pages/cloud-services.webp"
                      alt="Illustration of cloud infrastructure services"
                      width={900}
                      height={700}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-[#002E6D] text-center md:text-left"
          >
            Explore Our Cloud Services
          </motion.h2>
          {cloudServiceDetails.map((service, index) => {
            return (
              <motion.div
                id={service.slug}
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white border border-slate-100 rounded-3xl shadow-md hover:shadow-lg transition-shadow p-8 md:p-12 scroll-mt-28 md:scroll-mt-32"
              >
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  <div className={`space-y-6 text-slate-600 leading-relaxed ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    {service.eyebrow && (
                      <motion.span
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.45 }}
                        className="inline-flex items-center text-sm md:text-base font-semibold text-[#0F3A68]"
                      >
                        {service.eyebrow}
                      </motion.span>
                    )}
                    <motion.h3
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.5 }}
                      className="text-2xl md:text-3xl font-semibold text-[#002E6D]"
                    >
                      {service.headline ?? service.title}
                    </motion.h3>
                    {service.summary && (
                      <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.45 }}
                        className="text-base md:text-lg text-slate-600/90"
                      >
                        {service.summary}
                      </motion.p>
                    )}
                    {service.description && service.description.length > 0 && (
                      <div className="space-y-4">
                        {service.description.map((paragraph: string, idx: number) => (
                          <motion.p
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.45, delay: 0.08 + idx * 0.05 }}
                            className="text-base md:text-lg text-slate-600"
                          >
                            {paragraph}
                          </motion.p>
                        ))}
                      </div>
                    )}
                    {service.highlights && service.highlights.length > 0 && (
                      <motion.ul
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.45, delay: 0.1 }}
                        className="space-y-3"
                      >
                        {service.highlights.map((item, idx) => (
                          <li key={idx} className="flex gap-3 items-start">
                            <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[#B3821A] via-[#E8D58C] to-[#7B5A12] shadow-[0_0_8px_rgba(179,130,26,0.35)]"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                    {service.closing && (
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.45, delay: 0.15 }}
                        className="text-base md:text-lg text-slate-600"
                      >
                        {service.closing}
                      </motion.p>
                    )}
                  </div>
                <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                  className={`relative rounded-xl overflow-hidden ${index === 0 ? 'w-full h-auto bg-transparent' : 'h-[260px] sm:h-[280px] md:h-[300px] bg-white'} ${index % 2 === 1 ? 'md:order-1' : ''}`}
                  style={index === 0 ? { aspectRatio: '1920 / 2500' } : undefined}
                  >
                    {service.image ? (
                      <Image
                        src={service.image}
                        alt={service.imageAlt ?? service.title}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index === 0}
                      />
                    ) : (
                      <span className="absolute inset-0 flex items-center justify-center text-[#002E6D] font-semibold tracking-wide">
                        Image Placeholder
                      </span>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Related Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">Related Solutions</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allSolutions.filter(s => s.id !== 'cloud-infrastructure').map(solution => (
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