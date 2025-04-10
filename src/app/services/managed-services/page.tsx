import Link from 'next/link';

export default function ManagedServicesPage() {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Hero Section */}
      <div className="mb-16">
        <h1 className="text-4xl font-bold mb-6">Managed IT Services</h1>
        <p className="text-xl text-gray-600 mb-8">
          Focus on your core business while we handle your entire IT infrastructure with our 
          comprehensive managed services and 24/7 support.
        </p>
      </div>

      {/* Key Features */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
          <h3 className="text-xl font-semibold mb-4">IT Infrastructure Management</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Network monitoring and management</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Server administration</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Backup and disaster recovery</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
          <h3 className="text-xl font-semibold mb-4">Help Desk Support</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>24/7 technical support</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Remote troubleshooting</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>End-user support</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Service Levels */}
      <div className="bg-gray-50 p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-bold mb-6">Service Levels</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Basic Support</h4>
            <p className="text-gray-600">Essential IT support for small businesses with standard business hours coverage.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Professional</h4>
            <p className="text-gray-600">Enhanced support with priority response and extended coverage hours.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Enterprise</h4>
            <p className="text-gray-600">Comprehensive 24/7 support with dedicated team and custom SLAs.</p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Benefits of Managed Services</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-start">
            <div className="bg-blue-100 p-2 rounded-lg mr-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Predictable Costs</h4>
              <p className="text-gray-600">Fixed monthly fees with no hidden charges.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-blue-100 p-2 rounded-lg mr-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Proactive Maintenance</h4>
              <p className="text-gray-600">Prevent issues before they impact your business.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-blue-600 text-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Ready to Optimize Your IT Operations?</h2>
        <p className="mb-6">Get started with our managed services today.</p>
        <Link 
          href="/contact-us" 
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          Schedule a Consultation
        </Link>
      </div>
    </div>
  );
} 