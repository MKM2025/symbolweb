'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutUsPage() {
  const services = [
    'LAN & WAN Infrastructure',
    'Data Center & Storage Solutions',
    'IP Telephony & Video Conferencing',
    'Virtualization & Cloud Technologies',
    'Power Backup & Connectivity Solutions',
    'System Integration & ERP Implementations',
    'Web & Intranet Applications',
    'Cybersecurity & Messaging Systems',
    'Open Source Software Solutions',
    'Advanced IT Trainings'
  ];

  const whyChooseUs = [
    'Local Expertise, Global Standards',
    'Proven Track Record in Turnkey ICT Projects',
    'Trusted by Government, Academia & Industry',
    'Strong, Experienced Technical Team'
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-screen h-[300px] flex items-center justify-start mb-8">
        <div className="absolute inset-0 bg-[#0a192f]">
          <Image
            src="/images/aboutus/hero_aboutus_desktop.webp"
            alt="About Us Hero"
            fill
            priority
            className="object-cover object-center z-0 hidden md:block"
            quality={90}
            sizes="(max-width: 768px) 100vw, 100vw"
          />
          <Image
            src="/images/aboutus/hero_aboutus_mobile.webp"
            alt="About Us Hero"
            fill
            priority
            className="object-cover object-center z-0 md:hidden"
            quality={90}
            sizes="(max-width: 768px) 100vw, 100vw"
          />
        </div>
        <div className="relative z-20 flex flex-col items-start justify-center w-full h-full text-left px-4 max-w-2xl mx-auto md:ml-48">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#FFF9C4] mb-4"
          >
            About Symbol Technologies
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-lg sm:text-lg md:text-xl text-[#FFF9C4] max-w-2xl"
          >
            Turnkey Technology. Human Impact. Global Vision.
            We deliver end-to-end ICT and BPO solutions that simplify complexity, drive efficiency, and create lasting value for organizations worldwide.
          </motion.p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-lg"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Symbol Technologies PLC is a leading Ethiopian ICT company with over a decade of experience delivering end-to-end turnkey technology projects across the country. We've successfully implemented hundreds of solutions in telecom, data infrastructure, power, and security systems—earning the trust of government institutions, universities, financial organizations, and enterprises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#0a2a4a] text-[#BF953F] rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg leading-relaxed">
                To empower businesses and institutions across Ethiopia with innovative, reliable, and integrated ICT solutions that drive efficiency, security, and long-term success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#BF953F] text-[#0a2a4a] rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg leading-relaxed">
                To be Ethiopia's most trusted and advanced ICT solution provider—leading the digital transformation of organizations through excellence, integrity, and innovation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-6 text-center text-[#0a2a4a]">What We Do</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              We specialize in delivering reliable, integrated ICT solutions—and we've done it successfully, time and again, for organizations across Ethiopia.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-2 text-gray-700"
                >
                  <svg className="w-5 h-5 text-[#BF953F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{service}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our People Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-6 text-center text-[#0a2a4a]">Our People</h2>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Our strength lies in our diverse and experienced team—ICT professionals, certified project managers, and solution architects with proven expertise in national-scale projects. Their dedication continues to set us apart in the marketplace.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-6 text-center text-[#0a2a4a]">Why Choose Symbol Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyChooseUs.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg"
                >
                  <div className="w-2 h-2 bg-[#BF953F] rounded-full"></div>
                  <span className="text-gray-700">{reason}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 