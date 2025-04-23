import Link from 'next/link';
import PageWrapper from '@/components/layout/PageWrapper';
import ServicesHero from '@/components/services/ServicesHero';

export default function ServicesPage() {
  return (
    <main>
      <section>
        <ServicesHero />
      </section>
      
      <PageWrapper>
        <section className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">Our Services</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">Cybersecurity</h2>
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                Comprehensive security solutions to protect your business from evolving cyber threats.
              </p>
              <Link 
                href="/services/cybersecurity"
                className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center text-sm sm:text-base"
              >
                Learn More 
                <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">Cloud Infrastructure</h2>
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                Scalable cloud solutions to drive innovation and business growth.
              </p>
              <Link 
                href="/services/cloud-infrastructure"
                className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center text-sm sm:text-base"
              >
                Learn More 
                <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">Managed Services</h2>
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                End-to-end IT management and support for your business operations.
              </p>
              <Link 
                href="/services/managed-services"
                className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center text-sm sm:text-base"
              >
                Learn More 
                <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </PageWrapper>
    </main>
  );
} 