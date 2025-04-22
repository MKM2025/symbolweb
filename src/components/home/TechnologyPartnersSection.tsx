'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function TechnologyPartnersSection() {
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
        className="object-contain"
        onError={() => setError(true)}
      />
    );
  };

  return (
    <section className="bg-gray-50 overflow-hidden relative">
      <div className="container mx-auto">
        <div className="relative">
          <div className="flex animate-scroll whitespace-nowrap py-4">
            {partners.map((partner, index) => (
              <div 
                key={`partner-1-${index}`} 
                className="flex-shrink-0 w-40 h-16 bg-white/90 backdrop-blur-sm flex items-center justify-center px-4"
              >
                <PartnerLogo partner={partner} />
              </div>
            ))}
            {partners.map((partner, index) => (
              <div 
                key={`partner-2-${index}`} 
                className="flex-shrink-0 w-40 h-16 bg-white/90 backdrop-blur-sm flex items-center justify-center px-4"
              >
                <PartnerLogo partner={partner} />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center pb-2">
          <Link 
            href="/partners"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            View All Partners
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
} 