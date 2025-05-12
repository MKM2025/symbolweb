'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedCounter from '@/components/home/AnimatedCounter';

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
      <section className="relative w-screen h-[300px] flex items-center justify-start">
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFF9C4] mb-4 mt-[1em] text-center md:text-left w-full max-w-full md:whitespace-nowrap"
          >
            About Symbol Technologies
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-base sm:text-lg md:text-lg text-[#FFF9C4] w-full max-w-full text-center md:text-left"
          >
            Turnkey Technology. Human Impact. Global Vision.
          </motion.p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12" style={{ backgroundColor: '#f3f6fb' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-lg text-gray-700 leading-relaxed"
            >
              Symbol Technologies PLC is a leading Ethiopian ICT company with over a decade of experience delivering end-to-end turnkey technology projects across the country. We've successfully implemented hundreds of solutions in telecom, data infrastructure, power, and security systems—earning the trust of government institutions, universities, financial organizations, and enterprises. Our head office is fully equipped with high-speed internet, modern IP contact center solutions, enterprise-grade server infrastructure, and state-of-the-art video conferencing and training facilities—providing a seamless environment for collaboration, service delivery, and continuous learning.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Statistics Section (from landing page) */}
      <section className="py-6 md:py-12 bg-[#f1f5fb]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-8 w-full max-w-none justify-center items-center place-items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-center p-3 md:p-4 bg-white/50 rounded-lg"
            >
              <div className="text-[#FFD700]">
                <AnimatedCounter end={40} suffix="+" />
              </div>
              <div className="text-[#0a2a4a] text-sm md:text-base">Clients Served</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-center p-3 md:p-4 bg-white/50 rounded-lg"
            >
              <div className="text-[#FFD700]">
                <AnimatedCounter end={15} suffix="+" />
              </div>
              <div className="text-[#0a2a4a] text-sm md:text-base">Years in Tech</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-center p-3 md:p-4 bg-white/50 rounded-lg"
            >
              <div className="text-[#FFD700]">
                <AnimatedCounter end={100000} suffix="+" />
              </div>
              <div className="text-[#0a2a4a] text-sm md:text-base">End Users Empowered</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-center p-3 md:p-4 bg-white/50 rounded-lg"
            >
              <div className="text-[#FFD700]">
                <AnimatedCounter end={50} suffix="+" />
              </div>
              <div className="text-[#0a2a4a] text-sm md:text-base">Employees</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-center p-3 md:p-4 bg-white/50 rounded-lg"
            >
              <div className="text-[#FFD700]">
                <AnimatedCounter end={100} suffix="+" />
              </div>
              <div className="text-[#0a2a4a] text-sm md:text-base">Projects Completed</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="bg-[#0a2a4a] text-[#FFF9C4] rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg leading-relaxed">
                To empower businesses and institutions across Ethiopia with innovative, reliable, and integrated ICT solutions that drive efficiency, security, and long-term success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="bg-gradient-to-r from-[#E6B94F] via-[#FFF9D4] to-[#E6B94F] text-[#0a2a4a] rounded-2xl p-8 shadow-lg"
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
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
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
                  viewport={{ once: false, amount: 0.2 }}
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
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
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
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-6 text-center text-[#0a2a4a]">Why Choose Symbol Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyChooseUs.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
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