import Image from 'next/image';
import Link from 'next/link';

export default function ClientsSection() {
  const clients = [
    { name: 'Commercial Bank of Ethiopia', logo: '/images/clients/cbe.png' },
    { name: 'Ethio Telecom', logo: '/images/clients/et.png' },
    { name: 'Ethiopian Airlines', logo: '/images/clients/ethiopian.png' },
    { name: 'Dashen Bank', logo: '/images/clients/dashen.png' },
    { name: 'Awash Bank', logo: '/images/clients/awash.png' },
    { name: 'Nib Bank', logo: '/images/clients/nib.png' },
    // Add more clients as needed
  ];

  return (
    <section className="py-4 md:py-8 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-8">Our Clients</h2>
        
        {/* Scrolling container */}
        <div className="relative">
          <div className="flex animate-scroll space-x-8 whitespace-nowrap">
            {/* First set of clients */}
            {clients.map((client, index) => (
              <div 
                key={`client-1-${index}`} 
                className="flex-shrink-0 w-48 h-24 bg-gray-50 rounded-lg flex items-center justify-center"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={160}
                  height={80}
                  className="object-contain"
                />
              </div>
            ))}
            {/* Duplicate set for seamless scrolling */}
            {clients.map((client, index) => (
              <div 
                key={`client-2-${index}`} 
                className="flex-shrink-0 w-48 h-24 bg-gray-50 rounded-lg flex items-center justify-center"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={160}
                  height={80}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-4 md:mt-8">
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