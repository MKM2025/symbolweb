import Link from 'next/link';

export default function CloudInfrastructurePage() {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Hero Section */}
      <div className="mb-16">
        <h1 className="text-4xl font-bold mb-6">Cloud Infrastructure Solutions</h1>
        <p className="text-xl text-gray-600 mb-8">
          Transform your business with scalable, secure, and efficient cloud infrastructure 
          solutions designed to accelerate growth and innovation.
        </p>
      </div>

      {/* Key Features */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
          <h3 className="text-xl font-semibold mb-4">Cloud Migration & Deployment</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Seamless cloud migration strategy</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Multi-cloud deployment options</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Zero-downtime implementation</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
          <h3 className="text-xl font-semibold mb-4">Cloud Management</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>24/7 monitoring and optimization</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Cost optimization and control</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Performance monitoring</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Cloud Platforms */}
      <div className="bg-gray-50 p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-bold mb-6">Supported Cloud Platforms</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Amazon Web Services</h4>
            <p className="text-gray-600">Full suite of AWS services including EC2, S3, RDS, and Lambda.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Microsoft Azure</h4>
            <p className="text-gray-600">Comprehensive Azure solutions for enterprise applications.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Google Cloud</h4>
            <p className="text-gray-600">GCP services for scalable and innovative cloud solutions.</p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Benefits of Cloud Infrastructure</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-start">
            <div className="bg-blue-100 p-2 rounded-lg mr-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Scalability</h4>
              <p className="text-gray-600">Scale resources up or down based on demand.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-blue-100 p-2 rounded-lg mr-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Cost Efficiency</h4>
              <p className="text-gray-600">Pay only for the resources you use.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-blue-600 text-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Ready to Move to the Cloud?</h2>
        <p className="mb-6">Get a customized cloud strategy for your business needs.</p>
        <Link 
          href="/contact-us" 
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          Schedule a Cloud Consultation
        </Link>
      </div>
    </div>
  );
} 