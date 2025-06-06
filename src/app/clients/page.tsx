'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const clientCategories = {
  Financial: [
    'NIB International Bank',
    'Awash International Bank',
    'Abay Bank',
    'Commercial Bank of Ethiopia',
    'Ethiopian Insurance Corporation',
    'Ethswitch',
    'Premier Switching Solutions (PSS)'
  ],
  Government: [
    'Ethiotelecom',
    'Ethiopian Agricultural Transformation',
    'Ministry of Revenue'
  ],
  Education: [
    'Addis Ababa University',
    'University of Gondar',
    'Jimma University',
    'Dilla University'
  ],
  Others: []
};

const clientLogos: Record<string, string | undefined> = {
  'NIB International Bank': '/images/clients/client-logo/nib-bank.svg',
  'Awash International Bank': '/images/clients/client-logo/awash-bank-logo.svg',
  'Abay Bank': '/images/clients/client-logo/abay-bank-logo.svg',
  'Commercial Bank of Ethiopia': '/images/clients/client-logo/cbe.svg',
  'Ethiopian Insurance Corporation': '/images/clients/client-logo/eic.svg',
  'Ethswitch': '/images/clients/client-logo/ethswitch.svg',
  'Premier Switching Solutions (PSS)': '/images/clients/client-logo/pss.svg',
  'Ethiotelecom': '/images/clients/client-logo/ethio-telecom.svg',
  'Ethiopian Agricultural Transformation': '/images/clients/client-logo/agricultural-transformation-logo.svg',
  'Ministry of Revenue': '/images/clients/client-logo/ministry-of-revenue.svg',
  'Addis Ababa University': '/images/clients/client-logo/aau-logo.svg',
  'University of Gondar': '/images/clients/client-logo/university-of-gondar.svg',
  'Jimma University': '/images/clients/client-logo/jimma-university.svg',
  'Dilla University': '/images/clients/client-logo/dilla.svg',
};

export default function ClientsPage() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative w-screen h-[300px] flex items-center justify-start mb-0">
        <div className="absolute inset-0 bg-[#0a192f]">
          <Image
            src="/images/clients/hero_clients_desktop.webp"
            alt="Our Clients"
            fill
            priority
            className="object-cover object-center z-0 hidden md:block"
            quality={90}
            sizes="(max-width: 768px) 100vw, 100vw"
          />
          <Image
            src="/images/clients/hero_clients_mobile.webp"
            alt="Our Clients"
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
            className="text-3xl sm:text-4xl md:text-4xl font-bold text-[#FFF9C4] mb-4 mt-[1em] text-center md:text-left w-full max-w-full"
          >
            Our Valued Clients
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-base sm:text-lg md:text-lg text-[#FFF9C4] w-full max-w-full text-center md:text-left"
          >
            Empowering Our Clients Through Lasting Technology Partnerships
          </motion.p>
        </div>
      </section>

      {/* Introduction Section */}
      <motion.section 
        className="py-16 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-5xl mx-auto relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#FFD700]/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#0a2a4a]/50 rounded-full blur-2xl"></div>
            
            {/* Main Container */}
            <div className="relative bg-gradient-to-br from-[#0a192f]/95 to-[#0a2a4a]/95 backdrop-blur-sm rounded-2xl border border-[#FFD700]/20 shadow-2xl overflow-hidden">
              {/* Animated Border Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFD700]/20 to-transparent animate-gradient-x"></div>
              
              <div className="p-8 md:p-12 relative">
                {/* Inner Glow Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/5 to-transparent opacity-50"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
                
                <div className="flex flex-col items-center space-y-8 relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center"
                  >
                    <motion.h2 
                      className="text-3xl md:text-4xl font-bold text-[#FFF9C4] mb-4 relative"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      <span className="relative inline-block">
                        Driving Impact Across Every Sector
                        <motion.div
                          className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          transition={{ duration: 0.8, delay: 0.4 }}
                        />
                      </span>
                    </motion.h2>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col space-y-6 text-gray-200 text-lg max-w-3xl"
                  >
                    <motion.p 
                      className="leading-relaxed text-justify"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    >
                      We are proud to partner with forward-thinking organizations across government, finance, education, healthcare, and enterprise sectors—delivering reliable, scalable ICT and digital solutions that power their missions and accelerate transformation.
                    </motion.p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Clients Grid */}
      <section className="w-screen pt-0 pb-0 bg-white">
        <div className="px-0">
          <div className="space-y-0">
            {Object.entries(clientCategories).map(([category, clients], idx) => (
              clients.length > 0 && (
                <section key={category} className={`w-screen space-y-8 py-8 ${(idx % 2 === 0) ? 'bg-white' : 'bg-[#f3f6fb]'}`}> 
                  <div className="max-w-7xl mx-auto px-4">
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.6 }}
                      transition={{ duration: 0.7, ease: 'easeOut' }}
                      className="text-3xl font-semibold text-blue-900 border-b-2 border-blue-100 pb-4 text-center w-full"
                    >
                      {category} Sector
                    </motion.h2>
                    <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center w-full">
                      {clients.map((client) => (
                        <motion.div 
                          key={client}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: false, amount: 0.4 }}
                          transition={{ duration: 0.7, ease: 'easeOut' }}
                          className="bg-white p-2 sm:p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow min-w-0 flex flex-col items-center justify-center w-full max-w-xs"
                        >
                          {/* Logo display */}
                          {clientLogos[client] ? (
                            <Image
                              src={clientLogos[client]}
                              alt={client + ' logo'}
                              width={120}
                              height={80}
                              className="object-contain h-16 sm:h-24 md:h-32 w-auto mx-auto mb-2 sm:mb-4"
                              style={{ maxHeight: '8rem', maxWidth: '100%' }}
                              priority={false}
                            />
                          ) : (
                            <div className="h-16 sm:h-24 md:h-32 bg-gray-50 rounded-lg mb-2 sm:mb-4 flex items-center justify-center overflow-hidden w-full">
                              <span className="text-xs sm:text-sm md:text-base text-gray-400 text-center break-words px-1">Logo Coming Soon</span>
                            </div>
                          )}
                          <h3 className="text-xs sm:text-sm md:text-lg font-medium text-gray-900 text-center break-words px-1 w-full">{client}</h3>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </section>
              )
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 8s ease infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </main>
  );
} 