'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

interface Customer {
  name: string;
  logo: string;
}

const customers: Customer[] = [
  { name: 'Ethiopian Airlines', logo: '/images/customers/ethiopian-airlines.png' },
  { name: 'Ethiopian Electric Power', logo: '/images/customers/eep.png' },
  { name: 'Ethiopian Telecommunications', logo: '/images/customers/ethio-telecom.png' },
  { name: 'Commercial Bank of Ethiopia', logo: '/images/customers/cbe.png' },
  { name: 'Ethiopian Revenue and Customs', logo: '/images/customers/erca.png' },
  { name: 'Ministry of Finance', logo: '/images/customers/mof.png' },
  { name: 'Ministry of Education', logo: '/images/customers/moe.png' },
  { name: 'Ministry of Health', logo: '/images/customers/moh.png' },
  { name: 'Ministry of Agriculture', logo: '/images/customers/moa.png' },
  { name: 'Ministry of Transport', logo: '/images/customers/mot.png' },
  { name: 'Ministry of Trade', logo: '/images/customers/motrade.png' },
  { name: 'Ministry of Foreign Affairs', logo: '/images/customers/mofa.png' },
  { name: 'Ministry of Defense', logo: '/images/customers/mod.png' },
  { name: 'Ministry of Justice', logo: '/images/customers/moj.png' },
  { name: 'Ministry of Labor', logo: '/images/customers/mol.png' },
  { name: 'Ministry of Urban Development', logo: '/images/customers/moud.png' },
  { name: 'Ministry of Water and Energy', logo: '/images/customers/mowe.png' },
  { name: 'Ministry of Science and Technology', logo: '/images/customers/most.png' }
];

export default function CustomersSection() {
  return (
    <section className="py-4 md:py-8 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-4 md:mb-8">Our Customers</h2>
        
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Auto-scrolling Container */}
        <div className="relative">
          <div className="flex animate-scroll">
            {/* First set of customers */}
            <div className="flex space-x-8 min-w-max">
              {customers.map((customer, index) => (
                <div 
                  key={`first-${index}`}
                  className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all min-w-[200px] group"
                >
                  <div className="relative w-24 h-24 mb-4">
                    <Image
                      src={customer.logo}
                      alt={customer.name}
                      fill
                      className="object-contain filter grayscale group-hover:grayscale-0 transition-all"
                    />
                  </div>
                  <span className="text-gray-600 font-semibold text-center text-sm">{customer.name}</span>
                </div>
              ))}
            </div>
            {/* Duplicate set for seamless scrolling */}
            <div className="flex space-x-8 min-w-max">
              {customers.map((customer, index) => (
                <div 
                  key={`second-${index}`}
                  className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all min-w-[200px] group"
                >
                  <div className="relative w-24 h-24 mb-4">
                    <Image
                      src={customer.logo}
                      alt={customer.name}
                      fill
                      className="object-contain filter grayscale group-hover:grayscale-0 transition-all"
                    />
                  </div>
                  <span className="text-gray-600 font-semibold text-center text-sm">{customer.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
} 