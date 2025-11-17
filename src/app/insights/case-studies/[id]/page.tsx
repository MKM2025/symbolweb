import React from 'react';
import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import iconv from 'iconv-lite';
import '../caseStudyContent.css';

interface CaseStudyPageProps {
  params: {
    id: string;
  };
}

const caseStudies = [
  {
    id: 'advanced_sec',
    title: 'Symbol Tech Fortifies EthSwitch\'s National Payment Gateway with Advanced Security Solutions',
    description: 'A strategic initiative empowering EthSwitch to protect its critical operations and customer data, ensuring the integrity and reliability of the nation\'s burgeoning digital payment ecosystem.',
    thumbnail: '', // No image for now
  },
  {
    id: 'nib_computing',
    title: 'NIB Computing Infrastructure Modernization',
    description: 'A comprehensive infrastructure modernization project that transformed NIB\'s computing capabilities, enhancing performance, security, and scalability.',
    thumbnail: '', // No image for now
  },
  {
    id: 'esl',
    title: 'Data Center & Network Transformation for Ethiopian Shipping and Logistics',
    description: 'How Symbol Technologies delivered a robust, scalable, and secure ICT infrastructure for Ethiopian Shipping and Logistics, ensuring operational excellence and future-ready documentation.',
    thumbnail: '', // No image for now
  },
  {
    id: 'ERA',
    title: 'ERA Digital Transformation Case Study',
    description: 'How ERA leveraged Symbol Tech solutions for digital transformation and operational excellence.',
    thumbnail: '', // No image for now
  },
  {
    id: 'abay',
    title: 'Abay Digital Transformation Case Study',
    description: 'How Abay Bank leveraged Symbol Tech solutions for digital transformation and operational excellence.',
    thumbnail: '', // No image for now
  },
  {
    id: 'aau',
    title: 'Compute & Storage Infrastructure Deployment for Addis Ababa University',
    description: "How Symbol Technologies delivered a scalable, high-availability compute and storage infrastructure to support AAU's academic, research, and enterprise IT needs.",
    thumbnail: '', // No image for now
  },
  {
    id: 'adib',
    title: 'Symbol Technologies Empowers Addis International Bank with Advanced SIEM Solution',
    description: 'How Symbol Technologies implemented a centralized FortiSIEM platform for AdIB, providing enhanced security visibility, rapid threat detection, and compliance automation.',
    thumbnail: '', // No image for now
  },
  {
    id: 'moenco',
    title: 'Unified Communications Solution for MOENCO',
    description: 'How MOENCO transformed its enterprise communications with a modern Cisco Unified Communications platform, enabling advanced voice, video, and collaboration features.',
    thumbnail: '', // No image for now
  },
];

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudy = caseStudies.find(cs => cs.id === params.id);
  
  if (!caseStudy) {
    notFound();
  }

  // Short label for breadcrumb
  let shortLabel = '';
  switch (caseStudy.id) {
    case 'advanced_sec':
      shortLabel = 'EthSwitch';
      break;
    case 'nib_computing':
      shortLabel = 'NIB';
      break;
    case 'esl':
      shortLabel = 'ESL';
      break;
    case 'ERA':
      shortLabel = 'ERA';
      break;
    case 'abay':
      shortLabel = 'Abay';
      break;
    case 'aau':
      shortLabel = 'AAU';
      break;
    case 'adib':
      shortLabel = 'AdIB';
      break;
    case 'moenco':
      shortLabel = 'MOENCO';
      break;
    default:
      shortLabel = caseStudy.title;
  }

  const filePath = path.join(process.cwd(), 'public/case-studies', `${params.id}.htm`);
  let content = '';

  try {
    // Read the file as a buffer
    const buffer = fs.readFileSync(filePath);
    
    // Convert from Windows-1252 to UTF-8
    content = iconv.decode(buffer, 'win1252');
    
    // Replace specific problematic characters
    content = content
      .replace(/â€"/g, '—')  // Replace broken em dash
      .replace(/â€"/g, '–')  // Replace broken en dash
      .replace(/â€œ/g, '"')  // Replace broken double quote
      .replace(/â€/g, '"')  // Replace broken double quote
      .replace(/â€˜/g, '\'')  // Replace broken single quote
      .replace(/â€™/g, '\'')  // Replace broken single quote
      .replace(/â€¦/g, '…'); // Replace broken ellipsis
    
    // Log the content for debugging
    console.log('File content loaded successfully');
  } catch (error) {
    console.error('Error reading case study file:', error);
    notFound();
  }

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-50 pt-20 sm:pt-24 md:pt-32 pb-12 px-2">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl px-6 sm:px-10 pt-10 pb-8 flex flex-col">
        {/* Site map / Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
          <ol className="list-reset flex">
            <li><a href="/" className="hover:underline text-blue-700">Home</a></li>
            <li><span className="mx-2">/</span></li>
            <li><a href="/insights" className="hover:underline text-blue-700">Insights</a></li>
            <li><span className="mx-2">/</span></li>
            <li><a href="/insights#case-studies" className="hover:underline text-blue-700">Case Studies</a></li>
            <li><span className="mx-2">/</span></li>
            <li className="text-gray-700">{shortLabel}</li>
          </ol>
        </nav>
        {/* Responsive styled image placeholder */}
        {caseStudy.id === 'nib_computing' ? (
          <div className="w-full aspect-[16/9] bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center mb-8 overflow-hidden">
            <img src="/case-studies/nib-computing-infrastructure.webp" alt="NIB Computing Infrastructure" className="object-cover w-full h-full" />
          </div>
        ) : (
          <div className="w-full aspect-[16/9] bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center mb-8">
            <span className="text-gray-400 text-lg">Image Placeholder</span>
          </div>
        )}
        {/* Render HTML content only */}
        <div className="case-study-html">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
        {/* Back to Case Studies link */}
        <div className="mt-12 text-center">
          <a href="/insights#case-studies" className="inline-block px-8 py-3 rounded-xl font-bold text-lg bg-[#0a2239] text-[#FFF9C4] shadow-none">
            ← Case Studies
          </a>
        </div>
      </div>
    </div>
  );
} 