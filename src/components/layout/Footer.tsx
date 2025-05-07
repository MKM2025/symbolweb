import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#00101d] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <Image 
              src="/images/symbollogo.svg" 
              alt="Symbol Logo" 
              width={160} 
              height={48} 
              className="mb-4 brightness-125 contrast-110 saturate-150 drop-shadow-sm w-[140px] sm:w-[160px] md:w-[220px]"
            />
            <p className="text-gray-400">Professional IT Solutions and Services</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><Link href="/solutions/cybersecurity" className="text-gray-400 hover:text-[#FFD700]">Cybersecurity</Link></li>
              <li><Link href="/solutions/cloud-infrastructure" className="text-gray-400 hover:text-[#FFD700]">Cloud Infrastructure</Link></li>
              <li><Link href="/solutions/managed-services" className="text-gray-400 hover:text-[#FFD700]">Managed Services</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">BPO</h4>
            <ul className="space-y-2">
              <li><Link href="/bpo" className="text-gray-400 hover:text-[#FFD700]">Our BPO Services</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about-us" className="text-gray-400 hover:text-[#FFD700]">About Us</Link></li>
              <li><Link href="/contact-us" className="text-gray-400 hover:text-[#FFD700]">Contact</Link></li>
              <li><Link href="/insights" className="text-gray-400 hover:text-[#FFD700]">Insights</Link></li>
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