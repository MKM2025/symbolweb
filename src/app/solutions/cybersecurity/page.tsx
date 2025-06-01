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
            {/* Animate Hero Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFF9C4] mb-4 mt-[1em] w-full max-w-full md:whitespace-nowrap"
            >
              Cybersecurity
            </motion.h1>
            {/* Animate Hero Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg md:text-lg text-[#FFF9C4] w-full max-w-full"
            >
              Comprehensive security solutions to protect your digital assets and ensure business resilience.
            </motion.p>
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

      {/* Introduction Section */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-md p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Introduction Text */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-[#002E6D] mb-6">Introduction</h2>
                <p className="text-slate-600 leading-relaxed">
                  The threat landscape is constantly evolving, demanding a proactive, intelligent, and integrated approach to security. Symbol Technologies provides end-to-end cybersecurity solutions and services designed to protect your critical assets, detect threats early, respond decisively, and ensure compliance. We leverage AI-driven insights, industry-leading technologies from partners like Fortinet, Tenable, Imperva, Rapid7, F5, and Cisco, and the deep expertise of our ST-Cyber SOC team to build resilient security postures for organizations across Africa.
                </p>
              </motion.div>

              {/* Image Placeholder */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
                className="relative h-[300px] rounded-xl overflow-hidden"
              >
                <Image
                  src="/images/solutions/solution-pages/cyber-intro.webp"
                  alt="Cybersecurity Solutions"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </div>

            {/* Challenges and Portfolio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-12 grid md:grid-cols-2 gap-8"
            >
              {/* Challenges */}
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-[#002E6D] mb-4">Challenges We Address:</h3>
                <ul className="space-y-3">
                  {[
                    'Increasing sophistication and frequency of cyberattacks (ransomware, phishing, APTs).',
                    'Expanding attack surfaces due to cloud adoption, IoT, and remote work.',
                    'Complex compliance and regulatory requirements.',
                    'Shortage of skilled cybersecurity professionals.',
                    'Need for 24/7 monitoring and rapid incident response.',
                    'Protecting sensitive data across hybrid environments.'
                  ].map((challenge, index) => (
                    <li key={index} className="flex items-start text-slate-600">
                      <span className="text-[#002E6D] mr-2">•</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Portfolio */}
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-[#002E6D] mb-4">Our Cybersecurity Portfolio:</h3>
                <ul className="space-y-3">
                  {[
                    'Security Operations (SecOps) & Managed Security (MSSP)',
                    'Exposure & Vulnerability Management',
                    'Network & Infrastructure Security',
                    'Cloud Security',
                    'Application Security',
                    'Data Security',
                    'Identity & Access Management (IAM)',
                    'Endpoint Security',
                    'Specialized Threat Detection & Prevention'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start text-slate-600">
                      <span className="text-[#002E6D] mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Security Operations Section */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-[#002E6D] mb-8"
          >
            Security Operations (SecOps) & Managed Security (MSSP)
          </motion.h2>
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: false }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="bg-white rounded-2xl shadow-md p-8 md:p-12"
          >
            {/* Main Content Area (Headline, Intro, Image) */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left Column: Headline and Intro */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h3 className="text-3xl font-bold text-[#002E6D] leading-tight mb-4">
                  Intelligent Security Operations & 24/7 Managed Detection and Response
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Gain continuous visibility and expert oversight of your security posture with our comprehensive Security Operations and Managed Security Services, delivered through ST-CyberSOC Team. We combine advanced technologies like SIEM and SOAR with human expertise for proactive threat hunting, real-time monitoring, and rapid incident response.
                </p>
              </motion.div>

              {/* Right Column: Image Placeholder */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
                className="relative h-[300px] rounded-xl overflow-hidden"
              >
                <Image
                  src="/images/solutions/solution-pages/cyber-secops.webp"
                  alt="Security Operations Center"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </div>

            {/* New content added below the main grid */}
            <div className="mt-12 space-y-8">
              <div>
                <h4 className="text-xl font-semibold text-[#002E6D] mb-4">Key Services & Capabilities:</h4>
                <ul className="space-y-4 text-slate-600 leading-relaxed">
                  <li>
                    <h5 className="font-semibold text-[#002E6D]">SOC Solutions:</h5>
                    <p className="ml-4">Design, build, operate, and transfer (BOT) customized Security Operations Centers tailored to your needs.</p>
                  </li>
                  <li className="space-y-2">
                    <h5 className="font-semibold text-[#002E6D]">Managed SOC (SOCaaS):</h5>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start">
                        <span className="text-[#002E6D] mr-2">•</span>
                        <span>24/7 Monitoring & Alerting: Continuous surveillance of logs and network traffic.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#002E6D] mr-2">•</span>
                        <span>SIEM/SOAR as a Service: Leveraging platforms for intelligent correlation, automation, and orchestration.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#002E6D] mr-2">•</span>
                        <span>Incident Triage & Analysis: Expert investigation of potential threats.</span>
                      </li>
                    </ul>
                  </li>
                  <li className="space-y-2">
                    <h5 className="font-semibold text-[#002E6D]">Managed Detection & Response (MDR):</h5>
                    <ul className="space-y-2 ml-4">
                       <li className="flex items-start">
                        <span className="text-[#002E6D] mr-2">•</span>
                        <span>Proactive Threat Hunting: Actively searching for indicators of compromise (IoCs) that evade automated detection.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#002E6D] mr-2">•</span>
                        <span>Advanced Endpoint/Network/Cloud Monitoring: Utilizing EDR/NDR/XDR principles.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#002E6D] mr-2">•</span>
                        <span>Guided Response & Remediation: Expert assistance in containing and eradicating threats. (Leveraging partners like Rapid7).</span>
                      </li>
                    </ul>
                  </li>
                   <li className="flex items-start">
                    <span className="text-[#002E6D] mr-2">•</span>
                    <span><strong>Threat Intelligence:</strong> Curated feeds and analysis on relevant threats, vulnerabilities, and attacker tactics.</span>
                  </li>
                   <li className="space-y-2">
                    <h5 className="font-semibold text-[#002E6D]">Incident Response:</h5>
                    <ul className="space-y-2 ml-4">
                       <li className="flex items-start">
                        <span className="text-[#002E6D] mr-2">•</span>
                        <span>Retainer & Emergency Services (CERT): Rapid deployment of experts to manage active breaches.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#002E6D] mr-2">•</span>
                        <span>Digital Forensics: Investigation to understand attack vectors and impact.</span>
                      </li>
                    </ul>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#002E6D] mr-2"> •</span>
                    <span><strong>Generative AI for SOC:</strong> Enhancing detection accuracy, speeding up investigations, and automating reporting through AI.</span>
                  </li>
                </ul>
              </div>

              {/* Benefits */}
              <div className="mt-8 space-y-4">
                <div>
                   <h4 className="text-xl font-semibold text-[#002E6D] mb-4">Benefits:</h4>
                   <p className="text-slate-600 leading-relaxed">
                    Reduced dwell time for threats, faster response, improved security posture, access to expert skills, predictable costs, compliance support.
                   </p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Exposure & Vulnerability Management Section */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-[#002E6D] mb-8"
          >
            Exposure & Vulnerability Management
          </motion.h2>
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: false }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="bg-white rounded-2xl shadow-md p-8 md:p-12"
          >
            {/* Main Content Area (Headline, Intro, Image) */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left Column: Headline and Intro */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h3 className="text-3xl font-bold text-[#002E6D] leading-tight mb-4">
                  Proactively Reduce Your Attack Surface
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Understand and minimize your cyber risk by continuously identifying, prioritizing, and remediating vulnerabilities across your entire digital footprint. Our services leverage leading platforms like Tenable and Rapid7 to provide a unified view of your exposure.
                </p>
              </motion.div>

              {/* Right Column: Image Placeholder */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
                className="relative h-[300px] rounded-xl overflow-hidden"
              >
                <Image
                  src="/images/solutions/solution-pages/cyber-proactive.webp"
                  alt="Exposure & Vulnerability Management"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </div>

            {/* Key Services & Capabilities */}
            <div className="mt-12 space-y-8">
              <div>
                <h4 className="text-xl font-semibold text-[#002E6D] mb-4">Key Services & Capabilities:</h4>
                <ul className="space-y-4">
                  <li className="space-y-2">
                    <h5 className="font-semibold text-[#002E6D]">Vulnerability Assessment & Management:</h5>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start">
                        <span className="text-[#002E6D] mr-2">•</span>
                        <span><strong>Comprehensive Scanning:</strong> Discover vulnerabilities across IT infrastructure, cloud assets, web applications, containers, OT, and IoT devices.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#002E6D] mr-2">•</span>
                        <span><strong>Risk-Based Prioritization:</strong> Focus remediation efforts on the vulnerabilities posing the greatest threat, considering exploitability and asset criticality.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#002E6D] mr-2">•</span>
                        <span><strong>Remediation Guidance & Tracking:</strong> Actionable advice and integration with patching/ticketing systems.</span>
                      </li>
                    </ul>
                  </li>
                  <li className="space-y-2">
                    <h5 className="font-semibold text-[#002E6D]">Exposure Management:</h5>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start">
                        <span className="text-[#002E6D] mr-2">•</span>
                        <span><strong>Unified Attack Surface Visibility:</strong> Consolidate asset and vulnerability data from multiple sources (Tenable One, Rapid7 Insight Platform).</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#002E6D] mr-2">•</span>
                        <span><strong>Attack Path Analysis:</strong> Visualize how attackers could chain vulnerabilities and exposures to reach critical assets.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#002E6D] mr-2">•</span>
                        <span><strong>Security Posture Benchmarking & Reporting:</strong> Measure and communicate cyber risk effectively to stakeholders.</span>
                      </li>
                    </ul>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#002E6D] mr-2">•</span>
                    <span><strong>External Attack Surface Monitoring (EASM):</strong> Continuous discovery and assessment of your internet-facing assets and associated risks.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#002E6D] mr-2">•</span>
                    <span><strong>Penetration Testing & Red Teaming:</strong> Simulate real-world attacks to validate security controls and identify exploitable weaknesses.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Benefits */}
            <div className="mt-8 space-y-4">
              <div>
                 <h4 className="text-xl font-semibold text-[#002E6D] mb-4">Benefits:</h4>
                 <ul className="space-y-2 text-slate-600">
                   <li className="flex items-start">
                     <span className="text-[#002E6D] mr-2">•</span>
                     <span>Reduced likelihood of breaches.</span>
                   </li>
                   <li className="flex items-start">
                     <span className="text-[#002E6D] mr-2">•</span>
                     <span>Optimized remediation efforts.</span>
                   </li>
                   <li className="flex items-start">
                     <span className="text-[#002E6D] mr-2">•</span>
                     <span>Improved compliance posture (e.g., PCI DSS).</span>
                   </li>
                   <li className="flex items-start">
                     <span className="text-[#002E6D] mr-2">•</span>
                     <span>Enhanced visibility across complex environments.</span>
                   </li>
                 </ul>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Network & Infrastructure Security Section */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-[#002E6D] mb-8"
          >
            Network & Infrastructure Security
          </motion.h2>
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: false }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="bg-white rounded-2xl shadow-md p-8 md:p-12"
          >
            {/* Main Content Area (Image on Left, Text on Right) */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left Column: Image Placeholder */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
                className="relative h-[300px] rounded-xl overflow-hidden"
              >
                <Image
                  src="/images/solutions/solution-pages/cyber-network.webp"
                  alt="Network & Infrastructure Security"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>

              {/* Right Column: Headline and Intro */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h3 className="text-3xl font-bold text-[#002E6D] leading-tight mb-4">
                  Secure Your Digital Foundation with World-Class Network Protection
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  In today's rapidly evolving digital landscape, securing your network and IT infrastructure is no longer optional—it's a mission-critical priority. From increasing cyberattacks to sophisticated internal threats, organizations face mounting challenges in safeguarding their network perimeter, data centers, cloud environments, and remote users.
                </p>
                <p className="text-slate-600 leading-relaxed">
                   At Symbol Technologies, we deliver advanced Network & Infrastructure Security solutions that ensure your organization remains resilient, compliant, and ready to face tomorrow's threats. Leveraging best-in-class technologies and our deep industry expertise, we help you build a secure, scalable, and agile network environment.
                </p>
              </motion.div>
            </div>

            {/* Technology Partners */}
            <div className="mt-12 space-y-8">
              <div>
                <h4 className="text-xl font-semibold text-[#002E6D] mb-4">End-to-End Protection Powered by Industry Leaders</h4>
                <p className="text-slate-600 leading-relaxed mb-6">
                  To deliver uncompromising security, we partner with some of the most trusted names in the cybersecurity industry, including:
                </p>
                <ul className="space-y-4 text-slate-600">
                  <li className="flex items-start">
                    <span className="text-[#002E6D] mr-2">•</span>
                    <span>
                      <strong>Fortinet –</strong> Offering high-performance Next-Generation Firewalls (NGFWs), Secure SD-WAN, and FortiGate threat intelligence, Fortinet forms the backbone of our perimeter defense architecture.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#002E6D] mr-2">•</span>
                    <span>
                      <strong>Cisco –</strong> From Cisco Secure Firewalls and Identity Services Engine (ISE) to Cisco Umbrella, we integrate Cisco's robust ecosystem to provide enterprise-grade network visibility and access control.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#002E6D] mr-2">•</span>
                    <span>
                      <strong>F5 Networks –</strong> F5 plays a critical role in securing your application delivery with Advanced Web Application Firewalls (WAFs), Load Balancers, and SSL traffic inspection, ensuring availability, speed, and protection.
                    </span>
                  </li>
                   <li className="flex items-start">
                    <span className="text-[#002E6D] mr-2">•</span>
                    <span>
                      <strong>Imperva –</strong> Known for its strong data and application security, Imperva helps protect your business-critical assets against threats like DDoS, bot attacks, and API exploits.
                    </span>
                  </li>
                </ul>
                <p className="text-slate-600 leading-relaxed mt-6">
                   By combining these technologies with our certified engineers and consultants, we offer a layered defense approach that addresses every aspect of your infrastructure security.
                </p>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Related Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">Related Solutions</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allSolutions.filter(s => s.id !== 'cybersecurity').map((solution, index) => (
              /* Animate each solution thumbnail */
              <motion.div
                 key={solution.id}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: false }}
                 transition={{ duration: 0.5, delay: index * 0.1 }}
                 className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow block group"
              >
                <Link href={solution.link} className="block w-full h-full">
                  <h3 className="text-xl font-bold text-[#002E6D] mb-2 group-hover:text-blue-600 transition-colors">{solution.title}</h3>
                  <p className="text-gray-600 mb-3">{solution.description}</p>
                  <span className="text-blue-600 group-hover:text-blue-800 font-semibold inline-flex items-center">
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}