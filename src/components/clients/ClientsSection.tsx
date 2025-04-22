'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ClientsSection() {
  const clients = [
    { name: 'Commercial Bank of Ethiopia', logo: '/images/clients/cbe.png' },
    { name: 'Ethiopian Airlines', logo: '/images/clients/ethiopian.png' },
    { name: 'Ethio Telecom', logo: '/images/clients/ethiotelecom.png' },
    { name: 'Bank of Abyssinia', logo: '/images/clients/boa.png' },
    { name: 'Dashen Bank', logo: '/images/clients/dashen.png' },
    { name: 'Awash Bank', logo: '/images/clients/awash.png' },
    // Add more clients as needed
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Clients</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
            >
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                width={160}
                height={80}
                className="object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = client.name;
                    parent.className += ' text-gray-600 font-semibold text-center';
                  }
                }}
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link 
            href="/clients"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            View All Clients
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
} 