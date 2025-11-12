'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

export default function TechnologyPartnersSection() {
  const partners = [
    { name: 'Cisco', logo: '/images/partners/cisco.png' },
    { name: 'Fortinet', logo: '/images/partners/fortinet.png' },
    { name: 'HPE', logo: '/images/partners/hpe.png' },
    { name: 'Microsoft', logo: '/images/partners/microsoft.png' },
    { name: 'Oracle', logo: '/images/partners/oracle.png' },
    { name: 'VMware', logo: '/images/partners/vmware.png' },
    { name: 'F5', logo: '/images/partners/f5.png' },
    { name: 'Tenable', logo: '/images/partners/tenable.png' },
    { name: 'Imperva', logo: '/images/partners/imperva.png' },
    { name: 'Veeam', logo: '/images/partners/veeam.png' },
    { name: 'Eaton', logo: '/images/partners/eaton.png' },
    { name: 'Vertiv', logo: '/images/partners/vertiv.png' },
    { name: 'Nutanix', logo: '/images/partners/nutanix.png' },
    { name: 'Dell', logo: '/images/partners/dell.png' },
    { name: 'Mitel', logo: '/images/partners/mitel.png' },
    { name: 'Arista', logo: '/images/partners/arista.png' },
    { name: 'Rapid7', logo: '/images/partners/rapid7.png' },
    { name: 'Symantec', logo: '/images/partners/symantec.png' },
    { name: 'ForcePoint', logo: '/images/partners/forcepoint.png' },
    { name: 'Thales', logo: '/images/partners/thales.png' },
    { name: 'ManageEngine', logo: '/images/partners/manageengine.png' },
    { name: 'Cummins', logo: '/images/partners/cummins.png' },
    { name: 'Odoo', logo: '/images/partners/odoo.png' },
  ];

  const PartnerLogo = ({ partner }: { partner: { name: string; logo: string } }) => {
    const [error, setError] = React.useState(false);
    if (error) {
      return <span className="text-gray-600 font-semibold text-lg">{partner.name}</span>;
    }
    return (
      <Image
        src={partner.logo}
        alt={`${partner.name} logo`}
        width={120}
        height={48}
        className="object-contain w-full h-full max-w-full max-h-full"
        onError={() => setError(true)}
      />
    );
  };

  // Create an array that's triple the size of partners for smoother scrolling
  const tripledPartners = [...partners, ...partners, ...partners];

  return (
    <section id="next-section" className="bg-white overflow-hidden relative w-full py-10 md:py-14 z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-6 md:mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-[#0a2a4a]"
          >
            Our Technology Partners
          </motion.h2>
        </div>
        <div className="w-full">
          <div className="relative">
            <div className="flex whitespace-nowrap py-3 overflow-x-hidden">
              <div className="flex animate-scroll-partners">
                {tripledPartners.map((partner, index) => (
                  <Link
                    key={`partner-${index}`}
                    href="/partners"
                    className="inline-flex flex-shrink-0 w-48 h-14 bg-white/90 backdrop-blur-sm items-center justify-center px-4 mx-2 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <PartnerLogo partner={partner} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-6 md:mt-8">
          <Link href="/partners" className="inline-block bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-[#1a1a1a] px-6 py-3 rounded-lg text-base font-semibold shadow-lg hover:from-[#FFF9D4] hover:via-[#DBA23A] hover:to-[#E6B94F] hover:scale-105 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#E6B94F] active:scale-95">
            Explore all Our Partners
          </Link>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll-partners {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-33.333% - 1rem));
          }
        }
        .animate-scroll-partners {
          animation: scroll-partners 60s linear infinite;
        }
        .animate-scroll-partners:hover {
          animation-play-state: paused;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
} 