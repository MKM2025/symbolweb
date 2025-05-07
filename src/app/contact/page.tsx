import React from 'react';
import { Linkedin, Facebook, Twitter } from 'lucide-react';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0a192f] flex flex-col items-center justify-start py-0 sm:px-8">
      {/* Hero Section */}
      <section className="relative w-full h-[320px] md:h-[420px] flex items-center justify-center mb-8">
        <Image
          src="/images/contact/hero_contact_desktop.webp"
          alt="Contact Hero"
          fill
          priority
          className="object-cover object-center z-0"
          quality={90}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0a192f]/80 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-4" style={{textShadow:'0 2px 16px #000, 0 1px 0 #FFD700'}}>
            Tell us about your issue
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#FFD700] max-w-2xl mx-auto" style={{textShadow:'0 2px 8px #000'}}>
            Whether it is AI & Automation, Cloud, Cybersecurity, BPO, System Integration, and IT Consulting. Whether you have a project in mind or just need advice, our experts are ready to assist.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6 sm:p-10 mb-16">
        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <div className="flex-1 flex flex-col">
              <label htmlFor="fullName" className="font-semibold text-[#0a192f] mb-1">Full Name<span className="text-red-500">*</span></label>
              <input type="text" id="fullName" name="fullName" required className="border border-[#0a192f] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0a192f]" />
            </div>
            <div className="flex-1 flex flex-col">
              <label htmlFor="email" className="font-semibold text-[#0a192f] mb-1">Email Address<span className="text-red-500">*</span></label>
              <input type="email" id="email" name="email" required className="border border-[#0a192f] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0a192f]" />
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <div className="flex-1 flex flex-col">
              <label htmlFor="phone" className="font-semibold text-[#0a192f] mb-1">Phone Number</label>
              <input type="tel" id="phone" name="phone" className="border border-[#0a192f] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0a192f]" />
            </div>
            <div className="flex-1 flex flex-col">
              <label htmlFor="company" className="font-semibold text-[#0a192f] mb-1">Company Name</label>
              <input type="text" id="company" name="company" className="border border-[#0a192f] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0a192f]" />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="service" className="font-semibold text-[#0a192f] mb-1">Service of Interest</label>
            <select id="service" name="service" className="border border-[#0a192f] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0a192f]">
              <option value="">Select a service</option>
              <option>AI & Automation</option>
              <option>Cloud</option>
              <option>Cybersecurity</option>
              <option>BPO</option>
              <option>System Integration</option>
              <option>General Inquiry</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="font-semibold text-[#0a192f] mb-1">Message<span className="text-red-500">*</span></label>
            <textarea id="message" name="message" required rows={5} className="border border-[#0a192f] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0a192f] resize-none" />
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" id="consent" name="consent" required className="mt-1" />
            <label htmlFor="consent" className="text-sm text-[#0a192f]">I agree to the <a href="/privacy" className="underline hover:text-[#0a192f]">Privacy Policy</a> and terms of service.</label>
          </div>
          <button type="submit" className="mt-2 bg-[#0a192f] text-[#FFD700] font-semibold rounded-lg px-8 py-3 transition-colors hover:bg-[#112240] focus:outline-none focus:ring-2 focus:ring-[#0a192f]">
            Submit
          </button>
        </form>
      </section>

      {/* Email & Call Section */}
      <section className="w-full max-w-2xl flex flex-col sm:flex-row items-start sm:items-start justify-between gap-8 bg-[#0a192f] border border-[#0a192f] rounded-xl p-6 mb-16 font-sans">
        <div className="flex-1 flex flex-col items-start">
          <div className="text-[#FFD700] font-bold tracking-wide text-lg sm:text-xl mb-2">Email Us:</div>
          <a href="mailto:info@symboltech.net" className="text-[#FFD700] text-base sm:text-lg font-medium hover:underline break-all">info@symboltech.net</a>
        </div>
        <div className="flex-1 flex flex-col items-start">
          <div className="text-[#FFD700] font-bold tracking-wide text-lg sm:text-xl mb-2">Call Us:</div>
          <a href="tel:+251910822333" className="text-[#FFD700] text-base sm:text-lg font-medium hover:underline block">+251910822333</a>
          <a href="tel:+251911523249" className="text-[#FFD700] text-base sm:text-lg font-medium hover:underline block">+251911523249</a>
        </div>
        <div className="flex-1 flex flex-col items-start">
          <div className="text-[#FFD700] font-bold tracking-wide text-lg sm:text-xl mb-2">Follow Us:</div>
          <div className="flex gap-4 mt-1">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white text-[#FFD700] transition-colors">
              <Linkedin size={28} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white text-[#FFD700] transition-colors">
              <Facebook size={28} />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="hover:text-white text-[#FFD700] transition-colors">
              <Twitter size={28} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
} 