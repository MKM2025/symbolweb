import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#00101d] text-white pt-12 pb-0">
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
              <li><Link href="/contact" className="text-gray-400 hover:text-[#FFD700]">Contact</Link></li>
              <li><Link href="/insights" className="text-gray-400 hover:text-[#FFD700]">Insights</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <p className="text-gray-400">Email: info@symboltech.com</p>
            <p className="text-gray-400">Phone: +251-910-822-333</p>
            <p className="text-gray-400">Phone: +251-911-523-249</p>
            <p className="text-gray-400">Phone: +251-116-630-664</p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-6 pb-6 px-4 bg-[#00101d]">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Symbol Technologies. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <span className="text-gray-400 mr-2">Follow Us</span>
            <div className="flex items-center gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-400 transition-colors">
                <Linkedin size={22} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-400 transition-colors">
                <Facebook size={22} />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X" className="hover:text-blue-400 transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 