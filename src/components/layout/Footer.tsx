import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image 
              src="/images/symbollogo.svg" 
              alt="Symbol Logo" 
              width={160} 
              height={48} 
              className="mb-4 invert"
            />
            <p className="text-gray-400">Professional IT Services and Solutions</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/cybersecurity" className="text-gray-400 hover:text-white">Cybersecurity</Link></li>
              <li><Link href="/services/cloud-infrastructure" className="text-gray-400 hover:text-white">Cloud Infrastructure</Link></li>
              <li><Link href="/services/managed-services" className="text-gray-400 hover:text-white">Managed Services</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about-us" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="/contact-us" className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link href="/insights" className="text-gray-400 hover:text-white">Insights</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <p className="text-gray-400">Email: info@symboltech.com</p>
            <p className="text-gray-400">Phone: +1 (555) 123-4567</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Symbol Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 