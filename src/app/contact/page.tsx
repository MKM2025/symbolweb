'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Linkedin, Facebook } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  consent: boolean;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    consent: false,
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    // Validation
    if (!form.fullName || !form.email || !form.message || !form.consent) {
      setError('Please fill in all required fields and agree to the privacy policy.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          message: String(form.message).replace(/[<>]/g, ''), // Basic sanitization
        }),
      });

      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      if (data.success) {
        setSuccess('Your message has been sent successfully! We will get back to you soon.');
        setForm({
          fullName: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: '',
          consent: false,
        });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (err) {
      console.error('Contact form error:', err);
      setError(err instanceof Error ? err.message : 'Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero Section - edge to edge */}
      <motion.section
        className="relative w-screen h-[300px] flex items-center justify-start mb-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="absolute inset-0 bg-[#0a192f]">
          <Image
            src="/images/contact/hero_contact_desktop.webp"
            alt="Contact Hero"
            fill
            priority
            className="object-cover object-center z-0 hidden md:block"
            quality={90}
            sizes="(max-width: 768px) 100vw, 100vw"
          />
          <Image
            src="/images/contact/hero_contact_mobile.webp"
            alt="Contact Hero"
            fill
            priority
            className="object-cover object-center z-0 md:hidden"
            quality={90}
            sizes="(max-width: 768px) 100vw, 100vw"
          />
        </div>
        <div className="relative z-20 flex flex-col items-start justify-center w-full h-full text-left px-4 max-w-2xl mx-auto md:ml-48">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-3xl sm:text-4xl md:text-4xl font-bold text-[#FFF9C4] mb-4 mt-[1em] text-center md:text-left w-full max-w-full"
          >
            Tell us about your issue
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-base sm:text-lg md:text-lg text-[#FFF9C4] w-full max-w-full text-center md:text-left"
          >
            Whether it is AI & Automation, Cloud, Cybersecurity, BPO, System Integration, and IT Consulting. Whether you have a project in mind or just need advice, our experts are ready to assist.
          </motion.p>
        </div>
      </motion.section>
      <main className="min-h-screen bg-white flex flex-col items-center justify-start py-0 sm:px-8">
        {/* Contact Form Section */}
        <motion.section
          className="w-full max-w-2xl bg-[#e9eef6] rounded-xl shadow-lg pt-2 pb-6 px-4 sm:pt-4 sm:pb-10 sm:px-8 mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-3xl font-bold text-[#0a192f] mb-8 text-center">Contact Us</h2>
          <form className="flex flex-col gap-6 bg-gray-50 p-6 rounded-lg shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
              <div className="flex-1 flex flex-col">
                <label htmlFor="fullName" className="font-semibold text-[#0a192f] mb-1">Full Name<span className="text-red-500">*</span></label>
                <input type="text" id="fullName" name="fullName" required value={form.fullName} onChange={handleChange} className="border border-[#0a192f] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0a192f] w-full" />
              </div>
              <div className="flex-1 flex flex-col">
                <label htmlFor="email" className="font-semibold text-[#0a192f] mb-1">Email Address<span className="text-red-500">*</span></label>
                <input type="email" id="email" name="email" required value={form.email} onChange={handleChange} className="border border-[#0a192f] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0a192f] w-full" />
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
              <div className="flex-1 flex flex-col">
                <label htmlFor="phone" className="font-semibold text-[#0a192f] mb-1">Phone Number</label>
                <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} className="border border-[#0a192f] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0a192f] w-full" />
              </div>
              <div className="flex-1 flex flex-col">
                <label htmlFor="company" className="font-semibold text-[#0a192f] mb-1">Company Name</label>
                <input type="text" id="company" name="company" value={form.company} onChange={handleChange} className="border border-[#0a192f] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0a192f] w-full" />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="service" className="font-semibold text-[#0a192f] mb-1">Service of Interest</label>
              <select id="service" name="service" value={form.service} onChange={handleChange} className="border border-[#0a192f] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0a192f] w-full">
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
              <textarea id="message" name="message" required value={form.message} onChange={handleChange} rows={5} className="border border-[#0a192f] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0a192f] resize-none w-full" />
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" id="consent" name="consent" required checked={form.consent} onChange={handleChange} className="mt-1" />
              <label htmlFor="consent" className="text-sm text-[#0a192f]">I agree to the <a href="/privacy" className="underline hover:text-[#0a192f]">Privacy Policy</a> and terms of service.</label>
            </div>
            {error && <div className="text-red-600 text-sm mb-2">{error}</div>}
            {success && <div className="text-green-600 text-sm mb-2">{success}</div>}
            <button
              type="submit"
              className="mt-2 bg-[#0a192f] hover:bg-[#0a192f]/90 text-[#FFD700] font-semibold rounded px-12 py-4 text-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0a192f] w-full"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </motion.section>

        {/* Email & Call Section */}
        <motion.section
          className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 font-sans"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Email Us Box */}
          <div className="flex flex-col items-center text-center bg-[#0a192f] rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.10),_inset_0_2px_8px_rgba(255,255,255,0.10)] border border-[#0a192f] transition-all duration-200 hover:shadow-[0_8px_24px_rgba(0,0,0,0.18),_inset_0_4px_16px_rgba(255,255,255,0.15)] hover:-translate-y-1 bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0a192f]">
            <div className="text-[#FFF9C4] font-bold tracking-wide text-xl mb-3">Email Us:</div>
            <a href="mailto:info@symboltech.net" className="text-[#FFF9C4] text-base font-normal hover:underline break-all whitespace-nowrap">info@symboltech.net</a>
          </div>
          {/* Call Us Box */}
          <div className="flex flex-col items-center text-center bg-[#0a192f] rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.10),_inset_0_2px_8px_rgba(255,255,255,0.10)] border border-[#0a192f] transition-all duration-200 hover:shadow-[0_8px_24px_rgba(0,0,0,0.18),_inset_0_4px_16px_rgba(255,255,255,0.15)] hover:-translate-y-1 bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0a192f]">
            <div className="text-[#FFF9C4] font-bold tracking-wide text-xl mb-3">Call Us:</div>
            <a href="tel:+251910822333" className="text-[#FFF9C4] text-base font-normal hover:underline block whitespace-nowrap">+251-910-822-333</a>
            <a href="tel:+251911523249" className="text-[#FFF9C4] text-base font-normal hover:underline block whitespace-nowrap">+251-911-523-249</a>
            <a href="tel:+251116630664" className="text-[#FFF9C4] text-base font-normal hover:underline block whitespace-nowrap">+251-116-630-664</a>
          </div>
          {/* Follow Us Box */}
          <div className="flex flex-col items-center text-center bg-[#0a192f] rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.10),_inset_0_2px_8px_rgba(255,255,255,0.10)] border border-[#0a192f] transition-all duration-200 hover:shadow-[0_8px_24px_rgba(0,0,0,0.18),_inset_0_4px_16px_rgba(255,255,255,0.15)] hover:-translate-y-1 bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0a192f]">
            <div className="text-[#FFF9C4] font-bold tracking-wide text-xl mb-3">Follow Us:</div>
            <div className="flex gap-4 mt-1">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white text-[#FFF9C4] transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white text-[#FFF9C4] transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X" className="hover:text-white text-[#FFF9C4] transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </a>
            </div>
          </div>
        </motion.section>
      </main>
    </>
  );
} 