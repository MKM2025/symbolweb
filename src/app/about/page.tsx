'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] w-full max-w-[1920px] mx-auto overflow-hidden">
        <div className="absolute inset-0 bg-[#0a192f]">
          <Image
            src="/images/about/hero_about_desktop.webp"
            alt="About Us Hero"
            fill
            priority
            className="object-cover object-center hidden md:block"
            quality={90}
            sizes="100vw"
          />
          <Image
            src="/images/about/hero_about_mobile.webp"
            alt="About Us Hero"
            fill
            priority
            className="object-cover object-center md:hidden"
            quality={90}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        </div>

        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center portrait:justify-start portrait:pt-16 landscape:items-start">
          <div className="max-w-2xl ml-0 pl-4 sm:pl-8 portrait:ml-6 portrait:mt-0 landscape:mt-8 md:mt-[-150px] portrait:items-start portrait:text-left portrait:pr-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-2xl sm:text-4xl md:text-6xl font-bold text-[#FFF9C4] mb-2 sm:mb-4 md:mb-6 drop-shadow-lg leading-tight max-w-lg text-left"
            >
              About Symboltech
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="text-base sm:text-lg md:text-xl text-[#FFF9C4] mb-4 sm:mb-6 md:mb-8 drop-shadow-md max-w-xl text-left"
            >
              Empowering businesses with innovative ICT solutions and cutting-edge technology services.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be one of Africa's leading ICT solutions provider, pioneering AI-driven digital transformation and setting the benchmark for enterprise IT and cybersecurity. Through innovation, automation, and intelligent systems integration, we empower organizations with secure, scalable, and future-ready technologies that drive sustainable growth.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower organizations with AI-driven ICT solutions that accelerate digital transformation, enhance operational efficiency, and ensure robust, future-ready systems. By integrating cutting-edge technologies and ethical business practices, we deliver secure, scalable, and cost-effective services that maximize value for our clients. Together with our trusted partners, we strive to shape Africa's digital landscape and drive sustainable impact across industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the sections... */}
    </main>
  );
} 