import React from 'react';
import Link from 'next/link';

export default function ServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Cybersecurity Services
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl">
            Protecting your business with advanced security solutions.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-6 py-12">
        {/* Overview */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Service Overview
          </h2>
          <div className="prose max-w-none">
            <p className="text-gray-600">
              Our comprehensive cybersecurity solutions are designed to protect your organization
              from modern digital threats. We provide end-to-end security services that safeguard
              your business assets and data.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-3">Feature {item}</h3>
              <p className="text-gray-600">
                Description of the feature and its benefits to your business.
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Secure Your Business?
          </h2>
          <p className="text-blue-100 mb-6">
            Contact us today to learn more about our cybersecurity solutions
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
} 