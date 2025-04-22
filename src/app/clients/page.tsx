import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';

const clientCategories = {
  Financial: [
    'NIB International Bank',
    'Awash International Bank',
    'Abay Bank',
    'Commercial Bank of Ethiopia',
    'Ethiopian Insurance Corporation',
    'Ethswitch',
    'Premier Switching Solutions (PSS)'
  ],
  Government: [
    'Ethiotelecom',
    'Ethiopian Agricultural Transformation',
    'Ministry of Revenue'
  ],
  Education: [
    'Addis Ababa University',
    'University of Gondar',
    'Jimma University',
    'Dilla University'
  ],
  Others: []
};

export default function ClientsPage() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <div className="bg-blue-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Clients</h1>
          <p className="text-xl text-gray-600">Trusted by leading organizations across Ethiopia</p>
        </div>
      </div>

      {/* Clients Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="space-y-16">
          {Object.entries(clientCategories).map(([category, clients]) => (
            clients.length > 0 && (
              <div key={category} className="space-y-8">
                <h2 className="text-3xl font-semibold text-blue-900 border-b-2 border-blue-100 pb-4">
                  {category} Sector
                </h2>
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {clients.map((client) => (
                    <div 
                      key={client}
                      className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                    >
                      {/* Logo placeholder */}
                      <div className="h-32 bg-gray-50 rounded-lg mb-4 flex items-center justify-center">
                        <span className="text-gray-400">Logo Coming Soon</span>
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 text-center">{client}</h3>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </PageWrapper>
  );
} 