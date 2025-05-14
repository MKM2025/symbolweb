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

      {/* Statistics Section */}
      <motion.section
        className="py-6 md:py-12 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="container mx-auto px-2 sm:px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 flex flex-col gap-6 border border-gray-100 max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#0a2a4a]"
            >
              Key Metrics That Define Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
              className="text-lg sm:text-xl text-center text-gray-600 mb-4"
            >
              Trusted by thousands across industries and regions.
            </motion.p>
            <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 w-full">
            {/* Work force */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
                className="bg-gradient-to-br from-[#FFFCF5] via-[#FFF9E3] to-[#FFF6CC] border border-yellow-100 rounded-lg p-4 hover:shadow-md hover:scale-[1.02] transition-transform flex flex-col items-center justify-center text-center space-y-2"
            >
                <div className="bg-blue-100 p-2 rounded-full w-8 h-8 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="7" cy="7" r="3" stroke="currentColor" fill="#e3eafc" />
                  <circle cx="17" cy="7" r="3" stroke="currentColor" fill="#e3eafc" />
                  <circle cx="12" cy="17" r="3" stroke="currentColor" fill="#e3eafc" />
                </svg>
              </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0a2a4a] leading-tight text-center">
                <AnimatedCounter end={50} suffix="+" />
              </div>
                <div className="text-sm sm:text-base text-gray-500 font-medium">Work force</div>
            </motion.div>

            {/* Certified Professionals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
                className="bg-gradient-to-br from-[#FFFCF5] via-[#FFF9E3] to-[#FFF6CC] border border-yellow-100 rounded-lg p-4 hover:shadow-md hover:scale-[1.02] transition-transform flex flex-col items-center justify-center text-center space-y-2"
            >
                <div className="bg-blue-100 p-2 rounded-full w-8 h-8 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="4" y="4" width="16" height="16" rx="2" fill="#e3eafc" stroke="currentColor" />
                  <path d="M8 12h8M8 16h8M8 8h8" stroke="#1976d2" strokeWidth="1.5" />
                </svg>
              </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0a2a4a] leading-tight text-center">
                <AnimatedCounter end={30} suffix="+" />
              </div>
                <div className="text-sm sm:text-base text-gray-500 font-medium">Certified Professionals</div>
            </motion.div>

            {/* Satisfied Customers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
                className="bg-gradient-to-br from-[#FFFCF5] via-[#FFF9E3] to-[#FFF6CC] border border-yellow-100 rounded-lg p-4 hover:shadow-md hover:scale-[1.02] transition-transform flex flex-col items-center justify-center text-center space-y-2"
            >
                <div className="bg-blue-100 p-2 rounded-full w-8 h-8 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="8" r="4" fill="#e3eafc" stroke="currentColor" />
                  <path d="M4 20c0-4 8-4 8-4s8 0 8 4" stroke="#1976d2" strokeWidth="1.5" fill="none" />
                </svg>
              </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0a2a4a] leading-tight text-center">
                <AnimatedCounter end={100} suffix="+" />
              </div>
                <div className="text-sm sm:text-base text-gray-500 font-medium">Satisfied Customers</div>
            </motion.div>

            {/* Awards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
                className="bg-gradient-to-br from-[#FFFCF5] via-[#FFF9E3] to-[#FFF6CC] border border-yellow-100 rounded-lg p-4 hover:shadow-md hover:scale-[1.02] transition-transform flex flex-col items-center justify-center text-center space-y-2"
            >
                <div className="bg-blue-100 p-2 rounded-full w-8 h-8 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M7 4h10v2a5 5 0 0 1-10 0V4z" fill="#e3eafc" stroke="currentColor" />
                  <path d="M4 6v2a7 7 0 0 0 7 7h2a7 7 0 0 0 7-7V6" stroke="#1976d2" strokeWidth="1.5" fill="none" />
                  <rect x="9" y="18" width="6" height="2" rx="1" fill="#e3eafc" stroke="currentColor" />
                </svg>
              </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0a2a4a] leading-tight text-center">
                <AnimatedCounter end={8} suffix="+" />
              </div>
                <div className="text-sm sm:text-base text-gray-500 font-medium">Awards</div>
            </motion.div>

            {/* Trainees */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
                className="bg-gradient-to-br from-[#FFFCF5] via-[#FFF9E3] to-[#FFF6CC] border border-yellow-100 rounded-lg p-4 hover:shadow-md hover:scale-[1.02] transition-transform flex flex-col items-center justify-center text-center space-y-2"
            >
                <div className="bg-blue-100 p-2 rounded-full w-8 h-8 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M2 7l10-4 10 4-10 4-10-4z" fill="#e3eafc" stroke="currentColor" />
                  <path d="M12 11v7" stroke="#1976d2" strokeWidth="1.5" />
                  <path d="M7 17h10" stroke="#1976d2" strokeWidth="1.5" />
                </svg>
              </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0a2a4a] leading-tight text-center">
                <AnimatedCounter end={1000} suffix="+" />
              </div>
                <div className="text-sm sm:text-base text-gray-500 font-medium">Trainees</div>
              </motion.div>

              {/* Network Users */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="bg-gradient-to-br from-[#FFFCF5] via-[#FFF9E3] to-[#FFF6CC] border border-yellow-100 rounded-lg p-4 hover:shadow-md hover:scale-[1.02] transition-transform flex flex-col items-center justify-center text-center space-y-2"
              >
                <div className="bg-blue-100 p-2 rounded-full w-8 h-8 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#1976d2" strokeWidth="1.5" fill="none" />
                  </svg>
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0a2a4a] leading-tight text-center">
                  <AnimatedCounter end={300000} suffix="+" />
                </div>
                <div className="text-sm sm:text-base text-gray-500 font-medium">Network Users</div>
              </motion.div>

              {/* DC Facility Users */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="bg-gradient-to-br from-[#FFFCF5] via-[#FFF9E3] to-[#FFF6CC] border border-yellow-100 rounded-lg p-4 hover:shadow-md hover:scale-[1.02] transition-transform flex flex-col items-center justify-center text-center space-y-2"
              >
                <div className="bg-blue-100 p-2 rounded-full w-8 h-8 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="4" y="4" width="16" height="16" rx="2" fill="#e3eafc" stroke="currentColor" />
                    <path d="M8 8h8M8 12h8M8 16h8" stroke="#1976d2" strokeWidth="1.5" />
                  </svg>
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0a2a4a] leading-tight text-center">
                  <AnimatedCounter end={100000} suffix="+" />
                </div>
                <div className="text-sm sm:text-base text-gray-500 font-medium">DC Facility Users</div>
              </motion.div>

              {/* Secure Email Users */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="bg-gradient-to-br from-[#FFFCF5] via-[#FFF9E3] to-[#FFF6CC] border border-yellow-100 rounded-lg p-4 hover:shadow-md hover:scale-[1.02] transition-transform flex flex-col items-center justify-center text-center space-y-2"
              >
                <div className="bg-blue-100 p-2 rounded-full w-8 h-8 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="#1976d2" strokeWidth="1.5" fill="none" />
                  </svg>
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0a2a4a] leading-tight text-center">
                  <AnimatedCounter end={60000} suffix="+" />
                </div>
                <div className="text-sm sm:text-base text-gray-500 font-medium">Secure Email Users</div>
              </motion.div>

              {/* Private Cloud Users */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="bg-gradient-to-br from-[#FFFCF5] via-[#FFF9E3] to-[#FFF6CC] border border-yellow-100 rounded-lg p-4 hover:shadow-md hover:scale-[1.02] transition-transform flex flex-col items-center justify-center text-center space-y-2"
              >
                <div className="bg-blue-100 p-2 rounded-full w-8 h-8 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M3 15a4 4 0 004 4h9a5 5 0 005-5v-4a4 4 0 00-4-4h-9a5 5 0 00-5 5v4z" stroke="#1976d2" strokeWidth="1.5" fill="none" />
                    <path d="M12 12v4M8 14h8" stroke="#1976d2" strokeWidth="1.5" />
                  </svg>
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0a2a4a] leading-tight text-center">
                  <AnimatedCounter end={80000} suffix="+" />
                </div>
                <div className="text-sm sm:text-base text-gray-500 font-medium">Private Cloud Users</div>
              </motion.div>

              {/* Smart Class Students */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="bg-gradient-to-br from-[#FFFCF5] via-[#FFF9E3] to-[#FFF6CC] border border-yellow-100 rounded-lg p-4 hover:shadow-md hover:scale-[1.02] transition-transform flex flex-col items-center justify-center text-center space-y-2"
              >
                <div className="bg-blue-100 p-2 rounded-full w-8 h-8 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" fill="#e3eafc" stroke="currentColor" />
                    <path d="M12 14l9-5-9-5-9 5 9 5z" stroke="#1976d2" strokeWidth="1.5" fill="none" />
                    <path d="M12 14v6" stroke="#1976d2" strokeWidth="1.5" />
                  </svg>
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0a2a4a] leading-tight text-center">
                  <AnimatedCounter end={20000} suffix="+" />
                </div>
                <div className="text-sm sm:text-base text-gray-500 font-medium">Smart Class Students</div>
              </motion.div>

              {/* UC Solution Users */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="bg-gradient-to-br from-[#FFFCF5] via-[#FFF9E3] to-[#FFF6CC] border border-yellow-100 rounded-lg p-4 hover:shadow-md hover:scale-[1.02] transition-transform flex flex-col items-center justify-center text-center space-y-2"
              >
                <div className="bg-blue-100 p-2 rounded-full w-8 h-8 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" stroke="#1976d2" strokeWidth="1.5" fill="none" />
                  </svg>
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0a2a4a] leading-tight text-center">
                  <AnimatedCounter end={2000} suffix="+" />
                </div>
                <div className="text-sm sm:text-base text-gray-500 font-medium">UC Solution Users</div>
              </motion.div>

              {/* VC Solution Users */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="bg-gradient-to-br from-[#FFFCF5] via-[#FFF9E3] to-[#FFF6CC] border border-yellow-100 rounded-lg p-4 hover:shadow-md hover:scale-[1.02] transition-transform flex flex-col items-center justify-center text-center space-y-2"
              >
                <div className="bg-blue-100 p-2 rounded-full w-8 h-8 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" stroke="#1976d2" strokeWidth="1.5" fill="none" />
                  </svg>
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0a2a4a] leading-tight text-center">
                  <AnimatedCounter end={2000} suffix="+" />
                </div>
                <div className="text-sm sm:text-base text-gray-500 font-medium">VC Solution Users</div>
            </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

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