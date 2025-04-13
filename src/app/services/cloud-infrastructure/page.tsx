import React from 'react';
import Link from 'next/link';
import PageWrapper from '@/components/layout/PageWrapper';

export default function CloudInfrastructurePage() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-4 rounded-lg mb-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Cloud Infrastructure</h1>
          <p className="text-xl text-blue-100">
            Scalable cloud solutions to drive innovation and business growth.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="space-y-12">
        {/* Services Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Our Cloud Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Add your cloud service cards here */}
          </div>
        </section>

        {/* Features Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Key Features</h2>
          {/* Add features content */}
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Transform your business with our cloud infrastructure solutions.</p>
          <Link 
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Contact Us
          </Link>
        </section>
      </div>
    </PageWrapper>
  );
} 