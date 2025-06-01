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
                className="bg-[#e9eef4] border border-yellow-100 rounded-lg p-4 hover:shadow-md hover:scale-[1.02] transition-transform flex flex-col items-center justify-center text-center space-y-2"
            >
                <span className="text-2xl md:text-3xl mb-2">👨‍💻</span>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight text-center text-[#eab84b]">
                <AnimatedCounter end={50} suffix="+" />
              </div>
                <div className="text-sm sm:text-base font-medium text-[#0a192f]">Work force</div>
            </motion.div>

            {/* Certified Professionals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
                className="bg-[#e9eef4] border border-yellow-100 rounded-lg p-4 hover:shadow-md hover:scale-[1.02] transition-transform flex flex-col items-center justify-center text-center space-y-2"
            >
                <span className="text-2xl md:text-3xl mb-2">🎓</span>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight text-center text-[#eab84b]">
                <AnimatedCounter end={30} suffix="+" />
              </div>
                <div className="text-sm sm:text-base font-medium text-[#0a192f]">Certified Professionals</div>
            </motion.div>

            {/* Satisfied Customers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
                className="bg-[#e9eef4] border border-yellow-100 rounded-lg p-4 hover:shadow-md hover:scale-[1.02] transition-transform flex flex-col items-center justify-center text-center space-y-2"
            >
                <span className="text-2xl md:text-3xl mb-2">🤝</span>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight text-center text-[#eab84b]">
                <AnimatedCounter end={100} suffix="+" />
              </div>
                <div className="text-sm sm:text-base font-medium text-[#0a192f]">Satisfied Customers</div>
            </motion.div>

            {/* Awards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
                className="bg-[#e9eef4] border border-yellow-100 rounded-lg p-4 hover:shadow-md hover:scale-[1.02] transition-transform flex flex-col items-center justify-center text-center space-y-2"
            >
                <span className="text-2xl md:text-3xl mb-2">🏆</span>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight text-center text-[#eab84b]">
                <AnimatedCounter end={8} suffix="+" />
              </div>
                <div className="text-sm sm:text-base font-medium text-[#0a192f]">Awards</div>
            </motion.div>

            {/* Trainees */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
                className="bg-[#e9eef4] border border-yellow-100 rounded-lg p-4 hover:shadow-md hover:scale-[1.02] transition-transform flex flex-col items-center justify-center text-center space-y-2"
            >
                <span className="text-2xl md:text-3xl mb-2">🧑‍🏫</span>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight text-center text-[#eab84b]">
                <AnimatedCounter end={1000} suffix="+" />
              </div>
                <div className="text-sm sm:text-base font-medium text-[#0a192f]">Trainees</div>
              </motion.div>

              {/* Network Users */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="bg-[#e9eef4] border border-yellow-100 rounded-lg p-4 hover:shadow-md hover:scale-[1.02] transition-transform flex flex-col items-center justify-center text-center space-y-2"
              >
                <span className="text-2xl md:text-3xl mb-2">🌐</span>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight text-center text-[#eab84b]">
                  <AnimatedCounter end={300000} suffix="+" />
                </div>
                <div className="text-sm sm:text-base font-medium text-[#0a192f]">Network Users</div>
              </motion.div>

              {/* DC Facility Users */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="bg-[#e9eef4] border border-yellow-100 rounded-lg p-4 hover:shadow-md hover:scale-[1.02] transition-transform flex flex-col items-center justify-center text-center space-y-2"
              >
                <span className="text-2xl md:text-3xl mb-2">🏢</span>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight text-center text-[#eab84b]">
                  <AnimatedCounter end={100000} suffix="+" />
                </div>
                <div className="text-sm sm:text-base font-medium text-[#0a192f]">DC Facility Users</div>
              </motion.div>

              {/* Secure Email Users */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="bg-[#e9eef4] border border-yellow-100 rounded-lg p-4 hover:shadow-md hover:scale-[1.02] transition-transform flex flex-col items-center justify-center text-center space-y-2"
              >
                <span className="text-2xl md:text-3xl mb-2">✉️</span>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight text-center text-[#eab84b]">
                  <AnimatedCounter end={60000} suffix="+" />
                </div>
                <div className="text-sm sm:text-base font-medium text-[#0a192f]">Secure Email Users</div>
              </motion.div>

              {/* Private Cloud Users */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="bg-[#e9eef4] border border-yellow-100 rounded-lg p-4 hover:shadow-md hover:scale-[1.02] transition-transform flex flex-col items-center justify-center text-center space-y-2"
              >
                <span className="text-2xl md:text-3xl mb-2">☁️</span>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight text-center text-[#eab84b]">
                  <AnimatedCounter end={80000} suffix="+" />
                </div>
                <div className="text-sm sm:text-base font-medium text-[#0a192f]">Private Cloud Users</div>
              </motion.div>

              {/* Smart Class Students */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="bg-[#e9eef4] border border-yellow-100 rounded-lg p-4 hover:shadow-md hover:scale-[1.02] transition-transform flex flex-col items-center justify-center text-center space-y-2"
              >
                <span className="text-2xl md:text-3xl mb-2">🖥️</span>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight text-center text-[#eab84b]">
                  <AnimatedCounter end={20000} suffix="+" />
                </div>
                <div className="text-sm sm:text-base font-medium text-[#0a192f]">Smart Class Students</div>
              </motion.div>

              {/* UC Solution Users */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="bg-[#e9eef4] border border-yellow-100 rounded-lg p-4 hover:shadow-md hover:scale-[1.02] transition-transform flex flex-col items-center justify-center text-center space-y-2"
              >
                <span className="text-2xl md:text-3xl mb-2">🗣️</span>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight text-center text-[#eab84b]">
                  <AnimatedCounter end={2000} suffix="+" />
                </div>
                <div className="text-sm sm:text-base font-medium text-[#0a192f]">UC Solution Users</div>
              </motion.div>

              {/* VC Solution Users */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="bg-[#e9eef4] border border-yellow-100 rounded-lg p-4 hover:shadow-md hover:scale-[1.02] transition-transform flex flex-col items-center justify-center text-center space-y-2"
              >
                <span className="text-2xl md:text-3xl mb-2">🎥</span>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight text-center text-[#eab84b]">
                  <AnimatedCounter end={2000} suffix="+" />
                </div>
                <div className="text-sm sm:text-base font-medium text-[#0a192f]">VC Solution Users</div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Our Mission</h2>
              <p className="text-lg leading-relaxed text-justify">
                To empower organizations with AI-driven ICT solutions that accelerate digital transformation, enhance operational efficiency, and ensure robust, future-ready systems. By integrating cutting-edge technologies and ethical business practices, we deliver secure, scalable, and cost-effective services that maximize value for our clients. Together with our trusted partners, we strive to shape Africa's digital landscape and drive sustainable impact across industries.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="bg-gradient-to-r from-[#E6B94F] via-[#FFF9D4] to-[#E6B94F] text-[#0a2a4a] rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Our Vision</h2>
              <p className="text-lg leading-relaxed text-justify">
                To be one of Africa's leading ICT solutions provider, pioneering AI-driven digital transformation and setting the benchmark for enterprise IT and cybersecurity. Through innovation, automation, and intelligent systems integration, we empower organizations with secure, scalable, and future-ready technologies that drive sustainable growth.
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
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700 text-base md:text-lg">
                  <span className="mt-1 text-2xl">
                    {index === 0 && '🌐'}
                    {index === 1 && '🗄️'}
                    {index === 2 && '📞'}
                    {index === 3 && '☁️'}
                    {index === 4 && '🔋'}
                    {index === 5 && '🖥️'}
                    {index === 6 && '🌍'}
                    {index === 7 && '🛡️'}
                    {index === 8 && '🐧'}
                    {index === 9 && '🎓'}
                  </span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
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
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className="flex items-center space-x-4 bg-[#e9eef4] p-4 rounded-lg"
                >
                  <span className="text-2xl">
                    {index === 0 && '🌍'}
                    {index === 1 && '🏆'}
                    {index === 2 && '🤝'}
                    {index === 3 && '👨‍💼'}
                  </span>
                  <span className="font-semibold text-lg md:text-xl tracking-wide text-[#0a192f] font-serif">{reason}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 