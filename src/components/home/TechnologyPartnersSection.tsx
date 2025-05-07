'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';

export default function TechnologyPartnersSection() {
  const scrollBarRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = React.useState(false);
  const [fast, setFast] = React.useState(false);

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

  // Create an array that's double the size of partners for seamless scrolling
  const doubledPartners = [...partners, ...partners];

  const handleScrollLeft = () => {
    if (scrollBarRef.current) {
      setPaused(true);
      setFast(true);
      scrollBarRef.current.scrollBy({ left: -576, behavior: 'smooth' });
      setTimeout(() => {
        setPaused(false);
        setTimeout(() => setFast(false), 1000);
      }, 500);
    }
  };

  return (
    <section className="bg-gray-50 overflow-hidden relative w-full pt-0 md:pt-0 pb-0 -mt-8 sm:-mt-12 z-10">
      <div className="w-full">
        <div className="relative">
          <Link href="/partners" className="block">
            <div
              className="flex whitespace-nowrap py-3 overflow-x-hidden cursor-pointer"
              style={{ position: 'relative' }}
            >
              <div
                className="flex animate-scroll-partners scrollbar-hide"
              >
                <div className="flex animate-scroll-partners -ml-8 sm:-ml-12">
                  {doubledPartners.map((partner, index) => (
                    <div
                      key={`partner-${index}`}
                      className="inline-flex flex-shrink-0 w-48 h-14 bg-white/90 backdrop-blur-sm items-center justify-center px-4 mx-2 overflow-hidden shadow-sm"
                    >
                      <PartnerLogo partner={partner} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
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
      `}</style>
    </section>
  );
} 