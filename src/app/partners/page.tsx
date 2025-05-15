'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function PartnersPage() {
  const partners = [
    { name: 'Cisco', category: 'Networking' },
    { name: 'Fortinet', category: 'Cybersecurity' },
    { name: 'HPE', category: 'Infrastructure' },
    { name: 'Microsoft', category: 'Cloud & Software' },
    { name: 'VMware', category: 'Virtualization' },
    { name: 'F5', category: 'Application Delivery' },
    { name: 'Tenable', category: 'Security' },
    { name: 'Imperva', category: 'Data Security' },
    { name: 'Veeam', category: 'Backup & Recovery' },
    { name: 'Eaton', category: 'Power Management' },
    { name: 'Vertiv', category: 'Infrastructure' },
    { name: 'Dell', category: 'Hardware' },
    { name: 'Mitel', category: 'Communications' },
    { name: 'Arista', category: 'Networking' },
    { name: 'Rapid7', category: 'Security' },
    { name: 'Symantec', category: 'Cybersecurity' },
    { name: 'ForcePoint', category: 'Security' }
  ];

  // Group partners by category
  const partnersByCategory = partners.reduce((acc, partner) => {
    if (!acc[partner.category]) {
      acc[partner.category] = [];
    }
    acc[partner.category].push(partner);
    return acc;
  }, {} as Record<string, typeof partners>);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-screen h-[300px] flex items-center justify-start mb-8">
        <div className="absolute inset-0 bg-[#0a192f]">
          <Image
            src="/images/partners/hero_partners_desktop.webp"
            alt="Partners Hero"
            fill
            priority
            className="object-cover object-center z-0 hidden md:block"
            quality={90}
            sizes="(max-width: 768px) 100vw, 100vw"
          />
          <Image
            src="/images/partners/hero_partners_mobile.webp"
            alt="Partners Hero"
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
            Our Technology Partners
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-base sm:text-lg md:text-lg text-[#FFF9C4] w-full max-w-full text-center md:text-left"
          >
            Collaborating with Industry Leaders and Top Tech Innovators to deliver Cutting-Edge Solutions.
          </motion.p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:max-w-7xl lg:mx-auto">
            {Object.entries(partnersByCategory).map(([category, categoryPartners]) => (
              <div
                key={category}
                className="mb-8 rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] transition-all duration-300 flex flex-col items-center"
                style={{ background: 'linear-gradient(120deg, rgba(255,245,200,0.13) 0%, rgba(255,230,140,0.08) 100%)' }}
              >
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.6 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="text-2xl font-bold mb-6 text-gray-900 text-center border-b border-gray-100 pb-4 w-full"
                >
                  {category}
                </motion.h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4 w-full justify-items-center">
                  {categoryPartners.map((partner) => (
                    <div
                      key={partner.name}
                      className="bg-gray-50 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center w-40 h-24 p-2 md:p-4"
                    >
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Image
                          src={`/images/partners/${partner.name.toLowerCase()}.png`}
                          alt={`${partner.name} logo`}
                          fill
                          className="object-contain w-full h-full"
                          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                          priority
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="py-16 bg-gray-50"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Become a Partner</h2>
            <p className="mt-4 text-lg text-gray-600">
              Whether you're a technology vendor or a joint contractor, we're always open to meaningful collaboration. If you're interested in working with Symbol Technologies to deliver impactful solutions, we'd be glad to connect with you.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-6 bg-[#0a2a4a] text-[#FFD700] px-6 py-3 rounded-lg font-semibold hover:bg-blue-950 transition-colors"
            >
              Become a Partner
            </Link>
          </div>
        </div>
      </motion.section>
    </main>
  );
} 