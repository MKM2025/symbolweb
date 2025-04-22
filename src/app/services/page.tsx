import Link from 'next/link';
import PageWrapper from '@/components/layout/PageWrapper';
import ServicesHero from '@/components/services/ServicesHero';

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <PageWrapper>
        <h1 className="text-4xl font-bold mb-12 pt-6">Our Services</h1>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-semibold mb-4">Cybersecurity</h2>
            <p className="text-gray-600 mb-6 text-lg">
              Comprehensive security solutions to protect your business from evolving cyber threats.
            </p>
            <Link 
              href="/services/cybersecurity"
              className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center text-lg"
            >
              Learn More 
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-semibold mb-4">Cloud Infrastructure</h2>
            <p className="text-gray-600 mb-6 text-lg">
              Scalable cloud solutions to drive innovation and business growth.
            </p>
            <Link 
              href="/services/cloud-infrastructure"
              className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center text-lg"
            >
              Learn More 
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-semibold mb-4">Managed Services</h2>
            <p className="text-gray-600 mb-6 text-lg">
              End-to-end IT management and support for your business operations.
            </p>
            <Link 
              href="/services/managed-services"
              className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center text-lg"
            >
              Learn More 
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </PageWrapper>
    </main>
  );
} 