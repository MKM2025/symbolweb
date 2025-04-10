import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Cybersecurity</h2>
          <p className="text-gray-600 mb-4">
            Comprehensive security solutions to protect your business from evolving cyber threats.
          </p>
          <Link 
            href="/services/cybersecurity"
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            Learn More →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Cloud Infrastructure</h2>
          <p className="text-gray-600 mb-4">
            Scalable cloud solutions to drive innovation and business growth.
          </p>
          <Link 
            href="/services/cloud-infrastructure"
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            Learn More →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Managed Services</h2>
          <p className="text-gray-600 mb-4">
            End-to-end IT management and support for your business operations.
          </p>
          <Link 
            href="/services/managed-services"
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            Learn More →
          </Link>
        </div>
      </div>
    </div>
  );
} 