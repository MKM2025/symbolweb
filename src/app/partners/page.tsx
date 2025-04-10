import React from 'react';
import Link from 'next/link';

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
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Strategic Partners</h1>
            <p className="text-xl text-blue-100">
              Symbol Technologies collaborates with industry-leading technology providers to deliver comprehensive ICT and cybersecurity solutions across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
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