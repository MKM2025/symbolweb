'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import React from 'react';

export default function TechnologyPartnersSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const partners = [
    { name: 'Cisco', logo: '/images/partners/cisco.png' },
    { name: 'Fortinet', logo: '/images/partners/fortinet.png' },
    { name: 'HPE', logo: '/images/partners/hpe.png' },
    { name: 'Microsoft', logo: '/images/partners/microsoft.png' },
    { name: 'VMware', logo: '/images/partners/vmware.png' },
    { name: 'F5', logo: '/images/partners/f5.png' },
    { name: 'Tenable', logo: '/images/partners/tenable.png' },
    { name: 'Imperva', logo: '/images/partners/imperva.png' },
    { name: 'Veeam', logo: '/images/partners/veeam.png' },
    { name: 'Eaton', logo: '/images/partners/eaton.png' },
    { name: 'Vertiv', logo: '/images/partners/vertiv.png' },
    { name: 'Dell', logo: '/images/partners/dell.png' },
    { name: 'Mitel', logo: '/images/partners/mitel.png' },
    { name: 'Arista', logo: '/images/partners/arista.png' },
    { name: 'Rapid7', logo: '/images/partners/rapid7.png' },
    { name: 'Symantec', logo: '/images/partners/symantec.png' },
    { name: 'ForcePoint', logo: '/images/partners/forcepoint.png' }
  ];

  const PartnerLogo = ({ partner }: { partner: { name: string; logo: string } }) => {
    const [error, setError] = useState(false);

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

  // Create an array that's double the size of partners for seamless scrolling
  const doubledPartners = [...partners, ...partners];

  return (
    <section className="bg-gray-50 overflow-hidden relative w-full">
      <div className="w-full">
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex whitespace-nowrap py-4 overflow-x-hidden"
          >
            <div className="flex animate-scroll">
              {doubledPartners.map((partner, index) => (
                <div 
                  key={`partner-${index}`} 
                  className="inline-flex flex-shrink-0 w-40 h-16 bg-white/90 backdrop-blur-sm items-center justify-center px-4 mx-2 overflow-hidden"
                >
                  <PartnerLogo partner={partner} />
                </div>
              ))}
              {/* Add first few logos again at the end to ensure smooth transition */}
              {partners.slice(0, 3).map((partner, index) => (
                <div 
                  key={`partner-extra-${index}`} 
                  className="inline-flex flex-shrink-0 w-40 h-16 bg-white/90 backdrop-blur-sm items-center justify-center px-4 mx-2 overflow-hidden"
                >
                  <PartnerLogo partner={partner} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 