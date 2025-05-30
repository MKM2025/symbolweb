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

      {/* Intro Section */}
      <section className="w-screen bg-[#f3f6fb] py-8 pb-0">
        <div className="mx-auto px-4 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-6 text-center"
          >
            Driving Impact Across Every Sector
          </motion.h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 text-center">
            We are proud to partner with forward-thinking organizations across government, finance, education, healthcare, and enterprise sectors—delivering reliable, scalable ICT and digital solutions that power their missions and accelerate transformation.
          </p>
        </div>
      </section>

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
    </main>
  );
} 