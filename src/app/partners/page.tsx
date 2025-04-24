import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Our Partners | Symbol Technologies',
  description: 'Strategic partnerships with global technology leaders including Cisco, Fortinet, HPE, Microsoft, VMware, and more.',
};

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
      <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/partners-hero.jpg"
            alt="Our Partners"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        <div className="relative h-full w-full container mx-auto px-4 flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">Our Strategic Partners</h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-6 sm:mb-8">
              Symbol Technologies collaborates with industry-leading technology providers to deliver comprehensive ICT and cybersecurity solutions across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          {Object.entries(partnersByCategory).map(([category, categoryPartners]) => (
            <div key={category} className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-gray-900">{category}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {categoryPartners.map((partner) => (
                  <div 
                    key={partner.name}
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center justify-center"
                  >
                    <span className="text-gray-700 font-semibold text-center">{partner.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Become a Partner</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We're always looking to expand our network of technology partners. If you're interested in partnering with Symbol Technologies, we'd love to hear from you.
          </p>
          <Link 
            href="/contact-us"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
} 