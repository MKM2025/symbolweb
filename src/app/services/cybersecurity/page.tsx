import Link from 'next/link';

export default function CybersecurityPage() {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Hero Section */}
      <div className="mb-16">
        <h1 className="text-4xl font-bold mb-6">Cybersecurity Solutions</h1>
        <p className="text-xl text-gray-600 mb-8">
          Protect your business with enterprise-grade security solutions designed to defend 
          against evolving cyber threats while ensuring business continuity.
        </p>
      </div>

      {/* Key Features */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
          <h3 className="text-xl font-semibold mb-4">Threat Detection & Response</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>24/7 security monitoring and alerts</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Advanced threat intelligence</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Rapid incident response</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
          <h3 className="text-xl font-semibold mb-4">Security Assessment</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Vulnerability scanning and assessment</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Penetration testing</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Security architecture review</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-50 p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-bold mb-6">Why Choose Our Cybersecurity Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Expert Team</h4>
            <p className="text-gray-600">Certified security professionals with years of experience in threat detection and response.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Proactive Protection</h4>
            <p className="text-gray-600">Continuous monitoring and updates to stay ahead of emerging threats and vulnerabilities.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Compliance Focus</h4>
            <p className="text-gray-600">Ensure compliance with industry standards and regulations (GDPR, HIPAA, PCI DSS).</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-blue-600 text-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Ready to Secure Your Business?</h2>
        <p className="mb-6">Get a comprehensive security assessment and customized protection plan.</p>
        <Link 
          href="/contact-us" 
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          Schedule a Security Consultation
        </Link>
      </div>
    </div>
  );
} 