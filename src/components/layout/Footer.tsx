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
              <li><Link href="/solutions/fintech" className="text-gray-400 hover:text-[#FFD700]">Financial Technology</Link></li>
              <li><Link href="/solutions/cloud-infrastructure" className="text-gray-400 hover:text-[#FFD700]">Cloud & Infrastructure</Link></li>
              <li><Link href="/solutions/business-continuity" className="text-gray-400 hover:text-[#FFD700]">Business Continuity</Link></li>
              <li><Link href="/solutions/grc" className="text-gray-400 hover:text-[#FFD700]">Governance, Risk & Compliance</Link></li>
              <li><Link href="/solutions/data-ai" className="text-gray-400 hover:text-[#FFD700]">Data, AI & Intelligence</Link></li>
              <li><Link href="/solutions/managed-services" className="text-gray-400 hover:text-[#FFD700]">Managed IT Services</Link></li>
              <li><Link href="/solutions/digital-training" className="text-gray-400 hover:text-[#FFD700]">Digital Solutions & Training</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">BPO</h4>
            <ul className="space-y-2">
              <li><Link href="/bpo#software-development" className="text-gray-400 hover:text-[#FFD700]">Software Development</Link></li>
              <li><Link href="/bpo#web-services" className="text-gray-400 hover:text-[#FFD700]">Web Services</Link></li>
              <li><Link href="/bpo#devops-infrastructure" className="text-gray-400 hover:text-[#FFD700]">DevOps & Infrastructure</Link></li>
              <li><Link href="/bpo#technical-support" className="text-gray-400 hover:text-[#FFD700]">Technical Support</Link></li>
              <li><Link href="/bpo#network-security" className="text-gray-400 hover:text-[#FFD700]">Network & Security</Link></li>
              <li><Link href="/bpo#ai-automation" className="text-gray-400 hover:text-[#FFD700]">AI & Automation</Link></li>
              <li><Link href="/bpo#ui-ux-design" className="text-gray-400 hover:text-[#FFD700]">UI/UX Design</Link></li>
              <li><Link href="/bpo#data-services" className="text-gray-400 hover:text-[#FFD700]">Data Services</Link></li>
              <li><Link href="/bpo#dedicated-teams" className="text-gray-400 hover:text-[#FFD700]">Dedicated Teams</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2 mb-4">
              <li><Link href="/aboutus" className="text-gray-400 hover:text-[#FFD700]">About Us</Link></li>
              <li><Link href="/partners" className="text-gray-400 hover:text-[#FFD700]">Partners</Link></li>
              <li><Link href="/clients" className="text-gray-400 hover:text-[#FFD700]">Our Clients</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-[#FFD700]">Contact Us</Link></li>
            </ul>
            <h4 className="text-lg font-bold mb-2 mt-6">Contact</h4>
            <ul className="space-y-1">
              <li className="text-gray-400">Email: info@symboltech.net</li>
              <li className="text-gray-400">Mobile: +251-910-822-333</li>
              <li className="text-gray-400">Mobile: +251-911-523-249</li>
              <li className="text-gray-400">Office: +251-116-630-664</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Insights</h4>
            <ul className="space-y-2">
              <li><Link href="/insights#blogs" className="text-gray-400 hover:text-[#FFD700]">Blogs</Link></li>
              <li><Link href="/insights#case-studies" className="text-gray-400 hover:text-[#FFD700]">Case Studies</Link></li>
            </ul>
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