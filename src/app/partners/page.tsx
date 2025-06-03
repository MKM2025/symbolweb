'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function PartnersPage() {
  const partners = [
    { name: 'Cisco', category: 'Networking' },
    { name: 'Fortinet', category: 'Cyber, Data, Cloud & Network Security' },
    { name: 'HPE', category: 'Infrastructure & Virtualization' },
    { name: 'Microsoft', category: 'Cloud & Software' },
    { name: 'Oracle', category: 'Cloud & Software' },
    { name: 'VMware', category: 'Infrastructure & Virtualization' },
    { name: 'F5', category: 'Application Delivery' },
    { name: 'Tenable', category: 'Cyber, Data, Cloud & Network Security' },
    { name: 'Imperva', category: 'Cyber, Data, Cloud & Network Security' },
    { name: 'Veeam', category: 'Backup & Recovery' },
    { name: 'Eaton', category: 'Power' },
    { name: 'Vertiv', category: 'Infrastructure & Virtualization' },
    { name: 'Nutanix', category: 'Infrastructure & Virtualization' },
    { name: 'Cisco', category: 'Infrastructure & Virtualization' },
    { name: 'Dell', category: 'Hardware' },
    { name: 'Mitel', category: 'Communications' },
    { name: 'Arista', category: 'Networking' },
    { name: 'Rapid7', category: 'Cyber, Data, Cloud & Network Security' },
    { name: 'Symantec', category: 'Cyber, Data, Cloud & Network Security' },
    { name: 'ForcePoint', category: 'Cyber, Data, Cloud & Network Security' },
    { name: 'Thales', category: 'Cyber, Data, Cloud & Network Security' },
    { name: 'ManageEngine', category: 'Cyber, Data, Cloud & Network Security' },
    { name: 'Cummins', category: 'Power' },
    { name: 'Odoo', category: 'Cloud & Software' },
  ];

  // Group partners by category
  const partnersByCategory = partners.reduce((acc, partner) => {
    if (!acc[partner.category]) {
      acc[partner.category] = [];
    }
    acc[partner.category].push(partner);
    return acc;
  }, {} as Record<string, typeof partners>);

  // Define a custom order for categories
  const categoryOrder = [
    'Cyber, Data, Cloud & Network Security',
    'Infrastructure & Virtualization',
    'Networking',
    'Cloud & Software',
    'Application Delivery',
    'Backup & Recovery',
    'Power',
    'Hardware',
    'Communications',
  ];

  // Sort categories based on the custom order
  const sortedCategories = Object.entries(partnersByCategory).sort(([catA], [catB]) => {
    const indexA = categoryOrder.indexOf(catA);
    const indexB = categoryOrder.indexOf(catB);
    // Handle categories not in the custom order by placing them at the end
    if (indexA === -1 && indexB === -1) return 0;
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;
    return indexA - indexB;
  });

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
                        Our Trusted Technology Partners
                        <motion.div
                          className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          transition={{ duration: 0.8, delay: 0.4 }}
                        />
                      </span>
                    </motion.h2>
                    <motion.h3 
                      className="text-xl md:text-2xl font-semibold text-[#FFD700]"
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    >
                      Accelerating Innovation Through Collaboration
                    </motion.h3>
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
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    >
                      At Symbol Technologies, our strength lies in the company we keep. We proudly collaborate with globally recognized technology leaders whose platforms and solutions form the foundation of our services—from cloud and cybersecurity to infrastructure and digital transformation.
                    </motion.p>
                    <motion.p 
                      className="leading-relaxed text-justify"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    >
                      These partnerships enable us to deliver robust, future-ready solutions tailored to your business needs. Explore the industry pioneers we work with to bring you world-class innovation.
                    </motion.p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Partners Grid */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:max-w-7xl lg:mx-auto">
            {sortedCategories.map(([category, categoryPartners]) => (
              <div
                key={category}
                className={
                  `mb-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center border border-[#FFE5A0]/20 bg-blue-50
                  ${(category === 'Cyber, Data, Cloud & Network Security' || category === 'Infrastructure & Virtualization') ? 'lg:col-span-2' : ''}` // Make security and infra categories span full width on lg
                }
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.6 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="relative w-full"
                >
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#FFD700]/10 rounded-full blur-2xl"></div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#0a2a4a]/50 rounded-full blur-2xl"></div>
                  
                  {/* Title Container */}
                  <div className="relative bg-gradient-to-br from-[#0a192f]/95 to-[#0a2a4a]/95 backdrop-blur-sm rounded-t-2xl border-b border-[#FFD700]/20 shadow-2xl overflow-hidden">
                    {/* Animated Border Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFD700]/20 to-transparent animate-gradient-x"></div>
                    
                    <div className="p-6 relative">
                      {/* Inner Glow Effects */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/5 to-transparent opacity-50"></div>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
                      
                      <motion.h2
                        className="text-2xl font-bold text-center text-[#FFF9C4] relative z-10"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                      >
                        <span className="relative inline-block">
                          {category}
                          <motion.div
                            className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                          />
                        </span>
                      </motion.h2>
                    </div>
                  </div>
                </motion.div>
                {(category === 'Cyber, Data, Cloud & Network Security' || category === 'Infrastructure & Virtualization') ? (
                  // Grid layout for Security and Infra logos on mobile, horizontal on larger screens
                  <div className="grid grid-cols-2 gap-4 py-2 w-full justify-items-center lg:flex lg:flex-row lg:overflow-x-auto lg:justify-center lg:items-center scrollbar-hide">
                    {categoryPartners.map((partner) => (
                      <div
                        key={partner.name}
                        className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center w-36 h-24 p-2 md:p-4 relative overflow-hidden"
                      >
                        {/* Subtle gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        <div className="relative w-full h-full flex items-center justify-center">
                          <Image
                            src={`/images/partners/${partner.name.toLowerCase()}.png`}
                            alt={`${partner.name} logo`}
                            fill
                            className="object-contain w-full h-full p-2 transition-all duration-300 group-hover:brightness-110 group-hover:contrast-110"
                            sizes="(max-width: 768px) 30vw, (max-width: 1024px) 20vw, 10vw"
                            priority
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  // Original grid for other categories
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full justify-items-center p-4">
                    {categoryPartners.map((partner) => (
                      <div
                        key={partner.name}
                        className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center w-32 h-20 sm:w-36 sm:h-24 md:w-40 md:h-28 p-2 relative overflow-hidden"
                      >
                        {/* Subtle gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        <div className="relative w-full h-full flex items-center justify-center">
                          <Image
                            src={`/images/partners/${partner.name.toLowerCase()}.png`}
                            alt={`${partner.name} logo`}
                            fill
                            className="object-contain w-full h-full p-2 transition-all duration-300 group-hover:brightness-110 group-hover:contrast-110"
                            sizes="(max-width: 640px) 30vw, (max-width: 768px) 25vw, 20vw"
                            priority
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
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

      <style jsx>{`
        @keyframes scroll-partners {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-partners {
          animation: scroll-partners 220s linear infinite;
        }
        .animate-scroll-partners:hover,
        .animate-scroll-partners.paused {
          animation-play-state: paused;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
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